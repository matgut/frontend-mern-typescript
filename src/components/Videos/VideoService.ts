import axios from 'axios';
import { Video } from './VideoInterface';

const API = 'http://localhost:5000/api/v1'


export const getVideos = async () => {
     return await axios.get(`${API}/videos`);       
}

export const createVideo = async (video: Video) => {
    return await axios.post(`${API}/videos`, video);       
}