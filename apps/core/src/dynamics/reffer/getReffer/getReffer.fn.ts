import { reffers } from "../../../../../../libs/dbs/schemas/core/mod.ts";
import { throwError } from "../../../../../utils/throwError.ts";
import { ActFn } from "../../../../deps.ts";
import { ObjectId } from "../../../../deps.ts";
import { reffer } from "../../../../mod.ts";
export const getRefferFn: ActFn = async (body) => {
    const {
        set: {  
            _id 
        },
        get,
    } = body.details;
    const foundedReffer = await reffer.findOne({ _id: new ObjectId(_id) }, get);
    !foundedReffer && throwError("reffer not exist");
    return foundedReffer;

    // console.log("foundedReffer on get method", foundedReffer);
    
};
