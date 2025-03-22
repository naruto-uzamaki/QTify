import React from "react";
import NavBar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";


import { useEffect, useState } from 'react';
import styles from './App.css';
import { fetchGenreList, fetchNewAlbums, fetchSongs, fetchTopAlbums } from './api/api';
import Section from './components/Section/Section';
import FAQAccordion from './components/FAQ/FAQAccordion';
import GenreSection from './components/GenreSection/GenreSection';


function App() {
  const [topAlbums, setTopAlbums] = useState([]);
  const [newAlbums, setNewAlbums] = useState([]);
  const [songs, setSongs] = useState([]);
  const [genreList, setGenreList] = useState([]);
  
  const generatedata = async () => {
    setTopAlbums(await fetchTopAlbums());
    setNewAlbums(await fetchNewAlbums());
    setSongs(await fetchSongs());
    setGenreList(await fetchGenreList());
  }


  useEffect(() => {
    generatedata();
  }, [])

  return (
    <div className={styles.app}>
      <NavBar searchData={songs}/>
      <Hero />
      <div style={{marginBottom: '30px'}}>
        <Section data={topAlbums} title="Top Albums" />
      </div>
      <div style={{marginBottom: '30px'}}>
        <Section data={newAlbums} title="New Albums" />
      </div>
      <hr className={styles.divider} />
      <div>
        <GenreSection data={songs} title="Songs" genreList={genreList} />
      </div>
      <hr className={styles.divider} />
      <FAQAccordion />
    </div>
  );
}

export default App;
