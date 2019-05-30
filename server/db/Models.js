const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ProjectSchema = new Schema({
  projectId: Schema.Types.ObjectId,
  title: String,
  description: String,
  category: {
    type: Schema.Types.ObjectId,
    ref: 'Category',
  },
})

const CategorySchema = new Schema({
  name: String,
  projects: [{ type: Schema.Types.ObjectId, ref: 'Project' }],
})

const Project = mongoose.model('Project', ProjectSchema)
const Category = mongoose.model('Category', CategorySchema)

module.exports = {
  Category,
  Project,
}
