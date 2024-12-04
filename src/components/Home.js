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
                <h1 data-translate>Where Learning Takes Flight</h1>
                <div className="search-container">
                    <img src="/Bee_logo.png" alt="Decorative Bee" style={{ transform: 'scaleX(-1)' }} />
                    <form className="search-form" id="search-form">
                        <input
                            type="search"
                            id="search-input"
                            placeholder="Search here"
                            data-translate="placeholder"
                        />
                        <button type="submit" data-translate>Search</button>
                    </form>
                    <img src="/Bee_logo.png" alt="Decorative Bee" />
                </div>
                <div className="content">
                    <div className="announcements">
                        <h2 data-translate>Announcements</h2>
                        <div className="announcement">
                            <h3 data-translate>Announcement 1</h3>
                            <p data-translate>Placeholder text for Announcement 1.</p>
                        </div>
                        <div className="announcement">
                            <h3 data-translate>Announcement 2</h3>
                            <p data-translate>Placeholder text for Announcement 2.</p>
                        </div>
                        <div className="announcement">
                            <h3 data-translate>Announcement 3</h3>
                            <p data-translate>Placeholder text for Announcement 3.</p>
                        </div>
                    </div>
                    <div className="calendar">
                        <h2 data-translate>Calendar</h2>
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
