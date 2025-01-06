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

  export default Course;