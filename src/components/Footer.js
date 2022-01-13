import React from "react";
import "../assets/css/style.css";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaGooglePlusG,
  FaTwitter,
  FaGithub
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-white text-center text-white">
      <div className="container pb-0">
        <section className="mb-4">
          <a
            className="btn btn-outline-dark btn-floating m-1 hover-dark"
            href="#!"
            role="button"
          >
            <i>
              <FaFacebookF className="icon-style" />
            </i>
          </a>

          <a
            className="btn btn-outline-dark btn-floating m-1"
            href="#!"
            role="button"
          >
            <i>
              <FaTwitter className="icon-style" />
            </i>
          </a>

          <a
            className="btn btn-outline-dark btn-floating m-1"
            href="#!"
            role="button"
          >
            <i>
              <FaGooglePlusG className="icon-style" />
            </i>
          </a>

          <a
            className="btn btn-outline-dark btn-floating m-1"
            href="#!"
            role="button"
          >
            <i>
              <FaInstagram className="icon-style" />
            </i>
          </a>

          <a
            className="btn btn-outline-dark btn-floating m-1"
            href="#!"
            role="button"
          >
            <i>
              <FaLinkedin className="icon-style" />
            </i>
          </a>

          <a
            className="btn btn-outline-dark btn-floating m-1"
            href="#!"
            role="button"
          >
            <i>
              <FaGithub className="icon-style" />
            </i>
          </a>
        </section>
      </div>

      <div className="text-center p-3 footer-icon">
        © 2022 Copyright:
        <a className="text-white" href="https://youtube.com/">
          COPYRIGHT BKANAWASTE
        </a>
      </div>
    </footer>
  );
}
