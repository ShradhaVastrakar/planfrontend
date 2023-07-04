
import React, { useEffect, useState } from 'react';
let url = "https://frail-tan-wetsuit.cyclic.app"

const RetrieveData = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Make a GET request to the backend API to retrieve the data
    fetch(`${url}/api/posts`)
      .then((response) => response.json())
      .then((data) => {
        console.log('Retrieved data:', data);
        setData(data);
      })
      .catch((error) => {
        console.error('Failed to retrieve data:', error);
      });
  }, []);
  const handleDelete = async (id) => {
    try {
      // Make a DELETE request to the backend API to delete a specific entry
      await fetch(`${url}/api/posts/${id}`, {
        method: 'DELETE',
      });
      console.log('Data deleted successfully');
      // Update the data state by removing the deleted entry
      setData(data.filter((entry) => entry._id !== id));
    } catch (error) {
      console.error('Failed to delete data:', error);
    }
  };

  return (
    <div>
      <h2>Retrieve Data</h2>
      {data.map((entry) => (
        <div key={entry._id}>
          <p>Name: {entry.name}</p>
          <p>Email Address: {entry.email}</p>
          <p>Destination: {entry.destination}</p>
          <p>No. of travellers: {entry.travellers}</p>
          <p>Budget Per Person: {entry.budget}</p>
          <button onClick={() => handleDelete(entry._id)}>Delete</button>
          <hr />
        </div>
      ))}
    </div>
  );
};

export default RetrieveData;

