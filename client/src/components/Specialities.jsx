import React from 'react'
import Header from './Header'

const Specialities = ({ showHeader = true }) => {
  return (
    <div>
      {showHeader && <Header/>}

      <div className="container">
        <h2 className='text-center mt-4 m-4 p-4 fw-bolder'> <big>Altius Specialities</big></h2>

        <div className="row">
          <div className="col-sm-4">
            <div className="card mt-3" style={{ width: "15rem", maxHeight: "360px" }}>
              <img src="https://altiushospital.com/wp-content/uploads/2021/12/ct-scan.png" className="card-img-top m-3" alt="..." style={{width:"80px", objectFit: "cover" }} />
              <div className="card-body">
                <h5 className="card-title">CT Scan & X-Ray</h5>
              </div>
            </div>
          </div>

          <div className="col-sm-4">
            <div className="card mt-3" style={{ width: "15rem", maxHeight: "360px" }}>
              <img src="https://altiushospital.com/wp-content/uploads/2021/12/cardiac-sciences.png" className="card-img-top m-3" alt="..." style={{width:"80px", objectFit: "cover" }} />
              <div className="card-body">
                <h5 className="card-title">Cardiac Sciences</h5>
              </div>
            </div>
          </div>

          <div className="col-sm-4">
            <div className="card mt-3" style={{ width: "15rem", maxHeight: "360px" }}>
              <img src="https://altiushospital.com/wp-content/uploads/2021/12/neuro.png" className="card-img-top m-3" alt="..." style={{width:"80px", objectFit: "cover" }} />
              <div className="card-body">
                <h5 className="card-title">Neuro Sciences</h5>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-sm-4">
            <div className="card mt-3" style={{ width: "15rem", maxHeight: "360px" }}>
              <img src="https://altiushospital.com/wp-content/uploads/2021/12/oncology.png" className="card-img-top m-3" alt="..." style={{width:"80px", objectFit: "cover" }} />
              <div className="card-body">
                <h5 className="card-title">Oncology</h5>
              </div>
            </div>
          </div>

          <div className="col-sm-4">
            <div className="card mt-3" style={{ width: "15rem", maxHeight: "360px" }}>
              <img src="https://altiushospital.com/wp-content/uploads/2021/12/laparoscopy.png" className="card-img-top m-3" alt="..." style={{width:"80px", objectFit: "cover" }} />
              <div className="card-body">
                <h5 className="card-title">Laparoscopy</h5>
              </div>
            </div>
          </div>


        <div className="col-sm-4">
            <div className="card mt-3" style={{ width: "15rem", maxHeight: "360px" }}>
              <img src="https://altiushospital.com/wp-content/uploads/2021/12/orthopedics.png" className="card-img-top m-3" alt="..." style={{width:"80px", objectFit: "cover" }} />
              <div className="card-body">
                <h5 className="card-title">Orthopaedics</h5>
              </div>
            </div>
          </div>
        </div>
        </div>
          </div>
          )
          }  

          export default Specialities