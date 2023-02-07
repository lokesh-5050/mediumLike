const nodemailer = require("nodemailer");
const googleApis = require("googleapis");

const REDIRECT_URI = `https://developers.google.com/oauthplayground`;
const CLIENT_ID = "942642221927-mtjuub0707igfri74n1n1h9bndkufj0p.apps.googleusercontent.com";
const CLIENT_SECRET = "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";
const REFRESH_TOKEN = "1//04JQgruHXdFarCgYIARAAGAQSNwF-L9Ir9AwuApXKW3O8KS-Thr6ME8dkmCmdx2NflndXccDqGvovAKL_ALOo6cCrnww2a3aB7vc";

const authClient = new googleApis.google.auth.OAuth2(CLIENT_ID, CLIENT_SECRET, REDIRECT_URI);
authClient.setCredentials({refresh_token: REFRESH_TOKEN});


async function mailer(receiver,url){
    try{
        const ACCESS_TOKEN = await authClient.getAccessToken();

        const transport = nodemailer.createTransport({
            service: "gmail",
            auth: {
                type: "OAuth2",
                user: "zking2842@gmail.com",
                clientId: CLIENT_ID,
                clientSecret: CLIENT_SECRET,
                refreshToken: REFRESH_TOKEN,
                accessToken: ACCESS_TOKEN
            }
        })

        const details = {
            from: "Zeus King <zking2842@gmail.com>",
            to: receiver,
            subject: "Nodemailer testing",
            text: "Hey lokesh! zeus here",
            html: `<a>${url}</a>`
        }

        const result =  await transport.sendMail(details);
        return result;

    }
    catch(err){
        return err;
    }
}

// mailer("mali.lokesh5050@gmail.com , devillokesh697@gmail.com").then(res => {
//     console.log("sent mail !", res);
// })

module.exports = mailer;