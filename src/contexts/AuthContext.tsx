import React, { createContext, useContext, useState, useEffect } from 'react';
import { User } from '../types';

interface AuthContextType {
    user: User | null;
    isAuthenticated: boolean;
    loginWithEmail: (email: string, pass: string) => Promise<void>;
    loginWithPhone: (phone: string, otp: string) => Promise<void>;
    loginWithSocial: (provider: 'google' | 'facebook' | 'apple') => Promise<void>;
    loginAsGuest: () => void;
    logout: () => void;
    loading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(false);

    // Check for existing session (mock)
    useEffect(() => {
        const storedUser = localStorage.getItem('art_tales_user');
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
    }, []);

    const loginWithEmail = async (email: string, _pass: string) => {
        setLoading(true);
        // Mock API delay
        await new Promise(resolve => setTimeout(resolve, 1000));

        const mockUser: User = {
            id: '1',
            name: email.split('@')[0],
            email: email,
            avatar: `https://ui-avatars.com/api/?name=${email.split('@')[0]}&background=random`,
            isGuest: false
        };

        setUser(mockUser);
        localStorage.setItem('art_tales_user', JSON.stringify(mockUser));
        setLoading(false);
    };

    const loginWithPhone = async (phone: string, _otp: string) => {
        setLoading(true);
        await new Promise(resolve => setTimeout(resolve, 1000));

        const mockUser: User = {
            id: '2',
            name: 'Mobile User',
            phone: phone,
            avatar: 'https://ui-avatars.com/api/?name=Mobile+User&background=random',
            isGuest: false
        };

        setUser(mockUser);
        localStorage.setItem('art_tales_user', JSON.stringify(mockUser));
        setLoading(false);
    };

    const loginWithSocial = async (provider: string) => {
        setLoading(true);
        await new Promise(resolve => setTimeout(resolve, 800));

        const mockUser: User = {
            id: '3',
            name: `${provider.charAt(0).toUpperCase() + provider.slice(1)} User`,
            email: `user@${provider}.com`,
            avatar: 'https://ui-avatars.com/api/?name=Social+User&background=random',
            isGuest: false
        };

        setUser(mockUser);
        localStorage.setItem('art_tales_user', JSON.stringify(mockUser));
        setLoading(false);
    };

    const loginAsGuest = () => {
        const guestUser: User = {
            id: 'guest_' + Date.now(),
            name: 'Guest Artist',
            isGuest: true,
            avatar: 'https://ui-avatars.com/api/?name=Guest&background=efefef&color=999'
        };
        setUser(guestUser);
        localStorage.setItem('art_tales_user', JSON.stringify(guestUser));
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem('art_tales_user');
    };

    return (
        <AuthContext.Provider value={{
            user,
            isAuthenticated: !!user,
            loginWithEmail,
            loginWithPhone,
            loginWithSocial,
            loginAsGuest,
            logout,
            loading
        }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};
