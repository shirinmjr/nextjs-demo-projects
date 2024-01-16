import Link from 'next/link';
import contacts from '../api/contacts';
import Layout from '@/components/Layout';

export default function Contacts() {

    return (
        <div className="overflow-x-auto">
            <Layout>
                <ul className="table bg-gray-600 rounded-md">
                    {contacts.map((contact, index) => {
                        return (
                            <li className="table-row font-bold" key={index}>
                                <Link className="table-cell p-3" href={`contacts/${contact.id}`}>
                                    {contact.name}
                                </Link></li>
                        );
                    })}
                </ul>
            </Layout>
        </div>
    );
}