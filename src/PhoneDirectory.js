import React, { useState } from "react";
import AddSubscriber from "./AddSubscriber";
import ShowSubscriber from "./ShowSubscriber";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

export default function PhoneDirectory() {
  const [sublist, setSublist] = useState([
    {
      id: 1,
      name: "saiteja",
      phone: "9182983597",
    },
    {
      id: 2,
      name: "srishti",
      phone: "9898989898",
    },
  ]);

  function addSubscriberHandler(newsub) {
    // Use the spread operator to create a new array instead of modifying the existing one
    const updatedSublist = [...sublist];
    if (updatedSublist.length > 0) {
      newsub.id = updatedSublist[updatedSublist.length - 1].id + 1;
    } else {
      newsub.id = 1;
    }
    updatedSublist.push(newsub);
    setSublist(updatedSublist);
  }
  function deleteHandler(id){
    
    let list =[...sublist];
    let index=0;
    // console.log(list);
    list.forEach((item,i)=>{
        if(item.id==id){
            index=i;
        }
    })
    // console.log(list);
     list.splice(index,1);
     setSublist(list);
     

  }
  return (
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
  );
}
