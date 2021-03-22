import { IResolvers } from 'graphql-tools';
import { database } from '../data/data.store';
import _ from 'lodash';
import { IStudent, ICourse } from './models';


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
        },
        courses(): ICourse[] {
            return database.courses
        },
        course(__:void, { id }): ICourse {
            const dbCourse = _.find(database.courses, ['id', id]);
            return dbCourse as ICourse
        }
    }
};

export default query;
