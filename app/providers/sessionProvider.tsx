'use client';

import { SessionProvider } from "next-auth/react";

interface ProvidersProps {
    children: React.ReactNode;
}

const sessionProvider = ({ children }: ProvidersProps) => {
    return (
        <SessionProvider>
            {children}
        </SessionProvider>
    )
}

export default sessionProvider;