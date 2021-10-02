import mongoose from 'mongoose';

export const connectionsDataBase = async() => {  
     
    try {
        await mongoose.connect( process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

    } catch (error) {
        console.log('Not connected to Data-Base');
    
    }
};