const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ProjectSchema = new Schema({
  projectId: Schema.Types.ObjectId,
  title: String,
  description: String
})

const CategorySchema = new Schema({
  name: String,
  projects: [ProjectSchema]
})

const Category = mongoose.model('Category', CategorySchema)
module.exports = {
  Category
}
