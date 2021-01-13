import { IActivity } from "../models/activity.model";
import { ICoordinator, ICoordinatorResponse } from "../models/coordinator.model";
import { ICredentials } from "../models/credentials.model";
import { IEvent } from "../models/event.model";
import { IGroupedDropdown } from "../models/inputs.model";

export const mockedEvent: IEvent = {
    id: 0,
    title: 'Test Event',
    description: 'Test Description',
    category_id: 0,
    paid_event: false,
    event_fee: 0,
    reward: 0,
    date: '',
    duration: 5,
    coordinator: {
        email: 'test@test.com',                                                      
        id: 'test',
    },
};

export const mockedEventsArray: IEvent[] = [
    mockedEvent, 
    { ...mockedEvent, id: 1, title: 'Second Test Event' }, 
    { ...mockedEvent, id: 2, title: 'Third Event' }
];

export const mockedInitialEvents: Map<number, IEvent> = new Map([
    [0, mockedEvent],
    [1, { ...mockedEvent, id: 1, title: 'Second Test Event' }],
    [2, { ...mockedEvent, id: 2, title: 'Third Event' }],
]);

export const mockedEventsAfterDelete: Map<number, IEvent> = new Map([
    [0, mockedEvent],
    [2, { ...mockedEvent, id: 2, title: 'Third Event' }],
]);

export const mockedEventsAfterUpdate: Map<number, IEvent> = new Map([
    [0, mockedEvent],
    [1, { ...mockedEvent, id: 1, title: 'Updated Test Event' }],
    [2, { ...mockedEvent, id: 2, title: 'Third Event' }],
]);

export const mockedActivitiesArray: IActivity[] = [
    { id: 0, name: 'Test Activity 1' },
    { id: 1, name: 'Test Activity 2' },
];

export const mockedActivitiesArrayWithDefault: IActivity[] = [
    { id: 'unselected', name: 'Select Category' },
    { id: 0, name: 'Test Activity 1' },
    { id: 1, name: 'Test Activity 2' },
];

export const mockedActivitiesMap: Map<number | string, IActivity> = new Map<number | string, IActivity>([
    ['unselected', { id: 'unselected', name: 'Select Category' }],
    [0, { id: 0, name: 'Test Activity 1' }],
    [1, { id: 1, name: 'Test Activity 2' }],
]);

export const mockedCoordinatorsArray: ICoordinatorResponse[] = [
    { id: 0, name: 'Test_1', lastname: 'Coordinator_1',  email: 'test_1@test.test' },
    { id: 1, name: 'Test_2', lastname: 'Coordinator_2',  email: 'test_2@test.test' },
    { id: 2, name: 'Test_3', lastname: 'Coordinator_3',  email: 'test_3@test.test' },
];

export const mockedCoordinatorsMap: Map<number, ICoordinator> = new Map([
    [0, { id: 0, name: 'Test_1 Coordinator_1', email: 'test_1@test.test' }],
    [1, { id: 1, name: 'Test_2 Coordinator_2', email: 'test_2@test.test' }],
    [2, { id: 2, name: 'Test_3 Coordinator_3', email: 'test_3@test.test' }],
]);

export const mockedSerializedCoordinatorsArray: ICoordinator[] = [
    { id: 0, name: 'Test_1 Coordinator_1',  email: 'test_1@test.test' },
    { id: 1, name: 'Test_2 Coordinator_2',  email: 'test_2@test.test' },
    { id: 2, name: 'Test_3 Coordinator_3',  email: 'test_3@test.test' },
];

export const mockedCoordinatorSelfGroup: ICredentials[] = [
    { id: 0, name: 'Me - Test_1 Coordinator_1' },
  ];

export const mockedCoordinatorsOthersGroup: ICredentials[] = [
    { id: 1, name: 'Test_2 Coordinator_2' },
    { id: 2, name: 'Test_3 Coordinator_3' },
];

export const mockedGroupedCoordinators: IGroupedDropdown<ICredentials>[] = [
    { groupName: 'Me', options: mockedCoordinatorSelfGroup }, 
    { groupName: 'Others', options: mockedCoordinatorsOthersGroup },
];
