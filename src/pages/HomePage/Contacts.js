import React from "react";
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import './styles.sass';

export const Contacts =
    ({
      name,
      surname,
      id
    }) => {
        return(
            <StyledSingleContact to={`/singlecontact/${id}`}>
                <h3 className = "avatar">{name.charAt(0)}{surname.charAt(0)}</h3>
                <p className = "contactInfo">{name} {surname}</p>
            </StyledSingleContact>
          );
        }

const StyledSingleContact = styled(Link)`
    text-decoration: none;
    display: flex;
    border: 2px solid transparent;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    background-color: rgb(255,215,0);
    border-radius: 10px;
    margin: 10px;
`;
