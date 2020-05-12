import React, { useEffect, useState } from "react"
import styled from "styled-components"

const AppTitle = styled.h1`
  font-family: "Neuton", serif;
  color: #fff;
  margin-top: 0;
  letter-spacing: 1px;
  font-size: 4.5rem;
  text-align: center;
  text-shadow: 1px 2px 3px rgba(0, 0, 0, 0.3);
`

const Header = (props) => {
  return (
    <>
      <AppTitle>Periodic Table</AppTitle>
    </>
  )
}

export default Header
