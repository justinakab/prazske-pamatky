import './style.css';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { PrahaLogo } from '../../components/PrahaLogo';

export const HomePage = () => {
  return (
    <>
      <Header />

      <div className="hero--col">
        <Link to="/">
          <div className="logo">
            <PrahaLogo></PrahaLogo>
          </div>
        </Link>
        <h1>Interaktivně za památkami</h1>
        <div className="homepage-about">
          <div className="about--text">
            <p className="about--description">
              Interaktivní Drag & Drop hra a průvodce pražskými památkami.{' '}
              <br />
              Inovativní a zábavný způsob, jak poznat architekturu a kulturní
              dědictví tohoto města.{' '}
            </p>
            <div className="btns-container">
              <Link to="/monuments">
                <motion.button
                  className="button bth--monuments"
                  whileHover={{
                    scale: 1.1,
                    transition: { duration: 0.6 },
                  }}
                  animate={{
                    scale: 1,
                    transition: { duration: 0.6 },
                  }}
                  whileTap={{ scale: 0.9 }}
                >
                  Chci se učit{' '}
                </motion.button>{' '}
              </Link>

              <Link to="/game">
                <motion.button
                  className="button bth--about-us"
                  whileHover={{
                    scale: 1.1,
                    transition: { duration: 0.6 },
                  }}
                  animate={{
                    scale: 1,
                    transition: { duration: 0.6 },
                  }}
                  whileTap={{ scale: 0.9 }}
                >
                  Chci se otestovat
                </motion.button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
