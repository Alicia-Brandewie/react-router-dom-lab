import { useParams } from 'react-router';


const MailboxDetails = (props) => {

    const { mailboxesId } = useParams();

    const singleMailbox = props.mailboxes.find((mailbox) => (
        mailbox._id === Number(mailboxesId)
    ));
    console.log(singleMailbox)

    return (
        <>
            <h2>Mailbox {singleMailbox._id}</h2>
            <h3>Details</h3>
            <dl>
                <dt>Box Holder:</dt>
                <dd>{singleMailbox.boxHolder}</dd>
                <dt>Box Size:</dt>
                <dd>{singleMailbox.boxSize}</dd>
            </dl>
        </>
    );
};

export default MailboxDetails;