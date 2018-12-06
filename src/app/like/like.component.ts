import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-like",
  templateUrl: "./like.component.html",
  styleUrls: ["./like.component.scss"]
})
export class LikeComponent implements OnInit {
  @Input() isLiked = false;
  textLike = "Non mi Piace!";

  clickedLike(ev: MouseEvent, numero) {
    console.log("cliccato Like!", this.isLiked);
    this.isLiked = !this.isLiked;
    console.log("dopo click", this.isLiked, ev.x, ev.y);

    if (!this.isLiked) {
      this.textLike = "Non mi Piace.";
    } else {
      this.textLike = "Mi piace!";
    }

    ev.preventDefault();
  }
  constructor() {}

  ngOnInit() {}
}
