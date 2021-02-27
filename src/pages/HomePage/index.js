import React from "react";
import { connect } from "react-redux";
import styled from 'styled-components';

import { getContacts } from "../../store/data";
import { Contacts } from './Contacts';

const mapStateToProps = (state, { route }) => ({
  allContacts: getContacts(state),
});

export const ContactPage = connect(mapStateToProps)(
    ({ allContacts, name, surname }) => {

      return (
        <div className = "listContacts">
        {allContacts
        .map(item => (
            <Contacts
                name={item.name}
                surname={item.surname}
            />
        ))}
    </div>
      );
    }
  );
  