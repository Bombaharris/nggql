import { Injectable } from '@angular/core';
import { CreateInfo, DeleteInfo, UpdateInfo } from '../generated/graphql';

type ResponseDataInfo = CreateInfo | UpdateInfo | DeleteInfo;

enum ResponseMessageType {
  Created = 'Created',
  Updated = 'Updated',
  Deleted = 'Deleted',
  Connect = 'Connected',
  Disconnect = 'Disconnected',
}

@Injectable({
  providedIn: 'root',
})
export class QlResponseMessageBuilderService {
  buildMessage(info: ResponseDataInfo, subjectNames: [singular: string, plural: string],) {
    switch(info.__typename) {
      case 'CreateInfo':
        return this.buildCreatedMessage(info, subjectNames);
      case 'UpdateInfo':
        return this.buildUpdatedMessage(info, subjectNames);
      case 'DeleteInfo':
        return this.buildDeletedMessage(info, subjectNames);
    }

    return '';
  }

  buildCreatedMessage(
    info: CreateInfo,
    subjectNames: [singular: string, plural: string],
  ) {
    return (
      this.join(
        this.buildFromTemplate(
          ResponseMessageType.Created,
          info.nodesCreated,
          subjectNames,
        ),
        this.buildFromTemplate(
          ResponseMessageType.Connect,
          info.relationshipsCreated,
          ['other node', 'other nodes'],
          'together',
        ),
      ) + 'successfully'
    );
  }

  buildUpdatedMessage(
    info: UpdateInfo,
    subjectNames: [singular: string, plural: string],
  ) {
    return (
      this.join(
        this.buildFromTemplate(
          ResponseMessageType.Updated,
          info.nodesCreated,
          subjectNames,
        ),
        this.buildFromTemplate(
          ResponseMessageType.Connect,
          info.relationshipsCreated,
          ['other node', 'other nodes'],
          'together',
        ),
        this.buildFromTemplate(
          ResponseMessageType.Deleted,
          info.nodesDeleted,
          subjectNames,
        ),
        this.buildFromTemplate(
          ResponseMessageType.Disconnect,
          info.relationshipsDeleted,
          ['other node', 'other nodes'],
          'together',
        ),
      ) + 'successfully'
    );
  }

  buildDeletedMessage(
    info: DeleteInfo,
    subjectNames: [singular: string, plural: string],
  ) {
    return (
      this.join(
        this.buildFromTemplate(
          ResponseMessageType.Deleted,
          info.nodesDeleted,
          subjectNames,
        ),
        this.buildFromTemplate(
          ResponseMessageType.Disconnect,
          info.nodesDeleted,
          ['other node', 'other nodes'],
          'together',
        ),
      ) + 'successfully'
    );
  }

  buildFromTemplate(
    action: ResponseMessageType,
    count: number,
    subjectNames: [singular: string, plural: string],
    suffix = '',
  ) {
    return `${action} ${count} ${this.getSubjectName(
      subjectNames,
      count,
    )} ${suffix}`;
  }

  getSubjectName(
    [singular, plural]: [singular: string, plural: string],
    count: number,
  ) {
    return count === 1 ? singular : plural;
  }

  join(...messages: string[]) {
    if (messages.length < 2) {
      return messages[0] ?? '';
    }

    const lastMessage = messages.pop();
    return messages.join(', ') + ` and ${lastMessage}`;
  }
}
