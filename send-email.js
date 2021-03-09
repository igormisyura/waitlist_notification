const AWS = require('aws-sdk');
const ses = new AWS.SES();

exports.handler = async (event) => {

    let tabledetails = event.Records[0].dynamodb;
    console.log(tabledetails);

    let name = tabledetails.NewImage.Name.S;
    let email = tabledetails.NewImage.Email.S;
    let comments = tabledetails.NewImage.Comments.S;
    let messagebody = 'Hi' + ' ' + name + '! You have been added to the waitlist!'
    try {
        let data = await ses.sendEmail({
            Source: "imisyura@amazon.com",
            Destination: {
                ToAddresses: ['igor@some-email-domain.com']
            },
            Message: {
                Subject: {
                    Data: "You've been added to the waitlist!"
                },
                Body: {
                    Text: {
                        Data: ``
                    }
                }
            }
        }).promise();

    } catch (err) {
        // error handling goes here
    };

    return { "message": "Successfully executed" };
};