import React, { useState } from 'react'
import './Project.css'
import { projectDetails } from '../../assets/assets'

const Project = () => {
    const [viewState, setViewState] = useState(false);

    const handleViewMore = () => {
        setViewState(!viewState);
    }
    return (
        <>
            <div className="project-container" id='projects'>
                <div className="project-heading">
                    RECENT PROJECTS
                </div>
                <div className="project-card-container">

                    {
                        projectDetails.map((item, index) => {
                            return (
                                <>
                                    {(item.id <= 3 || viewState) ? (<>
                                        <div className="project-card">
                                            {
                                                (item.id % 2 === 0) ? <>
                                                    <div key={index} className="project-template">
                                                        <img src={item.template} alt="" />
                                                    </div>
                                                    <div className="project-data">
                                                        <div className='project-description'>
                                                            <h1>{item.Name}</h1>
                                                            <p> <b>Description :</b>{item.Description}</p>
                                                            <p><b>Technolgies used :</b> {item.Technologies_Used}</p>
                                                            <p><b>Link :</b>
                                                                <a className="project-link" href={item.Link_address} target='_blank' rel="noreferrer" >
                                                                    {item.Link}
                                                                </a></p>
                                                        </div>
                                                    </div>
                                                </>
                                                    : <>
                                                        <div className="project-data">
                                                            <div className='project-description'>
                                                                <h1>{item.Name}</h1>
                                                                <p> <b>Description :</b>{item.Description}</p>
                                                                <p><b>Technolgies used :</b> {item.Technologies_Used}</p>
                                                                <p><b>Link :</b>
                                                                    <a className="project-link" href={item.Link_address} target='_blank' rel="noreferrer" >
                                                                        {item.Link}
                                                                    </a></p>
                                                            </div>
                                                        </div>
                                                        <div key={index} className="project-template">
                                                            <img src={item.template} alt="" />
                                                        </div>
                                                    </>
                                            }
                                        </div ></>)
                                        : <></>}
                                </>
                            )
                        })}
                    <div className="project-view-button">
                        <button onClick={handleViewMore}>{!viewState ? "View more" : "View less"} </button>
                    </div>
                </div>
            </div >
        </>
    )
}

export default Project