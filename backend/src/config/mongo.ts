import mongoose  from 'mongoose';

export const dbConnection = async () => {
  try {
    const db = await mongoose.connect(process.env.MONGODB_CNN!);
    await mongoose.connect(process.env.MONGODB_CNN!);

    console.log(`Database online [Name: ${db.connection.db.databaseName}]`);
  } catch (error) {
    console.log(error);
    throw new Error('Error at database startup');
  }
};

