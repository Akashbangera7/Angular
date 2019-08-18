import { Component, OnInit } from '@angular/core';
import{Hero} from '../hero';
import{HEROES} from '../mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  selectedHero :Hero;
  
  heroes = HEROES;
  constructor() { }

  ngOnInit() {
  }
  onSelect(hero : Hero) :void{

    this.selectedHero = hero;
  }
  ClickEvent(event) { 
   
    //just added console.log which will display the event details in browser on click of the button.
    alert("hero selected");
    console.log(event);
 }
}
