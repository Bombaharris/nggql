import { BehaviorSubject, Observable, Subject, Subscriber } from 'rxjs';
import { MutationResult } from 'apollo-angular';
import handleResponse from './handle-response';
import { GraphQLError } from 'graphql/error';
import createSpy = jasmine.createSpy;

describe('test QLResponseHandler service', () => {
  const isLoading$ = new BehaviorSubject(false);
  const error$ = new Subject<string>();
  let observable: Observable<MutationResult>;
  let subscriber: Subscriber<MutationResult>;

  beforeEach(() => {
    observable = new Observable<MutationResult>(
      (argSubscriber) => (subscriber = argSubscriber),
    ).pipe(handleResponse(isLoading$, error$));
  });

  afterEach(() => {
    expect(isLoading$.value).toBe(false);
  });

  it('should stream regular data', (done) => {
    observable.subscribe(({ data }) => {
      expect(data).toEqual({ test: 'test' });
      done();
    });

    subscriber.next({ data: { test: 'test' }, loading: true });
    subscriber.complete();
  });
  it('should stream gql error', (done) => {
    error$.subscribe((error) => {
      expect(error).toEqual('error');
      done();
    });
    observable.subscribe({
      error: () => {},
    });

    subscriber.next({
      errors: [new GraphQLError('error')],
      data: {},
      loading: false,
    });
    subscriber.complete();
  });
  it('should stream observable error', (done) => {
    observable.subscribe({
      next: () => {},
      error: (error) => {
        expect(error).toEqual('error');
        done();
      }
    });

    subscriber.error('error');
    subscriber.complete();
  });
  it('should stream complete()', () => {
    const completeSpy = createSpy();
    observable.subscribe({
      complete: completeSpy,
    });

    subscriber.complete();

    expect(completeSpy).toHaveBeenCalled();
  });
});
