const Header = ({course}) => {
  return (
    <div>
       {course.name}   
    </div>
  )
}



const Course = ({ courses }) => {
  return (
    <div>
      {courses.map((course) => (
        <div key={course.id}>
          
          <h1>
          <Header course={course} />
          </h1>
          <Part parts={course.parts} />
          <Total parts={course.parts}/>
        </div>
      ))}
    </div>
  );
};


const Part = ({ parts }) => {
  return (
    <div>
      {parts.map((part) => (
        <div key={part.id}>
          {part.name} {part.exercises}
        </div> 
      ))}

    </div>
  );
};

const Total = (props) => props.parts.reduce(
  (previosValue, currentValue) => previosValue + currentValue.exercises,0,
);


const App = () => {
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
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
    },
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]

  return (
    <div>
      <h1>Web development curriculum</h1>
      <Course courses={courses} />
      </div>
  )
}

export default App