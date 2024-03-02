import React from 'react'
import './language.css'
import {java,javascript,php,react,code,adobe} from './import'

const Language = () => {
    return (
        <>
            <div className="language">
                <ul>
                    <li><img src={java} alt="react" /></li>
                    <li><img src={react} alt="php" /></li>
                    <li><img src={javascript} alt="java-script" /></li>
                    <li><img src={code} alt="code" /></li>
                    <li><img src={adobe} alt="adobe-photoshop" /></li>
                    <li><img src={php} alt="java" /></li>
                </ul>
            </div>


        </>
    )
}

export default Language