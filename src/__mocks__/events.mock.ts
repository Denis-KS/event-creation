import { IEvent } from "../models/event.model";

export const mockedEvent: IEvent = {
    id: 0,
    title: 'Test Event',
    description: '',
    category_id: 0,
    paid_event: false,
    event_fee: 0,
    reward: 0,
    date: '',
    duration: 0,
    coordinator: {
        email: 'test@test.com',                                                      
        id: 'test',
    },
};