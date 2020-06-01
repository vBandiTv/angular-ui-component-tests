import { Component } from '@angular/core';

@Component({
  selector: 'app-drag-and-drop',
  templateUrl: './drag-and-drop.component.html',
  styleUrls: ['./drag-and-drop.component.scss']
})
export class DragAndDropComponent {

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