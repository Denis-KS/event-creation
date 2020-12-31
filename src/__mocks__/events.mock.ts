import { IActivity } from "../models/activity.model";
import { ICoordinator } from "../models/coordinator.model";
import { IEvent } from "../models/event.model";

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

export const mockedEventsArray: IEvent[] = [mockedEvent, { ...mockedEvent, id: 1 }, { ...mockedEvent, id: 2 }];

export const mockedInitialEvents: Map<number, IEvent> = new Map([
    [0, mockedEvent],
    [1, { ...mockedEvent, id: 1 }],
    [2, { ...mockedEvent, id: 2 }],
]);

export const mockedEventsAfterDelete: Map<number, IEvent> = new Map([
    [0, mockedEvent],
    [2, { ...mockedEvent, id: 2 }],
]);

export const mockedEventsAfterUpdate: Map<number, IEvent> = new Map([
    [0, mockedEvent],
    [1, { ...mockedEvent, id: 1, title: 'Updated Test Event' }],
    [2, { ...mockedEvent, id: 2 }],
]);

export const mockedActivity: IActivity = { id: 0, name: 'Test Activity' };

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
    ['unselected', {id: 'unselected', name: 'Select Category'}],
    [0, { id: 0, name: 'Test Activity 1' }],
    [1, { id: 1, name: 'Test Activity 2' }],
]); 

export const mockedCoordinator: ICoordinator = { id: 0, name: 'Test', lastname: 'Coordinator',  email: 'test@test.test' };