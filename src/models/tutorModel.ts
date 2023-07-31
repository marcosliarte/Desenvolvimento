import mongoose, {Schema, Document, model} from 'mongoose';

export interface Tutor{
    id:number;
    name:string;
    phone:string;
    email:string;
    date_of_birth:string;
    zip_code:string;
    pets?: Pet[];
}

export interface TutorModel extends Tutor, Document {}

const tutorSchema = new Schema({
    id: {type: Number, require: true},
    name: {type: String, require: true},
    phone: {type: String, require: true},
    email: {type: String, require: true},
    date_of_birth: {type: String, require: true}, 
    zip_code: {type: String, require: true},
    pets: [{type: Schema.Types.ObjectId, ref: 'Pet'}]
});

export default model<TutorModel>('Tutor', tutorSchema);