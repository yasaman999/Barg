import { positions } from "../../../../../../libs/dbs/schemas/core/mod.ts";
import { throwError } from "../../../../../utils/throwError.ts";
import { ActFn } from "../../../../deps.ts";
import { ObjectId } from "../../../../deps.ts";
import { position } from "../../../../mod.ts";
export const getPositionFn: ActFn = async (body) => {
    const {
        set: {  
            _id 
        },
        get,
    } = body.details;
    const foundedPosition = await position.findOne({ _id: new ObjectId(_id) }, get);
    !foundedPosition && throwError("position not exist");
    return foundedPosition;

    // console.log("foundedPosition on get method", foundedPosition);
    
};
