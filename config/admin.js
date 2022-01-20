module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'b8c1b5bdd4cb5198e4b2809efe092650'),
  },
});
