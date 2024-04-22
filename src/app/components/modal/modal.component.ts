import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  @Output() showModalChange = new EventEmitter<boolean>();
  @Input() showModal: boolean = false;
  @Input() msg!: string;

  constructor() { }

  ngOnInit() {
  }

}
