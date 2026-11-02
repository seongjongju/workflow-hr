import mongoose from "mongoose";
import { DepartmentSchema, UserSchema } from "./schema";

//사용자
export const User = mongoose.models.User || mongoose.model("User", UserSchema);

//부서
export const Department = mongoose.models.Department || mongoose.model("Department", DepartmentSchema);
