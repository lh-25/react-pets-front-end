// src/components/PetForm.jsx

import { useState } from 'react';

export default function PetForm({ handleAddPet, selected, handleUpdatePet }) {

  const initialState = {
    name: '',
    age: '',
    breed: '',
  }
  // formData state to control the form
  const [formData, setFormData] = useState(selected ? selected : initialState);
  // handleChange function to update formData state
  const handleChange = (evt) => {
    setFormData({ ...formData, [evt.target.name]: evt.target.value });
  };

  const handleSubmitForm = (evt) => {
    evt.preventDefault()
    if (selected) {
      handleUpdatePet(formData, selected._id)
    } else {
       handleAddPet(formData)
    }
   
  }

  return (
    <div>
      <form onSubmit={handleSubmitForm}>
        <label htmlFor="name"> Name </label>
        <input
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <label htmlFor="age"> Age </label>
        <input
          id="age"
          name="age"
          value={formData.age}
          onChange={handleChange}
        />
        <label htmlFor="breed"> Breed </label>
        <input
          id="breed"
          value={formData.breed}
          name="breed"
          onChange={handleChange}
        />
        <button type="submit">{selected ? 'Update Pet' : 'Add New Pet'}</button>
      </form>
    </div>
  );
};

