
import React from 'react';
import './index.css'
function Body() {
    return (
        <div className='body'>
            <img src='https://img.alicdn.com/tfs/TB14TEEm7CWBuNjy0FaXXXUlXXa-1440-478.png'></img>
            <div className='mask'></div>
            <div className='container'>
                <div className='con'>
                    <p className='en-world'>If not now, when?</p>
                    <p className='en-world'>If not me, who?</p>
                    <p className='world'>此时此刻，非我莫属！</p>
                    <div className='search-con'>
                        <input className='search-input' placeholder='请输入职位关键词'/>
                        <button className='seach-btn'>搜索</button>
                    </div>
                    <div className='hot'>
                        热门搜索：
                        <a>JAVA</a>
                        <a>IOS</a>
                        <a>数据</a>
                        <a>安全</a>
                        <a>搜索</a>
                        <a>算法</a>
                        <a>运营</a>
                        <a>视觉</a>
                        <a>交互</a>
                        <a>前端</a>
                    </div>
                </div>
               
            </div>
        </div>
    )
}

export default Body;