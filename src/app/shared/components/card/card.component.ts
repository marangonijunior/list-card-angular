import { Component, OnInit, Input } from '@angular/core';
import { Item } from '../../../shared/models/item';
import {
  faArrowDown,
  faArrowRight,
  faStar,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  faArrowDown = faArrowDown;
  faArrowRight = faArrowRight;
  faStar = faStar;

  @Input() item: Array<Item> = [];

  constructor() { }

  ngOnInit() {
    this.item['active'] = false;
  }

  showMore() {
    this.item['active'] = !this.item['active'];
  }

}
