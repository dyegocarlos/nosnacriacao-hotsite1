import React from 'react';
import Scroll from './Scroll';
import config from '../../config';

export default function Header({ title, heading, avatar }) {
  return (
    <section id="header">
      <header>
        <p>A metodologia criada pelo Nós na Criação tem por premissa a leitura e reflexão crítica das escrituras a partir da segunda carta de Paulo aos Coríntios sobre o Ministério da Reconciliação (2Co 5:18-20). Aliando esse texto ao amor incondicional de Deus (Jo 3:16) e ao mandado de Jesus sobre a vivência do evangelho junto a TODA criatura (Mc 16:15), entendemos que não podemos vivenciar uma espiritualidade apenas entre a humanidade, mas sim entre a Criação como um todo.</p>
        <br />
        <p>
          Neste caminho, buscamos fazer a leitura da revelação a partir da Ecoteologia Decolonial, que não nega a Teologia Clássica, mas abre mão do antropocentrismo que coloca o ser humano no papel de dominar todas as coisas, quando o significado de “dominar”, no entendimento comum, tem sido explorar. O Nós na Criação possui Missão, Visão e Valores bem definidos que podem ser encontrados no botão saiba mais.
        </p>
      </header>
      {/* <footer>
        <Scroll type="id" element="banner">
          <a href="#banner" className="button style2 ">
            Sobre o Nós
          </a>
        </Scroll>
      </footer> */}
    </section>
  );
}
