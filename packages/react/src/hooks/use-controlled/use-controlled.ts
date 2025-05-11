import * as React from "react"

interface UseControlledProps<T> {
  value?: T
  defaultValue?: T
}
export const useControlled = <T>(
  props: UseControlledProps<T>
): [T, React.Dispatch<React.SetStateAction<T | undefined>>] => {
  const { value: valueProp, defaultValue: defaultProp } = props
  const [value, setValue] = React.useState<T | undefined>(defaultProp)

  // isControlled will not change after being initialized
  const { current: isControlled } = React.useRef(valueProp !== undefined)

  /**
   * Set the value if the component is uncontrolled.
   */
  const setUncontrolledValue: React.Dispatch<
    React.SetStateAction<T | undefined>
  > = React.useCallback((newValue) => {
    if (!isControlled) {
      setValue(newValue)
    }
  }, [])
  return [value as T, setUncontrolledValue]
}
