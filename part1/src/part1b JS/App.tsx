import { Fragment } from 'react';


 


  
    const Header = (props)=> {

      return(
        <>
        <h1>{props.course}</h1>
        </>
      );
    }



    const content = [
      {part: 1, name: 'Fundamentals of React', exercises: 10},
      { part: 2, name: 'Using props to pass data', exercises: 7},
      { part: 3, name:'State of a component',exercises: 14}
    ]; 
  
  function Content() {
    return content.map(post =>
      <Fragment key={post.part}>
        <PostTitle name={post.name} />
        <PostExercises exercises={post.exercises} />
      </Fragment>
    );
  }

  function PostTitle({name}) {
    return <p>{name}</p>
  }

  function PostExercises ({exercises}) {
    return (
      <article>
        <p>{exercises}</p>
      </article>
    );
  }

 
 

 const part1 = {
  name: 'Fundamentals of React',
  exercises: 10
}
const part2 = {
  name: 'Using props to pass data',
  exercises: 7
}
const part3 = {
  name: 'State of a component',
  exercises: 14
} 

 function Total () {

 
  return (
    <p>Number of exercises { Number(part1.exercises) + Number(part2.exercises)  + Number(part3.exercises)}</p>
  )
 }

 const App = () => {

  
    const course = 'Half Stack application development'
    
  
   return (
    <div>
    <Header course={course} />
    <Content />

     <Total  />
 </div>
  )
}

export default App