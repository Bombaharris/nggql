import { Injectable } from '@angular/core';
import { difference } from '../shared/set-utils';

@Injectable({
  providedIn: 'root',
})
export class QLFilterBuilderService {
  condition: any = {
    where: {
      AND: [],
    },
  };

  constructor() {}

  andWhere(
    relation: string,
    field: string,
    cond: string | number | Array<string | number>,
  ) {
    let params = this.prepareConditions(relation, field, cond);
    this.condition.where.AND = this.condition.where.AND.concat(params);
  }

  connectWhere<T>(
    nodeProperty: string,
    cond: string | number | T | Array<string | number | T>,
    single: boolean = false,
  ): object {
    if (single) {
      return {
        where: {
          node: {
            [nodeProperty]: cond,
          },
        },
      };
    }
    let params = [];
    if (Array.isArray(cond)) {
      params = cond.map((sId: string | number | T) => {
        return {
          where: {
            node: {
              [nodeProperty]: sId,
            },
          },
        };
      });
    } else {
      params.push({
        where: {
          node: {
            [nodeProperty]: cond,
          },
        },
      });
    }
    return params;
  }

  clearAndWhere(): void {
    this.condition.where.AND = [];
  }

  getVariables(): object {
    return this.condition;
  }

  updateArrayFieldQuery(
    oldValues: any[],
    newValues: any[],
    nodeProperty: string,
  ) {
    const { connect, disconnect } = this.toConnectAndDisconnectQuery(
      oldValues,
      newValues,
    );

    return {
      connect: this.connectWhere(nodeProperty, connect),
      disconnect: this.connectWhere(nodeProperty, disconnect),
    };
  }

  toConnectAndDisconnectQuery(oldValues: any[], newValues: any[]) {
    const newSet = new Set(newValues);
    const oldSet = new Set(oldValues);

    return {
      connect: Array.from(difference(newSet, oldSet)),
      disconnect: Array.from(difference(oldSet, newSet)),
    };
  }

  private prepareConditions(
    relation: string,
    field: string,
    cond: string | number | Array<string | number>,
  ) {
    let params = [];

    switch (typeof cond) {
      case 'object':
        params = cond
          ? cond.map((c) => {
              return { [relation]: { [field]: c } };
            })
          : [];
        break;
      case 'string':
      case 'number':
      default:
        params.push({ [relation]: { [field]: cond } });
        break;
    }

    return params;
  }
}
