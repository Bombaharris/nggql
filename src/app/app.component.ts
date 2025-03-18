import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { pluck, tap } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(httpClient: HttpClient) {
    console.log('calling constructor of app component', httpClient);
    httpClient
      .post(
        'http://localhost:4000/login',
        {
          token:
            'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.e30.8VKCTiBegJPuPIZlp0wbV0Sbdn5BS6TE5DCx6oYNc5o',
        },
        {
          withCredentials: true,
        },
      )
      .pipe(tap(console.log), pluck('token'))
      .subscribe();
  }
}
