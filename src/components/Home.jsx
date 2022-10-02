import React from "react";
import Header from "./Header";
import "./Home.scss";

function Home() {
  return (
    <div className="homePage">
      <Header currentPage={"Home Page"} />
      <div className="content">
        <img
          src="AgeOfEmpire.jfif"
          className="backgroundImage"
          alt="backgroundImage"
        ></img>
      </div>
    </div>
  );
}

export default Home;
