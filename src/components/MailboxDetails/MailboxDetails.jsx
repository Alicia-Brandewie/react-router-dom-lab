import { Link } from 'react-router';

const MailboxDetails = (props) => {

return (
        <>
        <h2>Mailbox details</h2>

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

export default MailboxDetails;