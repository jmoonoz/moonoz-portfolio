import React from 'react'
import styled from 'styled-components'
import SectionTitle from './SectionTitle'
import PText from './PText'
import Btn from './Btn'
import AboutImg from "../assets/images/about-sec-img.png"

const AboutSecStyled = styled.div`
    padding: 10rem ;
    .container {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        text-align: left;
    }
    .about-section-left, .about-section-right {
        flex: 1
    }
    .section-title {
        text-align:left;
    }
    .para{
        margin-top: 2rem;
        margin-left: 0;
    }
    .about-section-btn{
        display: flex;
        align-items: center;
        justify-content: flex-start;
        gap: 2rem;
        margin-top: 2rem;
    }

    @media only screen (max-width: 950px){
        .about-section-left{
            flex: 4;
        }
        .about-section-right{
            flex:3;
        }

    }
    @media only screen and (max-width:768px){
        .container{
            flex-direction: column;
            text-align: center;
        }
        .about-section-left, 
        .about-section-right{
            width: 100%;
        }
        .about-section-right{
            margin-top: 3rem;
        }
        .section-title{
            text-align: center;
        }
        .para{
            margin: 0 auto;
            margin-top:2rem;
        }
        .about-section-btn{
            flex-direction: column;
            gap:0;
            .btn-wrapper,
            a{
                 width:100%;
             }
            }
            
        }

    

`;


export default function AboutSec() {
    return (
        <AboutSecStyled>
            <div className="container">
                <div className="about-section-left">
                    <SectionTitle
                        // className="section-title"
                        subheading="welcome my page"
                        heading="About Me"
                    />
                    <PText>
                        i am a graphics designer and i enjoy creating art work from code to digital products
                    </PText>
                    <div className="about-section-btn">
                        <Btn btnLink="/projects" btnText="works"></Btn>
                        <Btn btnLink="/about" btnText="read more" outline={true}></Btn>
                    </div>
                </div>
                <div className="about-section-right">
                    <img className="aboutImg" src={AboutImg} alt="" />
                </div>
            </div>
        </AboutSecStyled>
    )
}
