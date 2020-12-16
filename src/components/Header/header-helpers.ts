import { isInteger } from 'lodash';

export const headerTargetMap = {
    home: 'Events',
    overview: 'Event Overview',
    create: 'New Event',
    update: 'Edit Event'
};

export function getTargetFromPath(path: string) {
    if (path === '/') return 'home';

    const splitedPath = [...path.split('/').splice(1)];
    if (splitedPath.length === 1 && isInteger(+splitedPath[0])) return 'overview';
    else if (splitedPath[splitedPath.length - 1] === 'new-event') return 'create';
    else if (isInteger(+splitedPath[splitedPath.length - 1]) && splitedPath[splitedPath.length - 2] === 'update-event') return 'update';
    else return 'home';
}