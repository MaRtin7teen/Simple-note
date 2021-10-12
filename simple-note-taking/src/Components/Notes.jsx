import React from 'react';
import moment from "moment";
import { useSelector } from "react-redux";

const Notes = () => {

    // Getting values of notes & selceted date from Reducer
    // eslint-disable-next-line
    const {selected, notes} = useSelector(state => state);

    // console.log(notes.filter(ele => selected ? ele.date === selected.getDate() : ele))
    // console.log(new Date(selected).getDate(), notes[0].date)


    return (
        <div className="mt-4">
            
            <h3>ALL NOTES</h3>

            <div className="row row-cols-1 row-cols-md-2 g-2 pb-3">
                {
                    notes.length ? 
                    notes
                    // .filter(ele => selected ? ele.date === selected : ele)
                    .sort((a,b) => a.date === b.date ? b.time - a.time : new Date(b.date) - new Date(a.date))
                    .map(data => (
                        <div className="col" key={data.id}>
                            <div className="card h-100">
                                <div className="card-body">
                                    <h6 className="card-subtitle pe-2">{moment(data.date).format('MMMM Do YYYY')}</h6>
                                    <h4 className="card-title">{data.title}</h4>
                                    <p className="card-text">{data.desc}</p>
                                    <small className="text-muted float-end">added {moment(data.time).startOf('minutes').fromNow()}</small>
                                </div>
                            </div>
                        </div>
                    )) :
                    <h5 className="text-muted">
                        Add notes to see them here
                    </h5>
                }
            </div>
        </div>
    )
}

export default Notes;