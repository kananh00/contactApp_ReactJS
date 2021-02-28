import React, { useState} from "react";
import styled from 'styled-components';
import { connect } from "react-redux";
import { createID } from "../../utils/createID";
import { addContact } from "../../store/data";
import { Link } from 'react-router-dom';
import {Alert} from 'react';
const createFormInitialFieldState = {
    contactName: "",
    contactSurname: "",
    contactPhone: "",
    contactEmail: "",
    contactAdress: "",
    contactBirthday: "",
    creationDate: Date.now()
  };
  
  export const CreatePage = connect(null, { addContact })(
    ({addContact, history: { push }}) => {
        const [fields, setFields] = useState(createFormInitialFieldState);
    
        const onChange = async (e) => {
            const { name, value } = e.target;
            setFields(fields => ({
              ...fields,
              [name]: value
            }));
          };
  
  const submitHandler = () => {
      if (fields.contactName.trim() === "") {
        <Alert>Field is empty", "Name is required</Alert> 
        return;
      } 
      else if (fields.contactSurname.trim() === "") {
        <Alert>Field is empty", "Surname is required</Alert> 
        return;
      }else if (fields.contactPhone.trim() === "") {
        <Alert>Field is empty", "Phone number is required</Alert> 
        return;
      }
      const contactID = createID();
      addContact({ ...fields, contactID});
      push("/");
      setFields(createFormInitialFieldState);
    };

    return (
        <CreateWindow>
            <h1>Create New Contact</h1>
            <p>Name</p>
            <Input type = "text" name = "contactName"  placeholder = "Name" value = {fields.contactName}  onChange = {onChange}/>
            <p>Surname</p>
            <Input type = "text" name = "contactSurname" placeholder = "Surname" value = {fields.contactSurname}  onChange = {onChange}/>
            <p>Phone Number</p>
            <Input type = "text" name = "contactPhone" placeholder = "Phone number" value = {fields.contactPhone}  onChange = {onChange}/>
            <p>E-mail</p>
            <Input type = "text" name = "contactEmail" placeholder = "E-mail" value = {fields.contactEmail}  onChange = {onChange}/>
            <p>Adress</p>
            <Input type = "text" name = "contactAdress" placeholder = "Adress" value = {fields.contactAdress}  onChange = {onChange}/>
            <p>Birthday</p>
            <Input type = "text" name = "contactBirthday" placeholder = "Birthday" value = {fields.contactBirthday}  onChange = {onChange}/>
            <CreateBtn onClick={submitHandler}>Add to Contacts</CreateBtn> 
        </CreateWindow>  
        
    )
    }
    )

    
const CreateWindow = styled.form`
background-color: rgb(255,215,0);
width: 500px;
border-radius: 10px;
margin: 50px auto;
padding: 30px;
justify-content: center;
text-align: center;
`;
const Input = styled.input`
    width: 100%;
    background-color: rgb(245,245,245);
    display: block;
    border: 2px solid transparent;
    padding: 10px;
    border-radius: 5px;
    outline: none;
    margin-bottom: 5px;
`;
const CreateBtn = styled.button`
    width: 100%;
    display: block;
    border: 2px solid transparent;
    padding: 10px;
    border-radius: 5px;
    outline: none;
    text-transform: uppercase;
    font-weight: bold;
    background-color: 	#228B22;
    color: white;
    margin-top: 25px;
`;