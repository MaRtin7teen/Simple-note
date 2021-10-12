import React from 'react';
import { useSelector } from "react-redux";
import Card from './Card';

const Notes = () => {

    // Getting values of notes from Store
    const { notes } = useSelector(state => state);

    return (
        <div className="mt-4">
            
            {/* Heading */}
            <h3>ALL NOTES</h3>

            {/* Notes(Cards) container */}
            <div className="row row-cols-1 row-cols-md-2 g-2 pb-3">
                {
                    notes.length ? 
                    notes
                    .sort((a,b) => a.date === b.date ? b.time - a.time : new Date(b.date) - new Date(a.date))
                    .map(data => <Card data={data} key={data.id} />) : <h5 className="text-muted">Add notes to see them here</h5>
                }
            </div>
        </div>
    )
}

export default Notes;