import React, { Component } from 'react'
import { ListContacts } from "./components/listContacts";

const contacts = [
  {
    "id": "karen",
    "name": "Karen Isgrigg",
    "handle": "karen_isgrigg",
    "avatarURL": "http://localhost:5001/karen.jpg"
  },
  {
    "id": "richard",
    "name": "Richard Kalehoff",
    "handle": "richardkalehoff",
    "avatarURL": "http://localhost:5001/richard.jpg"
  },
  {
    "id": "tyler",
    "name": "Tyler McGinnis",
    "handle": "tylermcginnis",
    "avatarURL": "http://localhost:5001/tyler.jpg"
  }
 ];

class ContactList extends React.Component {
  render() {
    const people = this.props.contacts

    return <ol>
      {people.map((person) => (
        <li key={person.name}>{person.name}</li>
      ))}
    </ol>
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <ListContacts contacts = {contacts} />
        
        {/* <ContactList contacts={[
          { name: 'Tyler '},
          { name: 'Karen' },
          { name: 'Richard '}
        ]}/>
        <ContactList contacts={[
          { name: 'Amanda' },
          { name: 'Mikenzi' },
          { name: 'Ryan' }
        ]}/> */}
      </div>
    );
  }
}
export default App