import React from 'react';
import './list.css'

class List extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            top: 0
        }
        this.listNode = null;
        this.timer = null;
    }

    componentDidMount() {
        this.timer = setInterval(this.handleScroll, 30)
    }

    componentWillUnmount() {
        if (this.timer) {
            clearInterval(this.timer)
        }
    }

    handleScroll = () => {
      if (this.listNode) {
          let height = this.listNode.offsetHeight;
          let top = this.state.top;
          this.setState({
              top: top + height - 250 == 0 ? 0 : top - 1
          })
      }
    }

    handleMouseEnter = () => {
        if (this.timer) {
            clearInterval(this.timer)
        }
    }

    handleMouseLeave = () => {
        this.timer = setInterval(this.handleScroll, 30)
    }

    render() {
        const data = this.props.data || [];
        return(
            <div className='list-container'>
                <div className='list-head'>
                    <span>最新职位</span>
                    <span>更多</span>
                </div> 
                <div className='job-list-con'>
                    <div className='job-list' ref={(ref) => this.listNode = ref} style={{top: this.state.top}} onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave}>
                        {
                            data.map(value => {
                                return (
                                    <li className='list-item' key={value.name}>
                                        <p className='name'>{value.name}</p>
                                        <p className='adress'>{value.city}</p>
                                        <p className='time'>{value.time}</p>
                                    </li>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        )
    }
}

export default List;