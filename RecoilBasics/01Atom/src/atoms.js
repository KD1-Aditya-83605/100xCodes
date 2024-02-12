import {atom, selector} from 'recoil'


 export const networkAtom = atom({
    key:'networkAtom',
    default: 102
})


export const jobsAtmom = atom({
    key:'jobsAtmom',
    default: 0
})

export const notificationsAtom = atom({
    key:'notificationsAtom',
    default: 12
})

export const messagingAtom = atom({
    key:'messagingAtom',
    default: 0
})


export const totalNotificationSelector = selector({
    key:"jaishreeram",
    get:({get}) =>{
        const networkAtomCount = get(networkAtom)
        const jobsAtmomCount = get(jobsAtmom)

        return networkAtomCount+jobsAtmomCount
        


    }

})