import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QLFilterBuilderService {
  condition: any = {
    where: {
      AND: []
    }
  };

  constructor() { }

  andWhere(relation: string, field: string, cond: string | number| Array<string | number>) {
    let params = this.prepareConditions(relation, field, cond)
    this.condition.where.AND = this.condition.where.AND.concat(params);
  }

  connectWhere<T>(nodeProperty: string, cond: string | number | T | Array<string | number | T>): object {
    let params = [];
    if (Array.isArray(cond)) {
      params = cond.map((sId: string | number| T) => {
        return {
          where: {
            node: {
              [nodeProperty]: sId
            }
          }
        };
      });
    } else {
      params.push({
        where: {
          node: {
            [nodeProperty]: cond
          }
        }
      });
    }
    return params;
  }

  clearAndWhere() :void {
    this.condition.where.AND = [];
  }

  getVariables(): object {
    return this.condition;
  }

  private prepareConditions(relation: string, field: string, cond: string | number| Array<string | number>) {
    let params = [];

    switch (typeof cond) {
      case 'object':
        params = cond ? cond.map((c) => { return {[relation]:  {[field]: c}} }  ) : [];
        break;
      case 'string':
      case 'number':
      default:
        params.push({[relation]: {[field]: cond }} );
        break;
    }

    return params;
  }
}
