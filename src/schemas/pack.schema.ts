import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { AbstractDocument } from "repository/abstract.schema";

@Schema({versionKey: false})
export class PackDocument extends AbstractDocument{
  @Prop({type: Number, required: true})
  expireTime: number; // Time left in hours (optional for active status)
}

export const PackSchema =
  SchemaFactory.createForClass(PackDocument);
  