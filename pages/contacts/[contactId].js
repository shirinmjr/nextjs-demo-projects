import Layout from '../../components/Layout';
import { useRouter } from 'next/router';
import contacts from '../api/contacts';

export default function Contact() {
    const router = useRouter();
    const { contactId } = router.query;
    const contact = contacts.find(contact => contact.id = contactId);
    const [first, last] = contact?.name.split(" ");
    const country = contact.country;
    const phoneNumber = contact.phoneNumber;

    const birthday = contact.birthday;
    const parsedBirthDate = new Date(birthday);
    // Array of month names
    const monthNames = [
        'January', 'February', 'March', 'April',
        'May', 'June', 'July', 'August',
        'September', 'October', 'November', 'December'
    ];
    const formattedBirthday = `${parsedBirthDate.getDate()}-${monthNames[parsedBirthDate.getMonth()]}-${parsedBirthDate.getFullYear()}`;

    return (
        <div >
            <Layout>
                <div className="flex items-center justify-center p-10">
                </div>
                <div className="flex items-center justify-center">
                    <ul className="table bg-gray-600 rounded-md">
                        <li className="table-row font-bold">
                            <span className="table-cell p-3">  Contact: {first},&nbsp;{last}</span>
                        </li>
                        <li className="table-row font-bold">
                            <span className="table-cell p-3"> Country: {country.toUpperCase()}</span>
                        </li>
                        <li className="table-row font-bold">
                            <span className="table-cell p-3"> Phone Number: {phoneNumber}</span>
                        </li>
                        <li className="table-row font-bold">
                            <span className="table-cell p-3"> Birthday: {formattedBirthday}</span>
                        </li>
                    </ul>

                </div>
            </Layout>
            <div className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded text-center w-40 m-10">
                <a href="#" onClick={() => router.back()}>Go Back</a>
            </div>
        </div >
    );
}