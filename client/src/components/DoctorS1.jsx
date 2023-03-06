import React, { useState } from "react";
import Header from "./Header";
import AppointmentForm from "./AppointmentForm";
import Footer from "./Footer";

function DoctorS1() {
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
                src="https://altiushospital.com/wp-content/uploads/elementor/thumbs/dr-imran-pv6mywnw1iov6q5ueme07nqeaur9g3bmfzd3z14k78.jpg"
                className="img-fluid rounded-circle"
                alt="..."
              />
              <div className="doctor-details text-center ">
                <h2 className="doctor-name">Dr. Dinesh M G</h2>
                <h5 className="doctor-title">
                  Head - Department of Orthopedics, Bone & Joint Surgery
                </h5>
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
                Dr Syed Imran is a committed professional who puts needs of his
                patients first. He has demonstrated expertise from diagnosis to
                management of difficult procedures. He has been trained at
                Endoklinik, Germany the largest centre in Europe for Joint
                replacement . <br /> He has worked at prestigious hospitals like
                Fortis, Vikram and Manipal. He adopts the latest and safest
                surgical techniques with latest of technology to achieve
                excellent clinical outcomes. His areas of interest are Joint
                Replacement ( Hip, knee , shoulder ) , Arthroscopic surgery and
                Trauma.
              </p>
              <h4 className="doctor-education-title">Education:</h4>
              <p className="doctor-education-text">MBBS, D Ortho</p>
              <h4 className="mt-3 mb-3">Experience:</h4>
              <p className="pl-3">12+ Years Of Experience</p>
              <h4 className="mt-3 mb-3">Location:</h4>
              <p className="pl-3">HBR Layout</p>
              <h4 className="mt-3 mb-3">Registration:</h4>
              <p className="pl-3">73848</p>
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

export default DoctorS1;
