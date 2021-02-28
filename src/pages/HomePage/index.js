import React from "react";
import { connect } from "react-redux";
import styled from 'styled-components';

import { getContacts, deleteContact } from "../../store/data";
import { Contacts } from './Contacts';

const mapStateToProps = (state) => ({
  allContacts: getContacts(state),
});

export const ContactPage = connect(mapStateToProps, {deleteContact})(
    ({ allContacts, deleteContact }) => {

      const onListDeleteHandler = (contactID) => { 
                deleteContact({
                  contactID,
                });
              }
  

      return (
        <div className = "listContacts">
        {allContacts
        .map(item => (
            <Contacts
                name={item.name}
                surname={item.surname}
                id={item.id}
                onDeleteClick = {() => onListDeleteHandler(item.id)}
            />
        ))}
    </div>
      );
    }
  );
  