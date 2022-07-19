import React from "react";

const EducatorsList = ({
  educators,
  editId,
  handleEdit,
  handleUpdate,
  handleDelete,
}) => {
  return educators.length > 0 ? (
    educators.map((educator) => {
      return (
        <div key={educator.id}>
          <form onSubmit={(event) => handleUpdate(event, educator.id)}>
            <input
              type="text"
              name="educatorName"
              defaultValue={educator.name}
              disabled={editId !== educator.id}
            />
            <input
              type="text"
              name="educatorPosition"
              defaultValue={educator.position}
              disabled={editId !== educator.id}
            />
            <input
              type="text"
              name="educatorEmail"
              defaultValue={educator.email}
              disabled={editId !== educator.id}
            />
            {editId === educator.id ? (
              <button type="submit">Update</button>
            ) : (
              <button
                type="button"
                onClick={(event) => handleEdit(event, educator.id)}
              >
                Edit
              </button>
            )}
          </form>
          <button onClick={(event) => handleDelete(event, educator.id)}>
            Delete
          </button>
          <hr />
        </div>
      );
    })
  ) : (
    <div> loading....</div>
  );
};

export default EducatorsList;
