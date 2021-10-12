import React from 'react';
import moment from "moment";

const Card = ({data}) => {
    return (
        <div className="col" key={data.id}>
            <div className="card h-100">
                <div className="card-body">

                    {/* Note Date */}
                    <h6 className="card-subtitle pe-2">{moment(data.date).format('MMMM Do YYYY')}</h6>

                    {/* Title */}
                    <h4 className="card-title">{data.title}</h4>

                    {/* Description */}
                    <p className="card-text">{data.desc}</p>

                    {/* Note made moment */}
                    <small className="text-muted float-end">added {moment(data.time).startOf('minutes').fromNow()}</small>
                </div>
            </div>
        </div>
    )
}

export default Card;