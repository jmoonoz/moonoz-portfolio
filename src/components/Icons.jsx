import React from 'react'
import { SocialIcon } from 'react-social-icons'
import styled from 'styled-components'

const responsiveSize = { height: 25, width: 25 };
const IconStyled = styled.div`
    a{
        path{
            color:var(--white);
        }
    }
    .social-svg-icon:hover{
        fill: transparent !important;
    }
        path:hover{
            fill:var(--white);
        }

    @media only screen (min-width: 768px){
        
    }
   
`;

export default function Icons({ urlLink }) {
    return (
        <li>
            <IconStyled>
                <SocialIcon url={urlLink} bgColor="rgba(255, 255, 255, 0.2)" />
            </IconStyled>
        </li>
    )
}
