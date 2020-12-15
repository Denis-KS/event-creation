import { fetchActivities, fetchCoordinators } from "../api/fetches";
import { Dispatch, setActivitiesAction, setCoordinatorsAction } from "./actions";

export const getActivitiesThunk = () => (dispatch: Dispatch) => fetchActivities()
    .then(result => dispatch(setActivitiesAction(result)));

export const getCoordinatorsThunk = () => (dispatch: Dispatch) => fetchCoordinators()
    .then(result => dispatch(setCoordinatorsAction(result)));