import React from 'react';
import { Formik, Form, Field } from 'formik';
import { sendMessage } from '../../api';

const FormMessage = () => {
  const onSubmit = (values, formikBag) => {
    sendMessage(values);
    formikBag.resetForm();
  };
  return (
    <Formik initialValues={{ content: '' }} onSubmit={onSubmit}>
      <Form>
        <Field name="content" placeholder="content" />
        <input type="submit" value="Send new message" />
      </Form>
    </Formik>
  );
};

export default FormMessage;
