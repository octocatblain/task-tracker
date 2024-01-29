import React from "react";
import "./CSS/footer.css";
const Footer = () => {
  return (
    <footer>
      <div>
        <p>
          &copy; 2023 &mdash;{" "}
          <a href="https://github.com/octocatblain">Blain Muema</a>
        </p>

        <p>
          Made with <strong>React</strong> and <strong>CSS3</strong>. Font is
          set to the{" "}
          <a
            href="https://fonts.googleapis.com/css2?family=Inter"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            Inter
          </a>{" "}
          typeface.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
