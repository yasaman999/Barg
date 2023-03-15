import { orgs } from "../../../../../../libs/dbs/schemas/core/mod.ts";
import { throwError } from "../../../../../utils/throwError.ts";
import { ActFn } from "../../../../deps.ts";
import { ObjectId } from "../../../../deps.ts";
import { org } from "../../../../mod.ts";
export const getOrgFn: ActFn = async (body) => {
    const {
        set: {  
            _id 
        },
        get,
    } = body.details;
    const foundedOrg = await org.findOne({ _id: new ObjectId(_id) }, get);
    !foundedOrg && throwError("org not exist");
    return foundedOrg;

    // console.log("foundedOrg on get method", foundedOrg);
    
};
