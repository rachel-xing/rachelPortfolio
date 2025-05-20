import React from "react";
import "./Certifications.scss";
import { Fade } from "react-reveal";
import { certifications } from "../../portfolio";
import CertificationCard from "../../components/certificationCard/CertificationCard";

const Certifications = () => {
  return (
    <div className="main" id="certs">
      <div className="certs-header-div">
        <Fade bottom duration={2000} distance="20px">
          <h1 className="certs-header">
            Certifications
          </h1>
        </Fade>
      </div>
      <div className="certs-body-div">
        {certifications.map((cert) => (
          <CertificationCard key={cert.title} certificate={cert} />
        ))}
      </div>
    </div>
  );
};

export default Certifications;
