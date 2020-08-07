import React from 'react';
import Hero from '../components/Hero';
import Content from '../components/Content';
import pic from "../Harsh123.jpg";

function AboutPage(props) {
    return(
       
        <div>
            
            <Content>
            <img src={pic} alt="mypic" width="300px" margin="auto"/>
            <Hero title={props.title} />
                <p>Hello, my name is Harsh Bhagat. I am currently Third Year student at IIT Dhanbad pursuing Bachelor of Technology in Mechanical Engineering.</p>
                <p>I am constantly learning new things, currently those thimgs include gaining more experience with MongoDB, React, Nodejs and Expressjs. </p>
                <p>My latest project is that I have developed Node_passport_login web app.</p>
                <hr />
                <h1 className="color:red">Technical Skills:</h1>
                <h4>Web:</h4>
                <p>Html,CSS,Javascript, Node.js, React.js,MongoDB</p>
                <h4>Programming Skills:</h4>
                <p>C, C++, Data Structure, Algorithms</p>
                <h4>Software:</h4>
                <p>AutoCAD, MatLab</p>
            </Content>
        </div>
    );
}

export default AboutPage;