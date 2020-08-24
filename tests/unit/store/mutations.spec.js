import mutations from '@/store/mutations'
describe('CREATE_TASK', () => {
  describe('Parameters should be nil', () => {
    const state = {};
    beforeEach(() => {
      state.board = {};
    });

    it('name parameter should be null', () => {
      const tasks = [];
      mutations.CREATE_TASK(state, { name: null, tasks });
      expect(tasks.length).toBe(0)
    });

    it('tasks parameter should be null', () => {
      const tasks = null;
      mutations.CREATE_TASK(state, { name: null, tasks });
      expect(tasks).toBe(null);
    });

    it('name parameter should be undefined', () => {
      const tasks = [];
      mutations.CREATE_TASK(state, { name: undefined, tasks });
      expect(tasks.length).toBe(0)
    });

    it('tasks parameter should be undefined', () => {
      const tasks = undefined;
      mutations.CREATE_TASK(state, { name: null, tasks });
      expect(tasks).toBe(undefined);
    });
  });
});
