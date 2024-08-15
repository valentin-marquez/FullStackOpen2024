
import PropTypes from 'prop-types';

const Header = ({ course }) => (
  <h1>{course.name}</h1>
)

const Part = ({part}) => (
  <p>
    {part.name} - {part.exercises}
  </p>
)

const Content = ({ course }) => {
  return (
    <div>
      {course.parts.map(part => <Part key={part.name} part={part} />)}
    </div>
  );
}

const Total = ({ course }) => {
  return (
    <p>
      <strong>Number of exercises: {course.parts.reduce((sum, part) => sum + part.exercises, 0)}</strong>
    </p>
  );
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
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
  }

  return (
    <div>
      <Header course={course} />
      <Content course={course} />
      <Total course={course} />
    </div>
    )
}

// Define prop types
Header.propTypes = {
  course: PropTypes.object.isRequired
}

Part.propTypes = {
  part: PropTypes.object.isRequired
}

Content.propTypes = {
  course: PropTypes.object.isRequired
}

Total.propTypes = {
  course: PropTypes.object.isRequired
}


export default App