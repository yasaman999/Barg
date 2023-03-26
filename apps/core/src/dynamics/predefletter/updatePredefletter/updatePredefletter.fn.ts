import { predefletters } from "../../../../../../libs/dbs/schemas/core/mod.ts";
import { throwError } from "../../../../../utils/throwError.ts";
import { ActFn } from "../../../../deps.ts";
import { ObjectId } from "../../../../deps.ts";
import { predefletter } from "../../../../mod.ts";
export const updatePredefletterFn: ActFn = async (body) => {
    const {
        set: {  
            _id,
            title ,
            description,
            number
        },
        get,
    } = body.details;

    const foundedPredefletter = await predefletter.findOne({ _id: new ObjectId(_id) });
    !foundedPredefletter && throwError("predefletter not exist");

    // console.log("foundedPredefletter on update method", foundedPredefletter);
    
    const updatedPredefletter = await predefletter.updateOne({ _id: new ObjectId(_id) }, { $set: {
        title ,
        description,
        number
    }
    });

    console.log("updatedPredefletter on update method", updatedPredefletter);

    return Object.keys(get).length != 0
        ? await predefletter.findOne({ _id: new ObjectId(_id) }, get)
        : { _id: _id };
};
