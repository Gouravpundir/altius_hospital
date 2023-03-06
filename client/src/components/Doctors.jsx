import React from 'react';
import Header from './Header';
import { Link } from 'react-router-dom';
import Footer from './Footer';
const Doctors = ({ showHeader = true }) => {
  return (
    <div>
      {showHeader && <Header/>}

      <div className="container">
        <h2 className='text-center mt-4 p-4 fw-bolder'><big>Doctors</big></h2>

        <div className="row ">
          <div className="col-sm-4">
            <div className="card mt-3" style={{ width: "18rem", height: "25rem" }}>
              <img src="https://altiushospital.com/wp-content/uploads/2022/12/Dr.-Ramesh-photograph.png" className="card-img-top m-3 rounded-circle" alt="..." style={{ width: "140px", height: "140px", objectFit: "cover" }} />
              <div className="card-body">
                <h2 className="card-title">Dr. B Ramesh</h2>
              </div>
              <div className="card-body1-1">
                <h6 className="card-title">Founder, Medical Director</h6>
              </div>
              <Link to="/doctors/dr-b-ramesh" className="btn btn-outline-secondary mt-3 mb-3">
              Book Appointment
          </Link>
            </div>
          </div>

          <div className="col-sm-4">
            <div className="card mt-3" style={{ width: "18rem", height: "25rem" }}>
              <img src="https://altiushospital.com/wp-content/uploads/2022/09/dr-imran-1024x1024.jpg" className="card-img-top m-3 rounded-circle" alt="..." style={{ width: "140px", height: "140px", objectFit: "cover" }} />
              <div className="card-body">
                <h2 className="card-title">Dr. Syed Imran</h2>
              </div>
              <div className="card-body1-2">
                <h6 className="card-title">Head - Department of Orthopedics, Bone & Joint Surgery</h6>
              </div>
              <Link to="/doctors/dr-sayed" className="btn btn-outline-secondary mt-3 mb-3">
              Book Appointment
          </Link>
            </div>
          </div>

          <div className="col-sm-4">
            <div className="card mt-3" style={{ width: "18rem", height: "25rem" }}>
              <img src="https://altiushospital.com/wp-content/uploads/2023/02/image_2023_02_25T07_35_34_976Z.png" className="card-img-top m-3 rounded-circle" alt="..." style={{ width: "140px", height: "140px", objectFit: "cover" }} />
              <div className="card-body">
                <h2 className="card-title">Dr. Dinesh M G</h2>
              </div>
              <div className="card-body1-3">
                <h6 className="card-title">Surgical Oncologist</h6>
              </div>
              <Link to="/doctors/dr-dinesh" className="btn btn-outline-secondary mt-3 mb-3">
              Book Appointment
          </Link>
            
              
            </div>
          </div>
        </div>
      </div>
<footer/>
    </div>
  );
};

export default Doctors;
