import Link from 'next/link';
import styles from '../styles/Home.module.css';

function Menu() {
    return (
        <nav className="bg-gray-800 p-4">
            <ul className="flex items-center">
                <Link className="text-white text-lg font-bold mr-4 ml-4" href="/">Home</Link> &nbsp;|&nbsp;
                <Link className="text-white text-lg font-bold mr-4  ml-4" href="/dynamicroutes">Dynamic Routes</Link>&nbsp;|&nbsp;
                <Link className="text-white text-lg font-bold mr-4 ml-4" href="/contacts">Contacts</Link> &nbsp;|&nbsp;
                <Link className="text-white text-lg font-bold mr-4  ml-4" href="/news_static_props">News Static Props</Link>&nbsp;|&nbsp;
                <Link className="text-white text-lg font-bold mr-4  ml-4" href="/news_server_side_props">News Server Side Props</Link>
            </ul>
        </nav>
    );
}

export default function Layout({ children }) {
    return (
        <div className={styles.container}>
            <Menu />
            {children}
        </div>
    );
}