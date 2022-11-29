import React from 'react'
import HeroSection from '../components/HeroSection'
import styled from 'styled-components'
import PText from '../components/PText';
import Btn from '../components/Btn';
import AboutImg from '../assets/images/about-page-img.png'
import AboutInfoItem from '../components/AboutInfoItem';

const AboutStyle = styled.div`
  padding: 20rem 0 10rem 0;

  .top-section{
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
  }
  .left{
    flex: 3;
  }
  .right{
    flex:2;
  }
  .sub-heading{
    font-size: 2.2rem;
    margin-bottom: 2rem;
    span{
      background-color: var(--deep-dark);
      padding: 0.5rem;
      border-radius: 8px;
    }
  }
  .about-heading{
    font-size: 3.6rem;
    margin-bottom: 3rem;
  }
  .about-info{
    margin-bottom: 4rem;
    .para{
      max-width: 100%;
    }
  }
  .right{
    img{
      border: 2px solid var(--gray-1);
    }
  }
  .about-info-heading{
    font-size: 3.6rem;
    text-transform: uppercase;
  }
  .about-info-item{
    margin-top: 10rem;
  }
  .about-info-items{
    margin-top: 15rem;
  }
  .sub-heading{
    span{
      display: inline-block;
      font-size: 3rem;
    }
  }
  @media only screen and (max-width:768px){
    padding: 10rem 0;
    .top-section{
      flex-direction: column;
      gap: 5rem;
    }
    .about-info-items{
      font-size: 3rem;
    }
    .about-info-heading{
      font-size: 3rem;
    }
  }

`;

export default function About() {
  return (
    <AboutStyle>
      <div className="container">
        <div className="top-section">
          <div className="left">
            <p className="sub-heading">
              Hello, I'm <span>Joel Muñoz</span>
            </p>
            <h2 className="about-heading">
              a Front end Web Developer
            </h2>
            <div className="about-info">
              <PText>
                front end web developer
              </PText>
            </div>
            <Btn btnText="DownLoad CV" btnLink="#" />
          </div>
          <div className="right">
            <img src={AboutImg} alt="about me" />
          </div>
        </div>
        <div className="about-info-items">
          <div className="about-info-item">
            <h1 className="about-info-heading">
              Education
              <AboutInfoItem
                title="School :"
                items={["Cal State East Bay, 2019"]}
              />
              <AboutInfoItem
                title="Degrees :"
                items={["B.A. Psychology", "B.S. Computer Science"]}
              /> 
            </h1>
          </div>
          <div className="about-info-item">
            <h1 className="about-info-heading">
              My Skills
              <AboutInfoItem
                title="Front End :"
                items={["HTMl5", "CSS3", "Javascript", "React"]}
              />
              <AboutInfoItem
                title="Design :"
                items={["Procreate", "Lightroom", "Photoshop", "illustrator", "Figma"]}
              /> 
            </h1>
          </div>
          <div className="about-info-item">
            <h1 className="about-info-heading">
             Experiences
              <AboutInfoItem
                title="2022 - current :"
                items={["Well Minded Media Co: web developer"]}
              />
              <AboutInfoItem
                title="2017 - Current :"
                items={["Target: Executive Team Lead Asset Protection"]}
              /> 
              <AboutInfoItem
                title="2018 - Current :"
                items={["Moonoz Disenoz: Graphics Designer / Front End Developer"]}
              />
            </h1>
          </div>
        </div>
      </div>
    </AboutStyle>
  )
}
