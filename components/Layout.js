import Link from 'next/link';
import styles from '../styles/Home.module.css';

function Menu() {
    return (
        <nav class="bg-gray-800 p-4">
            <ul class="flex items-center">
                <Link class="text-white text-lg font-bold mr-4 ml-4" href="/">Home</Link> &nbsp;|&nbsp;
                <Link class="text-white text-lg font-bold mr-4 ml-4" href="/contacts">Contacts</Link> &nbsp;|&nbsp;
                <Link class="text-white text-lg font-bold mr-4  ml-4" href="/autoroute">Autoroute</Link>
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