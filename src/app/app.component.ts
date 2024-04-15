import { Component, OnInit } from '@angular/core';
import { FipeService } from './services/fipe.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  detalhes: any;
  value: any;
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

  // construirLinkWhatsApp(): string {
  //   const mensagem = encodeURIComponent(
  //     `Olá! Tenho interesse em fazer a adesão da proteção do veículo:\n\nMarca: ${
  //       this.detalhes.Marca
  //     }\nModelo: ${this.detalhes.Modelo}\nAno Modelo: ${
  //       this.detalhes.AnoModelo
  //     }\nValor: ${this.detalhes.Valor}\nCombustível: ${
  //       this.detalhes.Combustivel
  //     }\nEscolhi o combo COMPLETO!\n No valor de R$ 2323232`
  //   );
  //   return `https://wa.me/5534984435669?text=${mensagem}`;
  // }
}
