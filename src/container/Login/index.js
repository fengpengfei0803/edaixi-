import React,{Component} from 'react';
import NavHeader from '../../components/NavHeader/index'
import {Link} from 'react-router-dom'
import './index.less'
import {connect} from 'react-redux';
import actions from '../../store/actions/session'
import Alert from '../../components/Alert/index'
class Login extends Component{
    constructor(){
        super()
        this.state={pwd:''}
    }
    handleClick=()=>{
        localStorage.setItem('login','true');
        let username=this.username.value;
        let password=this.state.pwd;
        this.props.login({username,password})
    };
    handleChange=(e)=>{
        let input_pwd = this.password.value
        this.setState({pwd:input_pwd})
        this.password.value=input_pwd;
    }
    render(){
        return (
            <div className='login-panel'>
              <NavHeader title='登录'  show={true}/>
                <div className='login-logo'>
                    <img src={require('../../images/xiang.jpg')} alt=""/>
                </div>

                <input className='username' type="text" ref={input=>this.username=input} placeholder='用户名'/>
                <input type="password" ref={input=>this.password=input} onChange={this.handleChange}  placeholder='密码' />
                <Link to='/reg'>前往注册</Link>
                <div className='login-btn' onClick={this.handleClick}>登&nbsp;录</div>
                <Alert/>
            </div>
        )
    }
}

export default connect(
    state=>state.session,
    actions
)(Login)