import React from "react";

const Layout = () => {
  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="row align-items-center bg-light shadow rounded p-3">
        <div className="col-md-6 order-md-2 p-3">
          <img
            src="https://altiushospital.com/wp-content/uploads/2022/12/HBR-5.png"
            className="d-block w-100 border rounded"
            alt="..."
          />
        </div>
        <div className="col-md-6 order-md-1 p-4">
          <h3 className="p-2 mb-3">HBR Layout- Bangalore</h3>
          <p
            className="p-2"
            style={{ textAlign: "justify", textJustify: "inter-word" }}
          >
            <h6>
              Altius Hospitals is a world-class chain of multi-specialty
              hospitals operating across Bangalore that aims to treat people,
              not diseases. Altius Hospital at HBR layout combines the best
              medical professionals along with cutting-edge technology in
              providing the best medical care.
              <u>
                <span style={{ color: "#58ACFA" }}>
  
                  <big> Over the last 18+ years </big>
                </span>
              </u>
              , it has evolved as a leader in the healthcare system because of
              its integrated model that combines all services under one roof.
              From Cardiology to
              <u>
                <span style={{ color: "#58ACFA" }}>
  
                  <big>24/7 emergency care </big>
                </span>
              </u>
              , dialysis treatment, and outpatient treatments, we offer all.
              Altius Hospitals has a network of highly skilled and experienced
              medical professionals in Bangalore who provide compassionate care
              while demonstrating exceptional knowledge. The hospitals are well
              equipped with the latest diagnostic labs, facilities, and modern
              technologies to provide the best medical services.
            </h6>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Layout;
