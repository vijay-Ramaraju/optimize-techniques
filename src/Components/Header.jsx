
import { Link } from 'react-router-dom'
import { useContext } from 'react';
import UsehandleLogin from './utils/UsehandleLogin';
import Accordian from './Accordian';

const Header = () => {
  const {isUserLoggedIn,username} = useContext(UsehandleLogin)
  return (
    <div className="bg-black text-white p-5 m-3 rounded-md shadow-md">
      <div className="flex gap-2">
        <Link to="/">
          <button>Home</button>
        </Link>
        <Link to="/path">
          <button>Counter</button>
        </Link>
        {/* <Link to="/accoridon">
          <button>Accoridon</button>
        </Link>
        <Link to="/accoridon">
          <button>Accoridon</button>
        </Link> */}
        <Link to="/comments">
          <button>Comments</button>
        </Link>
        <Link to="/debounce">
          <button>Debounce</button>
        </Link>
        <Link to="/login">
          <button>Login</button>
        </Link>
        <Link to="/reduce">
          <button>ReducerFunc</button>
        </Link>
        <Link to="/pagenation">
          <button>PageNation</button>
        </Link>
        <Link to="/acc">
          <button>AccordionRevision</button>
        </Link>
        <Link to="/multi">
          <button>MultiSelectAcc</button>
        </Link>
        <Link to="/nested">
          <button>NestedComments</button>
        </Link>
        <Link to="/livechat">
          <button>Live Chat</button>
        </Link>
        <Link to="/curosel">
          <button>Curosel</button>
        </Link>

        {/* <Link to="/login">
          <button>{isUserLoggedIn ? "Logout" : "Login"}</button>
        </Link>
        {username && <h1 className="bg-gray-100">Hello {username}</h1>} */}
      </div>
    </div>
  );
}

export default Header
