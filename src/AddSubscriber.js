import React, { Component, useState } from "react";
import Header from "./Header";
import './AddSubscriber.css';
import { Link, useNavigate } from 'react-router-dom';
import { ValidatorForm,TextValidator } from "react-material-ui-form-validator";

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
                <ValidatorForm className="subscriber-form" onSubmit={onFormSubmitted}>
                    
                  

                   <TextValidator
                   
                   id="name" type="text" 
                   name="name" onChange={changeHandler}
                   label="name"
                   value={state.name}
                   validators={['required']}
                   errorMessages={['Name cannot be empty']}
                   >
                   </TextValidator>

                    <br /><br />

                    <TextValidator
                   
                   id="phone" type="text"
                   name="phone" onChange={changeHandler}
                   label="Phone"
                   value={state.phone}
                   validators={['required']}
                   errorMessages={['Phone cannot be empty']}
                   >
                   </TextValidator>



                    
                
                    <div className="subscriber-info-container">
                        <span className="subscriber-to-add-heading">Subcriber to be added: </span><br />
                        <span className="subscriber-info">Name:{state.name} </span><br />
                        <span className="subscriber-info">Phone:{state.phone} </span>
                    </div>
                    <button type="submit" className="addButton">Add</button>
                </ValidatorForm>
            </div>
        </div>

    )



}