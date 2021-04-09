import { useState, useEffect } from "react"
import throttle from "lodash/throttle"

export default function useWindowScroll() {
  const [windowScroll, setWindowScroll] = useState(0)

  function changeWindowScroll(mounted) {
    if (typeof window !== `undefined` && mounted) {
      setWindowScroll(window.pageYOffset)
    }
  }

  useEffect(() => {
    let mounted = true

    if (typeof window !== `undefined`) {
      window.addEventListener(
        "scroll",
        throttle(function () {
          changeWindowScroll(mounted)
        }, 200)
      )

      return () => {
        mounted = false

        window.removeEventListener("scroll", function () {
          changeWindowScroll(mounted)
        })
      }
    }
  }, [])

  return windowScroll
}
