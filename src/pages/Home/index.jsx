import { annonces } from "../../data/annonces";

import Banner from "../../assets/banner/Banner.png"
import Card from "../../composants/Card/card";
import Header from "../../composants/Header/header";

function Home() {
  return (
    <div className="home">

      <Header />

      <main className="main">

        <section className="banner">
          <div className="banner__container">
            <div className="banner__text">Chez vous, partout et ailleurs</div>
            <img className="banner__img" src={Banner} alt="Home banner, waves crashing onto a cliffside." />
          </div>
        </section>

        <article className="home-gallery">
          
          {annonces.map(({ id, title, cover}) => (
            <Card
            id={id}
            title={title}
            cover={cover}
            />
          ))}

        </article>

      </main>

    </div>
  );
}

export default Home;
