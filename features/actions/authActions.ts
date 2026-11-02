
"use server";

import { signIn } from "@/auth/auth";
import { AuthError } from "next-auth";
import { signInSchema } from "@/auth/zod";

export type LoginState = {
    errors?: {
        id?: string[];
        password?: string[];
    };
    message?: string;
    status?: string;
};

//로그인
export async function loginAction(
    prevState: LoginState,
    formData: FormData
): Promise<LoginState> {

    const result = signInSchema.safeParse({
        id: formData.get("id"),
        password: formData.get("password"),
    });

    if (!result.success) {
        return {
            errors: result.error.flatten().fieldErrors,
        };
    }

    try {
        await signIn("credentials", {
            id: result.data.id,
            password: result.data.password,
            redirectTo: "/home",
        });

    } catch (error) {
        if (error instanceof AuthError) {

            return {
                message: "사원번호 또는 비밀번호가 올바르지 않습니다.",
            };
        }

        throw error;
    }

    return {};
}
