import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Project from './Project.js'

import css from '../style.css'

class Category extends Component {
  constructor(props) {
    super(props)

    this.state = {
      projectDraggedOver: null,
    }
  }
  render() {
    const { category, onDrop, removeProject } = this.props
    const { projectDraggedOver } = this.state

    return (
      <div
        className={css.item}
        key={category.id}
        onDragLeave={e => {
          e.preventDefault()
          const fromCategoryId = e.dataTransfer.getData('fromCategoryId')
          if ((category.id === fromCategoryId) === projectDraggedOver) return
          this.setState({ projectDraggedOver: null })
        }}
        onDragOver={e => {
          e.preventDefault()
          const fromCategoryId = e.dataTransfer.getData('fromCategoryId')
          const draggedProject = JSON.parse(
            e.dataTransfer.getData('draggedProject')
          )
          if (category.id === fromCategoryId || projectDraggedOver) return
          this.setState({
            projectDraggedOver: draggedProject,
          })
        }}
        onDrop={e => {
          onDrop(e, category.id)
          this.setState({ projectDraggedOver: null })
        }}
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

        {projectDraggedOver ? (
          <div className={css.projectDraggedOver}>
            <Project
              project={projectDraggedOver}
              categoryId={category.id}
              removeProject={removeProject}
            />
          </div>
        ) : null}
      </div>
    )
  }
}

Category.propTypes = {
  category: PropTypes.object,
  onDrop: () => null,
  removeProject: () => null,
}

export default Category

// I could have used optimized rendering where I get all the categories from the back-end and update the state accordingly.
// DONE
