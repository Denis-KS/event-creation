import { isInteger } from 'lodash';

export function getTitleFromUrl(path: string) {
    if (path === '/') return 'Events';

    const splitedPath = [...path.split('/').splice(1)];
    if (splitedPath.length === 1 && isInteger(+splitedPath[0])) return 'Event Overview';
    else if (splitedPath[splitedPath.length - 1] === 'new-event') return 'New Event';
    else if (isInteger(+splitedPath[splitedPath.length - 1]) && splitedPath[splitedPath.length - 2] === 'update-event') return 'Edit Event';
    else return 'Events';
}