import myimage from '../assets/my2.png'
import react from '../assets/react.png'
import mongo from '../assets/mongo.png'
import exprss from '../assets/exp.png'
import node from '../assets/node.png'
export const HeroRightSection=()=>{

    return <div className="hero_section_right">
        <img src={react} className="tech_icons t1" ></img>
        <img src={exprss} className="tech_icons t3" ></img>
            <div className="over_div">
            <div className="inner_div">
                <div className="my_image">
                    <img src={myimage}/>
                </div>
            </div>
        </div>

    </div>
}