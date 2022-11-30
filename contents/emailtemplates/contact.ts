import {EmailClientData} from '../../modals'

const contactEmailTemplate = ({name, email, org, message}: EmailClientData) => `
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>mail from sobhanbera for contacting him...</title>

        <style>
            @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap');

            * {
                padding: 0;
                margin: 0;

                text-decoration: none;
                font-family: Inter, Roboto, Ubuntu, sans-serif;
                font-size: 16px;
            }

            .root {
                max-width: 750px;
                color: black;
            }
            .root div {
                padding: 10px 0;
            }

            .root div.quote {
                padding-left: 15px;
                padding: 10px 15px;
                border-left: 2px solid grey;
                margin-left: 5px;
                color: grey;
            }

            a,
            a:hover,
            a:active,
            a:visited,
            a:focus {
                font-weight: 600;
                color: black;
            }
        </style>
    </head>
    <body>
        <div class="root">
            <div>
                <p>Hi <a href="mailto:${email}">${name}</a>!</p>
            </div>

            <div>
                <p>
                    Thanks for contacting me! I am glad that you got to this
                    point. I look forward to communicating with you and will
                    respond very soon. Till then, you can also connect with me
                    on
                    <a href="http://linkedin.com/in/sobhanbera">LinkedIn</a>
                    for more robust communication.
                </p>
            </div>

            <div>
                <p>Regards,</p>
                <p>
                    <a href="https://github.com/sobhanbera">Sobhan Bera</a>
                </p>
                <p>Developer</p>
            </div>

            <div></div>

            <div class="quote">
                <p>Your Message -</p>
                <p>${message.replaceAll('\\n', '<br />')}</p>
            </div>
        </div>
    </body>
</html>
`

export default contactEmailTemplate
