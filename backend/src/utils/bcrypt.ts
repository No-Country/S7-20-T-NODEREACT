import bcrypt from 'bcryptjs';

export const hashPassword = (plainPassword: string): string => {
    return bcrypt.hashSync(plainPassword, 10);
};

export const comparePassword = (plainPassword: string, hashPassword: string): boolean => {
    return bcrypt.compareSync(plainPassword, hashPassword);
};

