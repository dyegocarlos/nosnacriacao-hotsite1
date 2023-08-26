import React from 'react';

import Layout from '../components/Layout';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from 'gatsby';
import logo from '../assets/img/logonoswhite.png';
import formacao from '../assets/images/formacao.jpg';
import campanha from '../assets/images/campanha.jpg';
import pastoral from '../assets/images/pastoral.png';
import midias from '../assets/images/midias.jpg';
import nucleos from '../assets/images/nucleos.jpg';

import Scroll from '../components/Scroll';
import Gallery from '../components/Gallery';

// const ROW1_IMAGES = [
//   {
//     src: require('../assets/images/fulls/01.jpg'),
//     thumbnail: require('../assets/images/thumbs/01.jpg'),
//     caption: 'Ad infinitum',
//   },
//   {
//     src: require('../assets/images/fulls/02.jpg'),
//     thumbnail: require('../assets/images/thumbs/02.jpg'),
//     caption: 'Dressed in Clarity',
//   },
//   {
//     src: require('../assets/images/fulls/03.jpg'),
//     thumbnail: require('../assets/images/thumbs/03.jpg'),
//     caption: 'Raven',
//   },
//   {
//     src: require('../assets/images/fulls/04.jpg'),
//     thumbnail: require('../assets/images/thumbs/04.jpg'),
//     caption: "I'll have a cup of Disneyland, please",
//   },
// ];

// const ROW2_IMAGES = [
//   {
//     src: require('../assets/images/fulls/05.jpg'),
//     thumbnail: require('../assets/images/thumbs/05.jpg'),
//     caption: 'Cherish',
//   },
//   {
//     src: require('../assets/images/fulls/06.jpg'),
//     thumbnail: require('../assets/images/thumbs/06.jpg'),
//     caption: 'Different.',
//   },
//   {
//     src: require('../assets/images/fulls/07.jpg'),
//     thumbnail: require('../assets/images/thumbs/07.jpg'),
//     caption: 'History was made here',
//   },
//   {
//     src: require('../assets/images/fulls/08.jpg'),
//     thumbnail: require('../assets/images/thumbs/08.jpg'),
//     caption: 'People come and go and walk away',
//   },
// ];
const IndexPage = () => (
  <Layout>


    <section id="banner">
      <header>
        <img width="100px" src={logo} />

        <h2>Nós na Criação</h2>
      </header>
      <p>O Nós na Criação é um movimento latino-americano de inspiração cristã focado em colaborar com lideranças, igrejas e grupos locais na caminhada de se perceber como parte da Criação de Deus.  Atuamos na reflexão e vivência da fé em relação de coexistência na Criação, entendendo que o tema do Meio Ambiente não é um tema acessório ou transitório, mas permanente e urgente.
      </p> <br />
      <footer className='center'>

        <a href="https://forms.gle/RHF26Ec738E5S1to7" className="button style2">
          Participar
        </a>
        <Scroll type="id" element="doar">
          <a href="#doar" className="button style3 scrolly">
            Doar
          </a>
        </Scroll>
        <Scroll type="id" element="first">
          <a href="#first" className="button style2 scrolly">
            Saiba mais
          </a>
        </Scroll>
      </footer>
    </section >

    <section id="first" className="inner title center white">
      <h2>Principais formas de atuação:</h2>
    </section>

    <article className="container box style1 right">
      <a href="/#" className="image fit">
        <img src={nucleos} alt="" />
      </a>
      <div className="inner">
        <header>
          <h2>
            Núcleos locais
          </h2>
        </header>
        <p>
          Estudam e se dedicam para o avanço de discussões ecoteológicas, reunindo pessoas que possuem o interesse a questão socioambiental atrelada a fé cristã.
        </p>
      </div>
    </article>

    <article className="container box style1 left">
      <a href="/#" className="image fit">
        <img src={formacao} alt="" />
      </a>
      <div className="inner">
        <header>
          <h2>
            Formação e Mentoria
          </h2>
        </header>
        <p>
          Têm como objetivo capacitar e orientar facilitadores que desejam atuar no campo da ecoteologia. O movimento oferece treinamentos presenciais ou online para que os facilitadores estejam preparados para liderar núcleos locais, pastorais ambientais e outras atividades relacionadas à causa socioambiental. Além disso, as mentorias visam acompanhar e orientar os facilitadores na implementação de projetos e ações em suas comunidades locais.
        </p>
      </div>
    </article>

    <article className="container box style1 right">
      <a href="/#" className="image fit">
        <img src={pastoral} alt="" />
      </a>
      <div className="inner">
        <header>
          <h2>
            Pastoral Ambiental
          </h2>
        </header>
        <p>
          Visa introduzir e aprofundar a temática ambiental no campo de missão da igreja, trabalhando junto com a liderança para implementar ações práticas na realidade local e conscientizar a comunidade.
        </p>
      </div>
    </article>

    <article className="container box style1 left">
      <a href="/#" className="image fit">
        <img src={campanha} alt="" />
      </a>
      <div className="inner">
        <header>
          <h2>
            Campanhas
          </h2>
        </header>
        <p>
          Objetivam realizar ações e conscientizar a comunidade local sobre temas socioambientais relevantes, como o selo da igreja zero descartáveis, ações contra o marco temporal e proteção aos povos indígenas.
        </p>
      </div>
    </article>

    <article className="container box style1 right">
      <a href="/#" className="image fit">
        <img src={midias} alt="" />
      </a>
      <div className="inner">
        <header>
          <h2>
            Criação de conteúdo
          </h2>
        </header>
        <p>
          Visa produzir materiais informativos e educativos para disseminar informações, reflexões e diálogos sobre a relação entre a fé cristã e a proteção do meio ambiente.
        </p>
      </div>
    </article>






    {/* <Header /> */}

    <article className="container white box">
      <header>
        {/* <h2>
          Final
        </h2> */}
        <div className='center'><img width="100px" src={logo} /></div>
        <p>
          A metodologia criada pelo Nós na Criação tem por premissa a leitura e reflexão crítica das escrituras a partir da segunda carta de Paulo aos Coríntios sobre o Ministério da Reconciliação (2Co 5:18-20). Aliando esse texto ao amor incondicional de Deus (Jo 3:16) e ao mandado de Jesus sobre a vivência do evangelho junto a TODA criatura (Mc 16:15), entendemos que não podemos vivenciar uma espiritualidade apenas entre a humanidade, mas sim entre a Criação como um todo.
        </p>
        <br />
        <p>
          Neste caminho, buscamos fazer a leitura da revelação a partir da Ecoteologia Decolonial, que não nega a Teologia Clássica, mas abre mão do antropocentrismo que coloca o ser humano no papel de dominar todas as coisas, quando o significado de “dominar”, no entendimento comum, tem sido explorar. O Nós na Criação possui Missão, Visão e Valores bem definidos que podem ser encontrados no botão saiba mais.
        </p>
      </header>

      {/* <div className="inner gallery">
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
      </div>*/}
    </article>

    {/* <article className="container box style3">
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

    <article id="doar" className="container box style3">
      <header>
        <h2>Doar</h2>
        <p>Para contribuir financeiramente com o Nós na Criação, envie o valor que deseja para a chave pix:</p>
        <br />
        <strong>nosnacriacao@gmail.com</strong>
        {/* <Link to="/Element"> here </Link> */}
      </header>
    </article>

    <Footer />

  </Layout >
);

export default IndexPage;
