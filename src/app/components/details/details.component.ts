import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

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
  constructor() {}

  ngOnInit(): void {
    const amountInReal = parseInt(this.value) / 100;

    switch (this.detalhes.type) {
      case 1:
        this.value1 = this.returnCarroValue(1);
        this.value2 = this.returnCarroValue(2);
        this.value3 = this.returnCarroValue(3);
        this.valorTotal = this.detalhes.Valor;
        break;
      case 2:
        this.value1 = this.returnCaminhaoValue(1);
        this.value2 = this.returnCaminhaoValue(2);
        this.valorTotal = this.detalhes.Valor;
        break;
      case 3:
        this.value1 = this.returnMotoValue(1);
        this.value2 = this.returnMotoValue(2);
        this.valorTotal = this.detalhes.Valor;
        break;
      case 4:
        this.value1 = this.returnBikeValue();
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
        this.value1 = this.returnCarretaValue();
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
  }

  returnCarroValue(opcao: number): string {
    if (this.value <= 15000) {
      if (opcao === 1) {
        return '79,99';
      } else if (opcao === 2) {
        return '94,99';
      } else if (opcao === 3) {
        return '119,89';
      }
    } else if (this.value <= 20000) {
      if (opcao === 1) {
        return '89,85';
      } else if (opcao === 2) {
        return '104,85';
      } else if (opcao === 3) {
        return '129,75';
      }
    } else if (this.value <= 25000) {
      if (opcao === 1) {
        return '100,93';
      } else if (opcao === 2) {
        return '115,93';
      } else if (opcao === 3) {
        return '140,83';
      }
    } else if (this.value <= 30000) {
      if (opcao === 1) {
        return '109,04';
      } else if (opcao === 2) {
        return '124,04';
      } else if (opcao === 3) {
        return '148,94';
      }
    } else if (this.value <= 35000) {
      if (opcao === 1) {
        return '119,94';
      } else if (opcao === 2) {
        return '134,94';
      } else if (opcao === 3) {
        return '159,84';
      }
    } else if (this.value <= 40000) {
      if (opcao === 1) {
        return '131,99';
      } else if (opcao === 2) {
        return '146,99';
      } else if (opcao === 3) {
        return '171,89';
      }
    } else if (this.value <= 45000) {
      if (opcao === 1) {
        return '149,89';
      } else if (opcao === 2) {
        return '164,89';
      } else if (opcao === 3) {
        return '189,79';
      }
    } else if (this.value <= 50000) {
      if (opcao === 1) {
        return '175,78';
      } else if (opcao === 2) {
        return '190,78';
      } else if (opcao === 3) {
        return '215,78';
      }
    } else if (this.value <= 55000) {
      if (opcao === 1) {
        return '188,41';
      } else if (opcao === 2) {
        return '203,41';
      } else if (opcao === 3) {
        return '228,41';
      }
    } else if (this.value <= 60000) {
      if (opcao === 1) {
        return '199,72';
      } else if (opcao === 2) {
        return '214,72';
      } else if (opcao === 3) {
        return '239,72';
      }
    } else if (this.value <= 65000) {
      if (opcao === 1) {
        return '219,50';
      } else if (opcao === 2) {
        return '234,50';
      } else if (opcao === 3) {
        return '259,50';
      }
    } else if (this.value <= 70000) {
      if (opcao === 1) {
        return '239,21';
      } else if (opcao === 2) {
        return '254,21';
      } else if (opcao === 3) {
        return '279,21';
      }
    } else if (this.value <= 75000) {
      if (opcao === 1) {
        return '256,17';
      } else if (opcao === 2) {
        return '271,17';
      } else if (opcao === 3) {
        return '296,17';
      }
    } else if (this.value <= 80000) {
      if (opcao === 1) {
        return '273,45';
      } else if (opcao === 2) {
        return '288,45';
      } else if (opcao === 3) {
        return '313,45';
      }
    } else if (this.value <= 85000) {
      if (opcao === 1) {
        return '289,99';
      } else if (opcao === 2) {
        return '304,99';
      } else if (opcao === 3) {
        return '329,99';
      }
    } else if (this.value <= 90000) {
      if (opcao === 1) {
        return '319,41';
      } else if (opcao === 2) {
        return '334,41';
      } else if (opcao === 3) {
        return '359,41';
      }
    } else if (this.value <= 95000) {
      if (opcao === 1) {
        return '334,88';
      } else if (opcao === 2) {
        return '349,88';
      } else if (opcao === 3) {
        return '374,88';
      }
    } else {
      if (opcao === 1) {
        return '376,14';
      } else if (opcao === 2) {
        return '391,14';
      } else if (opcao === 3) {
        return '416,14';
      }
    }
    return '0,00';
  }

  returnMotoValue(opcao: number): string {
    if (this.value <= 5000) {
      if (opcao === 1) {
        return '50.99';
      } else if (opcao === 2) {
        return '65.99';
      }
    } else if (this.value <= 7500) {
      if (opcao === 1) {
        return '70.99';
      } else if (opcao === 2) {
        return '85.99';
      }
    } else if (this.value <= 10000) {
      if (opcao === 1) {
        return '79.99';
      } else if (opcao === 2) {
        return '94.99';
      }
    } else if (this.value <= 12500) {
      if (opcao === 1) {
        return '91.99';
      } else if (opcao === 2) {
        return '106.99';
      }
    } else if (this.value <= 15000) {
      if (opcao === 1) {
        return '101.99';
      } else if (opcao === 2) {
        return '116.99';
      }
    } else if (this.value <= 17500) {
      if (opcao === 1) {
        return '117.99';
      } else if (opcao === 2) {
        return '132.99';
      }
    } else if (this.value <= 20000) {
      if (opcao === 1) {
        return '129.99';
      } else if (opcao === 2) {
        return '144.99';
      }
    } else if (this.value <= 25000) {
      if (opcao === 1) {
        return '157.45';
      } else if (opcao === 2) {
        return '172.45';
      }
    } else if (this.value <= 30000) {
      if (opcao === 1) {
        return '185.67';
      } else if (opcao === 2) {
        return '200.67';
      }
    } else if (this.value <= 40000) {
      if (opcao === 1) {
        return '213.89';
      } else if (opcao === 2) {
        return '228.89';
      }
    } else if (this.value <= 50000) {
      if (opcao === 1) {
        return '241.89';
      } else if (opcao === 2) {
        return '256.89';
      }
    } else if (this.value <= 60000) {
      if (opcao === 1) {
        return '279.54';
      } else if (opcao === 2) {
        return '294.54';
      }
    }
    return '0';
  }
  returnUrlIcon(): any {
    switch (this.detalhes.type) {
      case 1:
        return '../../../assets/car-side-svgrepo-com.svg';
      case 2:
        return '../../../assets/truck-svgrepo-com.svg';
      case 3:
        return '../../../assets/motorbike-svgrepo-com.svg';
      case 4:
        return '../../../assets/bicycle-svgrepo-com.svg';
      case 5:
        return '../../../assets/enclosed-trailer.svg';
    }
  }
  returnCarretaValue(): string {
    if (this.value <= 1000000) {
      return '151.20';
    } else if (this.value <= 2000000) {
      return '163.80';
    } else if (this.value <= 3000000) {
      return '176.40';
    } else if (this.value <= 4000000) {
      return '189.00';
    } else if (this.value <= 5000000) {
      return '201.60';
    } else if (this.value <= 6000000) {
      return '214.20';
    } else if (this.value <= 7000000) {
      return '226.80';
    } else if (this.value <= 8000000) {
      return '239.40';
    } else if (this.value <= 9000000) {
      return '252.00';
    } else if (this.value <= 10000000) {
      return '264.69';
    } else if (this.value <= 11000000) {
      return '277.20';
    } else if (this.value <= 12000000) {
      return '289.80';
    } else if (this.value <= 13000000) {
      return '302.40';
    } else if (this.value <= 14000000) {
      return '315.00';
    } else if (this.value <= 15000000) {
      return '327.60';
    } else if (this.value <= 16000000) {
      return '340.20';
    } else if (this.value <= 17000000) {
      return '352.80';
    } else if (this.value <= 18000000) {
      return '365.40';
    } else if (this.value <= 19000000) {
      return '378.00';
    } else if (this.value <= 20000000) {
      return '390.60';
    }
    return '0;';
  }
  returnBikeValue(): string {
    if (this.value <= 240000) {
      return '22.00';
    } else if (this.value <= 290000) {
      return '24.00';
    } else if (this.value <= 340000) {
      return '24.50';
    } else if (this.value <= 390000) {
      return '26.50';
    } else if (this.value <= 440000) {
      return '30.00';
    } else if (this.value <= 490000) {
      return '35.00';
    } else if (this.value <= 540000) {
      return '37.00';
    } else if (this.value <= 590000) {
      return '40.00';
    } else if (this.value <= 640000) {
      return '42.00';
    } else if (this.value <= 690000) {
      return '44.00';
    } else if (this.value <= 740000) {
      return '45.50';
    } else if (this.value <= 790000) {
      return '47.00';
    } else if (this.value <= 840000) {
      return '49.00';
    } else if (this.value <= 890000) {
      return '51.00';
    } else if (this.value <= 940000) {
      return '52.50';
    } else if (this.value <= 990000) {
      return '54.00';
    } else if (this.value <= 1040000) {
      return '55.50';
    } else if (this.value <= 1090000) {
      return '57.00';
    } else if (this.value <= 1140000) {
      return '58.50';
    } else if (this.value <= 1190000) {
      return '59.40';
    } else if (this.value <= 1240000) {
      return '60.20';
    } else if (this.value <= 1290000) {
      return '61.00';
    } else if (this.value <= 1340000) {
      return '61.90';
    } else if (this.value <= 1390000) {
      return '62.60';
    } else if (this.value <= 1440000) {
      return '63.15';
    } else if (this.value <= 1490000) {
      return '64.65';
    } else if (this.value <= 1540000) {
      return '65.00';
    } else if (this.value <= 1590000) {
      return '65.50';
    } else if (this.value <= 1640000) {
      return '66.00';
    } else if (this.value <= 1690000) {
      return '68.00';
    } else if (this.value <= 1740000) {
      return '69.50';
    } else if (this.value <= 1790000) {
      return '71.00';
    } else if (this.value <= 1840000) {
      return '73.00';
    } else if (this.value <= 1890000) {
      return '74.50';
    } else if (this.value <= 1940000) {
      return '76.00';
    } else if (this.value <= 1990000) {
      return '78.00';
    } else if (this.value <= 2040000) {
      return '79.50';
    } else if (this.value <= 2090000) {
      return '81.00';
    } else if (this.value <= 2140000) {
      return '83.50';
    } else if (this.value <= 2190000) {
      return '85.00';
    } else if (this.value <= 2240000) {
      return '87.00';
    } else if (this.value <= 2290000) {
      return '90.00';
    } else if (this.value <= 2340000) {
      return '92.00';
    } else if (this.value <= 2390000) {
      return '93.50';
    } else if (this.value <= 2440000) {
      return '95.00';
    } else if (this.value <= 2490000) {
      return '97.00';
    } else if (this.value <= 2540000) {
      return '98.60';
    } else if (this.value <= 2590000) {
      return '99.90';
    } else if (this.value <= 2640000) {
      return '102.00';
    } else if (this.value <= 2690000) {
      return '103.50';
    } else if (this.value <= 2740000) {
      return '105.00';
    } else if (this.value <= 2790000) {
      return '107.00';
    } else if (this.value <= 2840000) {
      return '109.00';
    } else if (this.value <= 2890000) {
      return '112.00';
    } else if (this.value <= 2950000) {
      return '115.00';
    } else if (this.value <= 3000000) {
      return '118.00';
    } else if (this.value <= 4000000) {
      return '213.89';
    } else if (this.value <= 5000000) {
      return '241.89';
    }
    return '0';
  }
  returnCaminhaoValue(opcao: number): string {
    if (this.value <= 50000) {
      if (opcao === 1) {
        return '323.44';
      } else if (opcao === 2) {
        return '423.44';
      }
    } else if (this.value <= 80000) {
      if (opcao === 1) {
        return '465.11';
      } else if (opcao === 2) {
        return '565.11';
      }
    } else if (this.value <= 100000) {
      if (opcao === 1) {
        return '499.87';
      } else if (opcao === 2) {
        return '599.87';
      }
    } else if (this.value <= 120000) {
      if (opcao === 1) {
        return '460.75';
      } else if (opcao === 2) {
        return '559.75';
      }
    } else if (this.value <= 140000) {
      if (opcao === 1) {
        return '536.17';
      } else if (opcao === 2) {
        return '635.17';
      }
    } else if (this.value <= 160000) {
      if (opcao === 1) {
        return '596.93';
      } else if (opcao === 2) {
        return '695.93';
      }
    } else if (this.value <= 180000) {
      if (opcao === 1) {
        return '657.71';
      } else if (opcao === 2) {
        return '756.71';
      }
    } else if (this.value <= 200000) {
      if (opcao === 1) {
        return '731.28';
      } else if (opcao === 2) {
        return '830.28';
      }
    }
    return '0';
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
