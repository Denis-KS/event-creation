import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getEventsArraySelector } from "../../store/selectors";
import { getEventsThunk } from "../../store/thunks";
import { isEmpty } from 'lodash';
import { useHistory } from "react-router";
import { Routes } from "../../App";

export const Events: React.FC = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const events = useSelector(getEventsArraySelector);

    const handleCreateEventClick = useCallback(() => {
        history.push(Routes.CREATE_EVENT);
    }, [history]);

    useEffect(() => {
        dispatch(getEventsThunk());
    }, [dispatch]);

    return(
        <div data-testid="events">
            <input data-testid="search-input" />
            <button onClick={handleCreateEventClick}>Create Event</button>
            {!isEmpty(events) 
                ? <div data-testid="events-list"></div>
                : <div>There are no events yet</div>
            }
        </div>
    );
}