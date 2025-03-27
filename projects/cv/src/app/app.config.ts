import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { en_US, NZ_I18N } from 'ng-zorro-antd/i18n';
import { GraphQLModule } from './graphql.module';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    { provide: NZ_I18N, useValue: en_US },
    importProvidersFrom(GraphQLModule),
  ],
};
