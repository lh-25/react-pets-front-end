
export default function PetDetail({ selected, handleFormView }) {


  return !selected ? (<div><h1>No Details</h1></div>) : (
    <div>
      <h1>{selected.name}</h1>
      <h2>Breed: {selected.breed}</h2>
      <h2>Age: {selected.age} year{selected.age > 1 ? 's' : ''} old</h2>
      <button onClick={() => handleFormView(selected)} >Edit</button>
    </div>
  )
}