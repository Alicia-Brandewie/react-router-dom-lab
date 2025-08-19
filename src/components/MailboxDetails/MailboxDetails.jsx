import { useParams } from 'react-router';


const MailboxDetails = (props) => {

    const { mailboxId } = useParams();
    const singleMailbox = props.mailboxes.find((mailbox) => (
        mailbox._id === Number(mailboxId)
    ));


    return (
        <>
            <h2>{singleMailbox.mailboxHolder}</h2>
            <dl>
                <dt>Boxholder:</dt>
                <dd>{singleMailbox.boxHolder}</dd>
                <dt>Size:</dt>
                <dd>{singleMailbox.boxSize}</dd>
            </dl>
        </>
    )
};

export default MailboxDetails;