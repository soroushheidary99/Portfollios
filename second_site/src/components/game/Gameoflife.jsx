import React, {useState, useRef, useCallback} from 'react'
import './Gameoflife.css'
import {produce} from 'immer'
import Button from '../parts/Button.jsx'
import ClickNHold from 'react-click-n-hold'; 

const numRows = 25;
const numCols = 60;
const cell_size = '20px';
const epoch_time = 100;
const pop_density = 0.8;
const color_1 = 'transparent';
const color_2 = 'brown';
var savedGrid = generateEmptyGrid();
const flag = false;


const operations = [
  [0, 1], [1, 1], [-1, -1], [0, -1], [-1, 0], [1, 0], [1, -1], [-1, 1]
]


function saveGrid(gr){
  const savedGrid = generateEmptyGrid();
  for (let i = 0; i < numRows; i++){
    for (let j = 0; j < numCols; j++){
      savedGrid[i][j] = gr[i][j];
    }
  }
  return savedGrid;
}

function loadGrid(gr){
  return gr
}

function generateEmptyGrid(){
  const rows = [];
  for (let i = 0; i < numRows; i++){
    let temp = Array.from(Array(numCols), ()=>0);
    rows.push(temp);
  }
  return rows;
}

function generateRandomGrid(){
  const rows = [];
  for (let i = 0; i < numRows; i++){
    let temp = Array.from(Array(numCols), ()=> Math.random() > pop_density ? 1 : 0);
    rows.push(temp);
  }
  return rows;
}

const Gameoflife = () => {
  const [grid, setGrid] = useState( () => {
    return generateEmptyGrid()
  });
  function colorMap(x){
    if(x==0){
      return color_1
    }else{
      return color_2
    }
  }
  
  const [running, setRunning] = useState(false);
  
  const runningRef = useRef();
  runningRef.current = running;
  console.log(savedGrid);
  const runSimulation = useCallback(() => {
      if(!runningRef.current){
        return ;
      }
      
      setGrid((g) => {
        return produce(g, gridCopy => {
          for (let i=0; i<numRows; i++) {
            for (let j=0; j<numCols; j++) {
              let neighbors = 0;
              operations.forEach(([x, y]) => {
                const newI = i+x;
                const newJ = j+y;
                if (newI>=0 && newI<numRows && newJ>=0 && newJ<numCols){
                  neighbors += g[newI][newJ]
                }
              });
              if(neighbors < 2 || neighbors > 3){
                gridCopy[i][j] = 0;
              }else if(g[i][j]===0 && neighbors===3){
                gridCopy[i][j] = 1;
              }
            } 
          }
        });
      });

      setTimeout(runSimulation, epoch_time);
      }, []  )
  



  return (<>
  <div className='game__of__life'>
        <div className='container__buttons__game'>
          <Button onClick={() => {
            setRunning(!running)
            if (!running){
              runningRef.current = true;
              runSimulation()}
            }
          }>
            {running ? 'stop' : 'start'}
          </Button>
          <Button onClick={() => {
            setGrid(generateEmptyGrid())
          }}>
            Clear
          </Button>
          <Button onClick={() => {
            setGrid(generateRandomGrid())
          }}>
            Random
          </Button>
          <Button onClick={() => {
            savedGrid = saveGrid(grid)
          }}>
            Save
          </Button>
          <Button onClick={() => {
            setGrid(loadGrid(savedGrid))
          }}>
            Load
          </Button>
          <Button onClick={() => {
            flag=!flag;
            if(flag){
              document.documentElement.style.setProperty('--gofanim', 0);
            }
            else{
            document.documentElement.style.setProperty('--gofanim', 500);
            }
          }}>
            Trail
          </Button>
        </div>
  
          

        <div
        className='gamegrid' style={{display: 'grid', gridTemplateColumns: `repeat(${numCols}, ${cell_size})`}}>
          {grid.map((rows, i) => rows.map((col, k) =>
            (
              
              <div
                key={`${i}-${k}`}
                className='cell'
                onClick={() => {
                  console.log(1);
                  const newGrid = produce(grid, gridCopy => {
                    gridCopy[i][k] = 1 - grid[i][k];
                  })
                  setGrid(newGrid)}}
                style={{backgroundColor:`${colorMap(grid[i][k])}`, width:`${cell_size}`, height:`${cell_size}`}} >
              </div> )))}
  
        </div>
  </div>
    
  </>)
}

export default Gameoflife