const resolvers = ({ Category, Project }) => ({
  Query: {
    allCategories: async () => {
      const categories = await Category.find({}).populate(
        'projects',
        'title description'
      )
      return categories
    },
  },
  Mutation: {
    setCategory: (root, { input: { name, projects = [] } }) => {
      const category = new Category({
        name,
        projects,
      })
      category.save()
      return category
    },
    setProject: async (root, { input: { title, description, id } }) => {
      try {
        const project = new Project({
          title,
          description,
          category: id,
        })
        await project.save()
        const category = await Category.findOne({ _id: id })
        category.projects.push(project)
        await category.save()
      } catch (error) {
        throw new Error(error)
      }

      return await Category.find({}).populate('projects')
    },
    removeProject: async (root, { input: { categoryId, projectId } }) => {
      await Project.deleteOne({ _id: projectId })
      const category = await Category.findOne({ _id: categoryId }).populate(
        'projects'
      )
      return category.projects
    },
    moveProject: async (root, { input: { toCategoryId, projectId } }) => {
      const project = await Project.findOne({ _id: projectId })
      await Project.deleteOne({ _id: projectId })
      const movedProject = await new Project({
        title: project.title,
        description: project.description,
        category: toCategoryId,
      }).save()
      const toCategory = await Category.findOne({ _id: toCategoryId }).populate(
        'projects'
      )
      toCategory.projects.push(movedProject._id)
      await toCategory.save()
      return Category.find({}).populate('projects')
    },
  },
})

module.exports = resolvers
