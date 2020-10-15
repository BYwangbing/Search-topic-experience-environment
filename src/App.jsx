import React, { Component } from 'react'
import TopicCards from './components/TopicCards/TopicCards'
import './App.less'
import 'antd/dist/antd.css'

export default class App extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <TopicCards>

            </TopicCards>
        )
    }
}
