import React from 'react';
import '../styles/toolbar.scss'

const Toolbar = () => {
    return (
        <div className='toolbar'>
            <button className='toolbar__btn'>Brush</button>
            <button className='toolbar__btn'>Rect</button>
            <button className='toolbar__btn'>Circle</button>
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
