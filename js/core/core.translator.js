"use strict";

let Core_Language = {};
export default class Core_Translator {
    constructor(...languages) {
        this.allowedLanguages = languages;

        $(document).on("click", "#de", function () {
            window.Core.utils.setCookie("language", "de", 365);
            console.log("de");
        });
        $(document).on("click", "#en", function () {
            window.Core.utils.setCookie("language", "en", 365);
            console.log("en");
        });
        this.currentLanguage = window.Core.utils.getCookie("language") || window.Core.system.defaultLanguage;
    }

    t(key, language = this.currentLanguage) {
        return (typeof Core_Language[language][key] === "undefined" ? "-- missing translation: " + key + " --"
            : Core_Language[language][key]);
    }
}

Core_Language.en = {
    logout : "logout",
    username : "username",
    password : "password",
    language: "language",
    contact: "contact",
    imprint: "imprint",
    welcome: "Welcome!",
    amenities: "Amenities"
};
Core_Language.de = {
    logout : "Ausloggen",
    username : "Benutzername",
    password: "Passwort",
    language : "Sprache",
    contact: "Kontakt",
    imprint: "Impressum",
    welcome: "Willkommen!",
    amenities: "Ausstattung"
};
Core_Language.it = {
    logout : "scollegarsi",
    username : "nome utente",
    password : "password"
};
