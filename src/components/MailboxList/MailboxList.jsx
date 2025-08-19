import { Link } from 'react-router';

const MailboxList = (props) => {
    return (
        <>
        <h2>Mailbox List</h2>
        <ul>
            {props.mailboxes.map((currentMailbox)=> (
                <li key={currentMailbox.name}>{currentMailbox.name}</li>
            ))}
        </ul>
        </>
    );
};

export default MailboxList;