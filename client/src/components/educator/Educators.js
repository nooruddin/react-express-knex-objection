import React from "react";
import AddEducator from "./AddEducator";
import EducatorsList from "./EducatorsList";
import axios from "axios";
import { useEffect, useState } from "react";
import { useRef } from "react";

const EDUCATORS_API = `${process.env.REACT_APP_BACKEND_URL}/api/educators`;

export default function Educators() {
  const [educators, setEducators] = useState([]);
  const [editId, setEditId] = useState(null);

  // for fixing race condition & memory leak
  let isComponentMounted = useRef(true);

  useEffect(() => {
    const fetchEducators = async () => {
      const { data } = await axios.get(EDUCATORS_API);
      if (isComponentMounted.current) {
        setEducators(data);
      }
    };

    fetchEducators();
    return () => {
      isComponentMounted.current = false;
    };
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    const newEducator = {
      name: event.target.educatorName.value,
      email: event.target.educatorEmail.value,
      position: event.target.educatorPosition.value,
    };
    axios.post(EDUCATORS_API, newEducator).then((response) => {
      setEducators([...educators, response.data]);
    });
    event.target.reset();
  };

  const handleEdit = (event, educatorId) => {
    event.preventDefault();
    setEditId(educatorId);
  };

  const handleUpdate = (event, educatorId) => {
    event.preventDefault();
    const values = {
      name: event.target.educatorName.value,
      email: event.target.educatorEmail.value,
      position: event.target.educatorPosition.value,
    };
    axios.patch(`${EDUCATORS_API}/${educatorId}`, values).then((response) => {
      const updatedEducators = educators.map((educator) =>
        educator.id === response.data.id ? response.data : educator
      );
      setEducators(updatedEducators);
      setEditId(null);
    });
  };

  const handleDelete = async (event, educatorId) => {
    event.preventDefault();
    const {
      data: { deletedEducatorId },
    } = await axios.delete(`${EDUCATORS_API}/${educatorId}`);
    console.log(deletedEducatorId);
    setEducators(
      educators.filter(
        (educator) => educator.id !== Number.parseInt(deletedEducatorId)
      )
    );
  };

  return (
    <>
      <AddEducator handleSubmit={handleSubmit} />
      <hr />
      <EducatorsList
        educators={educators}
        handleEdit={handleEdit}
        handleUpdate={handleUpdate}
        handleDelete={handleDelete}
        editId={editId}
      />
    </>
  );
}
