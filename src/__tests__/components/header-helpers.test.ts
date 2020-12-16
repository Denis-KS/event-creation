import { getTargetFromPath } from "../../components/Header/header-helpers";

describe('getTargetFromUrl', () => {
    test('should return "home" as target', () => {
        expect(getTargetFromPath('/')).toBe('home');
    });

    test('should return "overview" as target', () => {
        expect(getTargetFromPath('/1')).toBe('overview');
    });

    test('should return "create" as target', () => {
        expect(getTargetFromPath('/new-event')).toBe('create');
    });

    test('should return "update" as target', () => {
        expect(getTargetFromPath('/update-event/1')).toBe('update');
    });

    test('should return "home" as target on unknown path', () => {
        expect(getTargetFromPath('/unknown')).toBe('home');
        expect(getTargetFromPath('/update')).toBe('home');
        expect(getTargetFromPath('/update-event')).toBe('home');
    });
});