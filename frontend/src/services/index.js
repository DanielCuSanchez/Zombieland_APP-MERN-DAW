import Axios from "axios"

const URL = 'http://localhost:4000'

export const getAllStates = async () => {
  const { data } = await Axios.get(`${URL}/states`)
  return data
}

export const getAllInfections = async () => {
  const { data } = await Axios.get(`${URL}/infections`)
  return data
}

export const postInfection = async (infection) => {
  const { data } = await Axios.post(`${URL}/infections`, infection)
  return data
}