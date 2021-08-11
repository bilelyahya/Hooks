import React, { useState } from "react";
import Modal from "react-modal";
import StarRating from "./StarRating";
const AddMovie = ({handleAdd}) => {
    const [form,setForm] = useState(
        {
            name:"",
            date:"",
            image:"",
            rating:1,
        }
    )

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };
  Modal.setAppElement("#root");

  const handleSubmit=(e) => {
      e.preventDefault();
      let newmovie={
          ...form, id:Math.random(),
      }
      handleAdd(newmovie);
setForm(
    {
        name:"",
        date:"",
        image:"",
        rating:1,
    }
)
      closeModal();
  }
const handlechange=(e) => {
    setForm({ ...form,[e.target.name]:e.target.value })
}

const handlerate=(newrate) => {
  setForm({...form,rating:newrate})
}

  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div>
      <button onClick={openModal} className="button">Add Movie</button>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
      >
        <button onClick={closeModal} className="button">close</button>
        <div className="add-movie">
        <form onSubmit={handleSubmit} >
          <label ><h3>Movie name</h3></label>
          <input type="text" name="name" onChange={handlechange} required />
          <label ><h3>Poster</h3></label>
          <input type="url" name="image" onChange={handlechange} required />
          <label ><h3>Date</h3></label>
          <input type="date" name="date" onChange={handlechange} required />
          <label >Rate</label>
          <StarRating rate={form.rating} handlerate={handlerate} />
          <button className="button">Add</button>
          <button onClick={closeModal} className="button">Cancel</button>
        </form>
        </div>
      </Modal>
    </div>
  );
};

export default AddMovie;
