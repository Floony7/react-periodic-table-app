import React, { useEffect, useReducer } from "react"
import ElementCard from "./ElementCard"
import { Wrapper } from "../styled/Wrapper"
import styled from "styled-components"

const endpoint = "https://neelpatel05.pythonanywhere.com/"

const ContainerDiv = styled.div`
  padding: 1rem;
  width: 100%;
  min-height: 60vh;
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 5px;
`

const StyledLi = styled.li`
  display: inline-block;
  margin: 5px;
  background-color: #e3e3e3;
  padding: 0.5rem;
`

const elemReducer = (state, action) => {
  if (action.type === "SET_DATA") {
    return action.payload
  } else {
    throw new Error("Could not fetch the elements")
  }
}

const MainDisplay = (props) => {
  const [state, dispatch] = useReducer(elemReducer, [])

  useEffect(() => {
    fetch(endpoint)
      .then((response) => response.json())
      .then((result) => dispatch({ type: "SET_DATA", payload: result }))
  }, [])
  return (
    <Wrapper>
      <ul>
        {state.map((elem) => (
          <StyledLi key={elem.atomicNumber}>
            <ElementCard key={elem.atomicNumber} name={elem.name} atomicNumber={elem.atomicNumber} />
          </StyledLi>
        ))}
      </ul>
    </Wrapper>
  )
}

export default MainDisplay
