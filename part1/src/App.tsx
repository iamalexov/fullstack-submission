import { Fragment } from 'react';



  
    const Header = (props)=> {

      return(
        <>
        <h1>{props.course}</h1>
        </>
      );
    }



    const content = [
      {id: 1, title: 'Fundamentals of React', exercises: 10},
      { id: 2, title: 'Using props to pass data', exercises: 7},
      { id: 3, title:'State of a component',exercises: 14}
    ]; 
  
  function Content() {
    return content.map(post =>
      <Fragment key={post.id}>
        <PostTitle title={post.title} />
        <PostExercises exercises={post.exercises} />
      </Fragment>
    );
  }

  function PostTitle({title}) {
    return <p>{title}</p>
  }

  function PostExercises ({exercises}) {
    return (
      <article>
        <p>{exercises}</p>
      </article>
    );
  }

 
 
 
 const Total = () => {
  const exercises1 = 10;
  const exercises2 = 7;
  const exercises3 = 14;


  return (
    <p>Number of exercises {Number(exercises1) + Number(exercises2) + Number(exercises3)}</p>
  )
       
 }; 

 const App = () => {

  const course = 'Half Stack application development'
  
  
   return (
    <div>
    <Header course={course} />
    <Content />
    <Total />
  </div>
  )
}

export default App
    