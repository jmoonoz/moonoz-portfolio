import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import SectionTitle from '../components/SectionTitle'
import { MdSearch } from 'react-icons/md'
import ProjectInfo from '../assets/data/projects'
import ProjectItem from '../components/ProjectItem'

const ProjectsStyle = styled.div`
    padding: 10rem 5rem;
    .project-all-item {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
        gap: 5rem;
        margin-top: 5rem;
    }
    .project-search{
        position: relative;
        width: 300px;
        margin-top: 5rem;
    }
    .project-search input {
        width: 100%;
        font-size: 2rem;
        padding: .8rem;
        color: var(--black);
        border-radius: 6px;
        outline: none;
        border: none;
    }
    .project-search .search-icon{
        position: absolute;
        width: 2rem;
        right: 1rem;
    }
    .project-search .search-icon path {
        color: var(--deep-dark);
    }
    @media only screen and (max-width: 768px){
        .project-search,
        .project-search form,
        .project-search input{
            width: 100%;
        }
    }
`;

export default function Projects() {
    const [searchText, setSearchText] = useState('');
    const [projectData, setProjectData] = useState(ProjectInfo);
    useEffect(() => {
        if (searchText === '') return;
        setProjectData(() =>
            ProjectInfo.filter((item) =>
                item.name.toLowerCase().match(searchText.toLowerCase())
            )
        );
    }, [searchText]);

    const handleChange = (e) => {
        e.preventDefault();
        setSearchText(e.target.value);
        if (!e.target.value.length > 0) {
            setProjectsData(ProjectInfo);
        }
    };
    return (
        <ProjectsStyle>
            <SectionTitle heading="Projects" subheading="Some of my works" />
            <div className="project-search">
                <form>
                    <input
                        type="text"
                        value={searchText}
                        onChange={handleChange}
                        placeholder="Project Name" />
                    <MdSearch className="search-icon" />
                </form>

            </div>
            <div className="project-all-item">
                {projectData.map((item) => (
                    <ProjectItem
                        key={item.id}
                        title={item.name}
                        desc={item.desc}
                        img={item.img}
                    />
                ))}
            </div>
        </ProjectsStyle>
    )
}

