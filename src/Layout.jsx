import { About } from './Components/About.jsx'
import { Header } from './Components/Header.jsx'
import { HeroLeftSection } from './Components/HeroLeftSection.jsx'
import { LastComponent } from './Components/LastComponent.jsx'
import { ProjectComponent } from './Components/ProjectComponent.jsx'
import { SkillComponent } from './Components/SkillComponent.jsx'
import { useRef } from 'react'
import {motion} from 'framer-motion'
import { HeroRightSection } from './Components/HeroRightSection.jsx'
export const Layout = () => {
    const ref = useRef(null)
    const homeRef = useRef(null)

    const changeRef = () => {

        ref.current?.scrollIntoView({ behavior: "smooth" })
    }
    const getToHome = () => {

        homeRef.current?.scrollIntoView({ behavior: "smooth" })
    }
    return <div className="body" ref={homeRef}>
        <div className="hero_container" >
            <Header changeRef={changeRef} getToHome={getToHome} />
            <div className="a_line">
            </div>
            <div className="hero_section">

                <HeroLeftSection changeRef={changeRef}  ></HeroLeftSection>
                <HeroRightSection ></HeroRightSection>
            </div>
            <div className="about_section">
                <About />
            </div>
            <motion.div className="skill_section">
                <SkillComponent />
            </motion.div>
            <div className="project_section"  ref={ref}>
                <ProjectComponent ></ProjectComponent>
            </div>
            <div className="last_section">
                <LastComponent ref={ref} />
            </div>
        </div>
    </div>
}