import * as React from 'react';

const patientList = [
  {
    firstName: 'Pascal',
    lastName: 'Siakam',
    healthNumber: 'ABC000001',
    birthdate: '1990-04-24',
    address: '123 tester',
    phone: '6478885555',
    email: 'test@tester.com'
  },
  {
    firstName: 'Scottie',
    lastName: 'Barnes',
    healthNumber: 'ABC000002',
    birthdate: '1990-06-24',
    address: '456 tester',
    phone: '6478885555',
    email: 'test1@tester.com'
  },
  {
    firstName: 'Fred',
    lastName: 'Vanvleet',
    healthNumber: 'ABC000003',
    birthdate: '1992-04-24',
    address: '789 tester',
    phone: '6478885335',
    email: 'test2@tester.com'
  }
]

const App = () => {
  const titleHeader = 'Patients';
  return(
    <div>
      <h1>{titleHeader}</h1>
      <PatientsList />
    </div>
  )
}

const PatientsList = () => (
  <>
    <ul>
    {patientList.map((patient) =>
      <li key={patient.healthNumber}>
        <span>Health Number: {patient.healthNumber}</span><br />
        <span>Name: {patient.lastName}, {patient.firstName}</span><br />
        <span>Birthdate: {patient.birthdate}</span><br />
        <span>Address: {patient.address}</span><br />
        <span>Phone: {patient.phone}</span><br />
        <span>Email: {patient.email}</span><br />
        <br />
      </li>
    )}  
    </ul>
  </>
)

export default App;