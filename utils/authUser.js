import auth from "@react-native-firebase/auth";

export const registerWithPass = async (name, email, pass) => {
    try {
        const userCred = await auth().createUserWithEmailAndPassword(
            email,
            pass
        );
        if (userCred) {
            await userCred.user.updateProfile({
                displayName: name,
            });
            await userCred.user.sendEmailVerification();
        }
        return userCred;
    } catch (error) {
        throw error;
    }
};

export const signinWithPass = async (email, pass) => {
    try {
        const userCred = await auth().signInWithEmailAndPassword(email, pass);
        return userCred;
    } catch (error) {
        throw error;
    }
};

export const signinWithGoogle = () => {
    const creds = auth.GoogleAuthProvider;
    const userCred = auth().signInWithPopup(creds);
    return userCred;
};

export const signOut = async () => {
    try {
        await auth().signOut();
    } catch (error) {
        throw error;
    }
};

export const sendRestPassEmail = async (email) => {
    try {
        await auth().sendPasswordResetEmail(email);
    } catch (error) {
        throw error;
    }
};

// export const handleEmailVerif = (mode, oobcode) => {
//     if (mode === "verifyEmail" && oobcode) {
//         auth()
//             .applyActionCode(oobcode)
//             .catch((error) => {
//                 throw error;
//             });
//     }
// };

// export const handleForgotPass = (mode, oobcode, newPass) => {
//     if (mode === "resetPassword" && oobcode && newPass) {
//         auth().confirmPasswordReset(oobcode, newPass);
//     }
// };
