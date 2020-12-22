import { fetchActivities, fetchCoordinators, fetchEvents } from "../api/fetches";
import { Dispatch, setActivitiesAction, setCoordinatorsAction, setEventsAction } from "./actions";

export const getEventsThunk = () => (dispatch: Dispatch) => fetchEvents()
    .then(result => dispatch(setEventsAction('data' in result ? result.data : result)));

export const getActivitiesThunk = () => (dispatch: Dispatch) => fetchActivities()
    .then(result => dispatch(setActivitiesAction(result)));

export const getCoordinatorsThunk = () => (dispatch: Dispatch) => fetchCoordinators()
    .then(result => dispatch(setCoordinatorsAction(result)));