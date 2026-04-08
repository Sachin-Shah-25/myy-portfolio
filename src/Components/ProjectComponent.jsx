import image1 from '../assets/img1.PNG'
import image2 from '../assets/img2.PNG'
import image3 from '../assets/img3.PNG'
import React from 'react'
import { motion } from 'framer-motion'
export const ProjectComponent = React.forwardRef(() => {

    return <div className="projects_container">
        <div className="project_header">
            <div className="a_line">
            </div>
            <p className="project_about">Projects</p>
            <div className="a_line">
            </div>
        </div>
        <div className="project_head">Here are some projects I have using the MERN statc and Open AI.</div>
        <div className="projects">
          
            <motion.div
                initial={{ y: "50px" }}
                whileInView={{ y: 0 }}
                transition={{ duration: 0.95 }}
                className="project_outer">
                <div className="project_image">
                    <img src={image3}></img>
                </div>
                <div className="project_name">
                    <p className="">AI Chatbot</p>
                </div>
                <div className="project_dis">
                    <p>Intelligent chatbot powered by OpenAI for real-time interactions</p>
                </div>
                <div className="project_tech">
                    <p>Tech : </p> <p>React, Node.js, Express, OpenAI</p>
                </div>
                <div className="buttons">
                    <motion.a
                        whileHover={{ scale: 1.1, cursor: "pointer" }}
                        whileTap={{ scale: 0.95 }}
                        href="https://ai-chatbot-open-ai-mern.vercel.app/">Live Demo</motion.a>
                    <motion.a
                        whileHover={{ scale: 1.1, cursor: "pointer" }}
                        whileTap={{ scale: 0.95 }}
                        href="https://github.com/Sachin-Shah-25/AI-Chatbot-OpenAI-MERN">View Code</motion.a>
                </div>
            </motion.div>
            <motion.div
                initial={{ y: "50px" }}
                whileInView={{ y: 0 }}
                transition={{ duration: 0.95 }}
                className="project_outer">
                <div className="project_image">
                    <img src={image1}></img>
                </div>
                <div className="project_name">
                    <p className="">Hospital Management System</p>
                </div>
                <div className="project_dis">
                    <p>Complete platform for managing patients, doctors, and appointments</p>
                </div>
                <div className="project_tech">
                    <p>Tech : </p> <p>React, Node.js, Express, OpenAI</p>
                </div>
                <div className="buttons">
                    <motion.a
                        whileHover={{ scale: 1.1, cursor: "pointer" }}
                        whileTap={{ scale: 0.95 }}
                        href="https://hospital-management-cdf8.vercel.app/">Live Demo</motion.a>
                    <motion.a
                        whileHover={{ scale: 1.1, cursor: "pointer" }}
                        whileTap={{ scale: 0.95 }}
                        href="https://github.com/Sachin-Shah-25/Hospital-management">View Code</motion.a>
                </div>
            </motion.div>
              <motion.div
                initial={{ y: "50px" }}
                whileInView={{ y: 0 }}
                transition={{ duration: 0.95 }}
                className="project_outer">
                <div className="project_image">
                    <img src={image1}></img>
                </div>
                <div className="project_name">
                    <p className="">AI Resume Screener</p>
                </div>
                <div className="project_dis">
                    <p>Automated filtering of resumes using Open AI to bring the best candidates</p>
                </div>
                <div className="project_tech">
                    <p>Tech : </p> <p>React, Node.js, Express, OpenAI</p>
                </div>
                <div className="buttons">
                    <motion.a
                        whileHover={{ scale: 1.1, cursor: "pointer" }}
                        whileTap={{ scale: 0.95 }}
                        href="#">Live Demo</motion.a>
                    <motion.a
                        whileHover={{ scale: 1.1, cursor: "pointer" }}
                        whileTap={{ scale: 0.95 }}
                        href="#">View Code</motion.a>
                </div>
            </motion.div>
        </div>
    </div>
})