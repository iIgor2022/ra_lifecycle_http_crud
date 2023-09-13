import PropTypes from 'prop-types'
import { useState } from 'react';

export default function NotesInput(props) {
  const { onAdd } = props;

  const [form, setForm] = useState({ text: "" });

  const handleChange = ev => {
    const { value } = ev.target;
    setForm(prevForm => ({ ...prevForm, text: value }));
  }

  const handleSubmit = ev => {
    ev.preventDefault();
    onAdd(form.text);
    setForm({ text: "" });
  }

  return (
    <form className='input-wrapper' onSubmit={handleSubmit}>
      <label htmlFor="input">New note</label>
      <textarea id="input" className='input' value={form.text} onChange={handleChange}></textarea>
      <button className='input-btn' type='submit'>&#10148;</button>
    </form>
  );
}

NotesInput.propTypes = {
  onAdd: PropTypes.func,
}