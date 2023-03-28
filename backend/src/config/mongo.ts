import "dotenv/config"
import {connect} from "mongoose"


async function dbConnect(): Promise<void> {
    const DB_URL = <string>process.env.DATABASE_URL;
    await connect(DB_URL)
}

export default dbConnect

/*
async function connectDb(): Promise<void> {
    const db = await mongoose.connect(`${process.env.DATABASE_URL}`, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
});
    console.log('database is connected to', db.connection.db.databaseName)
}

export default connectDb()
*/