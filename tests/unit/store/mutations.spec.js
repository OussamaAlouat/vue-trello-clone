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
      expect(state.board.columns.length).toBe(0);
    });

    it('Parameter should be undefined', () => {
      mutations.CREATE_COLUMN(state, { name: undefined });
      expect(state.board.columns.length).toBe(0);
    });

    it('Parameter should be empty string', () => {
      mutations.CREATE_COLUMN(state, { name: '' });
      expect(state.board.columns.length).toBe(0);
    });
  });

  describe('Parameter should have content', () => {
    it('Should create the column as expected', () => {
      mutations.CREATE_COLUMN(state, { name: columnName });
      expect(state.board.columns.length).toBe(1);
      expect(state.board.columns[0].name).toEqual(columnName);
    })
  });
});

describe('UPDATE_TASK', () => {
  const state = {};

  beforeEach(() => {
    state.board = {
      columns: []
    };
  });

  describe('Parameters should be nil', () => {
    describe('task should be nil or empty', () => {
      it('task should be null', () => {
        const key = 'name';
        const value = 'new name';
        const task = null;
        mutations.UPDATE_TASK(state, { task, key, value });
        expect(task).toBe(null);
        expect(state.board.columns.length).toBe(0);
      });

      it('task should be undefined', () => {
        const key = 'name';
        const value = 'new name';
        const task = undefined;
        mutations.UPDATE_TASK(state, { task, key, value });
        expect(task).toBe(undefined);
        expect(state.board.columns.length).toBe(0);
      });

      it('task should to be array', () => {
        const task = [];
        const key = 'name';
        const value = 'new name';

        mutations.UPDATE_TASK(state, { task, key, value });
        expect(task.length).toBe(0);
        expect(state.board.columns.length).toBe(0);
      });

      it('task should to be string', () => {
        const task = '';
        const key = 'name';
        const value = 'new name';

        mutations.UPDATE_TASK(state, { task, key, value });
        expect(task).toEqual('');
        expect(state.board.columns.length).toBe(0);
      });
    });

    describe('key should be nil or empty', () => {
      it('key should be null', () => {
        const key = null;
        const value = 'new name';
        const task = {
          name: 'First name'
        };

        mutations.UPDATE_TASK(state, { task, key, value });
        expect(task.name).toBe('First name');
        expect(task).not.toMatchObject({ ...task, null: value })
        expect(state.board.columns.length).toBe(0);
      });

      it('key should be undefined', () => {
        const key = undefined;
        const value = 'new name';
        const task = {
          name: 'First name'
        };

        mutations.UPDATE_TASK(state, { task, key, value });
        expect(task.name).toBe('First name');
        expect(task).not.toMatchObject({ ...task, undefined: value })
        expect(state.board.columns.length).toBe(0);
      });

      it('key should be empty string', () => {
        const key = '';
        const value = 'new name';
        const task = {
          name: 'First name'
        };

        mutations.UPDATE_TASK(state, { task, key, value });
        expect(task.name).toBe('First name');
        expect(task).not.toMatchObject({ ...task, '': value })
        expect(state.board.columns.length).toBe(0);
      });
    });

    describe('value should be nil', () => {
      it('value should be null', () => {
        const key = 'name';
        const value = null;
        const task = {
          name: 'First name'
        };

        mutations.UPDATE_TASK(state, { task, key, value });
        expect(task.name).toBe('First name');
        expect(task).not.toMatchObject({ name: undefined })
        expect(state.board.columns.length).toBe(0);
      });

      it('value should be undefined', () => {
        const key = 'name';
        const value = undefined;
        const task = {
          name: 'First name'
        };

        mutations.UPDATE_TASK(state, { task, key, value });
        expect(task.name).toBe('First name');
        expect(task).not.toMatchObject({ name: undefined })
        expect(state.board.columns.length).toBe(0);
      });
    });
  });

  describe('works well', () => {
    it('parameters are expected', () => {
      const task = {
        description: 'Test description',
        name: 'Test',
        id: 'id',
        userAssigned: null
      };

      const key = 'name';
      const value = 'New test';

      mutations.UPDATE_TASK(state, { task, key, value });
      expect(task).toMatchObject({ name: value })
    });
  });
});

describe('MOVE_TASK', () => {
  const state = {};

  beforeEach(() => {
    state.board = {
      columns: []
    };
  });

  describe('Parameters should be nil', () => {
    describe('fromTasks should be nil or empty', () => {
      it('fromTasks should be null', () => {
        const fromTasks = null;
        const toTasks = [];
        const fromTaskIndex = 0;
        const toTaskIndex = 0;
        mutations.MOVE_TASK(state, { fromTasks, toTasks, fromTaskIndex, toTaskIndex });
        expect(toTasks.length).toBe(0);
      });
      it('fromTasks should be undefined', () => {
        const fromTasks = undefined;
        const toTasks = [];
        const fromTaskIndex = 0;
        const toTaskIndex = 0;
        mutations.MOVE_TASK(state, { fromTasks, toTasks, fromTaskIndex, toTaskIndex });
        expect(toTasks.length).toBe(0);
      });
      it('fromTasks should be empty array', () => {
        const fromTasks = [];
        const toTasks = [];
        const fromTaskIndex = 0;
        const toTaskIndex = 0;
        mutations.MOVE_TASK(state, { fromTasks, toTasks, fromTaskIndex, toTaskIndex });
        expect(toTasks.length).toBe(0);
      });
    });
  });
