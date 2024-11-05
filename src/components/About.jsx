import React, { useEffect, useState } from "react";
import Content from "./Content";
import { Link } from "react-router-dom";

import { FaBeer, FaHome, FaAngellist } from "react-icons/fa";
import { FcCloseUpMode } from "react-icons/fc";
import { TbAdFilled, TbArrowUpFromArc } from "react-icons/tb";

function About() {
  let [login, setLogin] = useState(false);

  let [day, setDay] = useState("Ddd");

  useEffect(() => {
    console.log("I am effect calling by about us page");
    let getMail = localStorage.getItem("userMail");

    // if(getMail != ''){
    //   setLogin(true)
    // }else{
    //   setLogin(false)
    // }

    if (day == "Monday") {
      setDay("Monday");
    } else if (day == "Tuesday") {
      setDay("Tuesday");
    } else if (day == "Wednesday") {
      setDay("Wednesday");
    } else {
      setDay("No Day");
    }

    getMail != null ? setLogin(true) : setLogin(false);

    console.log(getMail, login);
  }, [login]);

  return (
    <div className="container">
      <Content />
      <h2>
        Today is: <span className="text-primary">{day}</span>
      </h2>
      <div>
        {login == true ? "OK" : "Not OK"}

        {login ? (
          <Link className="btn btn-primary" to="/contact">
            Go to Contact
          </Link>
        ) : (
          "Please Login"
        )}

        <div>
          <h2>
            Home <FaHome />
          </h2>
          <h2>
            Vectory <FaAngellist />
          </h2>
          <h2>
            <FcCloseUpMode />
          </h2>
          <h2>
            <TbAdFilled />
          </h2>
          <h2>
            <TbArrowUpFromArc style={{ fontSize: "40px", color: "red" }} />
          </h2>
        </div>
      </div>
    </div>
  );
}

export default About;
