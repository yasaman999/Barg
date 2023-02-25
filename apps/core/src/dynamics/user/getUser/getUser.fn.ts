import { users } from "../../../../../../libs/dbs/schemas/core/mod.ts";
import { throwError } from "../../../../../utils/throwError.ts";
import { ActFn } from "../../../../deps.ts";
import { ObjectId } from "../../../../deps.ts";
import { user } from "../../../../mod.ts";
export const getUserFn: ActFn = async (body) => {
    const {
        set: {  
            _id 
        },
        get,
    } = body.details;
    const foundedUser = await user.findOne({ _id: new ObjectId(_id) });
    // foundedUser ? foundedUser : throwError("user not exist !");
    !foundedUser && throwError("user not exist");
    return foundedUser;
    // TODO QueryQueue for get for example ware

    console.log("foundedUser on get method", foundedUser);
    



    // return Object.keys(get).length != 0
    //     ? await user.findOne({ _id: new ObjectId(_id) }, get)
    //     : { _id: _id };
};
