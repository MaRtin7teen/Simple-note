import React from 'react';
import moment from "moment";
import { v4 as uuid } from "uuid";
import { useDispatch, useSelector } from "react-redux"; 
import { addNote, changeDate } from '../Redux/Actions';

const Form = () => {
    const dispatch = useDispatch();

    const selected = useSelector(state => state.selected);

    // Variable title (default empty string)
    const [title, setTitle] = React.useState("");

    // Variable desc[short for Description] (default empty string)
    const [desc, setDesc] = React.useState("");

    // Closes the Form
    const closeForm = () => {
        dispatch(changeDate(false));
    }
    
    // Submits or Adds Note
    const handleSubmit = (e) => {

        // Prevents page reloading (page reloads as its a form submission)
        e.preventDefault();

        // Variable payload containing notes data
        const payload = {
            id: uuid(),
            title,
            desc,
            date: selected,
            time: new Date().getTime()
        };

        // Dispatches addNote action
        dispatch(addNote(payload));

        // Closes Form
        closeForm();
    }

    return (
        // Container
        <div className="border rounded mt-3 mb-3">

            {/* Heading */}
            <div className="bg-primary bg-gradient text-light rounded-top m-0 p-1 text-center lead fw-bold">
                <span>{moment(selected).format('MMMM Do YYYY')}</span>
                <button className="btn-danger text-white float-end rounded border fs-6 pe-1 ps-1" onClick={closeForm}>close</button>
            </div>

            {/* FORM */}
            <form className="p-3 rounded bg-light" onSubmit={handleSubmit}>

                {/* Form - Title */}
                <div className="mb-3">
                    <label className="form-label ps-1">Title</label>
                    <input type="text" className="form-control" placeholder="Add a title" value={title} onChange={e => setTitle(e.target.value)} autoFocus />
                </div>

                {/* Form - Description */}
                <div className="mb-3">
                    <label className="form-label ps-1">Description</label>
                    <textarea className="form-control" placeholder="Add description" value={desc} onChange={e => setDesc(e.target.value)} rows="5" />
                </div>

                {/* Form - Submit/Add Button */}
                <div className="d-grid mb-3">
                    <button className="btn btn-primary" type="submit" disabled={!title.trim().length || !desc.trim().length}>Add Note</button>
                </div>

            </form>
        </div>
    )
}

export default Form;