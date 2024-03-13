import { Component, Input, OnInit } from "@angular/core";

import { Product } from "../../products";
import { iphones } from "../../iphone";
import { googlePixel } from "../../googlePixel";
import { samsung } from "../../samsung";
import { others } from "../../others";

@Component({
  selector: "app-product-items",
  templateUrl: "./product-items.component.html",
  styleUrl: "./product-items.component.css",
})
export class ProductItemsComponent implements OnInit {
  @Input() selectedTabId: string | undefined;
  mainCatalog: Product[] | undefined;
  stars: string = "";

  ngOnInit() {
    this.mainCatalog = [...iphones];
  }
  ngOnChanges(): void {
    this.render();
  }

  render() {
    if (this.selectedTabId === "1") {
      this.mainCatalog = [...iphones];
    } else if (this.selectedTabId === "2") {
      this.mainCatalog = [...samsung];
    } else if (this.selectedTabId === "3") {
      this.mainCatalog = [...googlePixel];
    } else {
      this.mainCatalog = [...others];
    }
  }

  likeUp(product: Product) {
    product.like++;
  }

  starMaker(count: number): string {
    this.stars = "";
    for (let i = 0; i < Math.round(count); i++) {
      this.stars += "⭐";
    }
    return this.stars;
  }

  share(product: Product): void {
    const shareLink = product.link;
    const shareMessage = `Check out this product: ${shareLink}`;
    const encodedMessage = encodeURIComponent(shareMessage);
    const telegramLink = `https://t.me/share/url?url=${shareLink}&text=${encodedMessage}`;
    window.open(telegramLink, "_blank");
  }

  delete(id: number) {
    this.mainCatalog = this.mainCatalog?.filter((item) => item.id !== id);  
  }
}
