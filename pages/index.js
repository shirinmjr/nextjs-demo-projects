import { Inter } from 'next/font/google';
import Layout from '@/components/Layout';
import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <div>
      <Layout>
        <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
          <Link
            href="/dynamicroutes"
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          >
            <h2 className={`mb-3 text-2xl font-semibold`}>
              Dynamic Routes<br />Project{' '}&nbsp;
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
              Creating links automatically to navigate between pages.
            </p>
          </Link>

          <Link
            href="/contacts"
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          >
            <h2 className={`mb-3 text-2xl font-semibold`}>
              Contacts<br />Dynamic Routes{' '}&nbsp;
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
              A file-based system with zero config. Roues are generated dynamically.
            </p>
          </Link>

          <Link
            href="/news_static_props"
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          >
            <h2 className={`mb-3 text-2xl font-semibold`}>
              News Static Props{' '}&nbsp;
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
              Rendering with "getStaticProps"
            </p>
          </Link>
          <Link
            href="/news_server_side_props"
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          >
            <h2 className={`mb-3 text-2xl font-semibold`}>
              News Server Side Props{' '}&nbsp;
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
              Rendering with "getStaticProps"
            </p>
          </Link>

        </div>
        <p className=" left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          <code className="font-mono font-bold"> Showcase: A collection of small projects developed using Next.js.
            Leveraging the power of Next.js, each project demonstrates my proficiency in building efficient and dynamic web applications.
            From interactive and responsive interfaces to seamless server-side rendering, these projects highlight my skills in utilizing the features provided by Next.js to create engaging and user-friendly web experiences.
            Explore the versatility and functionality embedded in these Next.js projects, reflecting my commitment to delivering high-quality and innovative solutions in web development.&nbsp;
          </code>
        </p>
      </Layout>
      <footer className={styles.footer}>
        <a
          href="https://github.com/shirinmjr"
          target="_blank"
          rel="noopener noreferrer"
        >
          All rights received by Shirinmjr{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
}
