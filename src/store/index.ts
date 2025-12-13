import { create } from "zustand";
import { combine } from "zustand/middleware";

const useStore = create(
  combine(
    {
      count: 0,
    },
    (set) => ({
      increment: () => set((state) => ({ count: state.count + 1 })),
    })
  )
);

export default useStore;
