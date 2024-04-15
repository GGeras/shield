import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[formatoNumerico]'
})
export class FormatoNumericoDirective {

    constructor(private el: ElementRef) { }

    @HostListener('input', ['$event.target.value'])
    onInput(value: string) {
      const numericValue = value.replace(/\D/g, '');
      const formattedValue = 'R$ ' + this.formatarNumerico(numericValue);
      this.el.nativeElement.value = formattedValue;
    }
  
    private formatarNumerico(value: string): string {
      if (!value) {
        return '';
      }
      const numberFormat = new Intl.NumberFormat('pt-BR');
      return numberFormat.format(parseInt(value));
    }

}