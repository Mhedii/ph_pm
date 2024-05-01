import { create } from "zustand";

type IssueStore = {
  // cart: number;
  // add: () => void;
  // remove: () => void;
  // removeAll: () => void;
  issues: [];
  // addIssue: () => void;
};

export const useIssueStore = create<IssueStore>((set) => ({
  // cart: 0,
  // add: () => set((state) => ({ cart: state.cart + 1 })),
  // remove: () => set((state) => ({ cart: state.cart - 1 })),
  // removeAll: () => set({ cart: 0 }),
  issues: [],
  // addIssue: () => set((state) => ({ issues: state.issues })),
  addIssue: (value: any) =>
    set((state): any => ({ issues: [...state.issues, value] })),
}));
