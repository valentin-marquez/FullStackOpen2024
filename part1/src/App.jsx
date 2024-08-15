
import PropTypes from 'prop-types';

const Header = ({ course }) => (
  <h1>{course}</h1>
)



const Content = ({part, exercises}) => (
  <p>
    {part}: {exercises}
  </p>
)

const Total = (props) => (
  <p>Number of exercises {props.exercises.reduce((a, b) => a + b, 0)}</p>
)

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header course={course} />
      <Content part={part1} exercises={exercises1} />
      <Content part={part2} exercises={exercises2} />
      <Content part={part3} exercises={exercises3} />
      <Total exercises={[exercises1, exercises2, exercises3]} />
    </div>
  )
}

// Define prop types
Header.propTypes = {
  course: PropTypes.string.isRequired
};

Content.propTypes = {
  part: PropTypes.string.isRequired,
  exercises: PropTypes.number.isRequired
};

Total.propTypes = {
  exercises: PropTypes.array.isRequired
};


export default App