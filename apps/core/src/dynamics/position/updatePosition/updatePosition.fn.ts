import { positions } from "../../../../../../libs/dbs/schemas/core/mod.ts";
import { throwError } from "../../../../../utils/throwError.ts";
import { ActFn } from "../../../../deps.ts";
import { ObjectId } from "../../../../deps.ts";
import { position } from "../../../../mod.ts";
export const updatePositionFn: ActFn = async (body) => {
    const {
        set: {  
            _id,
            name
        },
        get,
    } = body.details;

    const foundedPosition = await position.findOne({ _id: new ObjectId(_id) });
    !foundedPosition && throwError("position not exist");

    // console.log("foundedPosition on update method", foundedPosition);
    
    const updatedPosition = await position.updateOne({ _id: new ObjectId(_id) }, { $set: {
        name
    }
    });

    console.log("updatedPosition on update method", updatedPosition);

    return Object.keys(get).length != 0
        ? await position.findOne({ _id: new ObjectId(_id) }, get)
        : { _id: _id };
};
