export const About = () => {

    return <div className="about_container">
        <div className="about_header">
            <div className="a_line">
            </div>
            <p className="about">About Me</p>
            <div className="a_line">
            </div>
        </div>
        <div className="about_second_div">
            <div>Full Stack Developer</div>
            <div className="b_line"></div>
            <div>MERN Stack Developer</div>
        </div>
        <div className="a_line" style={{ width: "50%", margin: "auto", marginTop: "20px" }}>
        </div>
        <div className="about_third_div">
            Passionte about creating efficient and user friendly applications with React, Nodejs and MongoDB.
            <div className="a_line"></div>
            <div className="my_details">
                <p className=""
                    style={{
                        color: "white",
                        fontWeight: "bold",
                        fontSize: ".8rem"
                    }}>Education .</p>
                <div className="first">
                    <p>2018 </p>
                    <div className="b_line"></div>
                    <p>
                        12th pass from (CBSE) Central Board of Secondary Education .

                    </p>
                </div>
                <div className="first">
                    <p>2022 </p>
                    <div className="b_line"></div>
                    <p>
                        Bachelor of Commerce (B.Com) <br></br>
                        University of Delhi - School of Open Learning | 2022

                    </p>
                </div>
                <p className=""
                    style={{
                        color: "white",
                        fontWeight: "bold",
                        fontSize: ".8rem",
                        marginTop: "50px"
                    }}>Work Exerience .</p>
                <div className="first">
                    <p>2018 - 2019 </p>
                    <div className="b_line"></div>
                    <p class="first_det">
                        Telecalling Executive
                        <span>Handled customer calls and maintained records.</span>
                    </p>
                </div>
                <div className="first">
                    <p>2019 - 2020 </p>
                    <div className="b_line"></div>
                    <p class="first_det">
                        Record Maintenance Executive
                        <span>Managed and organized company records.</span>
                    </p>
                </div>
                <div className="first">
                    <p>2020 - 2022 </p>
                    <div className="b_line"></div>
                    <p class="first_det">
                        Operations Executive
                        <span>Oversaw day-to-day operational activites.</span>
                    </p>
                </div>
            </div>
        </div>
    </div>
}