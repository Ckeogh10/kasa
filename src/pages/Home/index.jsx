import { annonces } from "../../data/annonces";

import Card from "../../composants/Card/card";

function Home() {
  return (
    <div className="home">

      <main className="main">

        <section className="banner">
          <div className="banner__container">
            <div className="banner__text">Chez vous, partout et ailleurs</div>
            
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
