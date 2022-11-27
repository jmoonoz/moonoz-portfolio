import React from 'react'
import HeroSection from '../components/HeroSection'
import AboutSection from '../components/AboutSec'
import ExperiencesSec from '../components/ExperiencesSec'
import ProjectSection from '../components/ProjectSection'


export default function Home() {
    return (
        <div>
            <HeroSection />
            <AboutSection />
            <ExperiencesSec/>
            <ProjectSection />
        </div>
    )
}
