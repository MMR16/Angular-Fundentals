
import { Component } from "@angular/core";

// Decorator Function used above Class to add meta data to this class [define class as component or module ......]
@Component({
  selector: 'pm-root',                       // Name of the component when used as directive 
  templateUrl: './app.component.html',       // HTML Code 
  styleUrls: ['./app.component.css']        // CSS Styles of this component
})
// @Component({selector:'app-root',template:"<h1>{{title}}</h1>",styles:['*{color:red}']})
export class AppComponent {
  title = 'MMR';
}
// @Component({
//   selector:"app-root",template:"<h1>MMR</h1>"
// })
// export class AppComponent{
// title:string="MMR"

// }