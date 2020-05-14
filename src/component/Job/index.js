import React from 'react';
import List from './list'
import './index.css';
import data from './data.json'
class JobList extends React.Component{
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className='job-container'>
                <div className='job-left'>
                    <List data={data}/>
                </div>
                <div className='job-right'>
                    <a className='job-right-con'>
                        <img src='https://img.alicdn.com/tfs/TB1SbxarYj1gK0jSZFOXXc7GpXa-2546-848.png'/>
                    </a>
                    <a className='job-right-con'>
                        <img src='https://img.alicdn.com/tfs/TB18tFCCH2pK1RjSZFsXXaNlXXa-240-34.svg'/>
                    </a>
                </div>
            </div>
        )
    }
}

export default JobList;