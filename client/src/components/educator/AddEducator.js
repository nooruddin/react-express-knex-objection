import React from "react";

export default function AddEducator({ handleSubmit }) {
  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <label htmlFor="educatorName">
        Educator Name:
        <input type="text" name="educatorName" />
      </label>
      <hr />
      <label htmlFor="educatorEmail">
        Educator Email:
        <input type="text" name="educatorEmail" />
      </label>
      <hr />
      <label htmlFor="educatorPosition">
        Educator Position:
        <input type="text" name="educatorPosition" />
      </label>
      <hr />
      <button type="submit">Add Educator</button>
    </form>
  );
}
