import { Component } from '@angular/core';

@Component({
  selector: 'app-dnd',
  templateUrl: './dnd.component.html',
  styleUrls: ['./dnd.component.scss']
})
export class DndComponent {

 files: any[] = [];

  /**
   * on file drop handler
   */
  onFileDropped($event) {
    console.log($event)
    this.prepareFilesList($event);
  }

  /**
   * handle file from browsing
   */
  fileBrowseHandler(files) {
    console.log(files)
    this.prepareFilesList(files);
  }

  prepareFilesList(files: Array<any>) {
    for (const item of files) {
      // item.progress = 0;
      this.files.push(item);
    }
    console.log(this.files)
    // this.uploadFilesSimulator(0);
  }


}