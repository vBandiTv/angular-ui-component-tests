import { Component, Input, HostBinding, ElementRef, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-tootlip',
  templateUrl: './tootlip.component.html',
  styleUrls: ['./tootlip.component.scss']
})
export class TootlipComponent  {

  id = '_' + Math.random().toString(36).substr(2, 9);

  @Input()
  text: string;

  @Input()
  tooltipText: string;

  @Input()
  diraction: string;

  @Input()
  backgroundColor: string;

  @Input()
  textColor: string;

  @Input()
  shadow: boolean = false;

  constructor (private sanitizer: DomSanitizer, private el: ElementRef) {}

  @HostBinding("attr.style")
  public get colorsAsStyle(): any {
    let value = '';
    if (this.textColor) {
      value += `--text-color: ${this.textColor};`;
    } else {
      value += '--text-color: rgb(255, 255, 255);';
    }
    if (this.backgroundColor) {
      value += `--background-color: ${this.backgroundColor};`;
    } else {
      value += '--background-color: rgb(97, 97, 97);';
    }
    if (this.shadow) value += '--shadow: 0px 2px 12px 0px rgba(43, 50, 69, 0.3)'
    return this.sanitizer.bypassSecurityTrustStyle(value);
  }

  // ngOnInit () {
  //   console.log('width - ' + this.el.nativeElement.firstElementChild.offsetWidth)
  //   console.log('width 2 - ', document.getElementById(this.id).offsetWidth)
  // }

  ngAfterViewInit () {
    console.log('width - ' + this.el.nativeElement.firstElementChild.offsetWidth)
    console.log('width 2 - ', document.getElementById(this.id).offsetWidth)
  }

  testClick () {
    console.log('width - ' + this.el.nativeElement.offsetWidth)
    console.log('width 2 - ', document.getElementById(this.id).offsetWidth)
  }


  setDiraction (dir: string) : string {
    if (dir) {
      return 'otm-tooltip--' + dir;
    } else return 'otm-tooltip';
  }

}