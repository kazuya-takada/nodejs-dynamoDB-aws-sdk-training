const AWS = require('aws-sdk')
AWS.config.loadFromPath('./config.json')
const documentClient = new AWS.DynamoDB.DocumentClient()

const params = {
  TableName: 'users',
  Key: {
    user_id: 1,
    created_at: '1544752292'
  }
}

documentClient.delete(params, (err, data) => {
  if (err) console.log(JSON.stringify(err, null, 2))
  else console.log(JSON.stringify(data, null, 2))
})