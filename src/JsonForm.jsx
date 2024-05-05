// JsonForm.js
import React from 'react';
import Form from '@rjsf/core';

const JsonForm = ({ schema, formData, onChange, onSubmit, validate }) => {
  return (
    <div>
      <Form
        schema={schema}
        formData={formData}
        onChange={onChange}
        onSubmit={onSubmit}
        validate={validate}
      />
    </div>
  );
};

export default JsonForm;
