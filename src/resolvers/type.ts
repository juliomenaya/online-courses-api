import { IResolvers } from 'graphql-tools';
import { database } from '../data/data.store';
import _ from 'lodash';


const type: IResolvers = {
    Student: {
        courses: parent => {
            return _.filter(database.courses, dbCourse => parent.courses.includes(dbCourse.id));
        }
    },
    Course: {
        students: parent => {
            return _.filter(database.students, student => student.courses.includes(parent.id));
        },
        path: parent => `https://www.udemy.com${parent.path}` 
    }
};

export default type;
