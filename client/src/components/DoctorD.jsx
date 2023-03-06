import React, { useState } from "react";
import Header from "./Header";
import AppointmentForm from "./AppointmentForm";
import Footer from "./Footer";

function DoctorD() {
  const [showAppointmentForm, setShowAppointmentForm] = useState(false);

  const handleAppointmentClick = () => {
    setShowAppointmentForm(true);
  };

  const handleFormSubmit = (data) => {
    console.log(data);
    setShowAppointmentForm(false);
    alert("Appointment booked successfully!");
  };

  return (
    <div>
      <Header />
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-4 mb-4">
            <div className="doctor-profile mt-4">
              <img
                src="https://altiushospital.com/wp-content/uploads/elementor/thumbs/image_2023_02_25T07_35_34_976Z-q2o61ymtih6vd6d66qw96qbspv13hszvx6gpl856is.png"
                className="img-fluid rounded-circle"
                alt="..."
              />
              <div className="doctor-details text-center ">
                <h2 className="doctor-name">Dr. Dinesh M G</h2>
                <h5 className="doctor-title">Surgical Oncologist</h5>
                <button
                  className="btn btn-primary btn-block mt-3"
                  onClick={handleAppointmentClick}
                >
                  Book Appointment
                </button>
              </div>
            </div>
          </div>
          <div className="col-md-8">
            <div className="doctor-bio p-4">
              <h2 className="doctor-bio-title">About Dr. Dinesh M G</h2>
              <p className="doctor-bio-text">
                Dr. Dinesh M G is a highly experienced medical professional with
                over 17 years of experience. He has earned a Master of Surgery
                (MS) degree and a Master of Chirurgiae (MCh) degree, which have
                equipped him with a deep understanding of the human body and its
                functioning. He has dedicated his life to the betterment of his
                patients and is committed to providing the best possible medical
                care.
              </p>
              <h4 className="doctor-education-title">Education:</h4>
              <p className="doctor-education-text">MS, MCh</p>
              <h4 className="mt-3 mb-3">Experience:</h4>
              <p className="pl-3">17+ Years Of Experience</p>
              <h4 className="mt-3 mb-3">Location:</h4>
              <p className="pl-3">HBR Layout/RAJAJINAGAR</p>
              <h4 className="mt-3 mb-3">Registration:</h4>
              <p className="pl-3">74947</p>
            </div>
          </div>
        </div>
      </div>

      {showAppointmentForm && (
        <div className="appointment-form-overlay">
          <div className="appointment-form-container animate__animated animate__zoomIn">
            <button
              type="button"
              className="btn-close"
              onClick={() => setShowAppointmentForm(false)}
            ></button>
            <AppointmentForm onSubmit={handleFormSubmit} />
          </div>
        </div>
      )}
      <Footer/>
    </div>
  );
}

export default DoctorD;
