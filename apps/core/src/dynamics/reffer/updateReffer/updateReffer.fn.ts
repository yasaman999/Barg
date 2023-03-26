import { reffers } from "../../../../../../libs/dbs/schemas/core/mod.ts";
import { throwError } from "../../../../../utils/throwError.ts";
import { ActFn } from "../../../../deps.ts";
import { ObjectId } from "../../../../deps.ts";
import { reffer } from "../../../../mod.ts";
export const updateRefferFn: ActFn = async (body) => {
    const {
        set: {  
            _id,
            number,
            delivered,
            // actions :
            type,
            created_at,
            updated_at,
            deadline,
            isMoving,
            description ,
            reply ,
        },
        get,
    } = body.details;

    const foundedReffer = await reffer.findOne({ _id: new ObjectId(_id) });
    !foundedReffer && throwError("reffer not exist");

    // console.log("foundedReffer on update method", foundedReffer);
    
    const updatedReffer = await reffer.updateOne({ _id: new ObjectId(_id) }, { $set: {
        number,
        delivered,
        // actions :
        type,
        created_at,
        updated_at,
        deadline,
        isMoving,
        description ,
        reply ,
    }
    });

    console.log("updatedReffer on update method", updatedReffer);

    return Object.keys(get).length != 0
        ? await reffer.findOne({ _id: new ObjectId(_id) }, get)
        : { _id: _id };
};
