const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'conorpdoyle429@gmail.com',
        subject: 'Welcome to the Task App',
        text: `Welcome to the app, ${name}. Let me know how you get along with the app.`
    })
}

const sendCancelEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'conorpdoyle429@gmail.com',
        subject: 'Sorry to see you go',
        text: `Goodbye, ${name}. Is there anything we could of done differently?`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancelEmail
}