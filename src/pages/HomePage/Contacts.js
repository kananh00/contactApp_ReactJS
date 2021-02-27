import React from "react";
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import './styles.sass';

export const Contacts =
    ({
      name,
      surname
    }) => {
        return(
            <StyledSingleContact>
                <p className = "contactInfo">{name} {surname}</p>
            </StyledSingleContact>
          );
        }

const StyledSingleContact = styled(Link)`
    text-decoration: none;
    padding: 20px;
    max-width: 200px
`;