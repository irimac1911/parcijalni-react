import { useState } from 'react';
import './App.css';
import Form from './components/form-components';
import UserDetails from './components/user-details-components';

function App() {
  const [user, setUserData] = useState(null);

  const handleSearch = () => {
    fetch(`https://api.github.com/users/${username}`)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          console.error('User not found');
        }
      })
      .then((data) => {
        setUserData(data);
      })
      .catch((error) => {
        console.error('Error fetching user data:', error);
      });
  };



  return (
    <>
      <Form search={handleSearch} />
      <UserDetails user={user} />
    </>
  );
}

export default App;