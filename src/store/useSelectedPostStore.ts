import { create } from 'zustand';

interface Store {
  selectedPost: number | undefined;
  setSelectedPost: (value: number) => void;
  resetSelectedPost: () => void;
}

const useSelectedPostStore = create<Store>((set) => ({
  selectedPost: undefined,
  setSelectedPost: (postNumber) => set(() => ({ selectedPost: postNumber })),
  resetSelectedPost: () => set(() => ({ selectedPost: undefined })),
}));

export default useSelectedPostStore;
