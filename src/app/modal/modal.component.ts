import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  modal: boolean

  openModal () {
    this.modal = !this.modal;
  }

  modalActive () {
    return this.modal ? 'active' : '';
  }

}