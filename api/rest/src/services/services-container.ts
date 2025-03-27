type InjectionToken<Args extends any[], Return> = new (...args: Args) => Return;

export class ServicesContainer {
  private services: WeakMap<InjectionToken<any[], any>, any> = new WeakMap();

  bootstrap<Args extends any[], Return>(
    token: InjectionToken<Args, Return>,
    ...args: Args
  ) {
    const instance = new token(...args);
    this.services.set(token, instance);
    return instance;
  }

  get<Return>(token: InjectionToken<any[], Return>): Return {
    return this.services.get(token);
  }

  static instance = new ServicesContainer();
}
