import { fetchActivities } from "../api/fetches";
import { Dispatch, setActivitiesAction } from "./actions";

// export const getActivitiesThunk = () => (dispatch: Dispatch) => {
//     fetchActivities().then(result => dispatch(setActivitiesAction(result)));
// };