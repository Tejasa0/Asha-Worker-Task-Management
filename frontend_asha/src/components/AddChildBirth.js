import React, { useState } from "react";
import axios from "axios";

const AddChildBirth = () => {
  const [formData, setFormData] = useState({
    date: "",
    time: "",
    name: "",
    parentsName: "",
    villageName: "",
    hospitalName: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8083/api/childbirths",
        formData,
        { withCredentials: true } // Include session cookies
      );
      alert("Child Data Added Successfully");
      setFormData({
        date: "",
        time: "",
        name: "",
        parentsName: "",
        villageName: "",
        hospitalName: "",
      });
    } catch (error) {
      console.error("Error saving child birth details:", error);
      alert("Failed to save details. Please try again.");
    }
  };

  return (
    <div>
      <h2>Add Child Birth</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Date:
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          Time:
          <input
            type="time"
            name="time"
            value={formData.time}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          Child's Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          Parents' Name:
          <input
            type="text"
            name="parentsName"
            value={formData.parentsName}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          Village Name:
          <input
            type="text"
            name="villageName"
            value={formData.villageName}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <label>
          Hospital Name:
          <input
            type="text"
            name="hospitalName"
            value={formData.hospitalName}
            onChange={handleChange}
            required
          />
        </label>
        <br />
        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default AddChildBirth;
