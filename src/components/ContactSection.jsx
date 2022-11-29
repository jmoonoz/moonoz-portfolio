import React from 'react'
import SectionTitle from '../components/SectionTitle'
import styled from 'styled-components'
import ContactInfoItem from '../components/ContactInfoItem'
import ContactForm from './ContactForm';
import { MdEmail } from 'react-icons/md'

const ContactSectionStyle = styled.div`
    padding: 10rem 0;
    .contact-wrapper {
        display: flex;
        gap: 5rem;
        margin-top: 7rem;
        justify-content: space-between;
        position: relative;
    }
    .contact-wrapper::after{
        position: absolute;
        content: '';
        width: 2px;
        height: 50%;
        background-color: var(--gray-1);
        left: 50%;
        top: 30%;
        transform: translate(-50%, -50%);
    }
    .left{
        width: 100%;
        max-width: 500px;
    }
    .right{
        max-width: 500px;
        width: 100%;
        border-radius: 12px;
    }
    @media only screen and (max-width: 768px){
        .contact-wrapper{
            flex-direction: column;
        }
        .contact-wrapper::after{
            display: none;
        }
        .left,
        .right {
            max-width: 100%;
        }
        .right {
            padding: 4rem 2rem 2rem 2rem;
        }
    }
`;



export default function ContactSection() {
    return (
        <ContactSectionStyle>
            <SectionTitle heading="Contact" subheading="Get in Touch" />
            <div className="contact-wrapper">
                <div className="left">
                    <ContactInfoItem icon={<MdEmail />} text="j.munoz1@yahoo.com" />
                    <ContactInfoItem text="Hayward, CA" />
                </div>
                <div className="right">
                    <ContactForm />
                </div>
            </div>
        </ContactSectionStyle>
    )
}
