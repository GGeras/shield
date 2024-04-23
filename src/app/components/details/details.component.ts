import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DetailsFuntions } from 'src/app/core/details-funtions';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit {
  @Output() out: EventEmitter<any> = new EventEmitter();
  @Input() detalhes!: any;
  @Input() value!: any;
  value1!: string;
  value2!: string;
  value3!: string;
  valorTotal!: string;
  constructor(public detailsFuntions: DetailsFuntions) {}

  ngOnInit(): void {
    const amountInReal = parseInt(this.value) / 100;

    switch (this.detalhes.type) {
      case 1:
        this.value1 = this.detailsFuntions.returnCarroValue(1, this.value);
        this.value2 = this.detailsFuntions.returnCarroValue(2, this.value);
        this.value3 = this.detailsFuntions.returnCarroValue(3, this.value);
        this.valorTotal = this.detalhes.Valor;
        break;
      case 2:
        this.value1 = this.detailsFuntions.returnCaminhaoValue(1, this.value);
        this.value2 = this.detailsFuntions.returnCaminhaoValue(2, this.value);
        this.valorTotal = this.detalhes.Valor;
        break;
      case 3:
        this.value1 = this.detailsFuntions.returnMotoValue(1, this.value);
        this.value2 = this.detailsFuntions.returnMotoValue(2, this.value);
        this.valorTotal = this.detalhes.Valor;
        break;
      case 4:
        this.value1 = this.detailsFuntions.returnBikeValue(this.value);
        this.valorTotal = amountInReal.toLocaleString('pt-BR', {
          style: 'currency',
          currency: 'BRL',
        });
        this.value = this.value
          .replace('R$', '')
          .replace('.', '')
          .replace(',', '');
        break;
      case 5:
        this.value1 = this.detailsFuntions.returnCarretaValue(this.value);
        this.valorTotal = amountInReal.toLocaleString('pt-BR', {
          style: 'currency',
          currency: 'BRL',
        });
        this.value = this.value
          .replace('R$', '')
          .replace('.', '')
          .replace(',', '');
        break;
    }
    console.log('value', this.value);
    console.log('detalhes', this.detalhes);
  }

  abrirWhatsApp(combo: number) {
    const linkWhatsApp = this.construirLinkWhatsApp(combo);
    window.open(linkWhatsApp, '_blank');
  }

  construirLinkWhatsApp(combo: number): string {
    let mensagemPartes = [''];
    let mensalidade;
    let itensList = [
      '- *Roubo e furto*\n',
      '- *Incêndio*\n',
      '- *Fenômenos Naturais*\n',
      '- *Colisão*\n',
      '- *Assistência 24h*\n',
      '- *Guincho 600km (300 ida e 300 volta)*\n',
      '- *Guincho ilimitado - Acidente*\n',
      '- *Pane Seca*\n',
      '- *Troca de pneu*\n',
      '- *Retorno ao Domicílio*\n',
      '- *Uber/Pop*\n',
    ];
    let comboOption;
    if (this.moto || this.caminhao) {
      if (combo === 1) {
        comboOption = 'MÉDIO';
      } else if (combo === 2) {
        itensList.push('- *Danos a Terceiros*\n');
        comboOption = 'COMPLETO';
      }
    } else if (this.carro) {
      itensList.push('- *Guarda Veículo*\n');
      if (combo === 1) {
        comboOption = 'BÁSICO';
      } else if (combo === 2) {
        comboOption = 'MÉDIO';
        itensList.push('- *Danos a Terceiros*\n');
      } else if (combo === 3) {
        itensList.push('- *Danos a Terceiros*\n');
        itensList.push('- *Carro reserva (15 dias)*\n');
        itensList.push('- *Proteção de Vidros*\n');
        itensList.push('- *Coparticipação reduzida*\n');
        comboOption = 'COMPLETO';
      }
    } else {
      comboOption = 'BÁSICO';
    }
    switch (combo) {
      case 1:
        mensalidade = this.value1;
        break;
      case 2:
        mensalidade = this.value2;
        break;
      case 3:
        mensalidade = this.value3;
        break;
    }

    if (
      this.detalhes.type === 1 ||
      this.detalhes.type === 2 ||
      this.detalhes.type === 3
    ) {
      mensagemPartes = [
        'Olá! Acabei de consultar a proteção do meu veículo no site e aqui estão os detalhes:\n',
        `- *Marca:* ${this.detalhes.Marca}`,
        `- *Modelo:* ${this.detalhes.Modelo}`,
        `- *Ano Modelo:* ${this.detalhes.AnoModelo}`,
        `- *Valor:* ${this.detalhes.Valor}`,
        `- *Combustível:* ${this.detalhes.Combustivel}`,
        `- *FIPE:* ${this.detalhes.CodigoFipe} \n`,
        `Optei pelo combo *_${comboOption}!_*, que oferece os seguintes benefícios:\n`,
        `${itensList.join('')}`,
        `Com o valor de mensalidade de apenas *_R$ ${mensalidade}_*`,
      ];
    } else if (this.detalhes.type === 4) {
      mensagemPartes = [
        'Olá! Acabei de consultar a proteção da minha bicicleta no site e aqui estão os detalhes:\n',
        `- *Valor protegido:* ${this.valorTotal}`,
        `- *Benefícios:* Roubo e furto - Perda Total 100% da FIPE`,
        `- *Mensalidade:* ${this.value1}`,
      ];
    } else if (this.detalhes.type === 5) {
      mensagemPartes = [
        'Olá! Acabei de consultar a proteção da minha carreta no site e aqui estão os detalhes:\n',
        `- *Valor protegido:* ${this.valorTotal}`,
        `- *Benefícios:* Roubo e furto`,
        `- *Mensalidade:* ${this.value1}`,
      ];
    }
    const mensagemCodificada = mensagemPartes
      .map((part) => encodeURI(part))
      .join('%0A');

    return `https://wa.me/5534999475690?text=${mensagemCodificada}`;
  }

  returnUrlIcon(): any {
    switch (this.detalhes.type) {
      case 1:
        return '../../../assets/car-side.svg';
      case 2:
        return '../../../assets/truck.svg';
      case 3:
        return '../../../assets/motorbike.svg';
      case 4:
        return '../../../assets/bicycle.svg';
      case 5:
        return '../../../assets/enclosed-trailer.svg';
    }
  }

  get carro(): boolean {
    return this.detalhes.type === 1;
  }
  get caminhao(): boolean {
    return this.detalhes.type === 2;
  }
  get moto(): boolean {
    return this.detalhes.type === 3;
  }
  get bike(): boolean {
    return this.detalhes.type === 4;
  }
  get carreta(): boolean {
    return this.detalhes.type === 5;
  }
}
