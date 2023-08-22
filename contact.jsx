import React from "react";
import "./contact.css";
import {Link} from "react-router-dom";
import About from "../about/about";
//import Contact from "../contact/contact";
import SignUpForm from "../login/signup";
function Contact() {
  return (
    <div className="contact-container">
      <nav>
        <Link to={"/"}>Home</Link>
        <Link to={"/about"}>About us</Link>
        <Link to={"/contact"}>Contact us</Link>
        <Link to={"/testsignup"}>Sign Up</Link>
      </nav>

      <div className="container">
        <h1>Contact Us</h1>
        <p>
          If you have any questions or need further assistance, please feel free
          to get in touch with us.
        </p>

        <div className="flex-container">
          <div className="contact-form">
            <h2>Contact Form</h2>
            <form action="#" method="post">
              <label htmlFor="name">Your Name:</label>
              <input type="text" id="name" name="name" required />

              <label htmlFor="email">Your Email:</label>
              <input type="email" id="email" name="email" required />

              <label htmlFor="message">Your Message:</label>
              <textarea
                id="message"
                name="message"
                rows="4"
                required
              ></textarea>

              <button id="contact-button" type="submit">Send Message</button>
            </form>
          </div>

          <div className="contact-details">
            <h2>Contact Details</h2>
            <div className="detail">
              <div className="emoji">🏢</div>
              <div className="info">
                <h3>Address: Nandigam, Ganjam</h3>
              </div>
            </div>
            <div className="detail">
              <div className="emoji">📞</div>
              <div className="info">
                <h3>Phone number: 8895532358</h3>
              </div>
            </div>
            <div className="detail">
              <div className="emoji">📧</div>
              <div className="info">
                <h3>Email: Panda12212@gmail.com</h3>
              </div>
            </div>
            <div className="detail">
              <div className="emoji">💬</div>
              <div className="info">
                <h3>WhatsApp: 881221245</h3>
              </div>
            </div>
            <div className="detail">
              <div className="emoji">💬</div>
              <div className="info">
                <h3>
                  Instagram:{" "}
                  <a href="https://www.instagram.com/your-instagram-account">
                    instagram.com/your-instagram-account
                  </a>
                </h3>
              </div>
            </div>
            <div className="detail">
              <div className="emoji">💬</div>
              <div className="info">
                <h3>
                  Twitter:{" "}
                  <a href="https://www.twitter.com/your-twitter-account">
                    twitter.com/your-twitter-account
                  </a>
                </h3>
              </div>
            </div>
            <div className="detail">
              <div className="emoji">🌐</div>
              <div className="info">
                <h3>
                  Facebook:
                  <a href="https://www.facebook.com/your-facebook-account">
                    facebook.com/your-facebook-account
                  </a>
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer>
        <p>&copy; 2023 bit lords. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Contact;
