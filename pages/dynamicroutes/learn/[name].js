import { useRouter } from "next/router";
import topics from "../../api/topics";
import Layout from "@/components/Layout";

export default function Learn() {
    const router = useRouter();
    const { name } = router.query;
    const topic = topics.find(topic => topic.id === name);
    const about = topic.about;
    const advocator = topic.advocator;
    return (
        <Layout>
            <div>
                <h1 className="lg:text-left mb-3 text-3xl font-semibold"
                >Let's learn &nbsp;{topic.id}</h1>
                <h2>Advocator:&nbsp;{advocator}</h2>
                <p>About this technology:&nbsp;{about}</p>
            </div>
        </Layout>
    );
}