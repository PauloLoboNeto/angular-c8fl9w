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
  public async loadFile() {
    let codeReader = new BrowserQRCodeReader();
    let result = await codeReader.decodeFromImageUrl('/assets/chart.png').then();
    console.info(result + 'a');
  }
}
/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
