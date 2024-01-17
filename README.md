This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).



## About this Repo

A collection of small projects developed using Next.js. Leveraging the power of Next.js, each project demonstrates my proficiency in building efficient and dynamic web applications. From interactive and responsive interfaces to seamless server-side rendering, these projects highlight my skills in utilizing the features provided by Next.js to create engaging and user-friendly web experiences. Explore the versatility and functionality embedded in these Next.js projects, reflecting my commitment to delivering high-quality and innovative solutions in web development. 



## Getting Started
To create a NextJs Project:
```bash
npm crate next-app `app-name`
```
To run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```
To see the app running:
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

# Projects
* Dynamic Routes -> Dynamically routes and page gets generated dynamically
* contacts -> Dynamically routed contact list displaying contact details for each item with the option to go back to contact list from contact details page
* News -> Using open NY Times Open api and rendering with `getStaticProps()`


## Axios Call in NextJs Project
to install Axios
```bash
npm install axios
```
```JS
// Import Axios
import axios from 'axios';
// Your Next.js component or page
const API_KEY = "";
export async function getStaticProps() {
    const URL = `https://api.nytimes.com/svc/topstories/v2/home.json?api-key=${API_KEY}`;
    try {
        const response = await axios.get(URL);
        return {
            props: {
                data: response.data.results,
            },
        };
    } catch (error) {
        console.error('Error:', error);

        // If there's an error, you can handle it and return appropriate props
        return {
            props: {
                data: null, // or any default value
                error: 'Failed to fetch data',
            },
        };
    }
}
```

Notes:
This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
