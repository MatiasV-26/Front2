import React, { useState, useEffect } from 'react';
import './App.css';
function App() {
  const [data, setData] = useState("");
  const [id, setId] = useState(2);
  const [error, setError] = useState(null); // Default ID value

  useEffect(() => {
    // Function to make the GET request
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:3000/users/${id}`);
        if (!response.ok) {
          setError(1);
          throw new Error('Network response was not ok');
        }
        const jsonData = await response.json();
        setData(jsonData.user);
        setError(null);
        console.log(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    // Call the function to fetch data when the component mounts
    fetchData();

    // Cleanup function to avoid memory leaks
    
  }, [id]); // Effect runs whenever the 'id' state changes

  const handleIdChange = (e) => {
    setId(e.target.value);
  };

  return (
    <div class>
      <h1>ATLESTAT WEB</h1>
      <label htmlFor="idInput">Ingrese ID: </label>
      <input
        id="idInput"
        type="number"
        value={id}
        onChange={handleIdChange}
      />
      <br />
      {!error ? (
        <div>
          <h2>Información del usuario:</h2>
          <h3>Usuario: {!error? (data.name) :("")}</h3>
          <h3>Email: {!error? (data.email) :("")}</h3>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default App;