import { Types } from "mongoose";


export type TProduts = {
    name: string;
    regular_price: number;
    offered_price: number;
    para: string;
    image: string;
    category: Types.ObjectId;
}