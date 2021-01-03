import React from 'react'
import PropTypes from 'prop-types'
//import React, { Component } from 'react'

function ListContacts(props) {
  return (
    <ol className="contact-list">
    {props.contacts.map((contact) => (
      <li key={contact.id} className="contact-list-item">
        <div className='contact-avatar'
        style={{
          backgroundImage: `url(${contact.avatarURL})`
        }}>
        </div>
        <div className='contact-details'>
          <p>{contact.name}</p>
          <p>{contact.handle}</p>
        </div>
        <button
            onClick={() => props.onDeleteContact(contact)}
            className='contact-remove'>
        </button>
      </li>
    ))}
  </ol>  
  )
}

ListContacts.propTypes = {
  contacts: PropTypes.array.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
}

/* class ListContacts extends Component {
  //state = {  }
  render() {
    console.log('props', this.props)
    return (
      <ol className="contact-list">
        {this.props.contacts.map((contact) => (
          <li key={contact.id} className="contact-list-item">
            <div className='contact-avatar'
            style={{
              backgroundImage: `url(${contact.avatarURL})`
            }}>
            </div>
            <div className='contact-details'>
              <p>{contact.name}</p>
              <p>{contact.handle}</p>
            </div>
            <div className='contact-remove'>
              Remove
            </div>
          </li>
        ))}
      </ol>
    )
  }
} */

export { ListContacts }
