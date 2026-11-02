import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import connectDB from "../app/lib/database";
import bcrypt from "bcryptjs";
import { User } from "../app/lib/models";
import { signInSchema } from "./zod";
import { ZodError } from "zod";

export const { handlers, signIn, signOut, auth } = NextAuth({
    providers: [
        Credentials({
            credentials: {
                id: { label: "id" },
                password: { label: "password", type: "password" },
            },

            authorize: async (credentials) => {
                try{
                    await connectDB();

                    const { id, password } = await signInSchema.parseAsync(credentials);

                    const user = await User.findOne({
                        employeeId: id,
                    });

                    if (!user) {
                        return null;
                    }

                    const isMatch = await bcrypt.compare(
                        password,
                        user.password
                    );

                    if (!isMatch) {
                        return null;
                    }

                    await User.updateOne(
                        { employeeId: id },
                        { $set: { logged: true } }
                    );

                    return {
                        id: user._id.toString(),
                        employeeId: user.employeeId,
                        name: user.name,
                        email: user.email,
                        department: user.department,
                        position: user.position,
                        role: user.role,
                        employmentStatus: user.employmentStatus,
                        hireDate: user.hireDate,
                        terminationDate: user.terminationDate,
                        profile: user.profile,
                        logged: true
                    };
                }catch(error) {
                    if (error instanceof ZodError) {
                        return null
                    }

                    throw error;
                }
            },
        }),
    ],

    callbacks: {
        jwt: async ({ token, user }) => {
            if (user) {
                token.id = user.id;
                token.employeeId = user.employeeId;
                token.department = user.department;
                token.position = user.position;
                token.role = user.role;
                token.employmentStatus = user.employmentStatus;
                token.hireDate = user.hireDate;
                token.terminationDate = user.terminationDate;
                token.profile = user.profile;
                token.logged = user.logged;
            }

            return token;
        },

        session: async ({ session, token }) => {
            if (session.user) {
                session.user.id = token.id;
                session.user.employeeId = token.employeeId;
                session.user.department = token.department;
                session.user.position = token.position;
                session.user.role = token.role;
                session.user.employmentStatus = token.employmentStatus;
                session.user.hireDate = token.hireDate;
                session.user.terminationDate = token.terminationDate;
                session.user.profile = token.profile;
                session.user.logged = token.logged;
            }

            return session;
        },
    },
});