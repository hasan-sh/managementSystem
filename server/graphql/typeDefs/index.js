const typeDefs = [
  `
    type Project {
      id: ID
      title: String
      description: String
    }
    type Category {
      id: ID
      name: String
      projects: [Project]
    }
    
    type Query {
      hello: String
      allCategories: [Category]
    }
  
    input SetProjectInput {
      id: ID!
      title: String
      description: String
    }
  
    input categoryInput {
      name: String!
      projects: [SetProjectInput]
    }
    
    input MoveProjectInput {
      fromCategoryId: ID!
      toCategoryId: ID!
      projectId: ID!
    }

    input RemoveProjectInput {
      id: ID!
      projectId: ID!
    }

    type Mutation {
      setCategory(input: categoryInput): Category
      setProject(input: SetProjectInput): [Category]
      removeProject(input: RemoveProjectInput): [Project]
      moveProject(input: MoveProjectInput) : Category
    }
  
    schema {
      query: Query
      mutation: Mutation
    }
    
    `
]

module.exports = typeDefs
