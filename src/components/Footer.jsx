import React from 'react'
import PText from '../components/PText'
import FooterCol from "./FooterCol"
import styled from 'styled-components'

const FooterStyle = styled.div`
    padding-top: 10rem;
    background-color: var(--deep-dark);
    .container {
        display: flex;
        gap: 3rem;
    }
    .footer-col1{
        flex:2;
    }
    .footer-col2,
    .footer-col3,
    .footer-col4{
        flex:1;
    }
    .footer-col1-title{
        font-size: 3.5rem;
        margin-bottom: 1rem;
    }
    .copyright {
    background-color: var(--dark-bg);
    text-align: left;
    padding: 1rem 0;
    margin-top: 5rem;
    .para {
      margin-left: 0;
    }
  }
  @media only screen and (max-width: 768px){
    .container{
        flex-direction: column;
        gap: 0rem;
        & > div{
            margin-top: 5rem;
        }
        .footer-col1 .para{
            max-width: 100%;
        }
        .copyright{
            .container{
                div{
                    margin-top: 0;
                }
            }
        }
    }

  }

    
    
`;

export default function Footer() {
    return (
        <FooterStyle>
            <div className="container">
                <div className="footer-col1">
                    <div className="footer-col1-title">
                        Joel Muñoz
                    </div>
                    <PText>
                        skdjflaksjf aslkjdflka  ksdj;flkj sjdfiejrfjskldjfisjf ksfjd
                        slkjdfjfjs

                    </PText>
                </div>
                <div className="footer-col2">
                    <FooterCol
                        heading="Importants Links"
                        links={[
                            {
                                title: "home",
                                path: "/",
                                type: "Link"
                            },
                            {
                                title: "About",
                                path: "/About",
                                type: "Link"
                            },
                            {
                                title: "Project",
                                path: "/Project",
                                type: "Link"
                            },
                            {
                                title: "Contact",
                                path: "/Contact",
                                type: "Link"
                            }
                        ]
                        }
                    />
                </div>
                <div className="footer-col3">
                    <FooterCol
                        heading="Contact Info"
                        links={[
                            {
                                title: '+88012312',
                                path: 'tel:+88012312',
                            },
                            {
                                title: 'webcifar@gmail.com',
                                path: 'mailto:webcifar@gmail.com',
                            },
                            {
                                title: 'GEC Circle, Chittagong, Bangladesh',
                                path: 'http://google.com/maps',
                            },
                        ]}
                    />
                </div>
                <div className="footer-col4">
                    <FooterCol
                        heading="social Links"
                        links={[
                            {
                                title: 'Facebook',
                                path: 'http://facebook.com',
                            },
                            {
                                title: 'Twitter',
                                path: 'http://twitter.com',
                            },
                            {
                                title: 'Instagram',
                                path: 'http://instagram.com',
                            },
                        ]}
                    />
                </div>
            </div>
            <div className="copyRight">
                <div className="container">
                    <PText>
                    copyright

                    </PText>
                </div>
            </div>
        </FooterStyle>
    )
}
