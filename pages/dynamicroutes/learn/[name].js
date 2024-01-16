import { useRouter } from "next/router";
import topics from "../../api/topics";
import Layout from "@/components/Layout";

export default function Learn() {
    const router = useRouter();
    const { name } = router.query;
    const topic = topics.find(topic => topic.id === name);
    return (
        <Layout>
            <div>
                <span className="lg:text-left mb-3 text-3xl font-semibold"
                >Let's learn &nbsp;{topic.id}</span>
                <p>About:&nbsp;{topic.about}</p>
            </div>
        </Layout>
    );
}