import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
} from '@angular/core';

@Component({
  selector: 'pm-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css'],
})
export class StarComponent implements OnInit, OnChanges {
  @Input() rating: number; // pass data to container
  @Output() ratingClicked: EventEmitter<number>;
  starWidth: number;
  fiveStarsWIdth: number;
  /**
   *
   */
  constructor() {
    this.fiveStarsWIdth = 75;
    this.ratingClicked = new EventEmitter<number>();
  }

  clickedFn(): void {
    this.ratingClicked.emit(this.rating);
  }

  ngOnInit(): void {}

  ngOnChanges(): void {
    this.starWidth = (this.rating * this.fiveStarsWIdth) / 5;
  }
}
