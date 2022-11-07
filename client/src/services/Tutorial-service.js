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
  return http.put(`/tutorials/${id}`, data);
};

const remove = id => {
  return http.delete(`/tutorials/${id}`);
};

const removeAll = () => {
  return http.delete(`/tutorials`);
};

const findByTitle = title => {
  return http.get(`/tutorials?title=${title}`);
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
