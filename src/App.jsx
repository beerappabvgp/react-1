import { Button } from "./components/Button"
import { HelloWorld } from "./components/HelloWorld"
import { Image } from "./components/Image"
import { Navbar } from "./components/Navbar"
import { Props } from "./components/Props"
import { SecondProp } from "./components/SecondProp"
function App() {
  const name = "anil";
  return (
    <div>
      {/* This is how you pass props in react  */}
      <Props name={name} />
      <SecondProp name={name} />
      {/* <Image />
      <h1>Hello World</h1>
      <Navbar />
      <HelloWorld />
      <Navbar />
      <Navbar />
      <Navbar />
      <Navbar />
      <Navbar />
      <Button /> */}
    </div>
  )
}

export default App

// JSX => 