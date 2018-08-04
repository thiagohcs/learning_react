import React, { Component } from 'react'
import axios from 'axios'
import PageHeader from '../template/pageHeader'
import TodoForm from './todoForm'
import TodoList from './todoList'
import todoForm from './todoForm';

const URL = 'http://localhost:3003/api/todos'

export default class Todo extends Component {

    constructor(props) {
        super(props)
        this.state = { description: '', list: [] }

        this.handleChange = this.handleChange.bind(this)
        this.handleAdd = this.handleAdd.bind(this)
        this.handleSearch = this.handleSearch.bind(this)
        this.handleRemove = this.handleRemove.bind(this)
        this.handleMarkAsDone = this.handleMarkAsDone.bind(this)
        this.handleMarkAsPending = this.handleMarkAsPending.bind(this)
        this.handleClear = this.handleClear.bind(this)

        this.refresh()
    }

    handleChange(e) {
        this.setState({ ...this.state, description: e.target.value })
    }

    refresh(description = '') {
        let search = description ? `&description__regex=/${description}/`: ''

        axios.get(`${URL}?sort=-createdAt${search}`)
            .then(result => {
                this.setState({ ...this.state, description, list: result.data })
            })
    }

    handleAdd() {
        let description = this.state.description

        if(!(description === "")) {
            axios.post(URL, { description })
            .then(result => this.refresh())
        }
    }

    handleSearch() {
        this.refresh(this.state.description)
    }

    handleMarkAsDone(task) {
        axios.put(`${URL}/${task._id}`, { ...task, done: true })
            .then(result => this.refresh(this.state.description))
    }

    handleMarkAsPending(task) {
        axios.put(`${URL}/${task._id}`, { ...task, done: false })
            .then(result => this.refresh(this.state.description))
    }

    handleRemove(task) {
        axios.delete(`${URL}/${task._id}`)
            .then(result => this.refresh(this.state.description))
    }

    handleClear() {
        this.refresh()
    }


    render() {
        return (
            <div>
                <PageHeader name="Tasks" small="register" />
                <TodoForm 
                    description={this.state.description} 
                    handleChange={this.handleChange}
                    handleAdd={this.handleAdd}
                    handleSearch={this.handleSearch}
                    handleClear={this.handleClear} 
                />
                <TodoList 
                    list={this.state.list} 
                    handleMarkAsDone={this.handleMarkAsDone}
                    handleMarkAsPending={this.handleMarkAsPending}
                    handleRemove={this.handleRemove}
                />
            </div>
        )
    }
}