import { Component, OnInit, Input, HostBinding, ElementRef } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { trigger, style, animate, transition } from '@angular/animations';

@Component({
  animations: [
    trigger(
      'fadeEnterAnimation', [
        transition(':enter', [
          style({'opacity': '0'}),
          animate('0.5s ease', style({'opacity': '1'}))
        ])
      ]
    )
  ],
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent{

  @Input()
  disabled: boolean
  @Input()
  textColor: string
  @Input()
  backgroundColor: string
  @Input()
  flat: boolean
  @Input()
  outline: boolean
  @Input()
  text: string
  @Input()
  set loading (val: boolean) {
    this.dynamicWidth = val ? this.el.nativeElement.offsetWidth + 'px' : 'auto';
    this._loading = val;
  }

  get loading (): boolean {
    return this._loading
  }

  dynamicWidth: string
  private _loading: boolean

  @HostBinding("attr.style")
  public get colorsAsStyle(): any {
    let value = `--text-color: ${this.textColor};`;
    if (!this.flat && !this.outline) {
      value += `--background-color: ${this.backgroundColor}; --box-shadowing: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12);`
    }
    value += this.outline ? `--border: 1px solid ${this.textColor}` : '--border: none';
    return this.sanitizer.bypassSecurityTrustStyle(value);
  }

  constructor (private sanitizer: DomSanitizer, private el: ElementRef) {
    this.textColor = 'rgb(255, 255, 255)';
    this.backgroundColor = 'rgb(33, 150, 243)';
  }

}