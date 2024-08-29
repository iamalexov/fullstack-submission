import { Fragment } from 'react';


 


  
    const Header = (props)=> {

      return(
        <>
        <h1>{props.course}</h1>
        </>
      );
    }


   /*  const Content = () => {
            
      
      return (
      <div>
      <Part1 part1 />
      <Part2  part2/>
      <Part3  part3/>
      </div>
      )
      
}  */

    const content = [
      {id: 1, part: 'Fundamentals of React', exercises: 10},
      { id: 2, part: 'Using props to pass data', exercises: 7},
      { id: 3, part:'State of a component',exercises: 14}
    ]; 
  
  function Content() {
    return content.map(post =>
      <Fragment key={post.id}>
        <PostTitle part={post.part} />
        <PostExercises exercises={post.exercises} />
      </Fragment>
    );
  }

  function PostTitle({part}) {
    return <p>{part}</p>
  }

  function PostExercises ({exercises}) {
    return (
      <article>
        <p>{exercises}</p>
      </article>
    );
  }

 
 
 
 const Total = (props) => {
  const exercises1 = 10;
  const exercises2 = 7;
  const exercises3 = 14;


  return (
    <p>Number of exercises {Number(props.exercises1) + Number(props.exercises2) + Number(props.exercises3)}</p>
  )
       
 }; 

 const App = () => {

  const course = 'Half Stack application development'
  /* const Part1={
    name:'Fundamentals of React' 
    exercises1:10}
const Part2={
     name:'Using props to pass data' 
     exercises2: 7} 
const part3={
     name:'State of a component' 
     exercises3: 14}  */
  
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14 
   return (
    <div>
    <Header course={course} />
    <Content />
    <Total />
  </div>
  )
}

export default App
    