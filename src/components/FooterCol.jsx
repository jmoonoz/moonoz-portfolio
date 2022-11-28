import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const ColStyle = styled.div`
    .heading {
        font-size: 2.4rem;
        margin-bottom: 2rem;
    }
    li{
        margin-bottom: 1rem;
    }
    a{
        font-size: 1.8rem;
    }
`;

export default function FooterCol({
    heading = "col heading",
    links = [
        {
            type: "Links",
            title: "Home",
            path: "/home"
        },
        {
            type: "Links",
            title: "About",
            path: "/About"
        }
    ]

}) {
    return (
        <ColStyle>
            <h1 className="heading">
                {heading}
            </h1>
            <ul>
                {
                    links.map((items, index) => (
                        <li key={index}>
                            {items.type === 'Link' ? (
                                <Link to={items.path}>{items.title}</Link>
                            ) : (
                                <a href={items.path} target="_blank"
                                    rel="noreferrer">
                                    {items.title}
                                </a>
                            )}
                        </li>
                    ))}
            </ul>
        </ColStyle>
    )
}
