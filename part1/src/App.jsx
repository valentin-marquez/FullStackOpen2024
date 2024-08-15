
import PropTypes from 'prop-types';

const Header = ({ course }) => (
  <h1>{course}</h1>
)

const Part = ({part}) => (
  <p>
    {part.name} - {part.exercises}
  </p>
)

const Content = ({ parts }) => (
  <div>
    {parts.map((part, index) => (
      <Part key={index} part={part} />
    ))}
  </div>
);

const Total = ({ parts }) => {
  return (
    <p>
      <strong>Number of exercises: {parts.reduce((acc, part) => acc + part.exercises, 0)}</strong>
    </p>
  );
}

const App = () => {
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
      <Header course={course} />
      <Content parts={parts} />
      <Total parts={parts} />
    </div>
    )
}

// Define prop types
Header.propTypes = {
  course: PropTypes.string.isRequired
};

Part.propTypes = {
  part: PropTypes.string.isRequired,
  exercises: PropTypes.number.isRequired
};

Content.propTypes = {
  parts: PropTypes.array.isRequired,
  exercises: PropTypes.array.isRequired
};

Total.propTypes = {
  parts: PropTypes.array.isRequired,
  exercises: PropTypes.array.isRequired
};


export default App