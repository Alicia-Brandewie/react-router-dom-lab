// import { Link, Navigate, useNavigate } from "react-router";
import { useState } from 'react';
import { useNavigate } from "react-router";


const initialState = {
  boxHolder: '',
  boxSize: ''
};

const MailboxForm = (props) => {

    const [formData, setFormData] = useState(initialState)
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        props.addMailbox(formData);
        setFormData(initialState);
        navigate('/mailboxes');
    };

    const handleChange = ({ target }) => {
        setFormData({...formData, [target.name]: target.value});
    };

    return (
        <>
        <h2>New Mailbox</h2>

        <form onSubmit={handleSubmit}>

            <label htmlFor="boxHolder">Enter a Boxholder:</label>
            <input
            type="text"
            id="boxHolder"
            name="boxHolder"
            value={formData.boxHolder}
            onChange={handleChange}
            />

            <label htmlFor="boxSize">Selext a Box Size:</label>
            <select 
            id="boxSize"
            name="boxSize"
            value={formData.boxSize}
            onChange={handleChange}
            >
                <option value="small">Small</option>
                <option value="large">Large</option>
            </select>

            <button type="submit">Submit</button>
        </form>

        </>
    )
};




export default MailboxForm;