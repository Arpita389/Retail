import React from "react";
//import Card from "./card";
import "../index.css";
function Content() {
  return (
    <div className="content">
      <div className="con1">
        <a href="/">
          <div className="photor">
            <img
              src="https://thumbs.dreamstime.com/b/casual-fashion-man-woman-looking-each-other-men-women-leaning-against-white-wall-33178793.jpg"
              alt=""
              style={{ width: "138px", height: "113px", borderRadius: "50%" }}
            />
          </div>
          <span className="title">Clothings</span>
        </a>
      </div>
      <div className="con2">
        <a href="/">
          <div className="photor">
            <img
              src="https://tse1.mm.bing.net/th?id=OIP.D-HZ_yt6sP9ulZCRD8tQKwHaHa&pid=Api&P=0&h=180"
              alt=""
              style={{ width: "138px", height: "113px", borderRadius: "50%" }}
            />
          </div>
          <span className="title">Jwellery</span>
        </a>
      </div>
      <div className="con3">
        <a href="/">
          <div className="photor">
            <img
              src="https://tse4.mm.bing.net/th?id=OIP.dvGVNLEPUUBoUUD7xnH-bgHaLH&pid=Api&P=0&h=180"
              alt=""
              style={{ width: "138px", height: "113px", borderRadius: "50%" }}
            />
          </div>
          <span className="title">Cosmetics</span>
        </a>
      </div>
      <div className="con4">
        <a href="/">
          <div className="photor">
            <img
              src="https://tse1.mm.bing.net/th?id=OIP.8CpeN0m0_QwjT8NP_5LecwHaEK&pid=Api&P=0&h=180"
              alt=""
              style={{ width: "138px", height: "113px", borderRadius: "50%" }}
            />
          </div>
          <span className="title">Watches</span>
        </a>
      </div>
      <div className="con5">
        <a href="/">
          <div className="photor">
            <img
              src="https://tse4.mm.bing.net/th?id=OIP.ww0BrZwI6mqpDU2GO6S5LgHaE5&pid=Api&P=0&h=180"
              alt=""
              style={{ width: "138px", height: "113px", borderRadius: "50%" }}
            />
          </div>
          <span className="title">Electronic Appliances</span>
        </a>
      </div>
    </div>
  );
}
export default Content;
