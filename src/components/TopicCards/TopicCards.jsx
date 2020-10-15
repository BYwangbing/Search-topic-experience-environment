import React, { Component } from 'react'
import axios from 'axios'

import { Input, Select, message, Button, Tag, Col, Row, Avatar, Tooltip, notification, Empty } from 'antd'
import { PlayCircleOutlined } from '@ant-design/icons'
import request from '../../../src/utils/request'
import '../../assets/TopicCards.css'

const { Option } = Select
const { Search } = Input

// url字段处理
let path = window.location.pathname, search, url
if (window.location.search) {
    search = window.location.search
    const s = search.substr(1, search.length).split('&')
    const m = s[0].split('=')
    url = `http://wstopic.woa.com/${m[1]}/feedSearch`
} else {
    url = `http://wstopic.woa.com${path}feedSearch`
}

export default class TopicCards extends Component {
    constructor(props) {
        super(props)
        this.myInput = React.createRef()
        this.state = {
            users: null,
            inputVal: '',
            arrMap: null, // 映射字段
            types: [], // 下拉框类型
            type: '',
        }
    }

    /*
      * url: 请求地址
      * value: 搜索框值
      * type: query_type
      * category: 类别
      * msg: 提示
    */

    req(url, value, type, category, topic, msg) {
        const _this = this
        axios.get(url, {
            params: {
                type: type,
                query: value,
                category: category,
                topic: topic,
            },
        }).then(function(response) {
            _this.setState({
                users: response.data,
                inputVal: '',
            })
            if (response.code !== 200) {
                message.error(response.msg)
            }
        }).catch(function(error) {
            console.log(error)
            message.error(msg)
            _this.setState({
                error: error,
            })
        })
    }

    componentWillMount() {
        this.getSelectList()
    }

    // 点赞量处理
    playFormat(num) {
        if (num > 10000) {
            num = (num / 100).toFixed(1) + 'w'
        }
        return num
    }

    // 空数组 null 判断过滤
    judge(bool) {
        if (Array.isArray(bool)) {
            return bool.length
        } else {
            return bool
        }
    }

    // 人工机打标签字段映射
    arrMapping(arr, type) {
        let t = ''
        if (type === 1) {
            t = '人工'
        } else if (type === 0) {
            t = '机打'
        } else {
            t = ''
        }
        const changeArr = ['标题', '一级分类', '二级分类', t + '标签', 'OCR']
        let newArr = arr.slice(0, 5)
        for (let i = 0; i < newArr.length; i++) {
            newArr[i].name = changeArr[i]
        }
        return newArr
    }

    // TITLE、OCR字段拼接
    fieldSplicing(arr1, arr2) {
        if (arr1 == null) {
            return [...new Set(arr2)]
        } else {
            return [...new Set(arr1.concat(arr2).filter(Boolean))]
        }
    }

    // 下拉框
    async getSelectList() {
        const _this = this
        // http://wstopic.woa.com/demonew/basicInfo
        const data = await request.get({ url: 'http://wstopic.woa.com/demonew/basicInfo' })
        if (data.code === 200) {
            _this.setState({
                types: data.data.category,
            })
        } else {
            message.error(data.msg)
        }
    }

    // 点击下拉框随机视频搜索
    handleChange = (value) => {
        console.log(`selected ${value}`)
        this.setState({
            type: value,
        })
        this.req(url, '', 'random', value, '', '请求错误，请稍后再试')
    }

    // 获取随机视频
    async getRandom() {
        const _this = this
        _this.req(url, '', 'random', _this.state.type, '', '请求错误，请稍后再试')
        this.myInput.current.state.value = ''
    }

    // 检索话题按钮下栏菜单点击事件
    onRefClick = (event, feedId, topic) => {
        this.req(url, feedId, 'query', '', topic, '')
    }

    // 获取传FeedID有参数视频
    async getRequest(value) {
        const _this = this
        if (!value) {
            message.error('请填写视频FeedID')
        } else {
            _this.req(url, value, 'query', '', '', '请输入正确视频FeedID')
        }
    }

    // 相关视频展示
    show() {
        const style = { padding: '0 .3rem' }
        const { topics, showTag } = this.state.users
        const description = `暂无 ${showTag} 相关视频`
        if (topics.result.length) {
            return (
                <div className="relateVideo">
                    <div className="site-card-wrapper" style={{ margin: '0 .7rem' }}>
                        {
                            <Row gutter={24}>
                                {topics.result.map((topic, j) => (
                                    <Col key={j} lg={{ span: 12 }} md={{ span: 12 }} xs={{ span: 24 }} style={style}>
                                        <Row>
                                            <Col lg={{ span: 8 }} md={{ span: 9 }} xs={{ span: 11 }}>
                                                {/*相关视频*/}
                                                <div className="card">
                                                    {topic.Topics && topic.RelateCode ?
                                                        <div onClick={() => this.getRequest(topic.FeedId)}
                                                            className="relatedCLick">相关</div> : ''
                                                    }
                                                    <div className="cardCover">
                                                        <a rel="noopener noreferrer" target="_blank" href={topic.url}
                                                            className="topicUrl">
                                                            <img src={topic.imageUrl} alt=""/>
                                                        </a>
                                                    </div>
                                                    <div className="cardInfo">
                                                        <div className="cardDesc">{topic.desc}</div>
                                                        <div className="cardFooter">
                                                            <div>
                                                                <Avatar size={24} src={topic.posterAvatarUrl}/>

                                                                <Tooltip placement="bottomRight"
                                                                    title={topic.posterNick}>
                                                                    <span className="postName">{topic.posterNick}</span>
                                                                </Tooltip>
                                                            </div>
                                                            <div>
                                                                <PlayCircleOutlined

                                                                    style={{ fontSize: '18px', color: '#FFF' }}/>

                                                                <span
                                                                    style={{ 'verticalAlign': 'text-bottom' }}>{this.playFormat(topic.playNum)}</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </Col>
                                            <Col lg={{ span: 14, offset: 1 }} md={{ span: 14, offset: 1 }}
                                                xs={{ span: 12, offset: 1 }}>
                                                {/*相关视频话题标签*/}
                                                <div className="cardTopic">
                                                    {this.fieldSplicing(topic.stTopicList[0].terms, topic.stTopicList[4].terms).length ?
                                                        <Button type="primary" block
                                                            onClick={() => this.getRequest(topic.feedId)}>
                                                            <div className="aa">
                                                                <b>点击查看</b>
                                                                {this.fieldSplicing(topic.stTopicList[0].terms, topic.stTopicList[4].terms).map((item, index) => (
                                                                    <b key={index}>{item}</b>
                                                                ))
                                                                }
                                                                <b>相关视频</b>
                                                            </div>
                                                        </Button> : <div className="topicBtn">{''}</div>
                                                    }
                                                </div>
                                                <div className="cardTopic relateTopic" style={{ height: '33.9rem' }}>
                                                    <h3>调试信息</h3>
                                                    {
                                                        topic.stTopicList ? this.arrMapping(topic.stTopicList, topic.isTagManual).map((item, index) => (
                                                            <div key={index} className="topicTag">
                                                                <span>{item.name}:</span>
                                                                <div className="cardTopicTag">
                                                                    {this.judge(item.terms) ? item.terms.map((i, k) => (
                                                                        <Tag key={k}
                                                                            style={{ backgroundColor: '#FFF' }}>{i}</Tag>
                                                                    )) : <Tag
                                                                        style={{ backgroundColor: '#FFF' }}>暂无</Tag>}
                                                                </div>
                                                            </div>
                                                        )) : ''
                                                    }
                                                </div>
                                            </Col>
                                        </Row>
                                    </Col>
                                ))}
                            </Row>
                        }
                    </div>
                </div>
            )
        } else {
            return <Empty description={description}/>
        }
    }

    // 版本号提示框
    openNotification = () => {
        let versions
        if (this.state.users) {
            versions = this.state.users.versions
        }
        const key = `open${Date.now()}`
        const btn = (
            <Button type="primary" size="small" onClick={() => notification.close(key)}>关闭</Button>
        )
        const description = (
            <div className="versions">
                <p>关键词抽取版本号：{versions ? versions.keywordVersion : '暂无'}</p>
                <p>话题字典版本：{versions ? versions.dictionaryVersion : '暂无'}</p>
                <p>随机ID池版本号: {versions ? versions.feedlistVersion : '暂无'}</p>
                <p>视频检索服务版本号：{versions ? versions.videoVersion : '暂无'}</p>
                <p>图谱字典版本好：{versions ? versions.kgVersion : '暂无'}</p>
            </div>
        )
        notification.open({
            message: '版本信息：',
            description: description,
            btn,
            key,
            duration: null,
        })
    }

    //展示对应视频
    showRelate() {
        if (this.state.users) {
            if (this.state.users.feedId) {
                const { feedId, feedInfo, tags, showTag, topicGraphs } = this.state.users
                const { stTopicList, isTagManual } = feedInfo
                return (
                    <div>
                        <div className="relateInfo">
                            <div className="site-card-wrapper">
                                <Row>
                                    <Col lg={{ span: 4 }} md={{ span: 5 }} xs={{ span: 11 }}>
                                        <a rel="noopener noreferrer" target="_blank" href={feedInfo.url}>
                                            <div className="card">
                                                <div className="cardCover">
                                                    <img src={feedInfo.imageUrl} alt=""/>
                                                </div>
                                                <div className="cardInfo">
                                                    <div className="cardDesc">{feedInfo.desc}</div>
                                                    <div className="cardFooter">
                                                        <div>
                                                            <Avatar size={24} src={feedInfo.posterAvatarUrl}/>
                                                            <Tooltip placement="bottomRight"
                                                                title={feedInfo.posterNick}>
                                                                <span className="postName">{feedInfo.posterNick}</span>
                                                            </Tooltip>
                                                        </div>
                                                        <div>
                                                            <PlayCircleOutlined
                                                                style={{ fontSize: '18px', color: '#FFF' }}/>
                                                            <span
                                                                style={{ 'verticalAlign': 'text-bottom' }}>{feedInfo.playNum}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </a>
                                    </Col>
                                    <Col lg={{ span: 5 }} md={{ span: 7 }} xs={{ span: 11 }}
                                        style={{ margin: '0 1rem' }}>
                                        {/*相关话题标签*/}
                                        <div className="relateTopic">
                                            <h3>调试信息</h3>
                                            {
                                                this.arrMapping(stTopicList) ? this.arrMapping(stTopicList, isTagManual).map((item, index) => (
                                                    <div key={index} className="topicTag">
                                                        <span>{item.name}:</span>

                                                        <div className="cardTopicTag">
                                                            {this.judge(item.terms) ? item.terms.map((i, k) => (
                                                                <Tag key={k}
                                                                    style={{ backgroundColor: '#FFF' }}>{i === '' ? '暂无' : i}</Tag>
                                                            )) : <Tag
                                                                style={{ backgroundColor: '#FFF' }}>暂无</Tag>}
                                                        </div>
                                                    </div>
                                                )) : ''
                                            }
                                            <div className="topicTag">
                                                <span>检索话题:</span>
                                                <div className="cardTopicTag">
                                                    {tags ? tags.map((item, index) => (
                                                        <Tag key={index}>{item}</Tag>
                                                    )) : ''}
                                                </div>


                                            </div>
                                        </div>

                                    </Col>
                                    <Col lg={{ span: 14 }} md={{ span: 24 }} xs={{ span: 24 }}>
                                        {
                                            JSON.stringify(topicGraphs) !== '[]' ? <div className="rel">
                                                {
                                                    topicGraphs.map((topic, index) => (
                                                        <div className="retrieval" key={index}>
                                                            <Tooltip placement="topLeft" title={topic.topicName}>
                                                                <Button type="primary" block>
                                                                    <h3 style={{ fontSize: '1.6rem' }}>{topic.topicName}</h3>
                                                                    <h3>相关话题</h3>
                                                                </Button>
                                                            </Tooltip>
                                                            {/*检索话题按钮下栏菜单*/}
                                                            <ul className="retrievalTopic">
                                                                {
                                                                    Object.entries(topic.graphItemMap).map((item, i) =>(
                                                                        <dt key={i}>
                                                                            {console.log(item)}
                                                                            <b>{item[0]}: </b>
                                                                            {
                                                                                item[1].map((name, j) => (
                                                                                    <li title={name.entityName}
                                                                                        onClick={(e) => {
                                                                                            this.onRefClick(e, feedId, name.entityName)
                                                                                        }}
                                                                                        key={j}>{name}</li>
                                                                                ))
                                                                            }
                                                                        </dt>
                                                                    ))
                                                                }
                                                            </ul>
                                                        </div>
                                                    ))
                                                }
                                            </div> : ''
                                        }

                                    </Col>
                                </Row>
                            </div>
                        </div>
                        {/*相关视频*/}
                        <h2>
                            <b>{showTag ? showTag : ''}</b>
                            <span>等相关视频</span>
                        </h2>
                        {this.show()}
                    </div>
                )
            } else {
                return <Empty className="topicEmpty" description="暂无相关数据"/>
            }
        } else {
            return <Empty className="topicEmpty" description="暂无数据"/>
        }
    }

    render() {
        const search = window.location.search.substr(1, window.location.search.length).split('&')
        let debug
        if (search[1]) {
            debug = search[1].split('=')
        }
        return (
            <div>
                <div className="container">
                    <h1>搜索话题扩展体验环境 </h1>
                    {/*搜索*/}
                    <div className="search">
                        <div
                            className={(search[1] === 'debug=1' || debug ? debug[1] === '1' : '') ? 'searchShow' : 'searchNone'}>
                            <Search size="large" defaultValue="" ref={this.myInput} style={{ width: 275 }}
                                autoComplete="off"
                                id="ipt" placeholder="请填写视频ID" onSearch={value => this.getRequest(value)}/>
                        </div>
                        <Button style={{ 'margin': '1.2rem 0' }} type="primary" size="large" onClick={() => {
                            this.getRandom()
                        }}>随机FeedID</Button>
                        {/*下拉框*/}
                        <span className="currentType">当前类别：</span>
                        <Select style={{ 'margin': '1.2rem 0', 'verticalAlign': 'baseline', width: 275 }}
                            defaultValue="全部"
                            onChange={this.handleChange}>
                            <Option value="">全部</Option>
                            {
                                this.state.types ?
                                    this.state.types.map((ele, index) => {
                                        return (<Option key={index} value={ele}>{ele}</Option>)
                                    })
                                    : <Option value='暂无'>暂无</Option>
                            }
                        </Select>
                    </div>
                    {this.showRelate()}
                </div>
                <div className="versionFixed">
                    <Button type="primary" onClick={this.openNotification}>版本信息</Button>
                </div>
            </div>
        )
    }
}