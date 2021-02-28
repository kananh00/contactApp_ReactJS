import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import { connect } from "react-redux";
import { MdDeleteForever, MdModeEdit } from "react-icons/md";

import { getContacts, deleteContact } from "../../store/data";

const mapStateToProps = (state) => ({
    allContacts: getContacts(state),
  });
  
  export const SingleContact = connect(mapStateToProps, {deleteContact})(
      ({ allContacts, deleteContact, history: { push }, match: { params: { id } }}) => {
        const contact = allContacts.find(item => item.id == id);
        const onListDeleteHandler = (contactID) => { 
            deleteContact({
              contactID,
            });
          }

        return (
         <Container>
              {contact && (
                <StyledSingleContact>
                    <StyledAvatar>
                        <h1>{contact.name.charAt(0)}{contact.surname.charAt(0)}</h1>
                    </StyledAvatar>
                    <h3 className = "contact_fullName">{contact.name} {contact.surname}</h3>
                    <p className = "contact_phone">Phone: {contact.phone}</p>
                    <p className="contact_email">Email: {contact.email}</p>
                    <p className="contact_adress">Adress: {contact.adress}</p>
                    <p className="contact_birthday">Birthday: {contact.birthday}</p>
                    <StyledButtons><MdModeEdit className = "btn_icons"/></StyledButtons>
                    <StyledButtons onClick = {function(event){onListDeleteHandler(contact.id);  push('/');}}><MdDeleteForever className = "btn_icons"/></StyledButtons>
                    <p>Created: {new Date(contact.date).toUTCString()}</p>
                </StyledSingleContact>
            )}
            
         </Container>
        );
      }
    );
    
    const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    z-index: 1000;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    
`;

const StyledSingleContact = styled.div`
    
    margin: 50px;
    padding: 30px;
    text-align: center;
    background-color: #ff7f50;
    color: white;
    font-size: 20px;
    border-radius: 15px;
    position: relative;
    border 1px solid transparent;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)
`
const StyledButtons = styled.button`
    border: 1px solid transparent;
    border-radius: 100%;
    margin: 20px;
    padding: 10px;
    background-color: white;
    cursor: pointer;
    outline: none;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    .btn_icons {
        font-size: 25px;
        color: #ff7f50;
    }
`;

const StyledAvatar = styled.div`
    border: 1px solid transparent;
    border-radius: 100%;
    color: #ff7f50;
    background-color: white;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`