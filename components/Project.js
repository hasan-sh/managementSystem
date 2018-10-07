import React, { Component } from 'react'
import 'isomorphic-fetch'

const API = 'http://localhost:4000/graphql'
import css from '../style.css'

export default class Project extends Component {
  dragStart = (e, draggedProject, fromCategoryId) => {
    e.dataTransfer.setData('fromCategoryId', fromCategoryId)
    e.dataTransfer.setData('draggedProject', JSON.stringify(draggedProject))
  }

  render() {
    const { project, categoryId, removeProject } = this.props

    return (
      <div
        className={css.project}
        key={project.id || project.title}
        draggable
        onDragStart={e => this.dragStart(e, project, categoryId)}
      >
        <div className={css.projectTitle}>
          <span>{project.title}</span>
          <span
            onClick={() => removeProject(categoryId, project.id)}
            className={css.removeProject}
          >
            x
          </span>
        </div>
        <div className={css.projectDesc}>{project.description}</div>
      </div>
    )
  }
}

// I could have used optimized rendering where I get all the categories from the back-end and update the state accordingly.
