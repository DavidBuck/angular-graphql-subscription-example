import { Component, OnInit } from '@angular/core';
import { GraphqlServerService } from './graphql-server.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  data: Observable<any>;

  constructor(private dataService: GraphqlServerService) {}

  ngOnInit() {
    this.data = this.dataService.getData().pipe(map(({ data }) => data.sensor));
  }
}
