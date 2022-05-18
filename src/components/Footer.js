import React from "react";
import '../styles/Footer.css'


function Footer() {


  return (
    <div
    className="footer row align-items-center col-2"
    >
      <a
      className="anchors col-2" 
      href="https://github.com/skerans"
      target="_blank">
        Github
        </a>

      <a className="anchors col-2"
      href="https://www.linkedin.com/in/spencer-kerans-4749781aa/"
      target="_blank">
        Linkedin
      </a>

      <a className="anchors col-2"
      href="https://stackoverflow.com/users/17254244/skerans"
      target="_blank">
        Stacked Overflow
      </a>
    </div>
  );
}
export default Footer;