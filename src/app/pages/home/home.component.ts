import { Component, OnInit } from '@angular/core';
import { 
  faSortAlphaDown,
  faPoundSign,
  faStar,
} from '@fortawesome/free-solid-svg-icons';

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
      icon:  faSortAlphaDown,
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
  constructor() { }

  ngOnInit() {
    this.setFilter(0);
  }

  setFilter(index){
    this.itemsMenus.map(item => { 
      item.active = false; 
      return item;
    });
    this.itemsMenus[index].active = true;
  }

}
