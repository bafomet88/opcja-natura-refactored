import React from "react"
import renderer from "react-test-renderer"

import Hero from "../src/components/hero/Hero"

describe("Header", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<Hero />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
