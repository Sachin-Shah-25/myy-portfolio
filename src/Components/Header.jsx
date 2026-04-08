import { TbDots } from "react-icons/tb";
import { IoIosCloseCircle } from "react-icons/io";
import { useState } from 'react'
import { IoMenu } from "react-icons/io5";
export const Header = ({ changeRef, getToHome }) => {
    const [getState, setState] = useState(false)
    return <div className="header">
        <div className="your_name">
            <h2>Sachin Shah</h2>
        </div>
        <ul style={{ right: getState ? "0px" : "-200px" }}>
            <div className="cross"> <IoIosCloseCircle onClick={() => { setState(prev => !prev) }} /> </div>
            <li onClick={() => {
                getToHome();
                setState(false);
            }}>
                Home
            </li>
            <li onClick={()=>{
                changeRef()
                setState(false)
            }} >Projects</li>
            <li onClick={()=>{
                changeRef()
                setState(false)
            }} >Contact</li>
            <a  style={{textDecoration:"none",color:"white"}} href="https://drive.google.com/file/d/1-b8yx99DYuf3bF00k6TfXHWNY4ng8V2M/view?usp=sharing" className="download_"><p> Resume</p><span><TbDots /> </span> </a>
        </ul>
        {
            !getState && <div className="menu" onClick={() => setState(prev => !prev)}> <IoMenu /> </div>
        }

    </div>
}