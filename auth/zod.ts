import { object, string } from "zod"

export const signInSchema = object({
    id: string()
    .regex(/^[0-9]{8}$/, "사원번호 8자리를 입력해 주세요."),

    password: string()
        .min(1, "비밀번호를 입력해 주세요.")
        .min(8, "비밀번호는 8자 이상 입력해 주세요.")
        .max(16, "비밀번호는 16자 이내로 입력해주세요.")
});