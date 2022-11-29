import React from 'react'
import styled from 'styled-components'
import PText from './PText'

const AboutInfoItemStyled = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin-top: 2rem;
    .title{
        font-size: 2.4rem;
    }
    .items{
        display: flex;
        gap: 1.5rem;
        position: absolute;
        left: 30rem;
    }
    .item{
        background-color: var(--deep-dark);
        padding: 1rem;
        border-radius: 8px;
    }
   

    @media only screen and (max-width: 768px){
        flex-direction: column;
        align-items: flex-start;
        gap: 1rem;
        .items{
            position: initial;
            gap: 1rem;
            ${'' /* left: 5rem; */}
        }
        .title{
            font-size: 2rem;
        }
    }
`;

function AboutInfoItem({
    title = "Title",
    items = ['HTML', 'CSS', 'JS'],
}) {
    return (
        <AboutInfoItemStyled>
            <h1 className="title">{title}</h1>
            <div className="items">
                {items.map((item, index) => (
                    <div className="item" key={index}>
                        <PText>{item}</PText>
                    </div>
                ))}
            </div>
        </AboutInfoItemStyled>
    )
}

export default AboutInfoItem
