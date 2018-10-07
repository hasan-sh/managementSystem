const resolvers = Category => ({
  Query: {
    allCategories() {
      return Category.find({})
    }
  },
  Mutation: {
    setCategory: (root, { input: { name, projects = [] } }) => {
      const category = new Category({
        name,
        projects
      })
      return category.save().then(() => Category.findOne({ name }))
    },
    setProject: (root, { input: { title, description, id } }) =>
      Category.updateOne(
        { _id: id },
        {
          $addToSet: {
            projects: { title, description }
          }
        }
      ).then(() => Category.find({})),
    // .then(col => col.projects),

    removeProject: (root, { input: { id, projectId } }) =>
      Category.updateOne(
        { _id: id },
        {
          $pull: {
            projects: {
              _id: projectId
            }
          }
        }
      )
        .then(() => Category.findOne({ _id: id }))
        .then(col => col.projects),
    moveProject(
      root,
      {
        input: { fromCategoryId, toCategoryId, projectId }
      }
    ) {
      return Category.findOne({
        _id: fromCategoryId
      })
        .then(rec => {
          const project = rec.projects.find(p => p._id.toString() === projectId)
          return project
        })

        .then(project => {
          if (project == null) {
            throw new Error('Project does not exist.')
          }
          return Category.updateOne(
            { _id: toCategoryId },
            {
              $addToSet: {
                projects: project
              }
            }
          )
        })
        .then(() =>
          Category.updateOne(
            { _id: fromCategoryId },
            {
              $pull: {
                projects: {
                  _id: projectId
                }
              }
            }
          )
        )
        .then(() => Category.findOne({ _id: toCategoryId }))
        .catch(e => console.log(e))
    }
  }
})

module.exports = resolvers
