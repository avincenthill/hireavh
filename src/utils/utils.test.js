import utils from './utils';

describe('utils', () => {
  describe('methods', () => {
    class LocalStorageMock {
      constructor() {
        this.store = {};
      }
      clear() {
        this.store = {};
      }
      getItem(key) {
        return this.store[key] || null;
      }
      setItem(key, value) {
        this.store[key] = value.toString();
      }
      removeItem(key) {
        delete this.store[key];
      }
    }

    beforeEach(() => {
      global.localStorage = new LocalStorageMock();
    });

    afterEach(() => {
      localStorage.clear();
    });

    describe('sleep()', () => {
      it('should sleep correctly', async () => {
        const durationInMs = 10;
        const before = new Date();
        await utils.sleep(durationInMs);
        const after = new Date();
        expect(after - before).toBeGreaterThanOrEqual(durationInMs);
      });
    });

    describe('isDarkTheme()', () => {
      it('should return true if theme is null', () => {
        expect(utils.isDarkTheme()).toBe(true);
      });
      it("should return true if theme is 'dark'", () => {
        localStorage.setItem('theme', 'dark');
        expect(utils.isDarkTheme()).toBe(true);
      });
      it('should return true if theme is random', () => {
        localStorage.setItem('theme', 'asdfasdf');
        expect(utils.isDarkTheme()).toBe(true);
      });
      it("should return false if theme is 'light'", () => {
        localStorage.setItem('theme', 'light');
        expect(utils.isDarkTheme()).toBe(false);
      });
    });

    describe('toggleTheme()', () => {
      it('should toggle the theme', () => {
        expect(utils.isDarkTheme()).toBe(true);
        utils.toggleTheme();
        expect(utils.isDarkTheme()).toBe(false);
        utils.toggleTheme();
        expect(utils.isDarkTheme()).toBe(true);
      });
    });

    describe('getColor()', () => {
      it('should get dark colors when dark theme is on', () => {
        expect(utils.getColor('--c-black')).toBe('#020a0d');
      });
      it('should get light colors when light theme is on', () => {
        utils.toggleTheme();
        expect(utils.getColor('--c-3')).toBe('#143886');
      });
    });

    describe('getDarkColor()', () => {
      it('should only get dark colors regardless of theme', () => {
        expect(utils.getDarkColor('--c-3')).toBe('#f7edc8');
        utils.toggleTheme();
        expect(utils.getDarkColor('--c-3')).toBe('#f7edc8');
      });
    });

    describe('getIconStyles()', () => {
      it('should get the correct icon styles when dark theme is on', () => {
        expect(utils.getIconStyles('contact').color).toBe('var(--c-1)');
      });

      it('should get the correct icon styles when light theme is on', () => {
        utils.toggleTheme();
        expect(utils.getIconStyles('contact').color).toBe('var(--c-white)');
      });

      it('should return an empty object on bad inputs', () => {
        expect(Object.keys(utils.getIconStyles('asdfasdf')).length).toBe(0);
        utils.toggleTheme();
        expect(Object.keys(utils.getIconStyles('asdfasdf')).length).toBe(0);
      });
    });
  });
});
