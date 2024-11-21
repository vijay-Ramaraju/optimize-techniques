import { useContext, useState } from "react";
import UsehandleLogin from "./utils/UsehandleLogin";

const Login = () => {
    
  const [userInfo, setUserInfo] = useState({
    name: localStorage.getItem("username") || "",
      password: "",
    status:""
  });
    const { setLoggedInStatus, setUsername } = useContext(UsehandleLogin);
    
    
    const handleSubmit = (e) => {
        e.preventDefault()
        if (userInfo.name.length > 1 && userInfo.password.length > 1) {
            setLoggedInStatus(true);
            setUsername(userInfo.name)
        } else if (userInfo.name.length > 1 && userInfo.password.length < 1) {
          setUserInfo((prev) => ({
            ...prev,
            status: "please fill the password",
          }));
        } else if (userInfo.name.length < 1 && userInfo.password.length > 1) {
          setUserInfo((prev) => ({
            ...prev,
            status: "please fill the username",
          }));
        } else {
          setUserInfo((prev) => ({
            ...prev,
            status: "please fill the username and password",
          }));
        }
    }
    const handleUsername = (e) => {
        setUserInfo((prev) => ({ ...prev, name: e.target.value }));
        localStorage.setItem("username",e.target.value)
    }
  return (
    <div>
      Login
      <form onSubmit={handleSubmit}>
        <div>
        <label>Username: </label>
          <input
            value={userInfo.name}
            className="border border-gray-200 rounded-md mt-2 outline-none px-2 py-1 text-md"
                      onChange={handleUsername}
            type="text"
          />
              </div>
              {/* {userInfo.status && <h1 className="text-xs text-red-300 m-0">*{userInfo.status}*</h1>} */}
              <div>
                  
        <label>Password: </label>
        <input
          onChange={(e) =>
            setUserInfo((prev) => ({ ...prev, password: e.target.value }))
        }
        className="border border-gray-200 rounded-md m-2 outline-none px-2 py-1 text-md"
        type="password"
        />
        </div>
        {userInfo.status && <h1 className="text-xs text-red-300 m-0 mb-2">*{userInfo.status}*</h1>}
        <button className="rounded-md py-1 px-2 bg-green-200">Submit</button>
      </form>
    </div>
  );
};

export default Login;
