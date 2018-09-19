import { Component } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  query = '';
  list = [];

  constructor(private appService: AppService){}

  doSearch() {
    this.appService.doSearch(this.query)
      .subscribe(response => this.list = (<any>response).hits);
  }
}
