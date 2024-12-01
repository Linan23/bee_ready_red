import React, { useState } from 'react'; 
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

function Home() {
    const [date, setDate] = useState(new Date()); 
    const handleDateChange = (newDate) => {
        setDate(newDate);
    };

    return (
        <main>
            <div className="container">
                <h1>Where Learning Takes Flight</h1>
                <div className="search-container">
                    <img src="/Bee_logo.png" alt="Decorative Bee" style={{ transform: 'scaleX(-1)' }} />
                    <form className="search-form" id="search-form">
                        <input type="search" id="search-input" placeholder="Search here" />
                        <button type="submit">Search</button>
                    </form>
                    <img src="/Bee_logo.png" alt="Decorative Bee" />
                </div>
                <div className="content">
                    <div className="announcements">
                        <h2>Announcements</h2>
                        <div className="announcement">
                            <h3>Announcement 1</h3>
                            <p>placeholder</p>
                        </div>
                        <div className="announcement">
                            <h3>Announcement 2</h3>
                            <p>placeholder</p>
                        </div>
                        <div className="announcement">
                            <h3>Announcement 3</h3>
                            <p>placeholder</p>
                        </div>
                    </div>
                    <div className="calendar">
                        <h2>Calendar</h2>
                        <Calendar
                            onChange={handleDateChange}
                            value={date}
                        />
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Home;
