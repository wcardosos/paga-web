import { create } from 'zustand';

interface ReferenceMonthStore {
  referenceMonths: string[];
  selectedMonth: string | null;
  setReferenceMonths: (referenceMonths: string[]) => void;
  updateSelectedMonth: (selectedMonth: string) => void;
  setInitialSelectedMonth: () => void;
}

export const useReferenceMonthStore = create<ReferenceMonthStore>((set) => ({
  referenceMonths: [],
  selectedMonth: null,
  setReferenceMonths: (referenceMonths: string[]) => set({ referenceMonths }),
  updateSelectedMonth: (selectedMonth: string) => {
    set((state) => ({ ...state, selectedMonth }));
  },
  setInitialSelectedMonth: () =>
    set((state) => {
      let parsedMonth = state.referenceMonths[state.referenceMonths.length - 1];

      const currentReferenceMonth = new Date().toLocaleString('pt-BR', {
        month: '2-digit',
        year: '2-digit',
      });

      for (const month of state.referenceMonths) {
        if (month === currentReferenceMonth) {
          parsedMonth = month;
          break;
        }
      }

      return { ...state, selectedMonth: parsedMonth };
    }),
}));
