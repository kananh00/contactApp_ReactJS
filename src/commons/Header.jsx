import React from 'react';
import { NavLink } from "react-router-dom";
import { AiOutlineUserAdd} from "react-icons/ai";
import './styles.sass';
import styled from 'styled-components';

export const Header = () => {
    return (
        <div className = "appContainer">
            <NavLink className = "logo" exact to = "/">ContactsApp</NavLink>
            <div className = "page_switcher">
                <StyledNavLink className = "links" to = "/add"><AiOutlineUserAdd className = "icons"/>add contact</StyledNavLink>
            </div>
        </div>
        
    )
}

const StyledNavLink = styled(NavLink)`
    margin: 10px;
    text-decoration: none;
    cursor: pointer;
    font-size: 20px;
    color: white;
    border: 2px solid transparent;
    padding: 10px;
    border-radius: 25px;
    border-color: white;
    &.active {
        color: #7B68EE;
        // border-color: #1E90FF;
        background-color: #F5F5F5;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    }
`;