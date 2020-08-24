import mutations from '@/store/mutations'
describe('CREATE_TASK', () => {
  const state = {};
  const taskName = 'test';

  beforeEach(() => {
    state.board = {};
  });

  describe('Parameters should be nil', () => {
    it('name parameter should be null', () => {
      const tasks = [];
      mutations.CREATE_TASK(state, { name: null, tasks });
      expect(tasks.length).toBe(0)
    });

    it('tasks parameter should be null', () => {
      const tasks = null;
      mutations.CREATE_TASK(state, { name: taskName, tasks });
      expect(tasks).toBe(null);
    });

    it('name parameter should be undefined', () => {
      const tasks = [];
      mutations.CREATE_TASK(state, { name: undefined, tasks });
      expect(tasks.length).toBe(0)
    });

    it('tasks parameter should be undefined', () => {
      const tasks = undefined;
      mutations.CREATE_TASK(state, { name: taskName, tasks });
      expect(tasks).toBe(undefined);
    });
  });

  describe('Works well', () => {
    it('name parameter should have content', () => {
      const tasks = [];
      mutations.CREATE_TASK(state, { name: taskName, tasks });
      expect(tasks.length).toBe(1);
      expect(tasks[0].name).toEqual(taskName);
    });
  });
});

describe('CREATE_COLUMN', () => {
  const state = {};
  const columnName = 'test';

  beforeEach(() => {
    state.board = {
      columns: []
    };
  });

  describe('Parameter sholud be nil or empty', () => {
    it('Parameter should be null', () => {
      mutations.CREATE_COLUMN(state, { name: null });
      console.log(state);
      expect(state.board.columns.length).toBe(0);
    });

    it('Parameter should be undefined', () => {
      mutations.CREATE_COLUMN(state, { name: undefined });
      console.log(state);
      expect(state.board.columns.length).toBe(0);
    });

    it('Parameter should be empty string', () => {
      mutations.CREATE_COLUMN(state, { name: '' });
      console.log(state);
      expect(state.board.columns.length).toBe(0);
    });
  });
});
