import React from 'react'
import { Header } from './components/Header';
import { СontentWrapper } from './components/СontentWrapper';
import { CreateSection } from './components/CreateSection';
import { TodosContainer } from './components/TodosContainer';
import styles from './App.module.scss'


const App = () => {
  return (
    <div className={styles.app}>
      <Header></Header>
      <СontentWrapper>
        <CreateSection />
        <TodosContainer />
      </СontentWrapper>
    </div>
  );
}

export default App;