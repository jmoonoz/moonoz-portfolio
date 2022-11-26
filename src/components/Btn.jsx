import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const BtnStyle = styled.div`
    margin-top: 2rem;
    .btn{
        font-size: 2.2rem;
        background-color: ${props =>
        props.outline ? 'transparent' : "var(--gray-1)"
    };
        padding: .7em 2em;
        border-radius: 8px;
        display: inline-block;
        border: 2px solid var(--gray-1);
        color: ${props =>
        props.outline ? 'var(--gray-1)' : 'black'
    };
    }
    .transparent{

    }
    @media only screen(max-width: 768px){
        .btn{
            font-size:1.8rem;
        }
    }
`;

export default function Btn({ 
    btnText = 'test',
    btnLink = 'test',
    outline = false }) {
    return (
        <BtnStyle outline={outline}>
            <Link className="btn" to={btnLink}>
                {btnText}
            </Link>
        </BtnStyle>
    )
}
