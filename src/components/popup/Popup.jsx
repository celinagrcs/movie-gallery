// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react";
import styles from "../popup/Popup.module.css";
import { useEffect, useRef } from "react";
import { IoCloseOutline } from "react-icons/io5";

function Popup({ movie, onClose }) {
  const dialogRef = useRef(null);

  useEffect(() => {
    if (dialogRef.current) dialogRef.current.focus();
  }, []);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) onClose();
  };

  return (
    // el overlay también tiene su animación
    <motion.section
      role="presentation"
      className={styles.overlay}
      onClick={handleOverlayClick}
      initial={{ backdropFilter: "blur(0px)", opacity: 0 }}
      animate={{ backdropFilter: "blur(6px)", opacity: 1 }}
      exit={{ backdropFilter: "blur(0px)", opacity: 0 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
    >
      <motion.article
        ref={dialogRef}
        tabIndex="-1"
        role="dialog"
        aria-modal="true"
        aria-labelledby="popup-title"
        aria-describedby="popup-description"
        className={styles.popup}
        onClick={(e) => e.stopPropagation()}
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
      >
        <header className={styles.header}>
          <h2 id="popup-title">{movie.title}</h2>
          <button
            onClick={onClose}
            aria-label="Cerrar ventana"
            className={styles.close}
          >
            <IoCloseOutline />
          </button>
        </header>

        <figure className={styles.figure}>
          <img
            src={movie.image}
            alt={`Póster de ${movie.title}`}
            className={styles.image}
          />
          <figcaption className={styles.figcaption}>
            {movie.year} · {movie.director}
          </figcaption>
        </figure>

        <section id="popup-description" className={styles.content}>
          <p>{movie.description}</p>
          <p className={styles.extra}>🎥 Datos curiosos próximamente...</p>
        </section>
      </motion.article>
    </motion.section>
  );
}

export default Popup;