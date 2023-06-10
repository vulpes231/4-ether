import React from "react"

const Wrapper = (Component, idName) => 
function HOC() {
  return (
    <section
      className={`p-4 max-w-[1200px] mx-auto relative z-0`}
    >
      <span className="hash-span" id={idName}>
        &nbsp;
      </span>
      <Component />
    </section>
  )
}

export default Wrapper