import React from 'react';
import Scroll from './Scroll';
import config from '../../config';

export default function Header({ title, heading, avatar }) {
  return (
    <section id="header">
      <header>

        <h1>
          {/* <img width="100px" src="../assets/images/logonoswhite.png" /> */}
          Seja parte do Nós na Criação</h1>
        <a href="https://forms.gle/RHF26Ec738E5S1to7" className="button style2 ">
          Formulário de Filiação ao Movimento
        </a>
        <p></p>
      </header>
      <footer>
        <Scroll type="id" element="banner">
          <a href="#banner" className="button style2 ">
            Sobre o Nós
          </a>
        </Scroll>
      </footer>
    </section>
  );
}
