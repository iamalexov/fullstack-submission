const Header = (props)=> {

  return(
    <>
    <h1>{props.course}</h1>
    </>
  );
}


function Content (props) {

  const List = props.parts


const ComponentList = List.map(e => (
    <p>
    {e.name}
    {e.exercises}
    </p>

));

return (
  <div>
    {ComponentList}
  </div>
);
}


const Total = (props) => {

  const numbers = props.parts
 

  return (
    <p>Number of exercises {Number(numbers[0].exercises) + Number(numbers[1].exercises) + Number(numbers[2].exercises)}</p>

  )
}


const App = (props) => {
  const course = 'Half Stack application development'
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]

  return (
    <div>
     <Header course={course}/>
     <Content parts={parts}/>
     <Total parts={parts}/>
    </div>
  )
}

export default App