import React from 'react';
import '../styles/toolbar.scss'
import toolState from '../store/toolState';
import canvasState from '../store/canvasState';
import Brush from '../tools/Brush';
import Rect from '../tools/Rect';
import Circle from '../tools/Circle';

const Toolbar = () => {
    return (
        <div className='toolbar'>
            <button className='toolbar__btn' onClick={() => toolState.setTool(new Brush(canvasState.canvas))}>Brush</button>
            <button className='toolbar__btn' onClick={() => toolState.setTool(new Rect(canvasState.canvas))}>Rect</button>
            <button className='toolbar__btn' onClick={() => toolState.setTool(new Circle(canvasState.canvas))}>Circle</button>
            <button className='toolbar__btn'>Eraser</button>
            <button className='toolbar__btn'>Line</button>
            <input type='color' />

            <div className='toolbar__right'>
                <button className='toolbar__btn'>Undo</button>
                <button className='toolbar__btn'>Redo</button>
                <button className='toolbar__btn'>Save</button>
            </div>
        </div>
    );
};

export default Toolbar;
