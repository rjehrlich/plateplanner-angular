import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-grocerylist',
  templateUrl: './grocerylist.component.html',
  styleUrls: ['./grocerylist.component.css']
})
export class GrocerylistComponent  implements OnInit {
  // declare ingredients array to handle query parameter of ingredient names
  ingredients: string[] = [];

  // allow access to current route queries
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    // subscribe to query observable that activateroute gives
    this.route.queryParamMap.subscribe(params => {
      // get that value of ingredients query parameter and assign to a variable
      const ingredientNames = params.get('ingredients');
        // if there are ingredients, then split them and assign to ingredient variable array
        if (ingredientNames) {
          this.ingredients = ingredientNames.split(',');
        }
    });
  }

}
