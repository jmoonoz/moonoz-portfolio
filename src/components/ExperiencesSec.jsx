import React from 'react'
import ExpereincesSecItem from './ExpereincesSecItem'
import SectionTitle from './SectionTitle'
import styled from 'styled-components'
import { MdDesignServices, MdDesktopMac, MdOutlineDesignServices } from 'react-icons/md'
import {BiCode} from 'react-icons/Bi'

const ExpereincesItemStyle = styled.div`
    padding: 10rem 0;
    .experience-items{
        display: flex;
        gap: 10rem;
        justify-content: space-between;
        margin-top: 5rem;
    }
    @media only screen and (max-width: 768px){
        .experience-items{
            flex-direction: column;
            max-width: 350px;
            margin: 0 auto;
            margin-top: 5rem;
            gap: 5rem;
        }
    }
`;

export default function ExperiencesSec() {
    return (
        <ExpereincesItemStyle>
            <div className="container">
                <SectionTitle heading="Experiences" subheading="what I've worked with" />
                <div className="experience-items">
                    <ExpereincesSecItem 
                    icon= {<BiCode />}
                    title= "Web Designer"
                    desc = "jkdf;lakjdf'kl"
                    />
                    <ExpereincesSecItem
                    icon={<MdOutlineDesignServices/>}
                    title="Graphics Designer"
                    desc="over 5 + years of desingins in tops applications like 
                    Adobe, illustrator, photoshop, procreate, Affinity designer" />
                    <ExpereincesSecItem />
                </div>
            </div>
        </ExpereincesItemStyle>
    )
}
