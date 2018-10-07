import Link from 'next/link'
import React, { Component } from 'react'
import 'isomorphic-fetch'

import Project from './Project.js'

import css from '../style.css'
const API = 'http://localhost:4000/graphql'

export default class Category extends Component {
  constructor() {
    super()

    this.state = {
      draggedProject: null,
      fromCategoryId: ''
    }
  }
  render() {
    const { category, onDrop, removeProject } = this.props

    return (
      <div
        className={css.item}
        key={category.id}
        onDragOver={e => e.preventDefault()}
        onDrop={e => onDrop(e, category.id)}
      >
        <div className={css.categoryName}>{category.name}</div>
        {category.projects.map(project => (
          <Project
            key={project.id}
            project={project}
            categoryId={category.id}
            removeProject={removeProject}
          />
        ))}
      </div>
    )
  }
}

// I could have used optimized rendering where I get all the categories from the back-end and update the state accordingly.
