import { Route, Routes } from 'react-router';
import { useState } from 'react';

import Navbar from './components/NavBar/NavBar';
import MailboxForm from './components/MailboxForm/MailboxForm';
import MailboxList from './components/MailboxList/MailboxList';
import MailboxDetails from './components/MailboxDetails/MailboxDetails';


const App = () => {

  const [mailboxes, setMailboxes] = useState([])

  const addMailbox = (newMailboxData) => {
    newMailboxData._id = mailboxes.length + 1;
    setMailboxes([...mailboxes, newMailboxData]);
  }

  return (
    <>
      <main><h1>Post Office</h1></main>
      <Navbar />
      <div>
        <Routes>
          <Route path="/" element={<main><h1>Post Office</h1></main>} />
          <Route path="/mailboxes" element={<MailboxList mailboxes={mailboxes} />} />
          <Route path="/new-mailbox" element={<MailboxForm addMailbox={addMailbox} />} />
          <Route path="/mailboxes/:mailboxId" element={<MailboxDetails mailboxes={mailboxes} />} />
          <Route path="*" element={<h2>Whoops, nothing here!</h2>} />
        </Routes>
      </div>
    </>
  )
};

export default App;


