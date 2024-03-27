import { useEffect, useState } from 'react'
import './App.css'
import ContactUnorderList from './ContactList';

function App() {
  const [contactList, setContactList] = useState([]);

  const BASE_API_URL = 'https://jsonplaceholder.typicode.com/users'

  useEffect(() => {
    const getContacts = async() => {
      const response = await fetch(BASE_API_URL);
      const json = await response.json();
      // console.log(json);
      const contacts = json;
      console.log(contacts);
      setContactList(contacts);

    }

    getContacts();
  }, []);

  return (
    <>
      <h1 className="Two">Contact List</h1>
      <ContactUnorderList contactList={contactList}/>
    </>
  )
}

export default App
