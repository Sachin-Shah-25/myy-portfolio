import { Social } from "./Social"
import { MdEmail } from "react-icons/md";
import { IoLogoGithub } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";
import React from 'react'
import { motion } from 'framer-motion'
export const LastComponent = React.forwardRef((props, ref) => {

    return <div ref={ref} className="last_container">
        <div className="last_header">
            <div className="a_line">
            </div>
            <p className="last">Get in Touch</p>
            <div className="a_line">
            </div>
        </div>
        <div className="social_div">
            <motion.div
                initial={{ y: "50px" }}
                whileInView={{ y: 0 }}
                whileHover={{ scale: 1.1, cursor: "pointer" }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.5 }}
                className="get_in_touch">
                <MdEmail />
                <h3>Email</h3>
            </motion.div>
            <motion.a
            href={"https://github.com/Sachin-Shah-25"}
                initial={{ y: "50px" }}
                whileInView={{ y: 0 }}
                whileHover={{ scale: 1.1, cursor: "pointer" }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.5 }}
                className="get_in_touch">
                <IoLogoGithub />
                <h3>Github </h3>
            </motion.a>
            <motion.a
                href="https://www.linkedin.com/in/sachin-shah-742394377/"
                initial={{ y: "50px" }}
                whileInView={{ y: 0 }}
                whileHover={{ scale: 1.1, cursor: "pointer" }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.5 }}
                className="get_in_touch">
                <FaLinkedin />
                <h3>LinkedIn</h3>
            </motion.a>
        </div>
    </div>
})