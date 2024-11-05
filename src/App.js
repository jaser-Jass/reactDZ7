import logo from './logo.svg';
import './App.css';
import React from 'react';
import { Provider } from 'react-redux';
import store from './app/store';
import TaskList from './components/TaskList';

const App = () => {
      return (
        <Provider store={store}>
            <div>
                <h1>Список задач</h1>
                <TaskList />
            </div>
        </Provider>
    );
};

export default App;
