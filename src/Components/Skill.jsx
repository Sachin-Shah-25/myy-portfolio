import react from '../assets/react.png'
import mongo from '../assets/mongo.png'
export const Skill=()=>{

    return <div className="skill_box">
        <h4>Frontend</h4>
        <div className="a_line"></div>
        <div className="skill_inner_box">
            <div className="img">
                <img src={react}></img>
            </div>
            <div className="img">
              <img src={mongo}></img>
            </div>
        </div>
    </div>
}