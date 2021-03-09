const AWS = require('aws-sdk');
const ddb = new AWS.DynamoDB.DocumentClient();

exports.handler = async (event) => {

  let name = event['Name']
    let email = event['Email']
    let comments = event['Comments']
 
    try {
        let data = await ddb.put({
            TableName: "waitlist",
            Item: {
                Name: name,
                Email: email,
                Comments: comments
            }
        }).promise();
 
    } catch (err) {
        // error handling goes here
    };
 
    return { "message": "Successfully executed" };
};