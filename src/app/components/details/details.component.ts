import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent {
  @Output() out: EventEmitter<any> = new EventEmitter(); 
  @Input() detalhes!: any;
  @Input() value!: number;
  constructor() {}

  returnValue(opcao: number): string {
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
}
