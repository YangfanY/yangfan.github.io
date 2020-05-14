
import React from 'react';
import './Head.css'
function Head() {
    return (
        <div className='head'>
            <div className='head-con'>
                <a className='head-icon'>
                    <img src='https://img.alicdn.com/tfs/TB1Zv8_lxSYBuNjSspjXXX73VXa-390-63.png'></img>
                </a>
                <i className='line'>|</i>
                <span className='head-office'>社招官网</span>
                <ul className='menu'>
                    <li className='menu-item active'>首  页</li>
                    <li className='menu-item'>社会招聘</li>
                    <li className='menu-item'>校园招聘</li>
                    <li className='menu-item'>了解阿里</li>
                    <li className='menu-item'>个人中心</li>
                    <div className='menu-right'>
                        <p>欢迎来到阿里巴巴招聘！</p>
                        <div className='login'>
                            <a>登录&nbsp;</a>
                            <i className='line-right'>|</i>
                            <a>&nbsp;注册</a>
                        </div>
                    </div>
                </ul>
            </div>
        </div>
    )
}

export default Head;