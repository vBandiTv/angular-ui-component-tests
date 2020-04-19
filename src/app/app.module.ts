import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { CollapseComponent } from './collapse/collapse.component';
import { ChipsComponent } from './chips/chips.component';
import { BlockComponent } from './block/block.component';
import { ButtonComponent } from './button/button.component';
import { LoaderComponent } from './loader/loader.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, CollapseComponent, ChipsComponent, BlockComponent, ButtonComponent, LoaderComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
