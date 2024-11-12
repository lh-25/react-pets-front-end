import axios from "axios"
const BASE_URL = `${import.meta.env.VITE_BACK_END_SERVER_URL}/pets`

const index = async () => {
  try {
    const res = await axios.get(BASE_URL)
    return res.data
  } catch (err) {
    console.log(err)
  }

}

const create = async (formData) => {
  try {
    // We specify that this is a 'POST' request
    const res = await axios.post(BASE_URL, formData)
    return res.data
  } catch (error) {
    console.log(error)
  }
}
const updatePet = async (formData, petId) => {
  console.log(petId)
  try {
    // We specify that this is a 'PUT' request
    const res = await axios.put(`${BASE_URL}/${petId}`, formData)
    return res.data
  } catch (error) {
    console.log(error)
  }
}
export {
  index,
  create,
  updatePet
}