import { createContext, useContext, useState } from "react";

interface IAuthContextData {
    Provider: any;
    email: string | undefined;
    acessToken: string | undefined;

    logout(): void;
    login(email: string, password: string): void;
}

const AuthContext = createContext({} as IAuthContextData);

export const AuthProvider = ({ children }: React.PropsWithChildren) => {

    const [accessToken, setAccessToken] = useState<string>();
    const [email, setEmail] = useState<string>();

    const logout = () => {
        setEmail(undefined);
        setAccessToken(undefined);
    }

    const login = (email: string, password: string) => {

        setEmail(email);
        setAccessToken(crypto.randomUUID());
    }

    return (
        <AuthContext.Provider value={{login, logout, email, accessToken}}>
            {children}
        </AuthContext.Provider>
    );
}

export const useAuthContext = () => {
    return useContext(AuthContext);
}

export const useIsAuthenticated = () => {
    const { accessToken } = useAuthContext();
    
    return !!accessToken;
}