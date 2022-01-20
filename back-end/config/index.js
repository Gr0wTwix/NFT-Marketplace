const env = process.env.NODE_ENV || "development";

const config = {
  development: {
    PORT: process.env.PORT || 5000,
    DB_CONNECTION: "",
    TOKEN_SECRET: "nfts will make so rich dude",
    SALT_ROUNDS: 10,
    CORS: {
      origin: ["http://localhost:3000"],
      credentials: true,
    },
  },
};
