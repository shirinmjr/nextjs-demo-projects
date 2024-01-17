import Layout from "@/components/Layout";

export default function News() {

    return (
        <div>
            <Layout>
                <h1>Top Stories</h1>
            </Layout>
        </div>
    );
}

const API_KEY = "";
export async function getStaticProps() {
    const URL = `https://api.nytimes.com/svc/topstories/v2/home.json?api-key=${API_KEY}`;
    const response = axios.get(URL)
        .then(function (response) {
            // Handle success
            console.log('Response:', response.data);
        })
        .catch(function (error) {
            // Handle error
            console.error('Error:', error);
        });
    return {
        props: {}
    };
}