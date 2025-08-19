import { Link } from 'react-router';

const MailboxList = (props) => {
    return (
        <>
            <h2>Mailbox List</h2>
            <ul>
                {props.mailboxes.map((currentMailbox) => (
                    <li key={currentMailbox.boxHolder}>
                        <div class="mail-box">
                            <Link to={`/mailboxes/${currentMailbox._id}`}>
                                Mailbox {currentMailbox._id}
                            </Link>
                        </div>
                    </li>
                ))}
            </ul>
        </>
    );
};

export default MailboxList;