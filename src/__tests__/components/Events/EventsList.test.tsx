import { render, screen } from "@testing-library/react";
import React from "react";
import { EventsList, IEventsListProps } from "../../../components/Events/EventsList";
import { mockedActivitiesMap, mockedCoordinatorsMap, mockedEventsArray } from "../../../__mocks__/events.mock";

function setupComponent(props: IEventsListProps): void {
    render(<EventsList {...props}/>);
}

describe('EventsList', () => {
    let mockedProps: IEventsListProps;

    beforeEach(() => {
        mockedProps = {
            events: mockedEventsArray,
            coordinatorsMap: mockedCoordinatorsMap,
            categoriesMap: mockedActivitiesMap
        };
    });

    test('should render list of events', async () => {
        setupComponent(mockedProps);

        expect(await screen.findAllByTestId('event')).toHaveLength(3);
    });

    test('should not render anything if list is empty', () => {
        mockedProps.events = [];
        setupComponent(mockedProps);

        expect(screen.queryByTestId('events-list')).toBeNull();
    });
});