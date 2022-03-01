const AWS = require('aws-sdk')
AWS.config.loadFromPath('./config.json')
const documentClient = new AWS.DynamoDB.DocumentClient()

const scanAll = async () => {
  let params = {
    TableName: 'users',
  }
  let items = []

  const scan = async () => {
    console.log('execute scan')
    console.log(params)
    const result = await documentClient.scan(params).promise()
    items.push(...result.Items)

    if (result.LastEvaluatedKey) {
      params.ExclusiveStartKey = result.LastEvaluatedKey
      await scan()
    }
  }

  try {
    await scan()
    return items
  } catch (err) {
    console.error(`[Error]: ${JSON.stringify(err)}`)
    return err
  }
}

(async () => {
  const items = await scanAll()
  console.log(items)
})()