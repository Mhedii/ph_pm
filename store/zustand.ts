import { create } from "zustand";

type IssueStore = {
  // cart: number;
  // add: () => void;
  // remove: () => void;
  // removeAll: () => void;
  issues: [];
  id: 1;
  // addIssue: () => void;
};

export const useIssueStore = create<IssueStore>((set) => ({
  // cart: 0,
  // add: () => set((state) => ({ cart: state.cart + 1 })),
  // remove: () => set((state) => ({ cart: state.cart - 1 })),
  // removeAll: () => set({ cart: 0 }),
  issues: [],
  id: 1,
  // addIssue: (newIssue: any) =>
  //   set((state): any => ({
  //     issues: [
  //       ...state.issues.map((issue: any) =>
  //         issue === newIssue
  //           ? { ...issue, issueName: newIssue.issueName }
  //           : issue
  //       ),
  //       newIssue,
  //     ],
  //   })),
  addIssue: (value: any) =>
    set((state): any => ({
      issues: [...state.issues, value],
      id: state.id + 1,
    })),
  updateIssue: (updatedIssue: any) =>
    set((state): any => ({
      issues: state.issues.map((issue: any) =>
        issue.id === updatedIssue.id
          ? { ...issue, issueName: updatedIssue.issueName }
          : issue
      ),
    })),
}));
