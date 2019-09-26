/*import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor() { }
}
*/
import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class MenuService{
  public  menupage = new EventEmitter();
}