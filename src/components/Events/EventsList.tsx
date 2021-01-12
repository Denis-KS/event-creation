import { isEmpty } from "lodash";
import React, { useCallback } from "react";
import { IActivity } from "../../models/activity.model";
import { ICoordinator } from "../../models/coordinator.model";
import { IEvent } from "../../models/event.model";
import { Event } from "./Event";

export interface IEventsListProps {
    events: IEvent[];
    coordinatorsMap: Map<number, ICoordinator>;
    categoriesMap: Map<string | number, IActivity>;
    deleteEvent: (id: number) => void;
}

export const EventsList: React.FC<IEventsListProps> = ({ 
    events, 
    categoriesMap = new Map(), 
    coordinatorsMap = new Map(),
    deleteEvent,
}) => {

    const renderEvent = useCallback((event: IEvent) => {
        return (
            <Event 
                event={event} 
                coordinator={coordinatorsMap.get(event.id)?.name} 
                category={categoriesMap.get(event.id)?.name} key={event.id}
                deleteEvent={deleteEvent}
            />
        );
    }, [coordinatorsMap, categoriesMap]);

    return !isEmpty(events) 
        ? (<div data-testid="events-list">
            { events.map(renderEvent) }
        </div>) 
        : null;
};