import React from 'react';
import '../App.css';
import Grid from './grid';
import Modal from './modal';
import GAME_RULER from '../chapert/game';

export default class Board extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            squares: Array(30).fill(0),
            count: 0,                   //点击次数  
            chapter: 0,                 //关卡数
            isDone: 0,                  //是否过关
            switch: 0                   //辅助状态量
        }
    }
    handleClick(i){
        let count = this.state.count;
        count++;
        const squares = this.state.squares.slice();  //拷贝一个副本
        squares[i] = !squares[i]*1;
        squares[i-6] = !squares[i-6]*1;
        squares[i+6] = !squares[i+6]*1;
        if(i%6 === 0 || (i-5)%6 !==0 ){
            squares[i+1] = !squares[i+1]*1;
        }
        if(i%6 !== 0 || (i-5)%6 ===0){
            squares[i-1] = !squares[i-1]*1;
        }
        this.setState({squares:squares,count:count})
    }
    renderSquare(i){
        return <Grid value={this.state.squares[i]} isDone = {this.state.isDone} onClick={()=>this.handleClick(i)}/>
    }
    nextChapter(step){
        let chapterLength = Object.keys(GAME_RULER).length;
        let currentChapter = this.state.chapter;
        this.setState({count:0});
        if(step === 'add'){
            if(currentChapter < chapterLength - 1){
                currentChapter++;
                this.setState({squares:GAME_RULER[currentChapter],chapter:currentChapter,switch:0});
            }else{
                alert("已经是最后一关了");
            }
        }else if(step === 'min'){
            if(currentChapter > 0){
                currentChapter--;
                this.setState({squares:GAME_RULER[currentChapter],chapter:currentChapter,switch:0});
            }else{
                alert("已经是第一关了");
            }
        }
    }
    componentDidUpdate(){
        let updated = this.state.squares.slice();    //sliced的作用是返回一个数组，在这里是复制数据
        let numberOfZero = 0;
        for(let i = 0;i<updated.length;i++){
            if(updated[i] ===0){
                numberOfZero++
            }
        }
        if(numberOfZero === updated.length && this.state.switch === 0){
            alert("恭喜你过关了");
            this.setState({isDone:1,switch:1});
            //return <Modal></Modal>
        }
    }
    componentDidMount(){
        this.setState({squares:GAME_RULER[this.state.chapter]});
    }
    shouldComponentUpdate(){
        
    }
    render(){
        return (
            <div>
                <div className='resign'><button onClick={()=>{this.setState({squares: GAME_RULER[this.state.chapter],count:0,isDone:0})}}>重置</button>
                <div className='count'>
                    <div>关卡数：{ this.state.chapter+1 }</div>
                    <div>点击次数：</div><div>{ this.state.count }</div>
                </div>
                <div className='next'>
                    <button onClick={ ()=> this.nextChapter('min') }>上一关</button>
                    <button onClick={ ()=> this.nextChapter('add') }>下一关</button>
                </div>
            </div>
                <div className="board-row">
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                </div>
                <div className="board-row">
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                    {this.renderSquare(9)}
                    {this.renderSquare(10)}
                    {this.renderSquare(11)}
                </div>
                <div className="board-row">
                    {this.renderSquare(12)}
                    {this.renderSquare(13)}
                    {this.renderSquare(14)}
                    {this.renderSquare(15)}
                    {this.renderSquare(16)}
                    {this.renderSquare(17)}
                </div>
                <div className="board-row">
                    {this.renderSquare(18)}
                    {this.renderSquare(19)}
                    {this.renderSquare(20)}
                    {this.renderSquare(21)}
                    {this.renderSquare(22)}
                    {this.renderSquare(23)}
                </div>
                <div className="board-row">
                    {this.renderSquare(24)}
                    {this.renderSquare(25)}
                    {this.renderSquare(26)}
                    {this.renderSquare(27)}
                    {this.renderSquare(28)}
                    {this.renderSquare(29)}
                </div>
            </div>
        )
    }
}