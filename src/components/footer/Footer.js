import React, {useContext} from "react";
import "./Footer.scss";
import {Fade} from "react-reveal";
import emoji from "react-easy-emoji";
import StyleContext from "../../contexts/StyleContext";

export default function Footer() {
  const {isDark} = useContext(StyleContext);
  return (
    <Fade bottom duration={1000} distance="5px">
      <div className="footer-div">
<<<<<<< HEAD
=======
        <p className={isDark ? "dark-mode footer-text" : "footer-text"}>
          {emoji("Made with ❤️ by DeveloperFolio Team")}
        </p>
        <p className={isDark ? "dark-mode footer-text" : "footer-text"}>
          Theme by{" "}
          <a href="https://github.com/saadpasta/developerFolio">
            developerFolio
          </a>
        </p>
>>>>>>> parent of 6c5bfd5 (Updates)
      </div>
    </Fade>
  );
}
