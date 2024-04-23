import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:3002',
});

export const getPets = async () => {
  const response = await axiosInstance.get('/pets');
  return response.data;
};
