import { Component, OnInit } from '@angular/core';
import {
  faSortAlphaDown,
  faPoundSign,
  faStar,
} from '@fortawesome/free-solid-svg-icons';

import { DataService } from '../../core/services/data.service';
import { Item } from '../../shared/models/item';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  itemsMenus = [
    {
      name: 'alphabetically',
      type: 'name',
      icon: faSortAlphaDown,
      active: false,
    },
    {
      name: 'price',
      type: 'price',
      icon: faPoundSign,
      active: false,
    },
    {
      name: 'start rating',
      type: 'star',
      icon: faStar,
      active: false,
    }
  ]
  items: Array<Item>;
  selected: string = 'name';

  constructor(
    private service: DataService,
  ) { }

  ngOnInit() {
    this.setFilter(0);
    this.items = this.service.getItems()
  }

  setFilter(index) {
    this.itemsMenus.map(item => {
      item.active = false;
      return item;
    });
    this.selected = this.itemsMenus[index].type;
    this.itemsMenus[index].active = true;
  }

}
