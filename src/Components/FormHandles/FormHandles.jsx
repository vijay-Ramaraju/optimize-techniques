import React, { useState } from "react";
import { Link } from "react-router-dom";

const FormHandles = () => {
    const [wrongInput,setWrongInput] =useState("")
    const [user, setUser] = useState({
    name: window.localStorage.getItem("name")||"",
    password: "",
  });

    const handleName = (e) => {
        setUser(prev => ({ ...prev, name: e.target.value }))
        window.localStorage.setItem("name",e.target.value)
    }
    const handlePass = (e) => {         
            setUser(prev=> ({...prev , password:e.target.value}))
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        let isUpper = false;
        let isSpecialChar = false;
        const specialChar = "!@#$%^*()_+{}[];':,,.<>?"
        if (user.password.length < 8) {
            setWrongInput(
                "Password should contain more than 8, one special characters, 1 upper letter "
            )
            return

        }
        for (let char of user.password) {
            if (char >= "A" && char <= "Z") {
                isUpper = true;
            }
            if (specialChar.includes(char)) {
                isSpecialChar = true;
            }
        }
        if (!isUpper) {
            setWrongInput("Password should contain one upper letter")
            return
        }
        if (!isSpecialChar) {
            
            setWrongInput("Password should contain one special character")
            return
        }

        setWrongInput("")
    }


const handleBlur = () => {
    let isUpper = false;
    let isSpecialChar = false;
    const specialChar = "!@#$%^*()_+{}[];':,,.<>?"
    if (user.password.length < 8) {
        setWrongInput(
            "Password should contain more than 8, one special characters, 1 upper letter "
        )
        return

    }
    for (let char of user.password) {
        if (char >= "A" && char <= "Z") {
            isUpper = true;
        }
        if (specialChar.includes(char)) {
            isSpecialChar = true;
        }
    }
    if (!isUpper) {
        setWrongInput("Password should contain one upper letter")
        return
    }
    if (!isSpecialChar) {
        
        setWrongInput("Password should contain one special character")
        return
    }

    setWrongInput("")
}
  return (
    <div className="text-md">
      <form onSubmit={handleSubmit} className="flex flex-col items-center">
        <div className="m-2 p-2 flex gap-1 items-center">
          <label htmlFor="user">Username: </label>
          <input
                      value={user.name}
                      onChange={handleName}
            className="border px-2 py-1 outline-none border-gray-200 rounded-md"
            id="user"
            type="text"
          />
        </div>
        <div>
          <label htmlFor="pass">Password: </label>
          <input
                      onChange={handlePass}
                      onBlur={handleBlur}
            className="border px-2 py-1 outline-none border-gray-200 rounded-md"
            id="pass"
            type="password"
          />
              </div>
              {wrongInput && <h1 className="text-xs text-red-600">* {wrongInput} *</h1>}
        <button>Submit</button>  
      </form>
      <div>
        <Link to="/signup">if your a new User?</Link>
      </div>
    </div>
  );
};

export default FormHandles;
