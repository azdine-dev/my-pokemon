import React from 'react'


/*  This grid system takes an array of JSX items as children
    and calculates the number of rows needed based on chilren count and col count.
*/
const GridSystem = ({ colCount, children, md }:any) => {
        
    let rowCount = Math.floor(children.length / colCount) + 1

    //Index is needed to keep track of the current element that we are one.
    let index = 0

    //This is the driver function for building the grid system.
    const buildGrid = () => {
        return (
            renderRows()
        )
    }

    //Returns For example, we can have a row with 2 columns inside it.
    const renderRows = () => {
        let rows = []
        
        for(let row = 0; row < rowCount; row++) {
            rows.push(
                <div className='row' key={row}>
                    {
                        renderCols()
                    }
                </div>
            )
        }
        
        return rows
    }

    //Returns an array of columns with the children inside.
    const renderCols = () => {
        let cols = []
        let colClassName = `col-md-${md} col-lg-${md} col-sm-${md}`
        //If you want to add more bootstrap breakpoints you can pass them as props here.
        for(let col = 0; col < colCount; col++) {
            if(index < children.length) {
                cols.push(
                    <div className={colClassName} key={col}>
                        {children[index]}
                    </div>
                )
                index++
            }
        }
        
        return cols
    }

    return (
        <div >
            {
                buildGrid()
            }
        </div>
    )
}

export default GridSystem