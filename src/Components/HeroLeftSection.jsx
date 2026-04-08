export const HeroLeftSection = ({changeRef}) => {

    return <div className="hero_section_left">
    
        <p className="hero_text1">Hello, I'm a</p>
        <p className="hero_text2"><strong>MERN</strong> Stack Developer  . {"</>"}  </p>
        <div className="a_line">
        </div>
        <p className="hero_text3">Building Scalable and Intelligent Applications.</p>
        <div className="hero_buttons">
            <button id="" onClick={changeRef} >View My Work</button>
            <button id="" onClick={changeRef} >Contact Me</button>
        </div>
    </div>
}
