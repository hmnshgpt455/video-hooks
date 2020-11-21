import axios from 'axios';

const KEY = 'AIzaSyD0qSHlC2MoOYphX9mQL4qPRzD4kmNYPrg';
const BASE_URL = 'https://www.googleapis.com/youtube/v3/';

export default axios.create({ baseURL: BASE_URL });