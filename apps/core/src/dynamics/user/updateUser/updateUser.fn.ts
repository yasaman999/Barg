import { users } from "../../../../../../libs/dbs/schemas/core/mod.ts";
import { throwError } from "../../../../../utils/throwError.ts";
import { ActFn } from "../../../../deps.ts";
import { ObjectId } from "../../../../deps.ts";
import { user } from "../../../../mod.ts";
export const updateUserFn: ActFn = async (body) => {
    const {
        set: {  
            _id,
            first_name,
            last_name,
            phone,
            gender,
            birth_date,
            personnel_code,
            email,
            is_active,
            features,
            userLevels 
        },
        get,
    } = body.details;
    const foundedUser = await user.findOne({ _id: new ObjectId(_id) });
    !foundedUser && throwError("user not exist");
    // TODO QueryQueue for update for example ware

    console.log("foundedUser on update method", foundedUser);
    
    const updatedUser = await user.updateOne({ _id: new ObjectId(_id) }, { $set: {
        first_name,
        last_name,
        phone,
        gender,
        birth_date,
        personnel_code,
        email,
        is_active,
        features,
        userLevels 
    }
    });

    console.log("updatedUser on update method", updatedUser);

    return Object.keys(get).length != 0
        ? await user.findOne({ _id: new ObjectId(_id) }, get)
        : { _id: _id };
};
