import { Component } from '@angular/core';

@Component({
  selector: 'app-dnd',
  templateUrl: './dnd.component.html',
  styleUrls: ['./dnd.component.scss']
})
export class DndComponent {

  files: any[] = [];


  onFileDropped($event) {
    console.log($event)
    this.prepareFilesList($event);
  }


  fileBrowseHandler(files) {
    console.log(files)
    this.prepareFilesList(files);
  }

  
  prepareFilesList(files: Array<any>) {
    for (const item of files) {
      this.files.push(item);
    }
    console.log(this.files)
  }


}