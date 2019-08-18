import {Component, OnInit} from '@angular/core';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  selectedFile = null;
  url: string;
  height = 0;
  width = 0;
  showTextObject = false;
  dragObjectId: string;
  constructor() {
  }
  ngOnInit() {
  }
  addImage(event) {
    this.selectedFile = event.target.files[0];
    console.log(event);
    if (event.target.files[0]) {
      var reader = new FileReader();
      reader.onload = (event: any) => {
        this.url = event.target.result;
      };
      this.url = event.target.files[0];
      reader.readAsDataURL(event.target.files[0]);
      this.height = 200;
      this.width = 200;
    }
  }
  addTextArea() {
    this.showTextObject = true;
  }
  drag(event) {
    event.dataTransfer.setData('text', event.target.id);
    this.dragObjectId = event.target.id;
    console.log(event.target.id);
  }
  allowDrop(event) {
    event.preventDefault();
  }
  drop(event) {
    event.preventDefault();
    /*let data = event.dataTransfer.getData('text');*/
    // let el = document.getElementById('dragImage');
    let el = document.getElementById(this.dragObjectId);
    el.style.left = event.pageX + 'px';
    el.style.top = event.pageY + 'px';
    // event.target.appendChild(document.getElementById(data));
  }
}
