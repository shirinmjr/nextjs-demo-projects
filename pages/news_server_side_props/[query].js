import Layout from "@/components/Layout";
import { search } from "../api";
import Link from "next/link";

export default function News({ results, query }) {
    console.log("this is the news");
    return (
        <Layout>
            <h1 className="mb-3 text-3xl font-semibold">News Search Results for {query}</h1>
            <ul>
                {results.map(result => {
                    return (
                        < li key={result.uri} >
                            <Link className="text-xl" href={result.url} target="_blank">
                                <ul className="bg-gray-800 p-5">
                                    <li>{result.title}</li>
                                    <li>{result.pub_date}</li>
                                    <li>{result.abstract}</li>
                                </ul>
                            </Link><br />
                        </li>

                    );
                })}
            </ul>
        </Layout >
    );
}

// to register for a new New York Times API KEY, visit : 
const API_KEY = "";
export async function getServerSideProps({ params }) {
    console.log("this is the api call running in the back end");
    // params coming from the `Home` component
    const URL = `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${params.query}&api-key=${API_KEY}`;
    const results = await search(URL);
    return {
        props: {
            results,
            query: params.query
        }
    };
}