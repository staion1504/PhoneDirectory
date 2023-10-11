import React, { Component, useState } from "react";
import Header from "./Header";
import './AddSubscriber.css';
import { Link, useNavigate } from 'react-router-dom';


export default function AddSub(props) {
    
    const navigate = useNavigate();

    const [state, setState] = useState({

        id: 0,
        name: "",
        phone: ""

    });

    function changeHandler(e) {
        const s= {...state};
        s[e.target.name] = e.target.value;
        setState(s);


    }


    function onFormSubmitted(e) {
        e.preventDefault();
        props.addsubHandler(state);
        navigate("/");
    } 
    return (
        <div>
            <Header heading='Add Subscriber' />
            <div className="component-body-conatiner">
                <Link to="/"><button className="addButton">Back</button></Link>
                <form className="subscriber-form" onSubmit={onFormSubmitted}>
                    <label htmlFor="name" className="label-control" >Name:</label><br />
                    <input id="name" type="text" className="input-control" name="name" onChange={changeHandler} /><br /><br />
                    <label htmlFor="phone" className="label-control">Phone:</label><br />
                    <input id="phone" type="text" className="input-control" name="phone" onChange={changeHandler} /><br /><br />
                    <div className="subscriber-info-container">
                        <span className="subscriber-to-add-heading">Subcriber to be added: </span><br />
                        <span className="subscriber-info">Name:{state.name} </span><br />
                        <span className="subscriber-info">Phone:{state.phone} </span>
                    </div>
                    <button type="submit" className="addButton">Add</button>
                </form>
            </div>
        </div>

    )



}