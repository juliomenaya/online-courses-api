import { IResolvers } from 'graphql-tools';
import { database } from '../data/data.store';
import _ from 'lodash';

interface IStudent {
    id: string,
    name: string,
    email: string,
    website: string,
    courses: string[]
};


const query: IResolvers = {
    Query: {
        students(): IStudent[] {
            return database.students;
        },
        student(__: void, { id } ): IStudent {
            const dbStudent = _.find(database.students, ['id', id]);
            if (dbStudent === undefined) {
                return {
                    id: '-1',
                    name: `Could not find student with ID ${id}`,
                    email: '',
                    courses: ['']
                } as IStudent
            }
            return dbStudent
        }
    }
};

export default query;
