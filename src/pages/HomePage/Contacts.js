import React from "react";
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { MdDeleteForever, MdModeEdit } from "react-icons/md";

import './styles.sass';

export const Contacts =
    ({
      name,
      surname,
      id,
      onDeleteClick
    }) => {
        return(
          <div className = "container">
            <StyledSingleContact to={`/singlecontact/${id}`}>
                <h3 className = "avatar">{name.charAt(0)}{surname.charAt(0)}</h3>
                <p className = "contactInfo">{name} {surname}</p>
            </StyledSingleContact>
            <StyledButtons onClick = {onDeleteClick}><MdDeleteForever className = "btn_icons"/></StyledButtons>
          </div>
            
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
const StyledButtons = styled.button`
    border: 1px solid transparent;
    background-color: #b22222;
    border-radius: 100%;
    cursor: pointer;
    outline: none;
    height: 40px;
    margin-left: -30px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    .btn_icons {
        font-size: 25px;
        color: white;
    }
`;
