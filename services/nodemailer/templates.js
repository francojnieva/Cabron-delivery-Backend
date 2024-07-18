const transporter = require("./nodemailer.js");

const templatesRegister = async (email, username) => {
    try {
        const info = await transporter.sendMail({
            from: `"Cabrón Delivery" <${process.env.GMAIL_USER}>`,
            to: email,
            subject: "Registro de cuenta exitoso",
            html: `<main style="text-align: center; font-family: 'Poppins', sans-serif;">
        <div style="padding: 2rem 0; background-color: rgb(254,206,47);"></div>
        <img src="https://ouch-cdn2.icons8.com/9cO3Fk2f2wT167-SWOQ78s5CwcUuFT-EsRB-Jg6u2xc/rs:fit:368:368/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9zdmcvMjI4/LzU3MDU4MDM1LTE0/ZjAtNDIyMS1iMzg5/LTQ0NzVlMzcyNjIx/YS5zdmc.png" alt="Logo" style="display: block; margin: 0 auto; width: 14rem;">
        <h1 style="font-family: 'Poppins', sans-serif;">Bienvenido</h1>
        <p style="font-family: 'Poppins', sans-serif;">Gracias por registrarte en nuestro servicio, ${username}.</p>
        <p style="font-family: 'Poppins', sans-serif;">Estamos emocionados de tenerte con nosotros.</p>
        <p style="font-family: 'Poppins', sans-serif;">Si tienes alguna pregunta o necesitas ayuda, no dudes en contactarnos.</p>
        <p style="font-family: 'Poppins', sans-serif;">¡Esperamos que disfrutes de tu experiencia!</p>
        <p style="font-family: 'Poppins', sans-serif;">Saludos,<br/>El equipo de Cabrón</p>
        <div style="padding: 2rem 0; background-color: rgb(254,206,47);"></div>
    </main>`,
        })
    } catch (error) {
        console.log(error)
    }
}

module.exports = templatesRegister