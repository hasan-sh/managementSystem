import React, { Component } from 'react'
import 'isomorphic-fetch'

import css from '../style.css'
import Category from '../components/Category.js'
import fetchFromGraphql from '../util/service'

export default class ManagementSystem extends Component {
  static async getInitialProps() {
    const query = `{
      allCategories {
        id
        name
        projects {
          title
          description
          id
        }
      }
    }`
    return fetchFromGraphql(query)
  }

  constructor() {
    super()
    this.state = {
      categories: [],
      title: '',
      desc: '',
    }
  }

  componentWillMount = () => {
    this.setState({ categories: this.props.allCategories })
  }

  onDrop = (e, targetCategoryId) => {
    const fromCategoryId = e.dataTransfer.getData('fromCategoryId')
    const draggedProject = JSON.parse(e.dataTransfer.getData('draggedProject'))

    if (targetCategoryId === fromCategoryId) return

    this.moveProject({
      toCategoryId: targetCategoryId,
      projectId: draggedProject.id,
    })
  }

  moveProject = async ({ toCategoryId, projectId }) => {
    const query = `
      mutation  MoveProject($input: MoveProjectInput) {
          moveProject(input: $input)
          {
            id
            name
            projects {
              title
              description
              id
            }
          }
         }
    `
    const { moveProject: categories } = await fetchFromGraphql(query, {
      toCategoryId,
      projectId,
    })
    this.setState({ categories })
  }

  removeProject = async (categoryId, projectId) => {
    const query = `
    mutation  RemoveProject($input: RemoveProjectInput) {
        removeProject(input: $input) {
            title
            id
            description
        }
      }
    `
    const { removeProject: updatedProjects } = await fetchFromGraphql(query, {
      categoryId,
      projectId,
    })

    const categories = this.state.categories.map(category =>
      category.id === categoryId
        ? { ...category, projects: updatedProjects }
        : category
    )
    this.setState({ categories })
  }

  handleChange(event, type) {
    this.setState({ [type]: event.target.value })
  }

  addProject = async e => {
    e.preventDefault()
    const { title, desc } = this.state
    if (title && desc) {
      const query = `
        mutation  SetProject($input: SetProjectInput) {
            setProject(input: $input) {
              id
              name
              projects {
                id
                title
                description
              }
            }
        }
      `

      const data = await fetchFromGraphql(query, {
        title,
        description: desc,
        id: this.state.categories[0].id,
      })
      this.setState({ categories: data.setProject, title: '', desc: '' })
    } else {
      alert('Please, add title or description.')
    }
  }

  render() {
    const { categories } = this.state

    const allCategories = categories.map(category => (
      <Category
        key={category.id}
        category={category}
        onDrop={this.onDrop}
        removeProject={this.removeProject}
      />
    ))

    return (
      <div>
        <div className={css.container}>
          {allCategories.length > 0
            ? allCategories
            : 'Please Add Categories first!'}
        </div>
        {allCategories.length > 0 ? (
          <form onSubmit={this.addProject} className={css.addProject}>
            <input
              type="text"
              placeholder={'Title'}
              value={this.state.title}
              onChange={e => this.handleChange(e, 'title')}
            />
            <textarea
              type="text"
              placeholder={'Description'}
              value={this.state.desc}
              onChange={e => this.handleChange(e, 'desc')}
            />
            <input type="submit" value="Add Project" />
          </form>
        ) : null}
      </div>
    )
  }
}

// I could have used optimized rendering where I get all the categories from the back-end and update the state accordingly.

// Let user select which category instead of hard coding the inserting (id: this.state.categories[0].id)
