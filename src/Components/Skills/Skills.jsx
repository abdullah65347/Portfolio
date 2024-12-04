import React from 'react'
import './Skills.css'
import { skillsObj } from '../../assets/assets'

const Skills = () => {
    return (
        <>
            <div className="skills-outer-container" id='skills'>
                <div className='skills-container'>
                    <div className="skills-heading">
                        <h2>MY SKILLS</h2>
                    </div>
                    <div className="skills-card">
                        {
                            skillsObj.map((item, index) => {
                                return (
                                    <div key={index} className='skills-data'>
                                        <div className="skills-icon">
                                            {item.id === 10 || item.id === 6 ?
                                                <img id='springMVC' src={item.icon} alt={item.name} /> :
                                                <img src={item.icon} alt={item.name} />
                                            }
                                        </div>
                                        <div className="skills-name">
                                            <p>{item.name}</p>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default Skills