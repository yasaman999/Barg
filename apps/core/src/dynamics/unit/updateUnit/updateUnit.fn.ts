import { units } from "../../../../../../libs/dbs/schemas/core/mod.ts";
import { throwError } from "../../../../../utils/throwError.ts";
import { ActFn } from "../../../../deps.ts";
import { ObjectId } from "../../../../deps.ts";
import { unit } from "../../../../mod.ts";
export const updateUnitFn: ActFn = async (body) => {
    const {
        set: {  
            _id,
            name,
            categories
        },
        get,
    } = body.details;

    const foundedUnit = await unit.findOne({ _id: new ObjectId(_id) });
    !foundedUnit && throwError("unit not exist");
    
    const updatedUnit = await unit.updateOne({ _id: new ObjectId(_id) }, { $set: {
        name,
        categories
    }
    });

    console.log("updatedUnit on update method", updatedUnit);

    return Object.keys(get).length != 0
        ? await unit.findOne({ _id: new ObjectId(_id) }, get)
        : { _id: _id };
};
