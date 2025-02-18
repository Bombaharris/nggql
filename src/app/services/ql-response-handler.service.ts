import { NzNotificationService } from 'ng-zorro-antd/notification';
import { MutationResult } from 'apollo-angular';
import { BehaviorSubject, Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export default class QlResponseHandlerService {
  constructor(private notification: NzNotificationService) {}

  handleResponse<T extends MutationResult>(loading$: BehaviorSubject<boolean>) {
    return (observable: Observable<T>) => {
      return new Observable<T>((subscriber) => {
        const subscription = observable.subscribe({
          next: (result) => {
            if (result.errors) {
              result.errors.forEach((error) => console.error(error.message));
              this.notification.create(
                'error',
                'Error',
                result.errors.reduce(
                  (acc, current) => (acc += `${current.message}\n`),
                  '',
                ),
              );
            }

            subscriber.next(result);
          },
          error: (error) => {
            console.error(error);
            this.notification.create('error', 'Error', error.toString());

            subscriber.error(error);
          },
          complete: () => {
            subscriber.complete();
          },
        });

        return () => {
          loading$.next(false);
          subscription.unsubscribe();
        };
      });
    };
  }
}
