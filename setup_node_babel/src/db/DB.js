import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

const {MONGO_URI,  MONGO_URI_TEST , NODE_ENV} = process.env;

export const connectionsDataBase = async() => {  
    
    const URI = (NODE_ENV === 'test')
        ?MONGO_URI_TEST
        :MONGO_URI;

    try {
        await mongoose.connect( URI , {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

    } catch (error) {
        console.log('Not connected to Data-Base');
    
    }
};