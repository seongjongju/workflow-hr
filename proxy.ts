import { auth } from "@/auth/auth";

export default auth((req) => {
    if (!req.auth) {
        return Response.redirect(new URL("/", req.nextUrl.origin));
    }
});

export const config = {
    matcher: [
        "/((?!$|_next/static|_next/image|favicon.ico).*)",
    ],
};