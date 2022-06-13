import React from "react";
import messages from "./../../assets/Local/messages";
import { useSelector, useDispatch } from "react-redux";
import { setCurrentLang } from "../../store/Lang/LangAction";
import { Link } from "react-router-dom";
import { Btn } from "../Controls/Button/Button";

export default function Navbar() {


  return (
    <>
      <nav className="navbar navbar-dark bg-dark">
        navbar
      </nav>
    </>
  );
}
