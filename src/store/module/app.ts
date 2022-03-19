import { defineStore } from "pinia";
import { store } from "../index";

export const useAppStore = defineStore('app', {
    state: () => {
        return {}
    },
    getters: {

    },
    actions: {

    }
});

export function useAppStoreWithOut() {
    return useAppStore(store);
}