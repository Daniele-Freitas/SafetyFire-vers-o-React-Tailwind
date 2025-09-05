import { createContext, useContext, useState, useEffect } from 'react';
import { auth } from '../firebaseConfig.js';
import { 
GoogleAuthProvider, 
signInWithPopup, 
signInWithEmailAndPassword,
signOut,
onAuthStateChanged ,
createUserWithEmailAndPassword,
sendPasswordResetEmail,
updateProfile,
} from 'firebase/auth';

const AuthContext = createContext();

export function useAuth() {
return useContext(AuthContext);
}

export function AuthProvider({ children }) {
    const [currentUser, setCurrentUser] = useState(null);
    const [loading, setLoading] = useState(true); // Para saber se a verificação inicial já terminou

    async function signup(email,password,name) {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        await updateProfile(userCredential.user, {
            displayName: name
        });
    return userCredential;
    }
    
    function login(email, password) {
        return signInWithEmailAndPassword(auth, email, password);
    }
    function resetPassword(email) {
        return sendPasswordResetEmail(auth, email);
    }
    function loginWithGoogle() {
        const provider = new GoogleAuthProvider();
        return signInWithPopup(auth, provider);
    }

    function logout() {
        return signOut(auth);
    }

    useEffect(() => {
        // onAuthStateChanged é um listener. Ele "ouve" as mudanças de login/logout.
        // A função unsubscribe é retornada para limpar o listener quando o componente desmontar.
        const unsubscribe = onAuthStateChanged(auth, user => {
        setCurrentUser(user);
        setLoading(false); // Verificação concluída
        });

        return unsubscribe;
    }, []);

    const value = {
        currentUser,
        login,
        loginWithGoogle,
        logout,
        signup,
        resetPassword
    };

    // Só renderiza a aplicação depois de verificar o estado do usuário
    return (
        <AuthContext.Provider value={value}>
        {!loading && children}
        </AuthContext.Provider>
    );
}