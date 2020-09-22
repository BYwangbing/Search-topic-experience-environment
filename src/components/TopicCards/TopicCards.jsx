import React, {Component} from 'react';
import axios from 'axios';
import {Input, Button, Col, Row, Avatar, Alert, Empty } from 'antd';
import {PlayCircleOutlined} from '@ant-design/icons';
import '../../assets/TopicCards.css'

const {Search} = Input;

export default class TopicCards extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [],
            isLoaded: false
        }
    }

    componentDidMount() {
        this.getList();
    }

    async getList() {
        const _this = this;
        axios.get('http://wstopic.woa.com/demo2/api?query=7cV3wNJo11JipJlkm&query_type=query')
            .then(function (response) {
                console.log(response)
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
        return (
            <div className="container">
                <h1>搜索话题扩展体验环境 </h1>
                <div className="search">
                    <Search
                        placeholder="input search text"
                        onSearch={value => console.log(value)}
                        style={{width: 400}}
                    />&emsp;
                    <Button type="ghost" size="large">确定</Button>&emsp;
                    <Button type="ghost" size="large">随机FeedID</Button>
                </div>
                <div className="relateInfo">
                    <div className="site-card-wrapper">
                        <Row gutter={24}>
                            <Col lg={{span: 4}} md={{span: 6}} xs={{span: 12}} style={style}>
                                <div className="card">
                                    <div className="cardCover">
                                        <img src="http://pic640.weishi.qq.com/aa5b87a10f1d4d3098e74bfbca55cover.jpg"
                                             alt=""/>
                                    </div>
                                    <div className="cardInfo">
                                        <div className="cardDesc">别人家的小女孩，大概就是这样子的吧，美</div>
                                        <div className="cardFooter">
                                            <div>
                                                <Avatar size={24}
                                                        src="http://pic200.weishi.qq.com/a5b00ff190c24ef5a863cbdb6997cover.jpg"/>
                                                <span>荔枝的星座讲坛</span>
                                            </div>
                                            <div>
                                                <PlayCircleOutlined style={{fontSize: '18px', color: '#FFF'}}/>
                                                <span style={{'verticalAlign': 'text-bottom'}}>1009</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </div>
                <div className="relateTopic">
                    <Button type="ghost" size="large">确定</Button>&emsp;
                    <Button type="ghost" size="large">确定</Button>&emsp;
                </div>
                <div className="relateVideo">
                    <Alert message="相关视频" type="success"/>
                    <div className="site-card-wrapper">
                        <Row gutter={24}>
                            <Col lg={{span: 4}} md={{span: 6}} xs={{span: 12}} style={style}>
                                <div className="card">
                                    <div className="cardCover">
                                        <img
                                            src="http://xp.qpic.cn/oscar_pic/0/szg_8498_50001_0b6beyaauaaaneam53r7cvpvcjwdbitaacsa_400_1/480"
                                            alt=""/>
                                    </div>
                                    <div className="cardInfo">
                                        <div className="cardDesc">王者荣耀：国服鲁班七号最强出装，站撸程咬金一秒万伤！者荣耀：
                                            国服鲁班七号最强出装，站撸程咬金一秒万伤！者荣耀：国服鲁班七号最强出装，
                                            站撸程咬金一秒万伤！者荣耀：国服鲁班七号最强出装，站撸程咬金一秒万伤！
                                            者荣耀：国服鲁班七号最强出装，站撸程咬金一秒万伤！者荣耀：国服鲁班七号最强出装，
                                            站撸程咬金一秒万伤！者荣耀：国服鲁班七号最强出装，站撸程咬金一秒万伤！
                                            者荣耀：国服鲁班七号最强出装，站撸程咬金一秒万伤！者荣耀：国服鲁班七号最强出装，站撸程咬金一秒万伤！
                                        </div>
                                        <div className="cardFooter">
                                            <div>
                                                <Avatar size={24}
                                                        src="http://pic200.weishi.qq.com/a5b00ff190c24ef5a863cbdb6997cover.jpg"/>
                                                <span>荔枝的星座讲坛</span>
                                            </div>
                                            <div>
                                                <PlayCircleOutlined style={{fontSize: '18px', color: '#FFF'}}/>
                                                <span style={{'verticalAlign': 'text-bottom'}}>1009</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col lg={{span: 4}} md={{span: 6}} xs={{span: 12}} style={style}>
                                <div className="card">
                                    <div className="cardCover">
                                        <img src="http://pic640.weishi.qq.com/364b12f1ce90462abe8278969135cover.jpg"
                                             alt=""/>
                                    </div>
                                    <div className="cardInfo">
                                        <div className="cardDesc">王者荣耀：国服鲁班七号最强出装，站撸程咬金一秒万伤！者荣耀：
                                            国服鲁班七号最强出装，站撸程咬金一秒万伤！者荣耀：国服鲁班七号最强出装，
                                            站撸程咬金一秒万伤！者荣耀：国服鲁班七号最强出装，站撸程咬金一秒万伤！
                                            者荣耀：国服鲁班七号最强出装，站撸程咬金一秒万伤！者荣耀：国服鲁班七号最强出装，
                                            站撸程咬金一秒万伤！者荣耀：国服鲁班七号最强出装，站撸程咬金一秒万伤！
                                            者荣耀：国服鲁班七号最强出装，站撸程咬金一秒万伤！者荣耀：国服鲁班七号最强出装，站撸程咬金一秒万伤！
                                        </div>
                                        <div className="cardFooter">
                                            <div>
                                                <Avatar size={24}
                                                        src="http://pic200.weishi.qq.com/a5b00ff190c24ef5a863cbdb6997cover.jpg"/>
                                                <span>荔枝的星座讲坛</span>
                                            </div>
                                            <div>
                                                <PlayCircleOutlined style={{fontSize: '18px', color: '#FFF'}}/>
                                                <span style={{'verticalAlign': 'text-bottom'}}>1009</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col lg={{span: 4}} md={{span: 6}} xs={{span: 12}} style={style}>
                                <div className="card">
                                    <div className="cardCover">
                                        <img
                                            src="http://xp.qpic.cn/oscar_pic/0/szg_4381_50001_0b6b2uaccaaacqaatdbwfrpvdvodehkqaika_400_1/480"
                                            alt=""/>
                                    </div>
                                    <div className="cardInfo">
                                        <div className="cardDesc">浪漫的西点，美味的西餐^_^</div>
                                        <div className="cardFooter">
                                            <div>
                                                <Avatar size={24}
                                                        src="http://pic200.weishi.qq.com/a5b00ff190c24ef5a863cbdb6997cover.jpg"/>
                                                <span>荔枝的星座讲坛</span>
                                            </div>
                                            <div>
                                                <PlayCircleOutlined style={{fontSize: '18px', color: '#FFF'}}/>
                                                <span style={{'verticalAlign': 'text-bottom'}}>1009</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col lg={{span: 4}} md={{span: 6}} xs={{span: 12}} style={style}>
                                <div className="card">
                                    <div className="cardCover">
                                        <img
                                            src="http://xp.qpic.cn/oscar_pic/0/szg_5135_50001_0b6bzqadyaaafiapnc6ygbpfdtgdhtgaapca_400_1/480"
                                            alt=""/>
                                    </div>
                                    <div className="cardInfo">
                                        <div className="cardDesc">我也好想有一条能帮我买药的狗狗 #正能量 #萌犬</div>
                                        <div className="cardFooter">
                                            <div>
                                                <Avatar size={24}
                                                        src="http://pic200.weishi.qq.com/a5b00ff190c24ef5a863cbdb6997cover.jpg"/>
                                                <span>荔枝的星座讲坛</span>
                                            </div>
                                            <div>
                                                <PlayCircleOutlined style={{fontSize: '18px', color: '#FFF'}}/>
                                                <span style={{'verticalAlign': 'text-bottom'}}>1009</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col lg={{span: 4}} md={{span: 6}} xs={{span: 12}} style={style}>
                                <div className="card">
                                    <div className="cardCover">
                                        <img
                                            src="http://xp.qpic.cn/oscar_pic/0/shg_1047_1047_0bf27mbogaacxmaaxdsozjprl6ye4pwafz2a_400_1/480"
                                            alt=""/>
                                    </div>
                                    <div className="cardInfo">
                                        <div className="cardDesc">那个护士小姐姐去世了</div>
                                        <div className="cardFooter">
                                            <div>
                                                <Avatar size={24}
                                                        src="http://pic200.weishi.qq.com/a5b00ff190c24ef5a863cbdb6997cover.jpg"/>
                                                <span>荔枝的星座讲坛</span>
                                            </div>
                                            <div>
                                                <PlayCircleOutlined style={{fontSize: '18px', color: '#FFF'}}/>
                                                <span style={{'verticalAlign': 'text-bottom'}}>1009</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col lg={{span: 4}} md={{span: 6}} xs={{span: 12}} style={style}>
                                <div className="card">
                                    <div className="cardCover">
                                        <img src="http://pic640.weishi.qq.com/aa5b87a10f1d4d3098e74bfbca55cover.jpg"
                                             alt=""/>
                                    </div>
                                    <div className="cardInfo">
                                        <div className="cardDesc">别人家的小女孩，大概就是这样子的吧，美</div>
                                        <div className="cardFooter">
                                            <div>
                                                <Avatar size={24}
                                                        src="http://pic200.weishi.qq.com/a5b00ff190c24ef5a863cbdb6997cover.jpg"/>
                                                <span>荔枝的星座讲坛</span>
                                            </div>
                                            <div>
                                                <PlayCircleOutlined style={{fontSize: '18px', color: '#FFF'}}/>
                                                <span style={{'verticalAlign': 'text-bottom'}}>1009</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </div>
                
                <Empty description="暂无数据"/>
            </div>
        )
    }
}