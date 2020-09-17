import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { addContact, updateContact, clearCurrent } from '../../actions/contact';

const ContactForm = ({
  addContact,
  current: { current },
  updateContact,
  clearCurrent,
}) => {
  const [contact, setContact] = useState({
    name: '',
    email: '',
    phone: '',
  });

  const { name, email, phone } = contact;

  useEffect(() => {
    if (current !== null) {
      setContact(current);
    } else {
      setContact({
        name: '',
        email: '',
        phone: '',
      });
    }
  }, [current]);

  const onChange = (e) => {
    setContact({ ...contact, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (current !== null) {
      updateContact(contact);
    } else {
      addContact(contact);
    }
    clearAll();
  };

  const clearAll = () => {
    clearCurrent();
  };

  return (
    <form onSubmit={onSubmit}>
      <h2 className='text-primary'>
        {current ? 'Update Contact' : 'Add Contact'}
      </h2>
      <input
        type='text'
        placeholder='Name'
        name='name'
        value={name}
        onChange={onChange}
      />
      <input
        type='email'
        placeholder='Email'
        name='email'
        value={email}
        onChange={onChange}
      />
      <input
        type='text'
        placeholder='Phone'
        name='phone'
        value={phone}
        onChange={onChange}
      />
      <div>
        <input
          type='submit'
          className='btn btn-primary btn-block'
          value={current ? 'Update Contact' : 'Add Contact'}
        />
        {current && (
          <div>
            <button className='btn btn-light btn-block' onClick={clearAll}>
              Clear
            </button>
          </div>
        )}
      </div>
    </form>
  );
};

const mapStateToProps = (state) => ({
  current: state.contact,
});

export default connect(mapStateToProps, {
  addContact,
  updateContact,
  clearCurrent,
})(ContactForm);
