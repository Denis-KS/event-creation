import { isEmpty } from "lodash";
import React, { useCallback } from "react";
import { IEvent } from "../../models/event.model";
import { Event } from "./Event";

export interface IEventsListProps {
    events: IEvent[];
}

export const EventsList: React.FC<IEventsListProps> = ({ events }) => {

    //TODO change logic for storing and getting of coordinators and activities
    const renderEvent = useCallback((event: IEvent) => {
        return (
            <Event event={event} coordinator="" category="" key={event.id}> 

            </Event>
        );
    }, []);

    return !isEmpty(events) 
        ? (<div data-testid="events-list">
            { events.map(renderEvent) }
        </div>) 
        : null;
};