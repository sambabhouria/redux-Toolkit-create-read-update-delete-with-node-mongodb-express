import axios from 'axios'

import http from "../http-common";

const API_URL = 'http://localhost:8080/api';

const getAll = () => {
  return http.get("/tutorials");
};

const get = id => {
  return http.get(`/tutorials/${id}`);
};


const create = async(data) => {
  return await axios.post(API_URL + "/tutorials", data);
};


// const create = (data) => {
//   return http.post(`/tutorials`, data);
// };


const update = (id, data) => {
  return axios.put(`${API_URL}/tutorials/${id}`, data);
};

const remove = id => {
  return axios.delete(`${API_URL}/tutorials/${id}`);
};

const removeAll = () => {
  return axios.delete(`${API_URL}/tutorials`);
};

const findByTitle = title => {
  return axios.get(`${API_URL}/tutorials?title=${title}`);
};

const TutorialService = {
  getAll,
  get,
  create,
  update,
  remove,
  removeAll,
  findByTitle
};

export default TutorialService;
