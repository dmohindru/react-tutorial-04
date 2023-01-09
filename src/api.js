import axios from 'axios';

const searchImages = async (term) => {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
        headers: {
            Authorization: 'Client-ID dbdulK8EcHgK1svhvB5X78K7dlY73s0WZ2rfiEh-43w'
        },
        params: {
            query: term
        }
    });

    return response.data.results;
}

export default searchImages;