import { IResolvers } from 'graphql-tools';
import { database } from '../data/data.store';
import _ from 'lodash';
import { ICourse } from './models';


const mutation: IResolvers = {
    Mutation: {
        newCourse(__: void, { course }): ICourse|undefined {
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
            if (database.courses.filter(itemCourse => itemCourse.title.toLowerCase() === newCourse.title.toLowerCase()).length === 0) {
                database.courses.push(newCourse);
                return newCourse;
            }
        },
        updateCourse(__: void, { course }): ICourse|undefined {
            const courseIndexToUpdate = _.findIndex(database.courses, courseItem => courseItem.id === course.id);
            if (courseIndexToUpdate) {
                database.courses[courseIndexToUpdate] = { ...course };
                return database.courses[courseIndexToUpdate];
            }

        },
        deleteCourse(__: void, { id }): ICourse|undefined {
            const removedCourse = _.remove(database.courses, ['id', id]);
            if (removedCourse) {
                return removedCourse[0];
            }
        }
    }
};

export default mutation;
