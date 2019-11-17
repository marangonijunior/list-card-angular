import { Injectable } from '@angular/core';
import { Item } from '../../shared/models/item'

@Injectable({
  providedIn: 'root'
})
export class DataService {

  listItems:Array<Item> = [
    {
      image: 'assets/hotel-image-1.png',
      name: 'Iberostar Grande Salome',
      address: 'Costa Adere Tenerife',
      star: 5,
      passengers: {
          adults: 2,
          childrens: 1,
          infant: 1,
      },
      date: new Date('07-03-2019'),
      days: 7,
      departing: 'East Midland',
      price: 1136.5,
      details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Et malesuada fames ac turpis egestas. Elementum facilisis leo vel fringilla est ullamcorper eget nulla facilisi. ',
    },
    {
      image: 'assets/hotel-image-2.png',
      name: 'Aquamarine Golf Hotel',
      address: 'Costa Adere Tenerife',
      star: 4,
      passengers: {
          adults: 2,
          childrens: 1,
          infant: 0,
      },
      date: new Date('05-27-2019'),
      days: 7,
      departing: 'Liverpool',
      price: 696.8,
      details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Et malesuada fames ac turpis egestas. Elementum facilisis leo vel fringilla est ullamcorper eget nulla facilisi. ',
    },
    {
      image: 'assets/hotel-image-3.png',
      name: 'Las Piramides Resort',
      address: 'Costa Adere Tenerife',
      star: 3,
      passengers: {
          adults: 2,
          childrens: 2,
          infant: 0,
      },
      date: new Date('05-27-2019'),
      days: 7,
      departing: 'Manchester',
      price: 499.99,
      details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Et malesuada fames ac turpis egestas. Elementum facilisis leo vel fringilla est ullamcorper eget nulla facilisi. ',
    }
  ];

  constructor() { }

  getItems():Array<Item> {
    return this.listItems;
  }

}
