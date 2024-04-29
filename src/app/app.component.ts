import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  map: string =
    'https://www.google.com/maps/place/Shield+Prote%C3%A7%C3%A3o+Veicular/@-18.9221783,-48.2915268,17z/data=!4m16!1m9!4m8!1m0!1m6!1m2!1s0x94a445473a7c38bd:0x8b58a5405a0ac327!2sAv.+Get%C3%BAlio+Vargas,+1328+-+Centro,+Uberl%C3%A2ndia+-+MG,+38400-434!2m2!1d-48.2889519!2d-18.9221783!3m5!1s0x94a445473a7c38bd:0x8b58a5405a0ac327!8m2!3d-18.9221783!4d-48.2889519!16s%2Fg%2F11nxpmysk0?entry=ttu';
  detalhes: any;
  value: any;
  app: any[] = ['2 via de boleto', 'Consulta', 'Benefícios', 'Fácil e prático'];
  cards: any[] = [
    {
      titulo: 'Proteção contra furto e roubo',
      url: '../assets/gif/shield-animation.gif',
      msg: 'Trabalhamos com benefícios que podem atender até 100% do valor da tabela FIPE.',
    },
    {
      titulo: '24h de atendimento',
      url: '../assets/gif/suporte-24-horas.gif',
      msg: 'Guincho, socorro elétrico, falta de combustível, entre outros tipos de assistência.',
    },
    {
      titulo: 'Proteção contra Incêndio',
      url: '../assets/gif/incendio.gif',
      msg: 'Com a proteção Contra Incêndio da Shield, você tem a garantia de proteção total para o seu veículo.',
    },
    {
      titulo: 'Proteção contra Fenômenos Naturais',
      url: '../assets/gif/naturais.gif',
      msg: 'Desde tempestades até alagamentos, nossa assistência rápida está disponível para garantir a proteção do seu veículo.',
    },
    {
      titulo: 'Proteção contra Colisão',
      url: '../assets/gif/colisao.gif',
      msg: 'Cobertura para danos, assistência rápida e segurança em todas as situações.',
    },
  ];
  constructor() {}

  scrollToPosition(position: number) {
    window.scrollTo({
      top: position,
      behavior: 'smooth',
    });
  }
}
