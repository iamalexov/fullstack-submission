const Header = ({ course }) => {
  return (
    <div>
      {course.name}
    </div>
  )
}

const Course = (props) => {
  return (
    <h1>
      <Header course={props.course} />
    </h1>
  )
}




const Part = ({ part }) => {
  return (
    <div>
      {part.name} {part.exercises}
    </div>
  )
}

const Content = ({ parts }) => {
  return (
    <div>
      {parts.map((part) =>
        <Part key={part.id} part={part} />
      )}
    </div>
  )
}
const Total = ({ sum }) => <p>Number of exercises {sum}</p>


const Totall =(props)=> props.parts.reduce(
  (previousValue, currentValue) => previousValue + currentValue.exercises,
  0,
);

const App = () => {
  const course = {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      },
      {
        name: 'Redux',
        exercises: 11,
        id: 4
}
    ]
  }

return (
  <div>
    <Course course={course} />
    <Content parts={course.parts} />
    <Total sum={course.parts[0].exercises + course.parts[1].exercises + course.parts[2].exercises + course.parts[3].exercises} />
    <Totall parts={course.parts} />
  </div>

)
}

export default App