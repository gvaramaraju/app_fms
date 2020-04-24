import React from 'react'

function Event(props) {

    const { eventName, eventDescription, eventDate, overallVolunteerHours } = props.event;
    // return <h1>{props.event.eventSummaryId}</h1>
    return <div className="card" >
        <div className="card-body">
            <h5 className="card-title">{eventName}</h5>
            <h6 className="card-subtitle mb-2 text-muted">{eventDescription}</h6>
            <p className="card-text">EventDate: {eventDate}  OverallVolunteerHours: {overallVolunteerHours}</p>
        </div>
    </div>
}

export default Event
