require('dotenv').config();

const display_env = (req, res, next) => {
    console.log("frontend_port : " + process.env.frontend_port)
    console.log("backend_port : " + process.env.backend_port)
    console.log("use_mongodb : " + process.env.use_mongodb)
    
    console.log("mongodb_url : " + process.env.mongodb_url)
    console.log("mongodb_user : " + process.env.mongodb_user)
    console.log("mongodb_host : " + process.env.mongodb_host)
    console.log("mongodb_database : " + process.env.mongodb_database)
    console.log("mongodb_password : " + process.env.mongodb_password)
    console.log("mongodb_post : " + process.env.mongodb_post)

    console.log("postgres_user : " + process.env.postgres_user)
    console.log("postgres_host : " + process.env.postgres_host)
    console.log("postgres_database : " + process.env.postgres_database)
    console.log("postgres_password : " + process.env.postgres_password)
    console.log("postgres_post : " + process.env.postgres_post)
};

module.exports = display_env;
