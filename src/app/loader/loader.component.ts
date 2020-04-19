import { Component, OnInit, Input, HostBinding } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css']
})
export class LoaderComponent {

  @Input()
  color: string
  @Input()
  size: string

  private sizes: any = {s: '3vw', m: '4.5vw', l: '7vw'}

  constructor (private sanitizer: DomSanitizer) {
    this.color = '#ffffff';
    this.size = 'm';
  }

  @HostBinding("attr.style")
  public get colorsAsStyle(): any {
    let value = `--color: ${this.color};`;
    value += `--size: ${this.sizes[this.size]}`
    return this.sanitizer.bypassSecurityTrustStyle(value);
  }

}