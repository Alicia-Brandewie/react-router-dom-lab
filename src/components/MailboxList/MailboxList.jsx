import { Link } from 'react-router';

const MailboxList = (props) => {
    return (
        <>
        <h2>Mailbox List</h2>
            <ul>
                {props.mailboxes.map((currentMailbox) => (
                    <li key={currentMailbox.boxHolder}>{currentMailbox.boxHolder}
                <Link to={'/mailboxes/${currentMailbox._id}'}>
                    {currentMailbox.boxHolder}
                </Link>
                    </li>
                ))};
            </ul > 
        </>
    );
};

export default MailboxList;