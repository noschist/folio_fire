import auth from "@react-native-firebase/auth";

export const registerWithPass = async (name, email, pass) => {
    try {
        const userCred = await auth().createUserWithEmailAndPassword(
            email,
            pass
        );
        await userCred.user.updateProfile({
            displayName: name,
        });
        await userCred.user.sendEmailVerification();
    } catch (error) {
        throw error;
    }
};

export const signinWithPass = (email, pass) => {
    auth()
        .signInWithEmailAndPassword(email, pass)
        .then((userCred) => {
            return userCred;
        })
        .catch((error) => {
            throw error;
        });
};

export const signinWithGoogle = () => {
    const creds = auth.GoogleAuthProvider;
    const userCred = auth().signInWithPopup(creds);
    return userCred;
};

export const signOut = () => {
    auth().signOut();
};

export const sendRestPassEmail = (email) => {
    auth().sendPasswordResetEmail(email, {
        handleCodeInApp: true,
        url: "folio://reset-pass",
    });
};

export const handleEmailVerif = (mode, oobcode) => {
    if (mode === "verifyEmail" && oobcode) {
        auth()
            .applyActionCode(oobcode)
            .catch((error) => {
                throw error;
            });
    }
};

export const handleForgotPass = (mode, oobcode, newPass) => {
    if (mode === "resetPassword" && oobcode && newPass) {
        auth().confirmPasswordReset(oobcode, newPass);
    }
};
