import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SubscribeService {

  constructor() {}

  onSubscribe() {
    alert(`Thank you for subscribing`);
  }
}
