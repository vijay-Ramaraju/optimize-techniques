import React, { useContext } from "react";
import UseLangChange from "./UseLangChange";
import { Link } from "react-router-dom";

const Header = () => {
const{setLang} = useContext(UseLangChange)
    return (
        <div>
            <div>
                <Link to="/">
                <button>Home</button>
                </Link>
                <Link to="/about">
                <button>About</button>
                </Link>
                <Link to="/contact">
                <button>Contact</button>
                </Link>
            </div>
        <select
          onChange={(e) => setLang(e.target.value)}
          className="bg-green-50 border border-gray-100 rounded-md p-1 m-2"
        >
          <option value="en">English</option>
          <option value="tl">Telugu</option>
          <option value="hi">Hindi</option>
          <option value="sp">Spanish</option>
          <option value="ru">Russian</option>
        </select>
      </div>
    );
};

export default Header;
