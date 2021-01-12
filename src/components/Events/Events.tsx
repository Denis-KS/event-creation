import React, { useCallback, useEffect } from "react";
import { batch, useDispatch, useSelector } from "react-redux";
import { getActivitiesSelector, getCoordinatorsSelector, getEventsArraySelector, getSearchQuerySelector } from "../../store/selectors";
import { getActivitiesThunk, getCoordinatorsThunk, getEventsThunk } from "../../store/thunks";
import { isEmpty } from 'lodash';
import { useHistory } from "react-router";
import { Routes } from "../../App";
import { EventsList } from "./EventsList";
import { FlexBox } from "../styled/Box/FlexBox";
import { eraseSearchQueryAction, setSearchQueryAction } from "../../store/actions";
import { SearchInput } from "../inputs/SearchInput";

export const Events: React.FC = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const events = useSelector(getEventsArraySelector);
    const searchQuery = useSelector(getSearchQuerySelector);
    const categoriesMap = useSelector(getActivitiesSelector);
    const coordinatorsMap = useSelector(getCoordinatorsSelector);

    const handleCreateEventClick = useCallback(() => {
        history.push(Routes.CREATE_EVENT);
    }, [history]);

    const handleSearchInput = useCallback(({ target: { value } }) => {
        dispatch(setSearchQueryAction(value));
    }, [dispatch]);

    const handleEraseSearchClick = useCallback(() => {
        dispatch(eraseSearchQueryAction());
    }, [dispatch]);

    const renderPlaceholder = useCallback(() => {
        const placeholderText = !isEmpty(searchQuery) 
            ? 'No Results' 
            : 'There are no events yet';

            return <div>{placeholderText}</div>
    }, [searchQuery]);

    useEffect(() => {
        // todo fix batching
        batch(() => {
            dispatch(getEventsThunk());
            dispatch(getActivitiesThunk());
            dispatch(getCoordinatorsThunk());
        });
    }, [dispatch]);

    return(
        <div data-testid="events">
            <FlexBox justifyContent="space-between" margin="0 0 20px 0">
                <SearchInput onChange={handleSearchInput} onErase={handleEraseSearchClick} value={searchQuery} />
                <button onClick={handleCreateEventClick}>Create Event</button>
            </FlexBox>
            
            {!isEmpty(events) 
                ? <EventsList events={events} coordinatorsMap={coordinatorsMap} categoriesMap={categoriesMap} />
                : renderPlaceholder()
            }
        </div>
    );
}