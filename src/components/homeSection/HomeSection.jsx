import React from 'react'
import './homeSection.css'
import { profile } from './import'

const HomeSection = () => {
    return (
        <>
            <div className="introduction section-padding" id="home">
                <h1>Meet Amani Peter Kafonogo</h1>
                <div className="introduction-img">
                    <img src={profile} style={{ width: 200, height: 'auto' }} alt="profile-img" />
                </div>
                <p>A FrontEnd developer React js, React Native, HTML & CSS Also knowledge of Laravel
                    & Node Js 
                    Informaiton systems audit, Business Analyst,
                    Communication Skills COBIT, owasp zp tools and ISACA domains
                </p>
                <a className="btn-contact" href="#contact"><b>Contact/Request A project</b> </a>
            </div>

        </>
    )
}

export default HomeSection