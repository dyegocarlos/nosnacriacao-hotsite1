import React from 'react';

import Layout from '../components/Layout';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from 'gatsby';
import pic1 from '../assets/images/pic01.jpg';
import pic2 from '../assets/images/pic02.jpg';
import Scroll from '../components/Scroll';
import Gallery from '../components/Gallery';

const ROW1_IMAGES = [
  {
    src: require('../assets/images/fulls/01.jpg'),
    thumbnail: require('../assets/images/thumbs/01.jpg'),
    caption: 'Ad infinitum',
  },
  {
    src: require('../assets/images/fulls/02.jpg'),
    thumbnail: require('../assets/images/thumbs/02.jpg'),
    caption: 'Dressed in Clarity',
  },
  {
    src: require('../assets/images/fulls/03.jpg'),
    thumbnail: require('../assets/images/thumbs/03.jpg'),
    caption: 'Raven',
  },
  {
    src: require('../assets/images/fulls/04.jpg'),
    thumbnail: require('../assets/images/thumbs/04.jpg'),
    caption: "I'll have a cup of Disneyland, please",
  },
];

const ROW2_IMAGES = [
  {
    src: require('../assets/images/fulls/05.jpg'),
    thumbnail: require('../assets/images/thumbs/05.jpg'),
    caption: 'Cherish',
  },
  {
    src: require('../assets/images/fulls/06.jpg'),
    thumbnail: require('../assets/images/thumbs/06.jpg'),
    caption: 'Different.',
  },
  {
    src: require('../assets/images/fulls/07.jpg'),
    thumbnail: require('../assets/images/thumbs/07.jpg'),
    caption: 'History was made here',
  },
  {
    src: require('../assets/images/fulls/08.jpg'),
    thumbnail: require('../assets/images/thumbs/08.jpg'),
    caption: 'People come and go and walk away',
  },
];
const IndexPage = () => (
  <Layout>


    <section id="banner">
      <header>
        <h2>Sobre o Nós na Criação</h2>
      </header>
      <p>O Nós na Criação é um movimento de juventude cristã focado em colaborar com a igreja local na vivência da fé em relação de coexistência na Criação de Deus. A atuação do movimento com a juventude se estabelece na reflexão a respeito da fé na Criação de Deus, da qual somos parte. Entendemos que o tema do Meio Ambiente e da coexistência harmônica na criação de Deus não é um tema acessório ou transitório, mas permanente e urgente.
      </p> <br />
      {/* <p>A metodologia criada pelo Nós na Criação tem por premissa a leitura e reflexão crítica das escrituras a partir da segunda carta de Paulo aos Coríntios sobre o Ministério da Reconciliação (2Co 5:18-20). Aliando esse texto ao amor incondicional de Deus (Jo 3:16) e ao mandado de Jesus sobre a vivência do evangelho junto a TODA criatura (Mc 16:15), entendemos que não podemos nos furtar de vivenciar essa espiritualidade na Criação, fazendo isso apenas entre a humanidade, como se esta não fizesse parte da Criação como um todo.</p> */}
      <footer>
        {/* <Scroll type="id" element="first"> */}
        <a href="https://forms.gle/RHF26Ec738E5S1to7" className="button style2">
          Participar
        </a>
        <a href="#" className="button style3 scrolly">
          Doar
        </a>
        <a href="https://linktr.ee/Nosnacriacao" className="button style2 scrolly">
          Saiba mais
        </a>
        {/* </Scroll> */}
      </footer>
    </section >
    {/* <Header /> */}
    {/* <article id="first" className="container box style1 right">
      <a href="/#" className="image fit">
        <img src={pic1} alt="" />
      </a>
      <div className="inner">
        <header>
          <h2>
            Lorem ipsum
            <br />
            dolor sit amet
          </h2>
        </header>
        <p>
          Tortor faucibus ullamcorper nec tempus purus sed penatibus. Lacinia
          pellentesque eleifend vitae est elit tristique velit tempus etiam.
        </p>
      </div>
    </article>

    <article className="container box style1 left">
      <a href="/#" className="image fit">
        <img src={pic2} alt="" />
      </a>
      <div className="inner">
        <header>
          <h2>
            Mollis posuere
            <br />
            lectus lacus
          </h2>
        </header>
        <p>
          Rhoncus mattis egestas sed fusce sodales rutrum et etiam ullamcorper.
          Etiam egestas scelerisque ac duis magna lorem ipsum dolor.
        </p>
      </div>
    </article>

    <article className="container box style2">
      <header>
        <h2>Magnis parturient</h2>
        <p>
          Justo phasellus et aenean dignissim
          <br />
          placerat cubilia purus lectus.
        </p>
      </header>

      <div className="inner gallery">
        <Gallery
          images={ROW1_IMAGES.map(({ src, thumbnail, caption }) => ({
            src,
            thumbnail,
            caption,
          }))}
        />
        <Gallery
          images={ROW2_IMAGES.map(({ src, thumbnail, caption }) => ({
            src,
            thumbnail,
            caption,
          }))}
        />
      </div>
    </article>

    <article className="container box style3">
      <header>
        <h2>Nisl sed ultricies</h2>
        <p>Diam dignissim lectus eu ornare volutpat orci.</p>
      </header>
      <form method="post" action="#">
        <div className="row gtr-50">
          <div className="col-6 col-12-mobile">
            <input
              type="text"
              className="text"
              name="name"
              placeholder="Name"
            />
          </div>
          <div className="col-6 col-12-mobile">
            <input
              type="text"
              className="text"
              name="email"
              placeholder="Email"
            />
          </div>
          <div className="col-12">
            <textarea name="message" placeholder="Message" />
          </div>
          <div className="col-12">
            <ul className="actions">
              <li>
                <input type="submit" value="Send Message" />
              </li>
            </ul>
          </div>
        </div>
      </form>
    </article> */}

    {/* <article className="container box style3">
      <header>
        <h2>Elements</h2>
        <p>This starter has other elements.</p>
        <br />
        Check it out
        <Link to="/Element"> here </Link>
      </header>
    </article>

    <Footer /> */}
  </Layout >
);

export default IndexPage;
