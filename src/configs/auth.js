module.exports = {
  jwt: {
    secret: process.env.AUTH_SECRET_KEY || 'default',
    expiresIn: '1d'
  }
}