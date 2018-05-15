import { Component, OnInit } from "@angular/core";
import { MatSnackBar } from "@angular/material";
import { Store } from "@ngxs/store";

@Component({
  selector: "app-snackbar-manager",
  templateUrl: "./snackbar-manager.component.html",
  styleUrls: ["./snackbar-manager.component.css"]
})
export class SnackbarManagerComponent implements OnInit {
  constructor(public snackBar: MatSnackBar, private store: Store) {}

  ngOnInit() {
    setTimeout(this.openSnackBar, 100);
  }

  openSnackBar(message: string = "HEEEEY", action: string = "OK") {
    console.log(message, action);
    // this.snackBar.open(message, action, {
    //   duration: 2000
    // });
  }
}
