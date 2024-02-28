import { Component, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-product-list",
  templateUrl: "./product-list.component.html",
  styleUrls: ["./product-list.component.css"],
})
export class ProductListComponent {
  tabId: string = "1";

  addClass(event: MouseEvent): void {
    const target = event.currentTarget as HTMLElement;
    this.tabId = target.id;
    this.removeClass();
    target.classList.add("tab_active");
  }

  removeClass(): void {
    let parent = document.querySelectorAll(".tab");
    if (parent) {
      parent.forEach((item) => {
        item.classList.remove("tab_active");
      });
    }
  }
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
