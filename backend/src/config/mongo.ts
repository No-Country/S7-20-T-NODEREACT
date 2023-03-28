import mongoose  from 'mongoose';

export const dbConnection = async () => {
  try {
    await mongoose.connect('mongodb+srv://neobyte:xwXOmSXI4diBrfV9@myclustercoffe.5qgreoj.mongodb.net/cafeDB');

    console.log('Database online');
  } catch (error) {
    console.log(error);
    throw new Error('Error at database startup');
  }
};
