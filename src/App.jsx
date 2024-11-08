// src/App.jsx
import { useState, useEffect } from "react";
import * as petService from './services/petService'

import PetList from "./components/PetList";
import PetDetail from "./components/PetDetail";



export default function App() {
  const [petList, setPetList] = useState([])
  const [selected, setSelected] = useState(null)

  // Create a new useEffect
  useEffect(() => {
    // create a new async function
    const fetchPets = async () => {
      try {
        // call on the index function  
        const pets = await petService.index()
        // Don't forget the pass the error object to the new Error
        if (pets.error) {
          throw new Error(pets.error);
        } // Set petList state to the returned pets data
        setPetList(pets)
      } catch (error) {
        // Log the error object
        console.log(error)
      }
    }
    // invoke the function
    fetchPets()
    // add an empty dependency array to the `useEffect` hook.
  }, [])

  const updateSelected = (pet) => {
    setSelected(pet)
  }

  return(
  <>
    <PetList petList={petList} updateSelected={updateSelected} />
    <PetDetail selected={selected} />
  </>
)
};


