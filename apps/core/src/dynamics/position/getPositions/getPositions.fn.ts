import { positions } from "../../../../../../libs/dbs/schemas/core/mod.ts";
import { throwError } from "../../../../../utils/throwError.ts";
import { ActFn } from "../../../../deps.ts";
import { ObjectId } from "../../../../deps.ts";
import { position } from "../../../../mod.ts";
export const getPositionsFn: ActFn = async (body) => {
    const {
        set: {  
        },
        get,
    } = body.details;
    // const foundedPosition = await position.findOne({ _id: new ObjectId(_id) }, get);
    // !foundedPosition && throwError("position not exist");
    // return foundedPosition;


        // const foundedPosition = await position.findOne({}, get);
        // return foundedPosition;

   
    const arr = [];

    position.forEach(element => {
        const foundedPosition = position.findOne({}, get);
        arr.push(foundedPosition);

    });
    return arr;


    
};
