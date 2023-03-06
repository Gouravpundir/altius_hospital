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
      <div className="container mt-5 ">
        <div className="row">
          <div className="col-md-4 mb-4">
            <div className="doctor-profile mt-4">
              <img
                src="https://altiushospital.com/wp-content/uploads/2022/12/Dr.-Ramesh-photograph.png"
                className="img-fluid rounded-circle"
                alt="..."
              />
              <div className="doctor-details text-center ">
                <h2 className="doctor-name">Dr. B Ramesh</h2>
                <h5 className="doctor-title">Founder, Medical Director</h5>
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
              <h2 className="doctor-bio-title">About Dr. B Ramesh</h2>
              <p className="doctor-bio-text">
              Dr. B. Ramesh is one amongst the leading Gynaec. Laparoscopic
                surgeons in India with significant presence in clinical and
                academic circles all over India and being regularly invited as
                chairperson, speaker and faculty for major conferences relating
                to Gynaecological Laparoscopy and Infertility.
              </p>
              <h4 className="doctor-education-title">Education:</h4>
              <p className="doctor-education-text">
                MBBS, MD – OBG, DGO, FCPS – General Surgery
              </p>
              <h4 className="mt-3 mb-3">Experience:</h4>
              <p className="pl-3">25+ Years Of Experience</p>
              <h4 className="mt-3 mb-3">Location:</h4>
              <p className="pl-3">HBR Layout</p>
              <h4 className="mt-3 mb-3">Registration:</h4>
              <p className="pl-3">(KMC No)28563</p>
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
