import "./App.css";
// import Debouncing from './Components/Debouncing'
// import DebounceCode from "./Components/DebounceCode";
// import DropDown from './Components/DropDown'
// import Sample from './Components/Sample'
// import InfinityScroll from './Components/InfinityScroll';
// import PageNation from "./Components/PageNation";
// import CounterComponent from "./Components/CounterComponent";
// import SearchComponent from "./Components/SearchComponent";
// import { Provider } from 'react-redux'
// import store from './Components/RTK/store'
// import  PerformanceOptimization from './Components/Hooks/PerformanceOptimization'
// import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Components/Home";
// import UseDarkLightTheme from "./Components/UseDarkLightTheme";
// import { useState } from "react";
// import Login from "./Components/Login";
// import ProtectedRoutes from "./Components/ProtectedRoutes";
// import UsehandleLogin from "./Components/utils/UsehandleLogin";
import { useState } from "react";
// import Header from "./Components/MultiLang.jsx/Header";
import Home1 from "./Components/MultiLang.jsx/Home1";
import UseLangChange from "./Components/MultiLang.jsx/UseLangChange";
import About from "./Components/MultiLang.jsx/About";
import Contact from "./Components/MultiLang.jsx/Contact";
import Body from "./Components/InfinityScroll/Body";
// import Accordian from "./Components/Accordian";
import Accoridon from './Components/Accoridon/Accoridon'
import NestedComments from "./Components/NestedComments/NestedComments";
import DebouncingNormal from "./Components/DebouncingNormal/DebouncingNormal";
import FormHandles from "./Components/FormHandles/FormHandles";
import Signup from "./Components/FormHandles/Signup";
import ReducerFunc from "./Components/ReducerFunc/ReducerFunc";
import PageNation from "./Components/AllRevision/PageNation";
import AccordionRevision from "./Components/AllRevision/AccordionRevision";
import MultiSelectAcc from "./Components/AllRevision/MultiSelectAcc";
import NestedComments2 from './Components/AllRevision/NestedComments/NestedComments2'
import LiveChat from "./Components/AllRevision/LiveChat/LiveChat";
import { Provider } from "react-redux";
import store from "./Components/RTK/store";
import Curosel from "./Components/AllRevision/Curosel";


// function AppLayout (){
//   return (
//     <>
//     <Header />
//       <Outlet />
//       </>
//   )
// }

function App() {
  // const [loggedInStatus, setLoggedInStatus] = useState(false)
  // const [username, setUsername] = useState("")
  // const appRouter = createBrowserRouter([
  //   {
  //     path: "/",
  //     element: <AppLayout />,
  //     children: [
  //       {
  //         path: "/",
  //         element: <Home />,
  //       },
  //       {
  //         path: "/path",
  //         element: <CounterComponent />,
  //       },
  //     ],
  //   }
  // ]);

  // const [theme, setTheme] = useState(false)
  // console.log(theme)
  // const [lang,setLang] =useState("en")
  return (
    // <div className={theme? "bg-black text-white": "bg-white text-black"}>
    //   <Provider store={store}>
    //     {/* <Debouncing /> */}
    //     {/* <DebounceCode /> */}
    //     {/* <DropDown /> */}
    //     {/* <Sample/> */}
    //     {/* <InfinityScroll /> */}
    //     {/* <PageNation /> */}
    //     <UseDarkLightTheme.Provider value={{ theme: theme , setTheme}}>
    //       <RouterProvider router={appRouter} />
    //     </UseDarkLightTheme.Provider>
    //     {/* <CounterComponent /> */}
    //     {/* <PerformanceOptimization /> */}
    //     {/* <SearchComponent /> */}
    //   </Provider>
    // </div>
    // <UsehandleLogin.Provider
    //   value={{
    //     isUserLoggedIn: loggedInStatus,
    //     username:username,setUsername, setLoggedInStatus,
    //   }}
    // >
    //   <BrowserRouter>
    //     <Header />
    //     <Routes>
    //       {/* <Route path="/" element={<Home />} />
    //       <Route element={<ProtectedRoutes />}>
    //         <Route path="/path" element={<CounterComponent />} /> */}
    //       </Route>
    //       <Route path="/login" element={<Login />} />
    //     </Routes>
    //   </BrowserRouter>
    // </UsehandleLogin.Provider>
    // <UseLangChange.Provider value={{ lang: lang, setLang }}>
    //   <BrowserRouter>
    //     <Header />
    //     <Routes>
    //       <Route path="/" element={<Home1 />} />
    //       <Route path="/about" element={<About />} />
    //       <Route path="/contact" element={<Contact />} />
    //     </Routes>
    //   </BrowserRouter>
    // </UseLangChange.Provider>
    // <Body />
    <Provider store={store}>

    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/accoridon" element={<Accoridon />} />
        <Route path="/comments" element={<NestedComments />} />
        <Route path="/debounce" element={<DebouncingNormal />} />
        <Route path="/login" element={<FormHandles />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/reduce" element={<ReducerFunc />} />
        <Route path="/pagenation" element={<PageNation />} />
        <Route path="/acc" element={<AccordionRevision />} />
        <Route path="/multi" element={<MultiSelectAcc />} />
        <Route path="/nested" element={<NestedComments2 />} />
        <Route path="/livechat" element={<LiveChat />} />
        <Route path="/curosel" element={<Curosel />} />
      </Routes>
    </BrowserRouter>
    </Provider>
  );
}

export default App;
