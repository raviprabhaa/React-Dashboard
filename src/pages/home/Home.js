import React from "react";
import "./home.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";

import Widget from "../../components/widget/Widget";
import Widget2 from "../../components/widget/Widget2";
import Widget3 from "../../components/widget/Widget3";
import Widget4 from "../../components/widget/widget4";

import Featured from "../../components/featured/Featured";
import Chart from "../../components/chart/ChartT";

import Featured2 from "../../components/featured/Featured2";
import Chart2 from "../../components/chart/ChartT2";
import Featured3 from "../../components/featured/Featured3";
import Chart3 from "../../components/chart/ChartT3";
import Featured4 from "../../components/featured/Featured4";
import Chart4 from "../../components/chart/ChartT4";

import Dropdown from "../../components/dropdown/Dropdown";



function Home() {
  return (
    <div className="home">
        <Sidebar/>
        <div className ="homeContainer">
          <Navbar/>
          <div className="dropdown">
            Select your Junction
            <Dropdown/>
          </div>

          <div className= "widgets">
            <Widget/>
            <Widget2/>
            <Widget3/>
            <Widget4/>
          </div>

          <div className="charts">
            <Featured/>
            <Chart/>


            <Featured2/>
            <Chart2/>

            <Featured3/>
            <Chart3/>
            
            <Featured4/>
            <Chart4/>
         
 
          </div>
        
          
        </div>

    </div>
  )
}

export default Home;