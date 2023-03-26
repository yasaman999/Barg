import { units } from "../../../../../../libs/dbs/schemas/core/mod.ts";//
import { throwError } from "../../../../../utils/throwError.ts";
import { ActFn } from "../../../../deps.ts";
import { ObjectId } from "../../../../deps.ts";
import { unit } from "../../../../mod.ts";//
export const getUnitFn: ActFn = async (body) => {
    const {
        set: {  
            _id 
        },
        get,
    } = body.details;
    const foundedUnit = await unit.findOne({ _id: new ObjectId(_id) }, get);//
    !foundedUnit && throwError("unit not exist");//
    return foundedUnit;

    // console.log("foundedunit on get method", foundedOrg);
    
};
