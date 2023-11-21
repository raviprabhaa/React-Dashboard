import React from 'react';
import "./new.scss";
import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar';



function New({inputs,title}) {
 
  return (
    <div className="new">
      <Sidebar/>
      <div className="newContainer">
        <Navbar/>
        
        <div className="top">
          <h1>{title}</h1>
        </div>


        <div className="bottom">

          <div className="right">
            <form action="">
             
          {inputs.map((input)=>(
             <div className="formInput" key={input.id}>
             <label > {input.label}</label>
             <input type={input.type} placeholder={input.placeholder}/> 
           </div>

          ))}
           
            
              

              <button>Submit</button>





            </form>
          </div>

        </div>
      </div>

    </div>
  )
}

export default New;