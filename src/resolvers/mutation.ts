import { IResolvers } from 'graphql-tools';
import { database } from '../data/data.store';
import _ from 'lodash';
import { ICourse } from './models';


const mutation: IResolvers = {
    Mutation: {
        newCourse(__: void, { course }): ICourse {
            const newCourse = {
                id: String(database.courses.length + 1),
                title: course.title,
                description: course.description,
                clases: course.clases,
                time: course.time,
                level: course.level,
                logo: course.logo,
                path: course.path,
                teacher: course.teacher,
                reviews: []
            };
            database.courses.push(newCourse);
            return newCourse;
        },
        // updateCourse(__: void, { course }): ICourse {

        // },
        // deleteCourse(__: void, { course }): ICourse {

        // }
    }
};

export default mutation;
