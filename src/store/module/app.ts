import { defineStore } from "pinia";
import { store } from "../index";

export const useAppStore = defineStore('app', {
    state: () => {
        return {
            sideCollapsed: false
        }
    },
    getters: {

    },
    actions: {
        toggleSidebar() {
            this.sideCollapsed = !this.sideCollapsed
        }
    }
});

export function useAppStoreWithOut() {
    return useAppStore(store);
}