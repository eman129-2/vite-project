import { create } from 'zustand';

const useCounterStore = create((set) => ({
  count: 1,

  decrementCount: () =>
    set((state) => {
      if (state.count > 1) {
        return { count: state.count - 1 };
      }
      return { count: state.count };
    }),

  incrementCount: () =>
    set((state) => ({
      count: state.count + 1,
    })),
}));

export default useCounterStore;
