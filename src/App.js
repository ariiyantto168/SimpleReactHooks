import React, { useState } from 'react';
import GoalsList from './components/GoalList/GoalList';
import NewGoal from './components/NewGoal/NewGoal';
import  './App.css';

const App = () => {

  
   const [courseGoals, setCourseGoals] = useState([
    {id:'cg1', text:'simple React Hooks'},
    {id:'cg2', text:'Share Componenent'},
    {id:'cg3', text:'Css'},
  ]);

  const addNewGoalHandler = newGoal => {
    // parameter courseGoals.concat(newGoal) untuk menambahkan mynewgoal, newGoal ada di newGoal.js 
    // setCourseGoals(courseGoals.concat(newGoal))
    setCourseGoals(prevCourseGoals =>  prevCourseGoals.concat(newGoal));
  }


  return (
    <div className="course-goals">
      <h2>Course Goals</h2>
        <NewGoal onAddGoal={addNewGoalHandler}/>
        <GoalsList goals={courseGoals} />
    </div>
  );
};

export default App

// fetching user input














/**
 * learning 1 menggunak hooks function
 import React from 'react';
      arrow function
    const App = () => {
    return <h1>A React App! </h1>
      return React.createElement('h1', {}, 'Hi, this is React!')
    }

    export default App


    // {} = null

    learning 2 menggunakan class

    class App extends React.Component {
      render() {
        return <h1 title="This works">Hi, <span>this</span> is ReactJS!</h1>
      }
    }

    export default App

    learning 2
          import React from 'react';

      const App = () => {
        return <h1 title="This works">Hi, <span>this</span> is ReactJS!</h1>
      }

      export default App

 */
