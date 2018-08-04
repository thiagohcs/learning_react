import React, { Component } from 'react'

export default class Grid extends Component {
    toCssClasses(numbers) {
        const cols = numbers ? numbers.split(' ') : []
        let classes = ''

        if(cols[0]) classes += `col-xs-s${cols[0]}`
        if(cols[1]) classes += `col-sm-s${cols[1]}`
        if(cols[2]) classes += `col-md-s${cols[2]}`
        if(cols[3]) classes += `col-lg-s${cols[3]}`

        return classes
    }

    render() {
        const gridClasses = this.toCssClasses(this.props.cols || 12)

        return (
            <div className={gridClasses}>
                { this.props.children }
            </div>
        )
    }
}