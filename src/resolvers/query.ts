import { IResolvers } from 'graphql-tools';
import { database } from '../data/data.store';

interface Student {
    id: string,
    name: string,
    email: string,
    website: string,
    courses: string[]
};


const query: IResolvers = {
    Query: {
        students(): Student[] {
            return database.students;
        }
    }
};

export default query;
