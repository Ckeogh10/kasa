import { annonces } from "../../data/annonces";

import Header from "../../composants/Header/header";
import Card from "../../composants/Card/card";

function Home() {
  return (
    <div className="home">
      <header>
        <Header />
      </header>

      <main className="main">

        <section className="home-banner">
          <div className="home-banner-text">Chez vous, partout et ailleurs</div>
        </section>

        <article className="home-card-background">
          <ul className="home-card-item">
            {annonces.map(({ id, title, cover}) => (
              <Card
              id={id}
              title={title}
              cover={cover}
              />
            ))}
        </ul>
      </article>

      </main>
      
    </div>
  );
}

export default Home;
