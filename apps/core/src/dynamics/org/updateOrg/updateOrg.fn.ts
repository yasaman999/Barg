import { orgs } from "../../../../../../libs/dbs/schemas/core/mod.ts";
import { throwError } from "../../../../../utils/throwError.ts";
import { ActFn } from "../../../../deps.ts";
import { ObjectId } from "../../../../deps.ts";
import { org } from "../../../../mod.ts";
export const updateOrgFn: ActFn = async (body) => {
    const {
        set: {  
            _id,
            name,
            address
        },
        get,
    } = body.details;

    const foundedOrg = await org.findOne({ _id: new ObjectId(_id) });
    !foundedOrg && throwError("org not exist");

    // console.log("foundedOrg on update method", foundedOrg);
    
    const updatedOrg = await org.updateOne({ _id: new ObjectId(_id) }, { $set: {
        name,
        address
    }
    });

    console.log("updatedOrg on update method", updatedOrg);

    return Object.keys(get).length != 0
        ? await org.findOne({ _id: new ObjectId(_id) }, get)
        : { _id: _id };
};
