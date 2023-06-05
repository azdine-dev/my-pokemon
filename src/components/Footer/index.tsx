import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

import "./Footer.css";

const Footer = () => {
  return (
    <footer className="mt-5">
      <div className="d-flex justify-content-center align-items-center">
        <p className="mr-1 credits-text">Developed by</p>
        <a className="baz" target="_blank" href="https://www.linkedin.com/in/azeddin-benhlima">
         Azeddin BENHLIMA
        </a>
      </div>
      <a
        className="view-code"
        target="_blank"
        href="https://github.com/azdine-dev"
      >
        View  on Github
        <FontAwesomeIcon className="ml-2" icon={faGithub} />
      </a>
    </footer>
  );
};

export default Footer;