module.exports = {
    HOST: "localhost",
    USER: "root",
    PASSWORD: "password",
    DB: "ecommerce",
    dialect: "mysql",
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000,
    },
    connectionUrl: "mysql://root:@localhost:3306/ecommerce?allowPublicKeyRetrieval=true"
};