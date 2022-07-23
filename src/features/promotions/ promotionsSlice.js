//import { PROMOTIONS }   from "../../app/shared/PROMOTIONS";
//import { PROMOTIONS } from "../../app/shared /PROMOTIONS";

import { PROMOTIONS } from    "../../app/shared /PROMOTIONS";

export const selectFeaturedPromotion = ()=>{

    return PROMOTIONS.find((promotion)=> promotion.featured);
        //PROMOTIONS.find((promotion)=> promotion.featured)
    

}