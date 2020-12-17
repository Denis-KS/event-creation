import { getTitleFromUrl } from "../../components/Header/header-helpers";

describe('getTitleFromUrl', () => {
    test('should return "Events" as title on a home route', () => {
        expect(getTitleFromUrl('/')).toBe('Events');
    });

    test('should return "Event Overview" as title on event overview route', () => {
        expect(getTitleFromUrl('/1')).toBe('Event Overview');
    });

    test('should return "New Event" as title on creating new event route', () => {
        expect(getTitleFromUrl('/new-event')).toBe('New Event');
    });

    test('should return "Edit Event" as title on updating event route', () => {
        expect(getTitleFromUrl('/update-event/1')).toBe('Edit Event');
    });

    test('should return "Events" as title on unknown route', () => {
        expect(getTitleFromUrl('/unknown')).toBe('Events');
        expect(getTitleFromUrl('/update')).toBe('Events');
        expect(getTitleFromUrl('/update-event')).toBe('Events');
    });
});