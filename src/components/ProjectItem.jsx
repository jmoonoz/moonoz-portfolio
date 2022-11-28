import React from 'react'
import { Link } from 'react-router-dom'
import projectImg from '../assets/images/projectImg.png'
import styled from 'styled-components'

const ProjectItemStyle = styled.div`
    .projects-item-img{
        width: 100%;
        height: 400px;
        border-radius: 12px;
        overflow: hidden;
        display: inline-block;
        border: 3px solid var(--gray-2);
        img {
            height: 100%;
        }
    }
    .project-item-info{
        margin-top: 1rem;
        background-color: var(--deep-dark);
        padding: 1rem;
        border-radius: 12px;
    }
    .project-item-title{
        font-size: 2rem;
    }
    .project-item-description{
        font-size: 1.6rem;
        font-family: 'RobotoMono Regular';
        margin-top: 1rem;
    }

    @media only screen and (max-width: 768px) {
        .projects-item-img{
            height: 350px;
        }
    }
`;

export default function ProjectItem({
    title = 'Project Name',
    img = ProjectImg,
    desc = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
}) {
    return (
        <ProjectItemStyle>
            <Link to="/projects" className="projects-item-img">
                <img src={img} alt="project img" />
            </Link>
            <div className="project-item-info">
                <Link to="#">
                    <h3 className="project-item-title">{title}</h3>
                </Link>
                <p className="project-item-description">{desc}</p>
            </div>
        </ProjectItemStyle>
    )
}
