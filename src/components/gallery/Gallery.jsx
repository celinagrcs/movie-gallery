import movies from "../../data/movies";
import MovieCard from "../cards/MovieCard"
import styles from "./Gallery.module.css";
import ilustration from "../../assets/ilustration.png"
import { useState } from "react";
import Popup from "../popup/Popup";
import { AnimatePresence } from "motion/react";


function Gallery() {
  const [selectedMovie, setSelectedMovie] = useState(null);

  const handleOpen = (movie) => setSelectedMovie(movie);
  const handleClose = () => setSelectedMovie(null);

  return (
    <main className={styles.gallery}>
      <section className={styles.hero}>
        <h1 className={styles.galleryTitle}>Movie Gallery</h1>
        <img src={ilustration} alt="" className={styles.icon} />
      </section>
      <section className={styles.grid}>
        {movies.map((movie, i) => {
          return <MovieCard key={i} {...movie} onClick={() => handleOpen(movie)} />
        })}
      </section>

      <AnimatePresence mode="wait">
        {selectedMovie && (
          <Popup
          key={selectedMovie.id} 
          movie={selectedMovie} 
          onClose={handleClose} />
        )}
      </AnimatePresence>
    </main>
  )
}

export default Gallery