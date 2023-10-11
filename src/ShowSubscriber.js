import Header from "./Header";
import './ShowSubscriber.css'
import React,{Component} from "react";
import {Link} from 'react-router-dom';

export default function ShowSubscriber(props){

  function  deleteHandler(e) {
    // console.log(e.target.value);
    props.deleteHandler(e.target.value);
  }
  
  return (

    <div>
    
    <Header/>
     
      <div className="App">
    <Link to="/add" ><button className="addButton">Add</button><br/> </Link>  
    
    
      <div className="details1">
      <span >Name</span><br/>
      <span>phone</span>
      </div>
      
      {props.sublist.map(sub=>{
         
         return  <div className="details2">
         <span >{sub.name}</span><br/>
         <span>{sub.phone}</span>
         <span> <button className="delete" value={sub.id} onClick={deleteHandler}>Delete</button><br/></span>
         </div>
         

      })}

     
     </div>
     </div> 
  );

}
