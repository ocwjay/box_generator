import React, {useState} from 'react'

const BoxDisplay = (props) => {
    const {boxList} = props;
    return(
        <div className='boxContainer'>
            <div className='box' style={{backgroundColor: 'red'}}></div>
            <div className='box' style={{backgroundColor: 'blue'}}></div>
            <div className='box' style={{backgroundColor: 'purple'}}></div>
            {
                boxList.map((box, index) => {
                    return(
                        <div
                        className='box'
                        key={index}
                        style={{
                            backgroundColor: `${box.color}`,
                            width: `${box.size}px`,
                            height: `${box.size}px`
                        }}>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default BoxDisplay