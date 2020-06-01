import { Component, Input, HostBinding, Output, EventEmitter } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {

  constructor (private sanitizer: DomSanitizer) {
    this.footerAlign = 'left';
    this.headerColor = '#ecf1f5';
    this.headerTextColor = '#383f52';
  }

  readonly footerAlignKeys: any = {right: 'flex-start', center: 'center', left: 'flex-end'}

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
  @Input()
  headless: boolean
  @Input()
  footerAlign: string
  @Input()
  headerColor: string
  @Input()
  headerTextColor: string
  @Input()
  smallModal: boolean
  @Input()
  backgroundClose: boolean

  @HostBinding('class') class = 'modal';
  @HostBinding("attr.style")
  public get varAsStyle(): any {
    let value = `--footer-align: ${this.footerAlignKeys[this.footerAlign]};`;
    value += `--header-color: ${this.headerColor};`;
    value += `--header-text-color: ${this.headerTextColor};`;
    value += '--modal-max-size: ' + (this.smallModal ? '30%' : '90%') + ';';
    return this.sanitizer.bypassSecurityTrustStyle(value);
  }

  backgroundEvent () {
    this.modal = false;
  }

}