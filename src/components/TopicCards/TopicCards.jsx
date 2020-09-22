import React, {Component} from 'react';
import axios from 'axios';
import {Divider, Input, Button, Col, Row, Avatar, Empty} from 'antd';
import {PlayCircleOutlined} from '@ant-design/icons';
import '../../assets/TopicCards.css'
import mock from '../../mock/index'

const {Search} = Input;

export default class TopicCards extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: null,
            isLoaded: false
        }
    }

    componentDidMount() {
        this.getList();
    }

    async getList() {
        const _this = this;
        axios.get('http://localhost:8000/list')
            .then(function (response) {
                console.log(response.data);
                _this.setState({
                    users: response.data,
                    isLoaded: true
                });
            })
            .catch(function (error) {
                console.log(error);
                _this.setState({
                    isLoaded: false,
                    error: error
                })
            })
    }


    render() {
        const style = {
            padding: '0 .3rem'
        }

        if (this.state.users) {
            const {feedid, feedinfo, topics} = this.state.users;
            return (
                <div className="container">
                    <h1>搜索话题扩展体验环境 </h1>
                    <Divider/>
                    <div className="search">
                        <Search size="large" value={feedid} style={{width: 400}} placeholder="input search text"
                                onSearch={value => console.log(value)}/>&emsp;
                        <Button type="primary" size="large">确定</Button>&emsp;
                        <Button type="primary" size="large">随机FeedID</Button>
                    </div>

                    <div className="relateInfo">
                        <div className="site-card-wrapper">
                            <Row gutter={24}>
                                <Col lg={{span: 4}} md={{span: 6}} xs={{span: 12}} style={style}>
                                    <a target="_blank" href={feedinfo.video_url}>
                                        <div className="card">
                                            <div className="cardCover">
                                                <img src={feedinfo.cover_url}
                                                     alt=""/>
                                            </div>
                                            <div className="cardInfo">
                                                <div className="cardDesc">{feedinfo.desc}</div>
                                                <div className="cardFooter">
                                                    <div>
                                                        <Avatar size={24} src={feedinfo.userimg}/>
                                                        <span>{feedinfo.username}</span>
                                                    </div>
                                                    <div>
                                                        <PlayCircleOutlined style={{fontSize: '18px', color: '#FFF'}}/>
                                                        <span
                                                            style={{'verticalAlign': 'text-bottom'}}>{feedinfo.PlayNum}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </Col>
                            </Row>
                        </div>
                    </div>
                    <div className="relateTopic">
                        {this.state.users.topics.map((item, index) => (
                            <Button key={index} type="primary" size="large">{item.topic}</Button>
                        ))}
                    </div>
                    <div className="relateVideo">
                        <h2>相关视频</h2>
                        <div className="site-card-wrapper">
                            {topics.map((item, index) => (
                                <Row gutter={24} key={index}>
                                    {item.results.map((topic, j) => (
                                        <Col key={j} lg={{span: 4}} md={{span: 6}} xs={{span: 12}}
                                             style={style}>
                                            <div className="cardTopic">

                                            </div>
                                            <a target="_blank" href={topic.Url}>
                                                <div className="card">
                                                    <div className="cardCover">
                                                        <img src={topic.Cover} alt=""/>
                                                    </div>
                                                    <div className="cardInfo">
                                                        <div className="cardDesc">{topic.FeedDesc}</div>
                                                        <div className="cardFooter">
                                                            <div>
                                                                <Avatar size={24} src={topic.PosterAvatar}/>
                                                                <span>{topic.PosterNick}</span>
                                                            </div>
                                                            <div>
                                                                <PlayCircleOutlined
                                                                    style={{fontSize: '18px', color: '#FFF'}}/>
                                                                <span
                                                                    style={{'verticalAlign': 'text-bottom'}}>{topic.PlayNum}</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </a>
                                        </Col>
                                    ))}
                                </Row>
                            ))}
                        </div>
                    </div>
                </div>
            )
        } else {
            return <Empty description="暂无数据"/>
        }

    }
}