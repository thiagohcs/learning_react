import React from 'react'
import ReactDOM from 'react-dom'
import Family from './family'
import Member from './member'

ReactDOM.render(
    <Family lastName='Candido'>
        <Member name='Thiago Henrique' />
    </Family>,
    document.getElementById('app')
)