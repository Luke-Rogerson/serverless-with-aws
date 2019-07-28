module.exports.hello = (evt, ctx, done) => {
  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Helloololololololo!',
      input: evt
    })
  };
  done(null, response);
};
