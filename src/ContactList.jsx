const ContactUnorderList = ({ contactList }) => {

  return (
    <>
     <ul>Name
      {
          contactList.map((singleContact) => {
            return <li key={singleContact.id}>
              {singleContact.name}
              </li>
          })
      }
     </ul>
     <ul>Email
      {
          contactList.map((singleContact) => {
            return <li key={singleContact.id}>
              {singleContact.email}
              </li>
          })
      }
     </ul>
     <ul>Phone
      {
          contactList.map((singleContact) => {
            return <li key={singleContact.id}>
              {singleContact.phone}
              </li>
          })
      }
     </ul>
    </>
  )
}

export default ContactUnorderList;