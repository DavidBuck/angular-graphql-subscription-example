import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import gql from 'graphql-tag';
import { Apollo } from 'apollo-angular';

@Injectable({
  providedIn: 'root'
})
export class GraphqlServerService {
  private query: any;

  constructor(private apollo: Apollo) {}

  getData(): Observable<any> {
    this.query = gql`
      subscription {
        sensor {
          time
          temp
          humidity
        }
      }
    `;

    return this.apollo.subscribe({
      query: this.query,
      fetchPolicy: 'no-cache'
    });
  }
}
