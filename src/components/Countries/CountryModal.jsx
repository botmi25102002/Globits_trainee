import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import PropTypes from "prop-types";
import '../Style/CountryModal.css';

const validationSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  code: Yup.string().required("Code is required"),
  description: Yup.string().required("Description is required"),
});

const CountryModal = ({ isOpen, onClose, initialValues, onSubmit }) => {
  return (
    <>
      {isOpen && (
        <div className="modal">
          <div className="modal-content">
            
            <h2>{initialValues ? "Edit Country" : "Add new Country"}</h2>
            <Formik
              initialValues={initialValues || { name: "", code: "", description: "" }}
              validationSchema={validationSchema}
              onSubmit={onSubmit}
            >
              <Form>
                <Field name="name" placeholder="Name" className='field' />
                <ErrorMessage name="name" component="div" className="error" />
                <Field name="code" placeholder="Code" className='field'/>
                <ErrorMessage name="code" component="div" className="error" />
                <Field name="description" placeholder="Description" className='field'/>
                <ErrorMessage name="description" component="div" className="error" />
                <button type="submit">{initialValues ? "Update" : "Add"}</button>
                <button type="button" onClick={onClose}>
                  Cancel
                </button>
              </Form>
            </Formik>
          </div>
        </div>
      )}
    </>
  );
};

CountryModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  initialValues: PropTypes.object,
  onSubmit: PropTypes.func.isRequired,
};

export default CountryModal;
