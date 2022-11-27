import React from 'react'
import styled from 'styled-components'
import HeroImg from '../assets/images/hero.png'
import PText from "../components/PText"
import Btn from "../components/Btn"
import SocialMediaArrow from "../assets/images/social-media-arrow.svg"
import ScrollDownArrow from "../assets/images/social-media-arrow.svg"
import { SocialIcon } from "react-social-icons"
import Icon from "../components/Icons"
import Icons from '../components/Icons'


const HeroStyle = styled.div`
.hero {
    height: 100vh;
    min-height: 1000px;
    width: 100%;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
  }
  .hero-heading {
    font-size: 2rem;
    margin-bottom: -4rem;
    position: relative;
    span {
      display: inline-block;
      width: 100%;
    }
    .hero-name {
      font-family: 'Montserrat SemiBold';
      font-size: 7rem;
      color: var(--white);
    }
  }
  .hero-img{
    max-width: 900px;
    width: 100%;
    height: 600px;
    margin: 0 auto;
    border: 2px solid var(--gray-1);
  }
  .hero-info{
    margin-top:-18rem;
  }
  .hero-socials, 
  .hero-scrollDown{
    display: flex;
    flex-direction: column;
    gap: 2rem;
    position: absolute;
    bottom: 20px;
    width: 50px;
  }
  .hero-socials{
    left: 50px;

  }
  .hero-scrollDown{
    right: 50px;
  }
  .hero-social-indicator,
  .hero-scrollDown
  {
    width: 50px;
    p{
      font-size: 1.6rem;
      transform: translateY(-70px) rotate(90deg);
      letter-spacing: 0.7rem;
      text-transform: uppercase;
    }
    img{
      max-height: 45px;
      width: 16px;
      margin: 0 auto;
      object-fit: contain;
    }
  }
  .hero-scrollDown{
    img{
      max-height:70px;
    }
  }
  .hero-social-text{
    ul{
      li{
        margin-bottom: 1rem;
      }
      a{
        display: inline-block;
        font-size: 1.6rem;
        transform: rotate(-90deg);
        letter-spacing: 5px;
        margin-bottom: 2rem;
      }
    }
  }
  @media only screen and (max-width:768px){
    .hero{
      min-height: 750px;

    }
    .hero-heading{
      font-size: 1.4rem;
      margin-bottom: -3rem;
      .hero-name{
        font-size: 4.5rem;
      }
    }
    .hero-img{
      height: 300px;
    }
    .hero-info{
      margin-top:3rem;
    }
    .hero-socials{
      left: 0px;
      bottom: -15%;
      width: 20px;
      .hero-social-indicator{
        width: 20px;
        p {
          font-size: 1.2rem;
        }
        img {
          max-height: 22px;
        }
      }
      .hero-social-text{
        ul {
          li {
            a {
              font-size: 1.2rem;
              margin-bottom: 1rem;
            }
          }
        }
      }
    }
    .hero-scrollDown{
        right: 0;
        width: 20px;
        gap: 1rem;
        p {
          font-size: 1.3rem;
        }
    }
     a.social-icon{
        width: 30px !important;
        height:30px !important;
    }
  }
 

`;


export default function HeroSection() {
  return (
    <HeroStyle>
      <div className="hero">
        <div className="container">
          <h1 className="hero-heading">
            <span>Hello, My name is</span>
            <span className="hero-name">Joel Muñoz</span>
          </h1>
          <div className="hero-img">
            <img src={HeroImg} atl="Moonoz Hero section"></img>
          </div>
          <div className="hero-info">
            <PText>
              A Front end Developer and graphic designer. I dwindle in creating
            </PText>
            <Btn btnLink={"/projects"} btnText="btn" outline={false} />
          </div>
          <div className="hero-socials">
            <div className="hero-social-indicator">
              <p>follow</p>
              <img src={SocialMediaArrow} alt="social media arrow"></img>
            </div>
            <div className="hero-social-text">
              <ul>
                  <Icons urlLink="https://www.instagram.com/moonozdisenoz/" />
                  <Icons urlLink="https://github.com/jmoonoz" />
                  <Icons urlLink="https://www.linkedin.com/in/moonoz/" />
              </ul>
            </div>
          </div>
          <div className="hero-scrollDown">
            <p>Scrollbar</p>
            <img src={ScrollDownArrow} alt="" />
          </div>
        </div>
      </div>
    </HeroStyle>
  )
}
