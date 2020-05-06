import { Component } from "@angular/core";
import { BrowserQRCodeReader } from "@zxing/library";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  public loadFile(i: any) {
    const file = i.target.files[0];
    console.info(i, file);
    let codeReader = new BrowserQRCodeReader();
    // let img = document.getElementById("file");
    let result;
    try {
      result = codeReader.decodeFromImage(file);
    } catch (err) {
      console.error(err);
    }
    console.log(result);
  }
}
/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
