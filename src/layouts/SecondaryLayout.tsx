import React from 'react'

interface SecondaryLayoutProps {
  children: JSX.Element
}

export const SecondaryLayout = ({
  children: Children
}: SecondaryLayoutProps): JSX.Element => {
  return (
    <div>
      <header>Secondary layout header</header>
      <section>{Children}</section>
      <footer>Secondary layout footer</footer>
    </div>
  )
}
