import "next-auth";
import "next-auth/jwt";
import type { DefaultSession } from "next-auth";

declare module "next-auth" {
    interface User {
        id: string;
        employeeId: string;
        department: string;
        position: string;
        role: string;
        employmentStatus: string;
        hireDate: Date;
        terminationDate?: Date | null;
        profile?: string | null;
        logged: boolean;
    }

    interface Session {
        user: {
            id: string;
            employeeId: string;
            department: string;
            position: string;
            role: string;
            employmentStatus: string;
            hireDate: Date;
            terminationDate?: Date | null;
            profile?: string | null;
            logged: boolean;
        } & DefaultSession["user"];
    }
}

declare module "next-auth/jwt" {
    interface JWT {
        id: string;
        employeeId: string;
        department: string;
        position: string;
        role: string;
        employmentStatus: string;
        hireDate: Date;
        terminationDate?: Date | null;
        profile?: string | null;
        logged: boolean;
    }
}
