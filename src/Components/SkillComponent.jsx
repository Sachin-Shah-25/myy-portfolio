import { Skill } from "./Skill"
import react from '../assets/react.png'
import mongo from '../assets/mongo.png'
import code from '../assets/code.png'
import node from '../assets/node.png'
import javascript from '../assets/javascript.png'
import exprss from '../assets/exprss.png'
import exp from '../assets/exp.png'
import database from '../assets/database.png'
import db2 from '../assets/db2.png'
import github from '../assets/github.png'
import visual from '../assets/visual.png'
import { motion } from 'framer-motion'
export const SkillComponent = () => {

    return <div className="skill_container">
        <div className="skill_header">
            <div className="a_line">
            </div>
            <p className="skill">My Skills</p>
            <div className="a_line">
            </div>
        </div>
        <div className="my_skills">
            <motion.div
                initial={{ y: "50px" }}
                whileInView={{ y: 0 }}
                whileHover={{ scale: 1.1, cursor: "pointer" }}
                whileTap={{ scale: 0.5 }}
                transition={{ duration: 0.5 }}
                className="skill_box">
                <h4>Frontend</h4>
                <div className="a_line"></div>
                <div className="skill_inner_box">
                    <div className="img">
                        <img src={react}></img>
                    </div>
                    <div className="img">
                        <img src={javascript}></img>
                    </div>
                </div>
            </motion.div>
            <motion.div
                initial={{ y: "50px" }}
                whileInView={{ y: 0 }}
                whileHover={{ scale: 1.1, cursor: "pointer" }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.8 }}
                className="skill_box">
                <h4>Backend</h4>
                <div className="a_line"></div>
                <div className="skill_inner_box">
                    <div className="img">
                        <img src={node}></img>
                    </div>
                    <div className="img">
                        <img src={exp}></img>
                    </div>
                </div>
            </motion.div>
            <motion.div
                initial={{ y: "50px" }}
                whileInView={{ y: 0 }}
                whileHover={{ scale: 1.1, cursor: "pointer" }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.1 }}
                className="skill_box">
                <h4>Database</h4>
                <div className="a_line"></div>
                <div className="skill_inner_box">
                    <div className="img">
                        <img src={db2}></img>
                    </div>
                    <div className="img">
                        <img src={mongo}></img>
                    </div>
                </div>
            </motion.div>
            <motion.div
                initial={{ y: "50px" }}
                whileInView={{ y: 0 }}
                whileHover={{ scale: 1.1, cursor: "pointer" }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 1.1 }}
                className="skill_box">
                <h4>Tools</h4>
                <div className="a_line"></div>
                <div className="skill_inner_box">
                    <div className="img">
                        <img src={github}></img>
                    </div>
                    <div className="img">
                        <img src={visual}></img>
                    </div>
                </div>
            </motion.div>
        </div>
    </div>
}