import React, { useState } from 'react';
import Form from '@rjsf/core';
import validator from '@rjsf/validator-ajv8';
import './App.css';
import schema from './schema/schema.json';
//<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" />

const App = () => {
  const [formData, setFormData] = useState({});
  const [error, setError] = useState(null);

  const handleFormChange = ({ formData }) => {
    setFormData(formData);
  };

  const handleFormSubmit = () => {
    // save data
    const json = JSON.stringify(formData);
    try {
      localStorage.setItem('formData', json);
      setError(null);
    } catch (error) {
      setError('Error when save data');
    }
  };

  const handleLoadLast = () => {
    // load JSON
    try {
      const json = localStorage.getItem('formData');
      if (json) {
        const data = JSON.parse(json);
        setFormData(data);
        setError(null);
      } else {
        setError('No saved data');
      }
    } catch (error) {
      setError('Error on load data');
    }
  };

  

  return (
    <div className="container">
      <h1>בקשת העברת קופת חיסכון לכל ילד</h1>
      <div>
      <Form
        schema={schema}
        formData={formData}
        onChange={handleFormChange}
        onSubmit={handleFormSubmit}
        validator={validator} 
      />
    </div>
      <button onClick={handleLoadLast}>Load</button>
      {error && <div className="error-message">{error}</div>}
    </div>
  );
};

export default App;
