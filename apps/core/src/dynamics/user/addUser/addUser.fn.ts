import { ActFn, ObjectId } from "../../../../deps.ts";
import { getAtcsWithServices, user } from "../../../../mod.ts";
export const addUserFn: ActFn = async (body) => {
    const acts = getAtcsWithServices();

    const {
        set: { 
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

    const createdUser = await user.insertOne({
        first_name,
        last_name,
        phone,
        gender,
        birth_date,
        personnel_code,
        email,
        is_active,
        features,
        userLevels,
    });

    return Object.keys(get).length != 0
    ? await user.findOne({ _id: new ObjectId(createdUser) }, get)
    : { _id: createdUser };
     
};
