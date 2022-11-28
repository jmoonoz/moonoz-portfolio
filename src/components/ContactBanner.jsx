import React from 'react'
import styled from 'styled-components';
import Btn from '../components/Btn'
import PText from '../components/PText'


const ContactStyle = styled.div`
    padding: 10rem 0;
    .contactBanner-wrapper{
        background-color: var(--deep-dark);
        border-radius: 12pk;
        padding: 5rem 0rem;
        text-align: center;
    }
    .contact-heading{
        font-size: 4rem;
        margin-bottom:2rem;

    }
    @media only screen and (min-width: 768px) {
        .contact-heading{
            font-size: 2.8rem;
        }
    }
`;

export default function ContactBanner() {
    return (
        <ContactStyle>
            <div className="container">
                <div className="contactBanner-wrapper">
                    <PText>
                        Have a project in mind?
                    </PText>
                    <h3 className="contact-heading">let me help you</h3>
                    <Btn btnText="Contact" btnLink="/contact"></Btn>
                </div>
            </div>
        </ContactStyle>
    )
}
