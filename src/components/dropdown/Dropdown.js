import React from "react";
import { useEffect, useState } from 'react';
import "./dropdown.scss";


function Dropdown() {

  const cities = [
    {id:"1",districtId:"1",name:"Malabe"},
    {id:"2",districtId:"1",name:"Maharagama"},
    {id:"3",districtId:"2",name:"ravi"},
    {id:"4",districtId:"2",name:"rathnayake"},
    {id:"5",districtId:"3",name:"Pasyala"},
    {id:"6",districtId:"3",name:"araliya"}
  ]

  const junctions = [
    {id:"1",cityId:"1",name:"Malabe Main"},
    {id:"2",cityId:"2",name:"SLLIT"},
    {id:"3",cityId:"3",name:"Gampaha main"},
    {id:"4",cityId:"4",name:"sub"},
    {id:"1",cityId:"5",name:"Kalthara main"},
    {id:"2",cityId:"6",name:"kalu"},
   
  ]

  const [ district, setDistrict] = useState([]);
  const [ city, setCity] = useState([]);
  const [ junction, setJunction] = useState([]);

 
  useEffect(() => {
    const districts = [
        {id:"1",name:"Colombo"},
        {id:"2",name:"Gampaha"},
        {id:"3",name:"Kaluthara"}
      ];

    setDistrict(districts);
  }, []);
  
  const handleDistrict = (id) => {
    const dt = cities.filter(x => x.districtId === id);
    setCity(dt);
  };
  
  const handleCity = (id) => {
    const dt = junctions.filter(x => x.cityId === id);
    setJunction(dt);
  };

  return (
    <div className="ddown">
      <select id="ddlDistrict" className='form-control select-class' onChange={(e) => handleDistrict(e.target.value)}>
        <option value="0">Select District</option>
      {
        district && 
        district !== undefined ?
        district.map((dis,index) => {
            return(
                <option key={index} value={dis.id}>{dis.name}</option>
            )
        })
        :"No District"

      }
      </select>
      <br></br>
      <select id="ddlCity" className='form-control select-class' onChange={(e) => handleCity(e.target.value)}>
        <option value="0">Select City</option>
      {
        city && 
        city !== undefined ?
        city.map((dis,index) => {
            return(
                <option key={index} value={dis.id}>{dis.name}</option>
            )
        })
        :"No City"

      }
      </select>
      <br></br>
      <select id="ddlJunction" className='form-control select-class'>
        <option value="0">Select Junction</option>
      {
        junction && 
        junction !== undefined ?
        junction.map((dis,index) => {
            return(
                <option key={index} value={dis.id}>{dis.name}</option>
            )
        })
        :"No JunctionS"

      }
      </select>
    </div>
  );
}

export default Dropdown;