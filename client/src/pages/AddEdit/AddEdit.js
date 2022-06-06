import Header from "../../components/Header/Header";

import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import "./AddEdit.css";
import { toast } from "react-toastify";

const initialState = {
  title: "",
  plot: "",
  director: "",
  cast: "",
  year: "",
};

const AddEdit = () => {
  const [state, setState] = useState(initialState);
  const { title, plot, director, cast, year } = initialState;
  const history = useNavigate();

  const addMovie = async (data) => {
    const response = await fetch("http://localhost:4000/movie", data);
    if (response.status === 200) {
      window.alert(response.data);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !plot || !director || !cast || !year) {
      window.alert("Please provide value into each input fields");
    } else {
      addMovie(state);
      history.push("/");
    }
  };

  const handleInputChange = (e) => {
    let { title, value } = e.target;
    setState({ ...state, [title]: value });

    e.preventDefault();
  };

  return (
    <div className="container-fluid">
      <Header />
      <div className="row m-4 align-items-center justify-content-center">
        <h1>Add Edit</h1>
      </div>
      <div style={{ marginTop: "50px" }}>
        <form
          style={{
            margin: "auto",
            padding: "15px",
            maxWidth: "400px",
            alignContent: "center",
          }}
          onSubmit={handleSubmit}
        >
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            name="title"
            placeholder="Enter title"
            onChange={handleInputChange}
            value={title}
          ></input>

          <label htmlFor="plot">Plot</label>
          <input
            type="text"
            id="plot"
            name="plot"
            placeholder="Enter plot"
            onChange={handleInputChange}
            value={plot}
          ></input>

          <label htmlFor="director">Director</label>
          <input
            type="text"
            id="director"
            name="director"
            placeholder="Enter director"
            onChange={handleInputChange}
            value={director}
          ></input>

          <label htmlFor="cast">Title</label>
          <input
            type="text"
            id="cast"
            name="cast"
            placeholder="Enter cast"
            onChange={handleInputChange}
            value={cast}
          ></input>

          <label htmlFor="year">Year</label>
          <input
            type="number"
            id="year"
            name="year"
            placeholder="Enter year"
            onChange={handleInputChange}
            value={year}
          ></input>
          <input type="submit" value="Submit" />
        </form>
      </div>
    </div>
  );
};

export default AddEdit;
