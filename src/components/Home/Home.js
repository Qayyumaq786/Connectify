import React from "react";
import { Link, Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

function Home(props) {
  return (
    <>
      <Navbar />
      <div className="d-flex">
        <Sidebar name={props.name} />
         {/* <h2>{props.name ? `Welcome - ${props.name}` : "Login please"}</h2> */}
         <div className="main-container" style={{height:"92vh" , width:"98vh" , backgroundColor:"red" }}>
            <Outlet/>


         </div>



         <div className="newsBar" style={{height:'92vh',width:"50vh",background:"green"}}></div>
      </div>
    </>
  );
}

export default Home;
