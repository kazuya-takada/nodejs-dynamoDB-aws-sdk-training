const AWS = require('aws-sdk')
AWS.config.loadFromPath('./config.json')

const dynamoDB = new AWS.DynamoDB()
const params = { TableName: 'users' }
dynamoDB.deleteTable(params, (err, data) => {
  if (err) {
    console.error('Unable to delete table. Error JSON:', JSON.stringify(err, null, 2))
  } else {
    console.log('Deleted table. Table description JSON:', JSON.stringify(data, null, 2))
  }
})