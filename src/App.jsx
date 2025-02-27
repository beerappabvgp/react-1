import { Age } from "./components/Age"
import { Button } from "./components/Button"
import { Counter } from "./components/Counter"
import { ClickEvent } from "./components/Event"
import { HelloWorld } from "./components/HelloWorld"
import { Image } from "./components/Image"
import { Navbar } from "./components/Navbar"
import { Props } from "./components/Props"
import { SecondProp } from "./components/SecondProp"
import { Users } from "./components/Users"

function App() {
  const name = "anil";
  return (
    <div>
      <Users />
      {/* <Counter />
      <Age age = {10} isVoted={false}/>
      <Age age = {20} isVoted={true}/> */} 
      {/* <ClickEvent /> */}
      {/* <Age age={10} isVoted={false}/>
      <Age age={20} isVoted={false}/>
      <Age age={30} isVoted={true}/>
      <Age age={7} isVoted={true}/> */}
      {/* <Users /> */}

      {/* This is how you pass props in react  */}
      {/* <Props name={name} />
      <SecondProp name={name} /> */}
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