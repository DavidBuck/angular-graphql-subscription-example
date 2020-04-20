import { NgModule } from '@angular/core';
import { ApolloModule, APOLLO_OPTIONS } from 'apollo-angular';
import { HttpLinkModule, HttpLink } from 'apollo-angular-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { WebSocketLink } from 'apollo-link-ws';
import { ApolloClient } from 'apollo-client';

@NgModule({
  exports: [ApolloModule, HttpLinkModule],
  providers: [
    {
      provide: APOLLO_OPTIONS,
      useFactory: () => {
        return new ApolloClient({
          cache: new InMemoryCache(),
          link: new WebSocketLink({
            uri: 'ws://localhost:4000/',
            options: {
              reconnect: true
            }
          })
        });
      },
      deps: [HttpLink]
    }
  ]
})
export class GraphQLModule {}
