import React, { useEffect } from "react";
import books from "../../../ASSETS/statistics/books.png";
import library from "../../../ASSETS/statistics/library.png";
import volunteers from "../../../ASSETS/statistics/volunteers.png";
import "../../../styles/Aashraya_stats.css";
import Aos from "aos";
import "aos/dist/aos.css";

function Aashraya_stats() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div
      className="text-stats"
      style={{ textAlign: "center", paddingTop: "240px", color: "black" }}
    >
      <h1 data-Aos="fade-down">Aashraya Stats</h1>
      <div
        style={{ height: "500px", display: "flex", justifyContent: "center" }}
      >
        <div className="icon-stats" data-Aos="fade-right">
          <img src={volunteers} alt="icon" />
          <div style={{ margin: "30px 10px" }}>
            <h3>
              <strong>Total Volunteers</strong>
            </h3>
            <h3>3000+ </h3>
          </div>
        </div>

        <div className="icon-stats" data-Aos="fade-up">
          <img src={library} alt="icon" />
          <div style={{ margin: "30px 10px" }}>
            <h3>
              <strong>Total Libraries</strong>
            </h3>
            <h3>10+</h3>
          </div>
        </div>

        <div className="icon-stats" data-Aos="fade-left">
          <img src={books} alt="icon" />
          <div style={{ margin: "30px 10px" }}>
            <h3>
              <strong>Total Books</strong>
            </h3>
            <h3>100k+ </h3>
          </div>
        </div>
      </div>
      <div className="contact-form-all">
        <div>
          <img src="https://images.unsplash.com/photo-1628107628986-60ec506745ec?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" />
        </div>
                    <form className="form-container-box">
                        <h1>Contact Us</h1>
                        <input type="email" placeholder='Email'/>
                        <input type="text" placeholder='Name'/>
                        <textarea type="text" placeholder='Message'/>
                        <button>Send</button>
                    </form>
                </div>
    </div>
  );
}

export default Aashraya_stats;
