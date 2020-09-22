import React, {Component} from 'react';
import {Input, Button, Card, Col, Row, Avatar} from 'antd';
import {PlayCircleOutlined} from '@ant-design/icons';
import '../../assets/TopicCards.css'

const {Search} = Input;
const {Meta} = Card;

export default class TopicCards extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className="container">
                <h1>搜索话题扩展体验环境</h1>
                <Search
                    placeholder="input search text"
                    onSearch={value => console.log(value)}
                    style={{width: 400}}
                />&emsp;
                <Button type="ghost" size="large">确定</Button>&emsp;
                <Button type="ghost" size="large">随机FeedID</Button>
                <div className="relateInfo">
                    <Card hoverable style={{width: 240}}
                          cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"/>}>
                        <Meta title="Europe Street beat" description="www.instagram.com"/>
                    </Card>
                </div>
                <div className="relateVideo">
                    <h2>相关视频</h2>
                    <div className="site-card-wrapper">
                        <Row gutter={24}>
                            <Col lg={{span:4}} md={{span:6}} sm={{span:12}}>
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
                                                <Avatar size={32}
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
                            <Col lg={{span:4}} md={{span:6}} sm={{span:12}}>
                                <div className="card">
                                    <div className="cardCover">
                                        <img src="http://pic640.weishi.qq.com/364b12f1ce90462abe8278969135cover.jpg" alt=""/>
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
                                                <Avatar size={32}
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
                            <Col lg={{span:4}} md={{span:6}} sm={{span:12}}>
                                <div className="card">
                                    <div className="cardCover">
                                        <img src="http://xp.qpic.cn/oscar_pic/0/szg_4381_50001_0b6b2uaccaaacqaatdbwfrpvdvodehkqaika_400_1/480" alt=""/>
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
                                                <Avatar size={32}
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
                            <Col lg={{span:4}} md={{span:6}} sm={{span:12}}>
                                <div className="card">
                                    <div className="cardCover">
                                        <img
                                            src="http://xp.qpic.cn/oscar_pic/0/szg_5135_50001_0b6bzqadyaaafiapnc6ygbpfdtgdhtgaapca_400_1/480"
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
                                                <Avatar size={32}
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
                            <Col lg={{span:4}} md={{span:6}} sm={{span:12}}>
                                <div className="card">
                                    <div className="cardCover">
                                        <img
                                            src="http://xp.qpic.cn/oscar_pic/0/shg_1047_1047_0bf27mbogaacxmaaxdsozjprl6ye4pwafz2a_400_1/480"
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
                                                <Avatar size={32}
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
                            <Col lg={{span:4}} md={{span:6}} sm={{span:12}}>
                                <div className="card">
                                    <div className="cardCover">
                                        <img src="http://pic640.weishi.qq.com/d4aad25b951d4807896d924f2291cover.jpg"
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
                                                <Avatar size={32}
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
            </div>
        )
    }
}