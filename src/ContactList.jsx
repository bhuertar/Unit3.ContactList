import './App.css'

const ContactUnorderList = ({ contactList }) => {

  return (
    <div className='Flex'>
     <ul className="One">Name
      {
          contactList.map((singleContact) => {
            return <li key={singleContact.id}>
              {singleContact.name}
              </li>
          })
      }
     </ul>
     <ul className="One">Email
      {
          contactList.map((singleContact) => {
            return <li key={singleContact.id}>
              {singleContact.email}
              </li>
          })
      }
     </ul>
     <ul className="One">Phone
      {
          contactList.map((singleContact) => {
            return <li key={singleContact.id}>
              {singleContact.phone}
              </li>
          })
      }
     </ul>
    </div>
  )
}

export default ContactUnorderList;