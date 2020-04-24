import React, { useState } from 'react'
import axios from '../../axios'
import Event from './event'

function Events() {
    const [events, setEvents] = useState([])

    const getEvents = () => {
        axios().get("/api/event/summary").then(response => {
            if (response.status === 200) {
                setEvents(response.data)
            }
        })
    }

    const eventCards = events.map(event => <Event key={event.id} event={event}></Event>);
    console.log(eventCards)
    return (
        <div>
            <button type='button' className="btn btn-primary" onClick={getEvents}>GET ALL EVENTS</button>
            {eventCards}
            {/* <h1>EVENTSSSSSSSSSSS</h1> */}
        </div>
    )
}

export default Events
