import React from 'react'
import HeroSection from '../components/HeroSection'
import AboutSection from '../components/AboutSec'
import ExperiencesSec from '../components/ExperiencesSec'
import ProjectSection from '../components/ProjectSection'
import ContactBanner from "../components/ContactBanner"
import Footer from '../components/Footer'


export default function Home() {
    return (
        <div>
            <HeroSection />
            <AboutSection />
            <ExperiencesSec/>
            <ProjectSection />
            <ContactBanner />
            <Footer />
        </div>
    )
}
