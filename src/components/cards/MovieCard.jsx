// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react";
import styles from "./MovieCard.module.css";

const MovieCard = ({ image, title, year, director, text, description, onClick }) => {
  return (
    <motion.article
    className={styles.card}
    whileHover={{ scale: 1.05, y: -5, rotate: -5 }}
    transition={{ type: "spring", stiffness: 200, damping: 15 }}
    initial={{ scale: 0 }} animate={{ scale: 1 }}
    onClick={onClick}
    >
    <section className={styles.info}>
        <img src={image} alt={title} className={styles.image} />
      <h2 className={styles.title}>{title}</h2>
        <p className={styles.details}>
          {year} • {director}
        </p>
        <p>
          <strong>{text}</strong>
        </p>
        <p className={styles.description}>{description}</p>
    </section>
    </ motion.article>
  )
}

export default MovieCard