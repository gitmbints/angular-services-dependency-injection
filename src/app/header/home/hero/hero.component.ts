import { Component } from '@angular/core';
import { SubscribeService } from 'src/app/services/subscribe.service';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {
  constructor(private subscribeService: SubscribeService) { }
  
  handleSubscribe() {
    this.subscribeService.onSubscribe();
  }
}
