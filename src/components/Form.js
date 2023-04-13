import React from "react"

export default function Form(props) {
    function handlePersonalInfoChange(event) {
        props.onPersonalChange(event.target);
    }

    function handleEducationInfoChange(event) {
        props.onEducationChange(event.target);
    }

    function handleWorkInfoChange(event) {
        props.onWorkChange(event.target);
    }

    return (
        <div className="form-container">
            <div className="line-container"><div className="line"></div><h1>Personal Info</h1><div className="line"></div></div>
            <form className="personalInfo-form--container">
                <input 
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    value={props.personalInfo.firstName}
                    onChange={handlePersonalInfoChange}
                />
                <input 
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    value={props.personalInfo.lastName}
                    onChange={handlePersonalInfoChange}
                />
                <input 
                    type="text"
                    name="dateOfBirth"
                    placeholder="Date of Birth"
                    value={props.personalInfo.dateOfBirth}
                    onChange={handlePersonalInfoChange}
                />
                <input 
                    type="text"
                    name="street"
                    placeholder="Street"
                    value={props.personalInfo.street}
                    onChange={handlePersonalInfoChange}
                />
                <input 
                    type="text"
                    name="city"
                    placeholder="City"
                    value={props.personalInfo.city}
                    onChange={handlePersonalInfoChange}
                />
                <input 
                    type="text"
                    name="state"
                    placeholder="State"
                    value={props.personalInfo.state}
                    onChange={handlePersonalInfoChange}
                />
                <input 
                    type="text"
                    name="email"
                    placeholder="Email"
                    value={props.personalInfo.email}
                    onChange={handlePersonalInfoChange}
                />
                <input 
                    type="text"
                    name="phoneNumber"
                    placeholder="Phone number"
                    value={props.personalInfo.phoneNumber}
                    onChange={handlePersonalInfoChange}
                />
            </form>
            <div className="line-container"><div className="line"></div><h1>Education Info</h1><div className="line"></div></div>
            <form className="eduInfo-form--container">
                <input 
                    type="text" 
                    name="schoolName"
                    placeholder="School's name"
                    value={props.educationInfo.schoolName}
                    onChange={handleEducationInfoChange}
                />
                <input 
                    type="text" 
                    name="degree"
                    placeholder="Degree"
                    value={props.educationInfo.degree}
                    onChange={handleEducationInfoChange}
                />
                <input 
                    type="text" 
                    name="startDate"
                    placeholder="Start date"
                    value={props.educationInfo.startDate}
                    onChange={handleEducationInfoChange}
                />
                <input 
                    type="text" 
                    name="finishDate"
                    placeholder="Finish date"
                    value={props.educationInfo.finishDate}
                    onChange={handleEducationInfoChange}
                />
            </form>
            <div className="line-container"><div className="line"></div><h1>Work Experience</h1><div className="line"></div></div>
            <form className="workInfo-form--container">
                <input 
                    type="text"
                    name="position"
                    placeholder="Position"
                    value={props.workInfo.position}
                    onChange={handleWorkInfoChange} 
                />
                <input 
                    type="text"
                    name="companyName"
                    placeholder="Company name"
                    value={props.workInfo.companyName}
                    onChange={handleWorkInfoChange} 
                />
                <input 
                    type="text"
                    name="startDate"
                    placeholder="Start date"
                    value={props.workInfo.startDate}
                    onChange={handleWorkInfoChange} 
                />
                <input 
                    type="text"
                    name="finishDate"
                    placeholder="Finish date"
                    value={props.workInfo.finishDate}
                    onChange={handleWorkInfoChange} 
                />
            </form>
        </div>
        
    )
}
