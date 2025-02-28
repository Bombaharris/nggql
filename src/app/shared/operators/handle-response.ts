import { MutationResult } from 'apollo-angular';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

export default function handleResponse<T extends MutationResult>(
  loading$: BehaviorSubject<boolean>,
  error$: Subject<string>,
) {
  return (observable: Observable<T>) => {
    return new Observable<T>((subscriber) => {
      const subscription = observable.subscribe({
        next: (result) => {
          if (result.errors) {
            result.errors.forEach((error) => {
              error$.next(error.message);
              subscriber.error(error);
            });
          } else {
            subscriber.next(result);
            loading$.next(false);
          }
        },
        error: (error) => {
          error$.next(error?.toString() ?? 'Unknown error');
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
