function enviarEmail(email) {
    /** ACA HAGO UN MONTON DE COSAS */
    console.log("Envie email a:" , email);
}

const emails = [
    "emailDEPRUEBA01@GMAIL.COM",
    "EMAILDEPRUEBA02@GMAIL.COM",
    "EMAILDEPRUEBA03@GMAIL.COM",
    "EMAILDEPRUEBA04@GMAIL.COM",
    "EMAILDEPRUEBA05@GMAIL.COM",
    "LUCAS@GMAIL.COM",
    "EMAILDEPRUEBA07@GMAIL.com",
    "emaildeprueba08@gmail.com",
];

// for(let i = 0; i < emails.length; i++) {
//     enviarEmail(emails[i].toLowerCase());
// }


// emails.map(function(item) {
//     enviarEmail(item);
// })


// emails.map((item) => enviarEmail(item.toLowerCase()));

const edad = 11;
const mayor18 = edad >= 18 ? "MAYOR" : "MENOR";

// const sumador = (a, b) => a !== 0 ? a + b : 0;

console.log(mayor18);