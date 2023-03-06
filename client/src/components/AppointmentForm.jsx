import "../App.css";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function AppointmentForm({ onClose, onSubmit }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
  });

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if date and time are valid
    const now = new Date();
    const selectedDate = new Date(formData.date);
    const selectedTime = new Date(formData.time);
    if (
      selectedDate < now ||
      (selectedDate.getTime() === now.getTime() && selectedTime < now)
    ) {
      alert("Please select a date and time in the future.");
      return;
    }

    const response = await fetch("https://proud-gold-ring.cyclic.app/form", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const data = await response.json();
    if (data.status) {
      navigate("/Doctors");
    }
  };

  const handleCancel = () => {
    navigate("/Doctors");
  };

  return (
    <div className="popup">
      <div className="popup-inner">
        <div className="popup-header">
          <h3>Book an Appointment</h3>
          <button
            type="button"
            className="btn-close"
            aria-label="Close"
            onClick={onClose}
          ></button>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              className="form-control"
              id="name"
              value={formData.name}
              onChange={(event) =>
                setFormData({ ...formData, name: event.target.value })
              }
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              className="form-control"
              id="email"
              value={formData.email}
              onChange={(event) =>
                setFormData({ ...formData, email: event.target.value })
              }
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone:</label>
            <input
              type="tel"
              className="form-control"
              id="phone"
              value={formData.phone}
              onChange={(event) =>
                setFormData({ ...formData, phone: event.target.value })
              }
              required
            />
          </div>
          <div className="form-group">
  <label htmlFor="date">Date:</label>
  <input
    type="date"
    className="form-control"
    id="date"
    min={new Date().toISOString().split("T")[0]}
    max={`${(new Date().getFullYear() + 1)}-12-31`}
    value={formData.date}
    onChange={(event) =>
      setFormData({ ...formData, date: event.target.value })
    }
    required
  />
</div>
          <div className="form-group">
            <label htmlFor="time">Time:</label>
            <input
              type="time"
              className="form-control"
              id="time"
              value={formData.time}
              onChange={(event) =>
                setFormData({ ...formData, time: event.target.value })
              }
              required
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
          <button
            type="button"
            className="btn btn-secondary mr-2"
            onClick={handleCancel}
          >
            Cancel
          </button>
        </form>
      </div>
    </div>
  );
}

export default AppointmentForm;
