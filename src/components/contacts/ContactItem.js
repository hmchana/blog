import React from 'react';
import { connect } from 'react-redux';
import { deleteContact, setCurrent } from '../../actions/contact';

const ContactItem = ({ contact, deleteContact, setCurrent }) => {
  const { id, name, email, phone } = contact;

  const onDelete = () => {
    deleteContact(id);
  };
  return (
    <div className='card bg-light'>
      <h3 className='text-primary text-left'>{name}</h3>
      <ul className='list'>
        <li>{email}</li>
        <li>{phone}</li>
      </ul>
      <p>
        <button
          className='btn btn-dark btn-sm'
          onClick={() => setCurrent(contact)}
        >
          Edit
        </button>
        <button className='btn btn-danger btn-sm' onClick={onDelete}>
          Delete
        </button>
      </p>
    </div>
  );
};

export default connect(null, { deleteContact, setCurrent })(ContactItem);
