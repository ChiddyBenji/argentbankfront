import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateUserProfile } from "../../services/api";
import { updateProfileSuccess } from "./AuthSlice";

function EditNameForm({ onCancel }) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const dispatch = useDispatch();
  const token = useSelector((state) => state.auth.token);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await updateUserProfile(token, firstName, lastName);
      if (response.status === 200) {
        dispatch(updateProfileSuccess({ firstName, lastName }));
        onCancel();
      }
    } catch (error) {
      console.error("Update failed:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="content-form">
        <div className="content-wrapper">
      <div className="input-wrapper">
        <label htmlFor="firstName">First Name</label>
        <input
          type="text"
          id="firstName"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          required
        />
      </div>
      <div className="input-wrapper">
        <label htmlFor="lastName">Last Name</label>
        <input
          type="text"
          id="lastName"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          required
        />
      </div>
      </div>
      <div className="edit-form-buttons">
        <button type="submit" className="save-button">
          Save
        </button>
        <button type="button" className="cancel-button" onClick={onCancel}>
          Cancel
        </button>
      </div>
    </form>
  );
}

export default EditNameForm;