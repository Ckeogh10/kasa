import { annonces } from "data/annonces";

import Card from "composants/Card/card";
import Banner from "composants/Banner/banner";

import BannerHome from "assets/banner/BannerHome.png"

function Home() {
  return (
    <div className="main-wrapper">

      <main className="main">

        <Banner 
          text="Chez vous, partout et ailleurs"
          image={BannerHome}
        />

        <article className="home-gallery">
          
          {annonces.map(({ id, title, cover}) => (
            <Card
            key={id}
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
