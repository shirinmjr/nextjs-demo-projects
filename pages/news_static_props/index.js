import Layout from "@/components/Layout";
import Link from 'next/link';
import { handler } from '../api';

//stories should match the props coming to this
export default function News({ stories }) {
    console.log("Top Stories", stories);
    return (
        <div>
            <Layout>
                <h2
                    className="text-4xl font-bold m-10"
                >Top Stories from New Your Times</h2>
                <ul>
                    {
                        stories.map(story => {
                            return (
                                <li key={story.uri}>
                                    <Link
                                        className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
                                        href={story.url} target="_blank" rel="noopener norefferer"> -&gt;&nbsp;{story.title}
                                        <p>{story.abstract}</p>
                                    </Link></li>
                            );
                        })
                    }
                </ul>
            </Layout>
        </div>
    );
}


const API_KEY = "";
export async function getStaticProps() {
    console.log("connecting");
    const URL = `https://api.nytimes.com/svc/topstories/v2/home.json?api-key=${API_KEY}`;
    try {
        const response = await handler(URL);
        return {
            props: {
                stories: response,
            },
        };
    } catch (error) {
        console.error('Error:', error);
        // handle error, return appropriate props
        return {
            props: {
                data: null, // or any default value
                error: 'Failed to fetch data',
            },
        };
    }
}