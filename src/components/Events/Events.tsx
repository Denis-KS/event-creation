import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getEventsArraySelector, getSearchQuerySelector } from "../../store/selectors";
import { getEventsThunk } from "../../store/thunks";
import { isEmpty } from 'lodash';
import { useHistory } from "react-router";
import { Routes } from "../../App";
import { EventsList } from "./EventsList";
import { FlexBox } from "../styled/Box/FlexBox";
import { setSearchQueryAction } from "../../store/actions";

export const Events: React.FC = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const events = useSelector(getEventsArraySelector);
    const searchQuery = useSelector(getSearchQuerySelector);

    const handleCreateEventClick = useCallback(() => {
        history.push(Routes.CREATE_EVENT);
    }, [history]);

    const handleSearchInput = useCallback(({ target: { value } }) => {
        dispatch(setSearchQueryAction(value));
    }, [dispatch]);

    useEffect(() => {
        dispatch(getEventsThunk());
    }, [dispatch]);

    return(
        <div data-testid="events">
            <FlexBox justifyContent="space-between" margin="0 0 20px 0">
                <input data-testid="search-input" onChange={handleSearchInput} value={searchQuery} />
                <button onClick={handleCreateEventClick}>Create Event</button>
            </FlexBox>
            
            {!isEmpty(events) 
                ? <EventsList events={events} />
                : <div>There are no events yet</div>
            }
        </div>
    );
}