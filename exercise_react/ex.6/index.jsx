import React from 'react'
import ReactDOM from 'react-dom'
import Family from './family'
import Member from './member'

ReactDOM.render(
    <Family lastName='Candido'>
        <Member name='Thiago Henrique' />
        <Member name='Edilania Maria' />
        <Member name='Ana Paula' />
        <Member name='Ana Carolina' />
        <Member name='Davi Felipe' />
    </Family>,
    document.getElementById('app')
)