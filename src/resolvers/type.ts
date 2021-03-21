import { IResolvers } from 'graphql-tools';
import { database } from '../data/data.store';
import _ from 'lodash';


const type: IResolvers = {
    Student: {
        courses: parent => {
            return _.filter(database.courses, dbCourse => parent.courses.includes(dbCourse.id));
        }
    }
};

export default type;
