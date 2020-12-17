import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getEventsArraySelector } from "../../store/selectors";
import { getEventsThunk } from "../../store/thunks";
import { isEmpty } from 'lodash';

export const Events: React.FC = () => {
    const dispatch = useDispatch();
    const events = useSelector(getEventsArraySelector);

    console.log(events);

    useEffect(() => {
        dispatch(getEventsThunk());
    }, [dispatch]);

    return(
        <div data-testid="events">
            {!isEmpty(events) 
                ? <div data-testid="events-list"></div>
                : <div>There are no events yet</div>
            }
        </div>
    );
}