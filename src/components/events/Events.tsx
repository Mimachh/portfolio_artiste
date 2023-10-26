import React, { useEffect, useState } from 'react';
import EventBox from './EventBox';
import SectionHeader from '../SectionHeader';
import { events } from '@/utils/constants';

export interface EventData {
    id: number;
    date: {
        day: string;
        month: string;
    };
    location: {
        city: string;
        country: string;
        address: string;
    };
    priceRange: string;
}

export default function EventsPage() {
    // const [events, setEvents] = useState<EventData[]>([]);


    // useEffect(() => {
    //     async function fetchData() {
    //         try {
    //             const res = await fetch('http://localhost:4000/events');
    //             if (res.ok) {
    //                 const data = await res.json() as EventData[];
    //                 setEvents(data);
    //             } else {
    //                 console.error('Failed to fetch events');
    //             }
    //         } catch (error) {
    //             console.error('An error occurred:', error);
    //         }
    //     }

    //     fetchData();
    // }, []);
    const eventsData = events;

    return (
        <section className='section' id='tours'>
            <div className='container mx-auto'>
                <SectionHeader 
                pretitle='France Tour'
                title='Upcoming'
                />
                <EventBox events={eventsData} />
            </div>
        </section>

    );
}
