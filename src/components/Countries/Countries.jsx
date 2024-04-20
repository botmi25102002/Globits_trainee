// src/components/Countries/Countries.js
import React, { useState } from "react";
import CountryData from "../../data/CountryData";
import CountryList from "./CountryList";
import CountryModal from "./CountryModal";
import Modal from "../Modal/Modal";

const Countries = () => {
  const [countries, setCountries] = useState(CountryData);
  const [editIndex, setEditIndex] = useState(null);
  const [isModalOpen, setModalOpen] = useState(false);
  const [deleteIndex, setDeleteIndex] = useState(null);

  const handleEdit = (index) => {
    setEditIndex(index);
    setModalOpen(true);
  };

  const handleDelete = (index) => {
    setDeleteIndex(index);
    setModalOpen(true);
  };

  const handleAdd = (values) => {
    setCountries([...countries, values]);
    setModalOpen(false);
  };

  const handleUpdate = (values) => {
    setCountries(countries.map((country, index) => (index === editIndex ? values : country)));
    setEditIndex(null);
    setModalOpen(false);
  };

  const handleConfirmDelete = () => {
    setCountries(countries.filter((_, i) => i !== deleteIndex));
    setDeleteIndex(null);
    setModalOpen(false);
  };

  return (
    <div>
      <CountryList countries={countries} onEdit={handleEdit} onDelete={handleDelete} />
      <Modal
        isOpen={isModalOpen}
        onClose={() => {
          setModalOpen(false);
          setEditIndex(null);
          setDeleteIndex(null);
        }}
      >
        {deleteIndex !== null ? (
          <>
            <p>Are you sure you want to delete this country?</p>
            <button onClick={handleConfirmDelete}>Confirm</button>
            <button onClick={() => setModalOpen(false)}>Cancel</button>
          </>
        ) : (
          <CountryModal
            isOpen={isModalOpen}
            initialValues={editIndex !== null ? countries[editIndex] : null}
            onSubmit={editIndex !== null ? handleUpdate : handleAdd}
            onClose={() => setModalOpen(false)}
          />
        )}
      </Modal>
      <button onClick={() => setModalOpen(true)} style={{ marginTop: "20px" }} >Add new Country</button>
    </div>
  );
};

export default Countries;
