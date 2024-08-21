const transporter = require("./nodemailer.js");

const templatesPayments = async (payment) => {
    const orderItems = payment.order.map(item => {
        return `<li>${item.name} <span>(${item.quantity})</span></li>`
    })

    try {
        const info = await transporter.sendMail({
            from: `"${payment.username}" <${payment.userEmail}>`,
            to: process.env.GMAIL_USER,
            subject: "Comprobante de pago y pedido",
            html: `<main style="font-family: 'Poppins', sans-serif;">
        <div style="padding: 2rem 0; background-color: rgb(254,206,47);"></div>
        <img src="https://ouch-cdn2.icons8.com/9cO3Fk2f2wT167-SWOQ78s5CwcUuFT-EsRB-Jg6u2xc/rs:fit:368:368/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9zdmcvMjI4/LzU3MDU4MDM1LTE0/ZjAtNDIyMS1iMzg5/LTQ0NzVlMzcyNjIx/YS5zdmc.png" alt="Logo" style="display: block; margin: 0 auto; width: 14rem;">
        <h2 style="font-family: 'Poppins', sans-serif;">Cliente</h2>
        <p style="font-family: 'Poppins', sans-serif;">Nombre: ${payment.username}</p>
        <p style="font-family: 'Poppins', sans-serif;">Email: ${payment.userEmail}</p>
        <p style="font-family: 'Poppins', sans-serif;">Dirección de destino: ${payment.address}</p>
        <h2 style="font-family: 'Poppins', sans-serif;">Pedido</h2>
        <p style="font-family: 'Poppins', sans-serif;">Fecha: ${payment.dateOrder}</p>
        <ul>
            ${orderItems}
        </ul>
        <h3 style="font-family: 'Poppins', sans-serif; font-weight: 600">Total a pagar:$ ${payment.totalToPay}</h3>
        <h2 style="font-family: 'Poppins', sans-serif;">Comprobante del pago</h2>
        <img src=${payment.image} alt="Comprobante de pago">
        <div style="padding: 2rem 0; background-color: rgb(254,206,47);"></div>
    </main>`,
        })
    } catch (error) {
        console.log(error)
    }
}

module.exports = templatesPayments