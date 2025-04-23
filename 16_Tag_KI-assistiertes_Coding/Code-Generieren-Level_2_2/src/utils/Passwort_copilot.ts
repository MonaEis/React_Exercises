function validatePasswordCoPi(password: string): string {
    if (password.length < 10) {
        return "Das Passwort muss mindestens 10 Zeichen lang sein.";
    }
    if (!/[A-Z]/.test(password)) {
        return "Das Passwort muss mindestens einen Großbuchstaben enthalten.";
    }
    if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
        return "Das Passwort muss mindestens ein Sonderzeichen enthalten.";
    }
    if (/\s/.test(password)) {
        return "Das Passwort darf keine Leerzeichen enthalten.";
    }
    return "Das Passwort ist gültig.";
}
export { validatePasswordCoPi };