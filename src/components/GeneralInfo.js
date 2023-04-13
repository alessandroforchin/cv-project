import React from "react";
import Form from "./Form";
import Portfolio from "./Portfolio";
import '../styles/GeneralInfo.css'

export default function GeneralInfo() {
    const [preview, setPreview] = React.useState(false)

    const [personalInfo, setPersonalInfo] = React.useState(
        {
            firstName: '',
            lastName: '',
            dateOfBirth: '',
            street: '',
            city: '',
            state: '',
            email: '',
            phoneNumber: ''
        }
    )

    const [eduInfo, setEduInfo] = React.useState(
        {
            schoolName: '',
            degree: '',
            startDate: '',
            finishDate: ''
        }
    )

    const [workInfo, setWorkInfo] = React.useState(
        {
            position: '',
            companyName: '',
            startDate: '',
            finishDate: ''
        }
    )

    function handlePersonalChange(input) {
        let propName = input.name;
        let value = input.value;

        setPersonalInfo(prevPersonalInfo => {
            return {
                ...prevPersonalInfo,
                [propName]: value
            }
        })
    }

    function handleEducationChange(input) {
        let propName = input.name;
        let value = input.value;

        setEduInfo(prevEduInfo => {
            return {
                ...prevEduInfo,
                [propName]: value
            }
        })
    }

    function handleWorkChange(input) {
        let propName = input.name;
        let value = input.value;

        setWorkInfo(prevWorkInfo => {
            return {
                ...prevWorkInfo,
                [propName]: value
            }
        })
    }

    function handlePreview() {
        setPreview((current) => !current);
    }

    let isPreviewOn = preview;
    let content;
    let btnText;

    if(!isPreviewOn) {
        content = <Form 
            personalInfo={personalInfo} onPersonalChange={handlePersonalChange}
            educationInfo={eduInfo} onEducationChange={handleEducationChange}
            workInfo={workInfo} onWorkChange={handleWorkChange}
        />
        btnText = "Preview";
    } else {
        content = <Portfolio 
            personalInfo={personalInfo}
            educationInfo={eduInfo}
            workInfo={workInfo}
        />
        btnText = "Edit"
    }

    return (
        <div className="general-info--container">
            <button onClick={handlePreview}>{btnText}</button>
            <>{content}</>
        </div>
    )
}