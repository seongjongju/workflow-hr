import mongoose from "mongoose";

declare global {
    var mongoose: {
        conn: mongoose | null;
        promise: Promise<mongoose> | null;
    };
}

export {};