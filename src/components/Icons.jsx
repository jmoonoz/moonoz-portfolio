import React from 'react'
import { SocialIcon } from 'react-social-icons'
import styled from 'styled-components'

const responsiveSize = { height: 25, width: 25 };
const IconStyled = styled.div`
path{
    color:var(--white);
}

path:hover{
    fill:black;
}
@media only screen (min-width: 768px){
     
}
   
`;

export default function Icons({ urlLink }) {
    return (
        <li>
            <IconStyled>
                <SocialIcon url={urlLink} bgColor="#ffff" />
            </IconStyled>
        </li>
    )
}
