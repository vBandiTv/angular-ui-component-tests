import { Component, OnInit, Input } from '@angular/core';

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

  @Input()
  top: boolean
  @Input()
  title: string

  openModal () {
    this.modal = !this.modal;
  }

}