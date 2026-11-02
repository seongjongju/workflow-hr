import mongoose from "mongoose";

export const UserSchema = new mongoose.Schema({
    employeeId: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    
    //Department모델을 참조함
    department: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Department", 
        required: true,
    },
    position: { type: String, required: true },
    role: { type: String, required: true, enum: ["EMPLOYEE", "MANAGER", "HR", "ADMIN"]},
    employmentStatus: { type: String, required: true, enum: ["ACTIVE", "ON_LEAVE", "RESIGNED"]},
    hireDate: { type: Date, required: true },
    terminationDate: { type: Date, default: null },
    profile: {type: String, default: null},
    logged: {type: Boolean, required: true},
},
{
    timestamps: true
});

export const DepartmentSchema = new mongoose.Schema({
    departmentCode: {type: String, required: true, unique: true},
    departmentName: {type: String, required: true},
    description: {type: String, default: null },
},
{
    timestamps: true
});