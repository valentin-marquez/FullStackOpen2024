
import PropTypes from 'prop-types';

const Header = ({ course }) => (
  <h1>{course}</h1>
)


const Part = ({part, exercises}) => (
  <p>
    {part}: {exercises}
  </p>
)

const Content = (props) => (
  <div>
    <Part part={props.parts[0]} exercises={props.exercises[0]} />
    <Part part={props.parts[1]} exercises={props.exercises[1]} />
    <Part part={props.parts[2]} exercises={props.exercises[2]} />
  </div>
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
      <Content parts = {[part1, part2, part3]} exercises={[exercises1, exercises2, exercises3]} />
      <Total exercises={[exercises1, exercises2, exercises3]} />
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
  exercises: PropTypes.array.isRequired
};


export default App