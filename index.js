const cep = require('cep-promise')

exports.handler = (event, context, callback) => {
  return Promise.resolve(01329010)
    .then(cep)
    .then(result => callback(null, result))
}
