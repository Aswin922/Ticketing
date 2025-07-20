
import mongoose from 'mongoose';
import {app} from './app';

const start = async () => {
    console.error('console error');
    console.log('console log');
    if(!process.env.JWT_KEY){
        console.error('❌ JWT_KEY is missing!');
        throw new Error('JWT_KEY must be defined');
    }
    try{     
        console.log('Connecting to MongoDB...');
        await mongoose.connect('mongodb://auth-mongo-srv:27017/auth');
        console.log('Connected to MongoDB');
    }
    catch(err){
        console.error(err);
    }
    app.listen(3000,()=>{
        console.log('Listening on port 3000');
    });
};

