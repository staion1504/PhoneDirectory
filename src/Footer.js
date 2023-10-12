import React, { useContext } from "react";
import  {SubscriberCountContext}  from "./SubscriberCountContext";
export default function Footer(){
    const count=useContext(SubscriberCountContext);
    return <h3>Number of entries:{count}</h3>

}