import React from "react";
import '../styles/Portfolio.css'

export default function Portfolio(props) {
    return (
        <div className="portfolio-preview--container">
            <div className="generalInfo-container">
                <h1 className="name-header">{props.personalInfo.firstName} {props.personalInfo.lastName}</h1>
                <div className="personalInfo-container">
                    <h1>Personal Information</h1>
                    <p><i class="fa-solid fa-calendar-days"></i> Date of birth: {props.personalInfo.dateOfBirth}</p>
                    <p><i class="fa-solid fa-location-dot"></i> Address: {props.personalInfo.street}, {props.personalInfo.city}, {props.personalInfo.state}</p>

                    <p><i class="fa-solid fa-address-card"></i> Contacts:</p>
                    <ul>
                        <li><i class="fa-solid fa-envelope"></i> {props.personalInfo.email}</li>
                        <li><i class="fa-solid fa-phone"></i> {props.personalInfo.phoneNumber}</li>
                    </ul>
                    
                </div>
            </div>
            <div className="eduInfo-container">
                <h1>Education</h1>

                <div className="school-box">
                    <p><i class="fa-solid fa-building-columns"></i> Institution name: {props.educationInfo.schoolName}</p>
                    <p className="start-finish--box">Start: {props.educationInfo.startDate} | {props.educationInfo.finishDate === 'Current' ? <p>{props.educationInfo.finishDate}</p> : <p>Finish: {props.educationInfo.finishDate}</p>}</p>
                </div>

                <div className="degree-box">
                    <p>Degree: </p>
                    <h3>{props.educationInfo.degree}</h3>
                </div>
                
            </div>
            <div className="workInfo-container">
                <h1>Work experience</h1>

                <h2><i class="fa-solid fa-briefcase"></i> {props.workInfo.position}</h2>

                <div className="work-box">
                    <p><i class="fa-solid fa-building"></i> Company name: {props.workInfo.companyName}</p>
                    <p className="start-finish--box">Start: {props.workInfo.startDate} | {props.workInfo.finishDate === 'Current' ? <p>{props.workInfo.finishDate}</p> : <p>Finish: {props.workInfo.finishDate}</p>}</p>
                </div>
                
            </div>
            
        </div>
    )
}