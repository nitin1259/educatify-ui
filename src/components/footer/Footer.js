import React from "react";
import { Icon } from "semantic-ui-react";
import { Link } from "react-router-dom";
import "./Footer.css";

function FooterPage() {
  return (
    <footer>
      <div className="row">
        <div className="col span-1-of-2">
          <ul className="footer-nav">
            <li>
              <Link to="about">About us</Link>
            </li>
            <li>
              <Link to="about">Be a Blogger</Link>
            </li>
            <li>
              <Link to="about">Policy</Link>
            </li>
            <li>
              <Link to="about">iOS App</Link>
            </li>
            <li>
              <Link to="about">Android App</Link>
            </li>
          </ul>
        </div>
        <div className="col span-1-of-2">
          <ul className="social-links">
            <li>
              <Link to="about">
                <Icon name="facebook" style={{ color: "#3b5999" }} />
              </Link>
            </li>
            <li>
              <Link to="about">
                <Icon name="twitter" style={{ color: "#55acee" }} />
              </Link>
            </li>
            <li>
              <Link to="about">
                <Icon name="linkedin" style={{ color: "#0077B5" }} />
              </Link>
            </li>
            <li>
              <Link to="about">
                <Icon name="instagram" style={{ color: "#dd4b39" }} />
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div>
        <p className="footer-para">
          Copyright &copy; 2020 by Educatify. All right reserved.
        </p>
      </div>
    </footer>
  );
}

export default FooterPage;
