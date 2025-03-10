import { TestBed } from '@angular/core/testing';
import {
  QlResponseMessageBuilderService,
  ResponseMessageType,
} from './ql-response-message-builder.service';

describe('test QLResponseMessageBuilder service', () => {
  let service: QlResponseMessageBuilderService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [QlResponseMessageBuilderService],
    });
    service = TestBed.inject(QlResponseMessageBuilderService);
  });

  it('should return correct subject name version', () => {
    expect(service.getSubjectName(['a', 'b'], 1)).toEqual('a');
    expect(service.getSubjectName(['a', 'b'], 2)).toEqual('b');
    expect(service.getSubjectName(['a', 'b'], 0)).toEqual('b');
    expect(service.getSubjectName(['a', 'b'], 5)).toEqual('b');
  });
  it('should join strings with correct conjunctives', () => {
    expect(service.join()).toEqual('');
    expect(service.join('a')).toEqual('a');
    expect(service.join('a', 'b')).toEqual('a and b');
    expect(service.join('a', 'b', 'c')).toEqual('a, b and c');
    expect(service.join('a', 'b', 'c', 'd')).toEqual('a, b, c and d');
  });
  it('should build message from template', () => {
    expect(
      service.buildFromTemplate(ResponseMessageType.Created, 1, ['a', 'b']),
    ).toEqual('Created 1 a');
    expect(
      service.buildFromTemplate(ResponseMessageType.Updated, 2, ['a', 'b']),
    ).toEqual('Updated 2 b');
    expect(
      service.buildFromTemplate(
        ResponseMessageType.Deleted,
        2,
        ['a', 'b'],
        'or c',
      ),
    ).toEqual('Deleted 2 b or c');
  });
  it('should build message for delete action', () => {
    const message = service.buildDeletedMessage(
      {
        __typename: 'DeleteInfo',
        nodesDeleted: 1,
        relationshipsDeleted: 2,
      },
      ['a', 'b'],
    );

    expect(
      ['Deleted', 'Disconnected', '1', '2', 'a', 'other nodes'].map((word) =>
        message.includes(word),
      ),
    ).toEqual([true, true, true, true, true, true]);
  });
  it('should build message for update action', () => {
    const message = service.buildUpdatedMessage(
      {
        __typename: 'UpdateInfo',
        nodesDeleted: 1,
        relationshipsDeleted: 2,
        nodesCreated: 2,
        relationshipsCreated: 1,
      },
      ['a', 'b'],
    );

    expect(
      [
        'Updated',
        'Connected',
        '1',
        '2',
        'a',
        'b',
        'other node',
        'other nodes',
      ].map((word) => message.includes(word)),
    ).toEqual([true, true, true, true, true, true, true, true]);
  });
  it('should build message for create action', () => {
    const message = service.buildCreatedMessage(
      {
        __typename: 'CreateInfo',
        nodesCreated: 2,
        relationshipsCreated: 1,
      },
      ['a', 'b'],
    );

    expect(
      ['Created', 'Connected', '1', '2', 'b', 'other node'].map((word) =>
        message.includes(word),
      ),
    ).toEqual([true, true, true, true, true, true]);
  });
  it('should call specific methods when calling buildMessage facade method', () => {
    const buildCreatedMessage = spyOn(service, 'buildCreatedMessage').and.callThrough();
    const buildUpdatedMessage = spyOn(service, 'buildUpdatedMessage').and.callThrough();
    const buildDeletedMessage = spyOn(service, 'buildDeletedMessage').and.callThrough();

    service.buildMessage(
      { __typename: 'CreateInfo', nodesCreated: 0, relationshipsCreated: 0 },
      ['a', 'b'],
    );
    service.buildMessage(
      {
        __typename: 'UpdateInfo',
        nodesCreated: 0,
        relationshipsCreated: 0,
        nodesDeleted: 0,
        relationshipsDeleted: 0,
      },
      ['c', 'd'],
    );
    service.buildMessage(
      { __typename: 'DeleteInfo', nodesDeleted: 0, relationshipsDeleted: 0 },
      ['e', 'f'],
    );

    expect(buildCreatedMessage).toHaveBeenCalled();
    expect(buildCreatedMessage.calls.mostRecent().args[1]).toEqual(['a', 'b']);
    expect(buildUpdatedMessage).toHaveBeenCalled();
    expect(buildUpdatedMessage.calls.mostRecent().args[1]).toEqual(['c', 'd']);
    expect(buildDeletedMessage).toHaveBeenCalled();
    expect(buildDeletedMessage.calls.mostRecent().args[1]).toEqual(['e', 'f']);
  });
});
