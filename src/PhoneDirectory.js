import React, { Fragment, useEffect, useState } from "react";
import AddSubscriber from "./AddSubscriber";
import ShowSubscriber from "./ShowSubscriber";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import  {SubscriberCountContext}  from "./SubscriberCountContext";
import Footer from "./Footer";
import { type } from "@testing-library/user-event/dist/type";
export default function PhoneDirectory() {
  const [sublist, setSublist] = useState([]);

   async function LoadData(){
    const input =await fetch("http://localhost:7081/contacts",{
      
        method:'GET',

    })

    const data=await input.json();


    setSublist(data);
   }
   useEffect(()=>{
      
    
     LoadData();


   },[])
   
   
    



  async function addSubscriberHandler(newsub) {
    
    const response=await fetch("http://localhost:7081/contacts",{
      method:'POST',
      headers:{
        "Content-Type":'application/json'
      },
      body:JSON.stringify(newsub)
    })
    
    await response.json();
    await LoadData();


  }
  async function deleteHandler(id){
    
    const response=await fetch("http://localhost:7081/contacts/"+id,{
      method:'DELETE'
    })
    const data=await response.json();
    LoadData();
     

  }
  return (
    <Fragment>
    <Router>
      <div className="App">
    
        <Routes>
          <Route
            path="/"
            element={<ShowSubscriber sublist={sublist} deleteHandler={deleteHandler} />} // Use 'element' to specify the component
          />
          <Route
            path="/add"
            element={
              <AddSubscriber addsubHandler={addSubscriberHandler} />
            } // Use 'element' to specify the component
          />
        </Routes>
      </div>
    </Router>
    <SubscriberCountContext.Provider  value={sublist.length}>
     <Footer/>
    </SubscriberCountContext.Provider> 
    </Fragment>
  );
}
