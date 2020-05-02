import React from 'react';
import logo from './logo.svg';
import './App.css';
import { cars } from './demo'
import CarItem from './CarItem'

const App: React.FC = () => {
    return (
        <div className="App">
            <ul>
                {cars.map((car) => (
                    <CarItem car={car} />
                ))}
            </ul>
        </div>
    );
}

export default App;
