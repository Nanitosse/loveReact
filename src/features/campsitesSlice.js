import {CAMPSITE, CAMPSITES} from '../app/shared /CAMPSITES';


export const sellectAllcampsites=()=>{
    return CAMPSITES;
};

export const selectRandomCampsite = () => {
    return CAMPSITES[Math.floor(CAMPSITES.length * Math.random())];
};