import { create } from "zustand";

type ModalState = {
  FAQ : boolean
  isOn: boolean;
  toggle: () => void;
  index: number;
  setIdx: (value: number) => void;
  setFAQ : ()=>void
};

const useModalStore = create<ModalState>((set) => ({
  FAQ: false,
  isOn: false,
  index: 0,
  toggle: () => set((state) => ({ isOn: !state.isOn })),
  setIdx: (value) => set(() => ({ index: value })),
  setFAQ: () => set((state) => ({ FAQ: !state.FAQ })),
}));

export default useModalStore;
