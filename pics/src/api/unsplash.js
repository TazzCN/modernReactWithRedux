import axios from 'axios'

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 2ef68f9668b0be468ffb198bf4ccc5e4fa411d3dfbb892fdf15bc1e01ee70608'
    }
});