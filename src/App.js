function App(props) {
  return <div>{console.log(props)}
    <p>hello {props.name}</p>
  </div>
}

export default App