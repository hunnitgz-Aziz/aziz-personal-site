import React from "react"
import posed, { PoseGroup } from "react-pose"

const timeout = 0

class Transition extends React.PureComponent {
  render() {
    const { children, location } = this.props

    const RoutesContainer = posed.div({
      enter: {
        opacity: 1,
        delay: timeout,
        delayChildren: timeout,
        transition: {
          duration: 400,
          ease: "backIn",
        },
      },
      exit: {
        opacity: 0,
        transition: {
          duration: 400,
          ease: "backOut",
        },
      },
    })

    return (
      <PoseGroup>
        <RoutesContainer key={location.pathname}>{children}</RoutesContainer>
      </PoseGroup>
    )
  }
}

export default Transition
