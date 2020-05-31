import { Component, Input, HostBinding, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {


  @HostBinding('class') class = 'modal'

  _modal: boolean
  @Input()
  set modal (value: boolean) {
    this._modal = value;
    this.modalChange.emit(value);
  }

  get modal (): boolean {
    return this._modal
  }
  @Output()
  modalChange: EventEmitter<boolean> = new EventEmitter();

  @Input()
  top: boolean
  @Input()
  title: string

}