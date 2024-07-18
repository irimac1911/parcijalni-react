import { useState } from 'react';

const Form = ({ search }) => {
  const [username, setUserName] = useState('');

  const handleSearch = (username) => {
    if (username) {
      search(username);
    }
  };

  const setChange = (e) => {
    setUserName(e.target.value);
  };

  return (
    <>
      <input
        type="text"
        placeholder="Enter GitHub username"
        value={username}
        onChange={setChange}
      />
      <button onClick={handleSearch}>Search</button>
    </>
  );
};

export default Form;
