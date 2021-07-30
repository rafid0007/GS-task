const Student = require("../models/student");
const Subject = require("../models/subject");
const {GraphQLObjectType,
    GraphQLString,
    GraphQLSchema,
    GraphQLID,
    GraphQLList,
    GraphQLNonNull
} = require("graphql");

const studentType = new GraphQLObjectType({
    name: 'Student',
    fields: () => ({
        id: {type: GraphQLID},
        name: {type: GraphQLString},
        email: {type: GraphQLString},
        phone: {type: GraphQLString},
        dateOfBirth: { type: GraphQLString },
        subjectIds: {type: GraphQLList(GraphQLString)},
        subjects: {
            type: new GraphQLList(subjectType),
            resolve(parent){
                return parent.subjectIds.map(id => Subject.findById(id))
            }
        }
    })
});

const subjectType = new GraphQLObjectType({
    name: 'Subject',
    fields: () => ({
        id: {type: GraphQLID},
        name: {type: GraphQLString},
        students: {
            type: new GraphQLList(studentType),
            resolve(parent, args){
                return Student.find({subjectIds: parent.id})
            }
        }
    })
});

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        student: {
            type: studentType,
            args: {id: {type: GraphQLID}},
            resolve(parent, args){
                return Student.findById(args.id);
            }
        },
        subject: {
            type: subjectType,
            args: {id: {type: GraphQLID}},
            resolve(parent, args){
                return Subject.findById(args.id);
            }
        },
        students: {
            type: new GraphQLList(studentType),
            resolve(){
                // return books;
                return Student.find({});
            }
        },
        subjects: {
            type: new GraphQLList(subjectType),
            resolve(){
                // return authors;
                return Subject.find({});
            }
        }

    }
});

const Mutation = new GraphQLObjectType({
    name: 'Mutation',
    fields: {
        addSubject: {
            type: subjectType,
            args: {
                name: {type: new GraphQLNonNull(GraphQLString)},
            },
            resolve(parent, args){
                let subject = new Subject({
                    name: args.name,
                })
                return subject.save();
            }
        },
        addStudent: {
            type: studentType,
            args: {
                name: {type: new GraphQLNonNull(GraphQLString)},
                email: {type: new GraphQLNonNull(GraphQLString)},
                phone: {type: new GraphQLNonNull(GraphQLString)},
                dateOfBirth: {type: new GraphQLNonNull(GraphQLString)},
                subjectIds: {type: GraphQLList(GraphQLString)}
            },
            resolve(parent, args){
                let student = new Student({
                    name: args.name,
                    email: args.email,
                    phone: args.phone,
                    dateOfBirth: args.dateOfBirth,
                    subjectIds: args.subjectIds
                })
                return student.save();
            }
        },
    }
})

module.exports = new GraphQLSchema({
    query: RootQuery,
    mutation: Mutation
});
