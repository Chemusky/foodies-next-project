import Link from "next/link";
import logoImage from "@/assets/logo.png";
import React from "react";
import styles from "@/Components/main-header.module.css";
// Con este archivo se pretende mostrar el header en cada una de las páginas de la aplicación
// Finalmente se exporta e importa en el archivo layout

// para mostrar una imagen, se importa la ruta de la imagen y luego se establece la etiqueta html img
// estableciendo el nombre de la imagen importada terminada en .src
function MainHeader() {
  return (
    <header className={styles.header}>
      <Link
        className={styles.logo}
        href={{
          pathname: "/",
        }}
      >
        <img src={logoImage.src} alt="A plate with food on it" />
        NextLevel Food
      </Link>

      <nav className={styles.nav}>
        <ul>
          <li>
            <Link
              href={{
                pathname: "/meals",
              }}
            >
              Browse the meals!
            </Link>
          </li>

          <li>
            <Link
              href={{
                pathname: "/community",
              }}
            >
              Foodies Community
            </Link>
          </li>
          <li>
            <Link
              href={{
                pathname: "/contact",
              }}
            >
              Contact With US!
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainHeader;
