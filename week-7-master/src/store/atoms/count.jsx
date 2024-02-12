import { atom, selector } from "recoil";

export const countAtom = atom({
    key: 'countAtom',
    default: 110
});

const evenSelector = selector({
    name:"evenSelector",
    get: ({get})=>{
        const count = get(countAtom)
        return count%2
    }
});