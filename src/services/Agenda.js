import axios from "axios";
const url ='/api/persons'

const getAll =()=>{
    return axios.get(url)
}

const create =(newPerson)=>{
    return axios.post(url, newPerson)
}
const update=(id,person)=>{
    return axios.put(`${url}/${id}`, person)
}
const delet =(id)=>{
    return axios.delete(`${url}/${id}`)
}

export default {getAll,create,update,delet}