import { Component } from "@angular/core";
import { BrowserQRCodeReader } from "@zxing/library";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  constructor(){
    this.loadFile();
  }
  public loadFile() {
    let codeReader = new BrowserQRCodeReader();
    
    let result =  codeReader.decodeFromImage(undefined, '/assets/chart.png')
     .then((result: any) => console.log(result))
     .catch(result => console.log(result));
    
  }
}
/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
