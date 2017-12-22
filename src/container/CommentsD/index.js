import React, {Component} from 'react';
import './index.less';
import actions from '../../store/actions/comments';
import {connect} from 'react-redux';
import {downRefresh, upMore} from '../../utils';
import NavHeader from "../../components/NavHeader/index";
class Comments extends Component {
    componentDidMount() {
        this.props.axiosComments();
        downRefresh(this.content, this.props.axiosComments);
        upMore(this.content, this.props.refreshComments);
    }

render() {
        return (
            <div>
                <NavHeader title="用户使用评论" show={true}/>
                <div ref={content => this.content = content} className="main-con">
                    <div className="pict"></div>
                    <div className="comments">
                        {
                            this.props.coms.map((item, index) => (
                                <ul key={index}>
                                    <li className="title" >{item.tel.substring(0,3)+'****'+item.tel.substring(6)}</li>
                                    <li className="comment">{item.content}</li>
                                    <li className="sub">{item.typeId}</li>
                                    <li className="sub">{item.time}</li>
                                </ul>
                            ))
                        }
                        {/*this.props.coms.filter(item => item.typeId == this.props.match.params.typeId).map((item, index) => (
                        <ul key={index}>
                            <li className="title">{item.tel}</li>
                            <li className="comment">{item.content}</li>
                            <li className="sub">{item.time}</li>
                        </ul>
                        ))*/}
                    </div>
                </div>
            </div>


        )
    }
}
export default connect(
    state => state.comments,
    actions
)(Comments);