import { Component, OnInit, Input, HostBinding } from "@angular/core";
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: "app-block",
  templateUrl: "./block.component.html",
  styleUrls: ["./block.component.scss"]
})
export class BlockComponent implements OnInit {
  constructor (private sanitizer: DomSanitizer) {}

  ngOnInit() {}

  @Input()
  split: boolean;
  @Input()
  showIcon: boolean;
  @Input()
  backgroundColor: string = '';
  @Input()
  textColor: string = '';
  @Input()
  textAlign: string = '';
  @Input()
  fontStyle: string = '';
  @Input()
  secondaryTextColor: string = '';
  @Input()
  secondaryTextAlign: string = '';
  @Input()
  secondaryFontStyle: string = '';

  @HostBinding("attr.style")
  public get colorsAsStyle(): any {
    let value = '';
    if (this.textColor) {
      value += `--text-color: ${this.textColor};`;
    } else {
      value += '--text-color: #778796;';
    }
    if (this.secondaryTextColor) {
      value += `--secondary-text-color: ${this.secondaryTextColor};`;
    } else {
      value += '--secondary-text-color: #778796;';
    }
    if (this.backgroundColor) {
      value += `--background-color: ${this.backgroundColor};`;
    } else {
      value += '--background-color: #f5f7f9;';
    }
    if (this.textAlign) value += `--text-align: ${this.textAlign};`;
    if (this.fontStyle) value += `--text-font-style: ${this.fontStyle};`;
    if (this.secondaryTextAlign) value += `--secondary-text-align: ${this.secondaryTextAlign};`;
    if (this.secondaryFontStyle) value += `--secondary-text-font-style: ${this.secondaryFontStyle};`;
    return this.sanitizer.bypassSecurityTrustStyle(value);
  }
}
