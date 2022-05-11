import React from 'react';
import '../styles/toolbar.scss'
import toolState from '../store/toolState';
import canvasState from '../store/canvasState';
import Brush from '../tools/Brush';
import Rect from '../tools/Rect';
import Circle from '../tools/Circle';
import Eraser from '../tools/Eraser';
import Line from '../tools/Line';

const Toolbar = () => {

    const changeColor = (color) => {
        toolState.setFillColor(color);
        toolState.setStrokeColor(color);
    }

    return (
        <div className='toolbar'>
            <button className='toolbar__btn' onClick={() => toolState.setTool(new Brush(canvasState.canvas))}>Brush</button>
            <button className='toolbar__btn' onClick={() => toolState.setTool(new Rect(canvasState.canvas))}>Rect</button>
            <button className='toolbar__btn' onClick={() => toolState.setTool(new Circle(canvasState.canvas))}>Circle</button>
            <button className='toolbar__btn' onClick={() => toolState.setTool(new Eraser(canvasState.canvas))}>Eraser</button>
            <button className='toolbar__btn' onClick={() => toolState.setTool(new Line(canvasState.canvas))}>Line</button>
            <input onChange={e => changeColor(e.target.value)} type='color' />

            <div className='toolbar__right'>
                <button className='toolbar__btn' onClick={() => canvasState.undo()}>Undo</button>
                <button className='toolbar__btn' onClick={() => canvasState.redo()}>Redo</button>
                <button className='toolbar__btn'>Save</button>
            </div>
        </div>
    );
};

export default Toolbar;
