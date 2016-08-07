var email = {
  name: 'Gmail',
  mailboxes: [
    'inbox',
    'outgoing mail',
    'spam',
    'starred',
    'sent'
  ],
  contacts: [
    {name: 'Dad', lastMessage: 'Hello'},
    {name: 'Brooke', lastMessage: 'wassup'}
  ],
  accounts: 3,
  signature: true,
  emails: [
    {name: 'Dad', content: "How are you doing?", time: 1300},
    {name: 'Garrett', content: "Lets go to the movies", time: 1800}
  ]
};

// Get a list of mailbox names:
console.log(email.mailboxes);

// Get a list of emails
console.log(email.emails);

// Get the text of the second email in the visible list
console.log(email.emails[1].content);
