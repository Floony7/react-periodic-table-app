import React, { useEffect, useState } from "react"

const Main = styled.div`
  background-color: #fff;
  opacity: 0.2;
  margin: 1rem auto;
  width: 50vw;
  display: flex;
  justify-content: center;
`

const Layout = ({ children }) => {
  return <Main>{children}</Main>
}

export default Layout
