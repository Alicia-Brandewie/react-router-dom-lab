import { Link } from "react-router";
import { useState } from 'react';

const MailBoxForm = () => {

    const [mailboxes, setMailboxes] = useState([])

    // const mailboxForm = (props) => {
        const[formData, setFormData] = useState({
            boxholder: '',
            boxSize: '',
        })
    // }

    const handleSubmit = (event) => {
        event.preventDefault();
    setFormData({ boxholder: '', boxSize: '' });

    }

    const handleChange = (event) => {
        setFormData({...formData, [event.target.name]: event.target.value});
    };

    return (
        <>
        <h2>New Mailbox</h2>

        <form onChange={handleSubmit}>

            <label htmlFor="boxholder">Enter a Boxholder:</label>
            <input
            name="boxholder"
            value={formData.boxholder}
            onChange={handleChange}/>

            <label htmlFor="boxSize">Selext a Box Size:</label>
            <select 
            name="boxSize"
            value={formData.boxSize}
            onChange={handleChange}
            >
                <option value="small">Small</option>
                <option value="large">Large</option>
            </select>

            <button type="submit">Submitt</button>
        </form>

        </>
    )
};




export default MailBoxForm;