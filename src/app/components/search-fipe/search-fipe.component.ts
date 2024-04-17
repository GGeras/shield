import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FipeService } from 'src/app/services/fipe.service';
interface Accordion {
  id: number;
  title: string;
}
@Component({
  selector: 'app-search-fipe',
  templateUrl: './search-fipe.component.html',
  styleUrls: ['./search-fipe.component.scss'],
})
export class SearchFipeComponent implements OnInit {
  @Output() setDetails: EventEmitter<any> = new EventEmitter();
  @Output() setValue: EventEmitter<any> = new EventEmitter();
  marcas!: any[];
  modelos!: any[];
  anos!: any[];
  detalhes: any;
  valueNumber: any = 'R$';
  value!: number;
  isDisabled: boolean = true;
  url: string = 'https://parallelum.com.br/fipe/api/v1/carros/marcas';
  accordionExpanded: number | null = null;
  accordionHovered: number | null = null;
  marcaId!: number;
  modeloId!: number;
  anoId!: number;
  accordions: Accordion[] = [
    { id: 1, title: 'Consulta de Carros e Utilitários Pequenos' },
    { id: 2, title: 'Consulta de Caminhões e Micro-Ônibus' },
    { id: 3, title: 'Consulta de Motos' },
    { id: 4, title: 'Consulta de Bicicletas' },
    { id: 5, title: 'Consulta de Carretas' },
  ];

  constructor(private fipeService: FipeService) {}

  ngOnInit(): void {
    this.buscarMarcas();
  }

  hoverAccordionHeader(hover: boolean, accordionId: number) {
    if (hover) {
      this.accordionHovered = accordionId;
    } else {
      this.accordionHovered = null;
    }
  }


  toggleAccordion(accordionId: number): void {
    switch (accordionId) {
      case 1:
        this.url = 'https://parallelum.com.br/fipe/api/v1/carros/marcas';
        break;
      case 2:
        this.url = 'https://parallelum.com.br/fipe/api/v1/caminhoes/marcas';
        break;
      case 3:
        this.url = 'https://parallelum.com.br/fipe/api/v1/motos/marcas';
        break;
    }
    this.clearValues();
    this.buscarMarcas();
    this.valueNumber = 'R$';
    if (this.accordionExpanded === accordionId) {
      this.accordionExpanded = null;
    } else {
      this.accordionExpanded = accordionId;
    }
  }

  clearValues(): void {
    this.modelos = [];
    this.anos = [];
    this.detalhes = null;
  }

  buscarMarcas(): void {
    this.fipeService.getMarcas(this.url).subscribe((data) => {
      this.marcas = data;
    });
  }

  returnUrlIcon(id: number): any {
    switch (id) {
      case 0:
        return '../assets/car-side-svgrepo-com.svg';
      case 1:
        return '../assets/truck-svgrepo-com.svg';
      case 2:
        return '../assets/motorbike-svgrepo-com.svg';
      case 3:
        return '../assets/bicycle-svgrepo-com.svg';
      case 4:
        return '../assets/enclosed-trailer.svg';
    }
  }

  buscarModelos(marcaCodigo: any, accordionId: number): void {
    this.marcaId = marcaCodigo.target.value;
    if (marcaCodigo.target.value) {
      this.fipeService
        .getModelos(this.url, marcaCodigo.target.value)
        .subscribe((data) => {
          this.modelos = data.modelos;
          this.anos = [];
          this.detalhes = null;
        });
    } else {
      this.modelos = [];
      this.anos = [];
      this.detalhes = null;
    }
  }

  buscarAnos(modeloCodigo: any): void {
    this.modeloId = modeloCodigo.target.value;
    if (modeloCodigo.target.value) {
      this.fipeService
        .getAnos(this.url, this.marcaId.toString(), modeloCodigo.target.value)
        .subscribe((data) => {
          this.anos = data;
          this.detalhes = null;
        });
    } else {
      this.anos = [];
      this.detalhes = null;
    }
  }

  buscarDetalhes(anoCodigo: any): void {
    this.anoId = anoCodigo.target.value;
    if (anoCodigo.target.value) {
      this.fipeService
        .getDetalhes(
          this.url,
          this.marcaId.toString(),
          this.modeloId.toString(),
          anoCodigo.target.value
        )
        .subscribe((data) => {
          this.detalhes = data;
          console.log('dataaa', data);
          const numeroSemSimbolo = data.Valor.replace('R$', '')
            .replace('.', '')
            .replace(',', '.');
          this.value = parseFloat(numeroSemSimbolo);
          switch (this.accordionExpanded) {
            case 1:
              this.detalhes.type = 1;
              break;
            case 2:
              this.detalhes.type = 2;
              break;
            case 3:
              this.detalhes.type = 3;
              break;
          }
          this.setValue.emit(this.value);
          this.setDetails.emit(this.detalhes);
          console.log(this.value);
        });
    } else {
      this.detalhes = null;
    }
  }

  returnIcon(acordionId: number): string {
    switch (acordionId) {
      case this.accordionHovered:
        return '../assets/down-dourado-svgrepo-com.svg';
      case this.accordionExpanded:
        return '../assets/down-dourado-svgrepo-com.svg';
      default:
        return '../assets/down-chevron-svgrepo-com.svg';
    }
  }
  atualizarDetalhes(event: any) {
    console.log(event);
  }
  consultar() {
    let newValue = this.valueNumber
      .replace('R$', '')
      .replace('.', '')
      .replace(',', '');
    console.log('newValue', newValue);
    this.setValue.emit(newValue);

    this.setDetails.emit({ type: this.accordionExpanded });
  }

  change(): void {
    console.log(this.valueNumber);
    let value = this.valueNumber.replace('R$', '').replace('.', '').replace(',', '');
    console.log('value', value);
    if (this.accordionExpanded === 4) {
      if (value >= 120000 && value <= 3000000) {
        this.isDisabled = false;
      } else {
        this.isDisabled = true;
      }
    } else if (this.accordionExpanded === 5) {
      if (value >= 1000000 && value <= 20000000) {
        this.isDisabled = false;
      } else {
        this.isDisabled = true;
      }
    } else {
      this.isDisabled = false;
    }
  }
  isAccordionActive(id: number): boolean {
    return this.accordionExpanded === id;
  }

  isAccordionWithSelects(id: number): boolean {
    return id === 1 || id === 2 || id === 3;
  }
}
