// src/features/cats/Cats.js
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCats } from "./catsSlice";
import CatList from './CatList'

function Cats() {
  const catPics = useSelector((state) => state.entities);
  const isLoading = useSelector(
    (state) => state.status === "Loading"
  )
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCats());
  }, [dispatch]);

  if (isLoading) return <p>Loading...</p>;

  console.log(catPics);
  return (
    <div className="App">
      <h1>CatBook</h1>
      <CatList catPics={catPics} />
    </div>
  );
}

export default Cats; 