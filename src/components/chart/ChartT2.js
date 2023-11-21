import React from 'react';
import "./chartT2.scss";
import { AreaChart, Area, XAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const data =[
  {name: "Morning-peak", Total_2:200},
  {name: "Day-peak", Total_2: 500},
  {name: "Evening-peak",Total_2: 600},
  {name: "night", Total_2:500},
  {name: "midnight", Total_2:1000},
];

function chartT2({ascpect, title}) {
  return (
    <div className="chartT2">
      <div className="title">Total vehicle count</div> 

     <ResponsiveContainer width="100%" aspect={6 / 1}>
     <AreaChart width={730} height={250} data={data}
  margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
  <defs>
    <linearGradient id="total_2" x1="0" y1="0" x2="0" y2="1">
      <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
      <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
    </linearGradient>
   
  </defs>
  <XAxis dataKey="name" stroke="gray"/>
  
  <CartesianGrid strokeDasharray="3 3" className="chartGrid"/>
  <Tooltip />
  <Area 
   type="monotone"
   dataKey="Total_2"
   stroke="#8884d8"
   fillOpacity={1}
   fill="url(#total_2)"
 />
  
</AreaChart>
      </ResponsiveContainer>
      
    </div>
  );
};

export default chartT2;
