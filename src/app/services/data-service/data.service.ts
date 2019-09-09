import { Injectable } from '@angular/core';
import ItemModel from 'src/app/models/item.model';
import {from} from 'rxjs';


const data: ItemModel[] = [
  Object.assign(new ItemModel(), {id: 1, type: 'Сиамский', name: 'Барсик'}),
  Object.assign(new ItemModel(), {id: 2, type: 'Норвежский', name: 'Мурзик'}),
  Object.assign(new ItemModel(), {id: 3, type: 'Обычный', name: 'Мурка'}),
  Object.assign(new ItemModel(), {id: 4, type: 'Ориентальный', name: 'Пушок'}),
  Object.assign(new ItemModel(), {id: 5, type: 'Сиамский', name: 'Барсик'}),
  Object.assign(new ItemModel(), {id: 6, type: 'Русский голубой', name: 'Длиннокот'}),
  Object.assign(new ItemModel(), {id: 7, type: 'Сиамский', name: 'Клеопатра Джесика Пушильда Принцесса Первая'}),
  Object.assign(new ItemModel(), {id: 8, type: 'Обычный', name: 'Варежка'}),
  Object.assign(new ItemModel(), {id: 9, type: 'Ориентальный', name: 'Бармалей'}),
  Object.assign(new ItemModel(), {id: 10, type: 'Сиамский', name: 'Муся'}),
];

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  getData() {
    return from(data);
  }
}
