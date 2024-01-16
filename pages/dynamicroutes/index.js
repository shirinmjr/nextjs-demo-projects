import Link from 'next/link';
import { Inter } from 'next/font/google';
import Layout from '@/components/Layout';



export default function Home() {
    return (
        <div>
            <Layout>
                <h2 className="  place-items-center  before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700/10 after:dark:from-sky-900 after:dark:via-[#0141ff]/40 before:lg:h-[360px]"
                >Experimenting with NextJs Dynamic Routing</h2>
                <div>About this project:
                    <ul>
                        <li>
                            In this project pages below are dynamically generated and routed when users clicks on them. Data comes from a dummy JavaScript file under the api folder.
                            In a real world scenario, data can come via an api call.
                        </li>
                        <li>
                            Top Nav bar is a Layout component showing on all the pages. You can navigate between projects using this nav bar.
                        </li>
                        <li>
                            I used Tailwind to style this page.
                        </li>
                    </ul>
                </div>

                <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
                    <Link
                        href="/dynamicroutes/learn/next"
                        className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
                    >
                        <h2 className={`mb-3 text-2xl font-semibold`}>
                            Learn NextJs{' '}
                            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                                -&gt;
                            </span>
                        </h2>
                    </Link>
                    <Link
                        href="/dynamicroutes/learn/react"
                        className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
                    >
                        <h2 className={`mb-3 text-2xl font-semibold`}>
                            Learn React{' '}
                            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                                -&gt;
                            </span>
                        </h2>
                    </Link>
                    <Link
                        href="/dynamicroutes/learn/angular"
                        className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
                    >
                        <h2 className={`mb-3 text-2xl font-semibold`}>
                            Learn Angular{' '}
                            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                                -&gt;
                            </span>
                        </h2>
                    </Link>
                    <Link
                        href="/dynamicroutes/learn/vue"
                        className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
                    >
                        <h2 className={`mb-3 text-2xl font-semibold`}>
                            Learn Vue{' '}
                            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                                -&gt;
                            </span>
                        </h2>
                    </Link>
                </div>
            </Layout>
        </div>
    );
}
