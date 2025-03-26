const mongoose = require('mongoose');

const connectToDB = async () => {
    try{
        mongoose.connect(process.env.MONGO_URL)
        .then((conn) => {
            console.log(`Connect to DB: ${conn.connection.host}`)

        })
        .catch((error)=> {
            console.log(error.message)
            process.exit(1);
        })
    }
    catch(error){
        console.log(error)
    }
}

module.exports = connectToDB;