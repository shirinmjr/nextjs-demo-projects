import axios from 'axios';// Import Axios

export async function handler(url) {
    const response = await axios.get(url);
    return response.data.results;
}

export async function search(url) {
    const data = await axios.get(url);
    const docs = data.data.response.docs ?? [];
    const results = docs.map(doc => {
        return {
            title: doc?.headline?.main,
            url: doc.web_url,
            uri: doc.uri,
            pub_date: doc?.pub_date,
            abstract: doc.abstract

        };
    });
    return results;
}