module.exports = {
  index
}

function index (e, ctx, cb) {
  console.log(e)

  const response = {
    statusCode: 200,
    body: "Hello World"
  }

  cb(null, response)
}
