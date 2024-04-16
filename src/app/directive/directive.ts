import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[formatoNumerico]'
})
export class FormatoNumericoDirective {

  constructor(private el: ElementRef<HTMLInputElement>) { }

  @HostListener('input', ['$event.target.value'])
  onInput(value: string) {
    const numericValue = this.extractNumericValue(value);
    const formattedValue = this.formatNumber(numericValue);
    this.el.nativeElement.value = formattedValue;
  }

  private extractNumericValue(value: string): string {
    return value.replace(/\D/g, '');
  }

  private formatNumber(value: string): string {
    const amountWithDecimals = parseFloat(value) / 100; // divide por 100 para representar os centavos
    const formattedValue = this.formatNumberWithCurrency(amountWithDecimals);
    return formattedValue;
  }

  private formatNumberWithCurrency(value: number): string {
    if (isNaN(value)) {
      return '';
    }
    const numberFormat = new Intl.NumberFormat('pt-BR', { minimumFractionDigits: 2 });
    return 'R$ ' + numberFormat.format(value);
  }
}