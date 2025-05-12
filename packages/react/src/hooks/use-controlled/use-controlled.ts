"use client"

import * as React from "react"

interface UseControlledProps<T> {
  value?: T
  defaultValue?: T
}

export const useControlled = <T>(
  props: UseControlledProps<T>
): [T, React.Dispatch<React.SetStateAction<T | undefined>>] => {
  const { value: valueProp, defaultValue: defaultProp } = props
  const [valueState, setValueState] = React.useState<T | undefined>(defaultProp)

  // isControlled will not change after being initialized
  const { current: isControlled } = React.useRef(valueProp !== undefined)
  const value = isControlled ? valueProp : valueState

  /**
   * Set the value if the component is uncontrolled.
   */
  const setUncontrolledValue: React.Dispatch<
    React.SetStateAction<T | undefined>
  > = React.useCallback((newValue) => {
    if (!isControlled) {
      setValueState(newValue)
    }
  }, [])
  return [value as T, setUncontrolledValue]
}
