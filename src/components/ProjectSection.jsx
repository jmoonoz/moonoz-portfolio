import React from 'react'
import styled from 'styled-components'
import SectionTitle from './SectionTitle'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Navigation } from 'swiper'
import projects from '../assets/data/projects.js'
import ProjectItem from './ProjectItem'
import 'swiper/swiper-bundle.min.css'


SwiperCore.use([Navigation]);


const ProjectStyle = styled.div`
    padding: 10rem 0;
    .project-all-item{
        display: flex;
        gap: 3rem;
        margin-top: 5rem;
    }
    .swiper{
        padding-top: 8rem;
        max-width: 100%;
    }
    .swiper-button-prev,
    .swiper-button-next {
        position: absolute;
        height: 50px;
        width: 50px;
        background: var(--deep-dark);
        z-index: 10;
        right: 60px;
        left: auto;
        top: 0;
        transform: translateY(50%);
        color: var(--gray-1);
        border-radius: 8px;
    }
    .swiper-button-next {
        right: 0;
    }
    .swiper-button-prev::after,
    .swiper-button-next::after {
        font-size: 2rem;
    }

    @media only screen and (max-width: 768px) {
        .project-all-item {
            flex-direction: column;
            max-width: 400px;
            margin: 0 auto;
            margin-top: 7rem;
            gap: 5rem;
            .projects-item-img {
                width: 100%;
            }
        }
    }
`;

export default function ProjectSection() {
    return (
        <ProjectStyle>
            <div className="container">
                <SectionTitle heading="Projects" subheading="some of my works" />
                <div className="project-all-item">
                    <Swiper
                        spaceBetween={30}
                        slidesPerView={1}
                        navigation
                        breakpoints={{
                            // when window width is >= 640px
                            640: {
                                slidesPerView: 1,
                            },
                            // when window width is >= 768px
                            768: {
                                slidesPerView: 2,
                            },
                            // when window width is >= 1200px
                            1200: {
                                slidesPerView: 3,
                            },
                        }}
                    >
                        {projects.map((project, index) => {
                            if (index >= 5) return;
                            return (
                                <SwiperSlide key={project.id}>
                                    <ProjectItem
                                        title={project.name}
                                        img={project.img}
                                        desc={project.desc}
                                    />
                                </SwiperSlide>
                            );
                        })}
                    </Swiper>

                </div>
            </div>
        </ProjectStyle>
    )
}
