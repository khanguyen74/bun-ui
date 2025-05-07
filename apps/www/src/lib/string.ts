/**
 * Capitalizes the first letter of a string.
 */
export const capitalizeFirstLetter = (str: string) => {
  return str.charAt(0).toUpperCase() + str.slice(1)
}

/**
 * Converts a string from kebab-case to PascalCase.
 *
 * @param str - The string to convert.
 * @param splitter - The character used to split the string. Defaults to '-'.
 * @param separator - The character used to join the words. Defaults to ''.
 * @example kebabToPascalCase("hello-world") // "HelloWorld"
 * @example kebabToPascalCase("hello") // "Hello"
 * @example kebabToPascalCase("hello") // "Hello"
 */
export const kebabToPascalCase = (
  str: string,
  splitter: string = "-",
  separator: string = ""
) => {
  return str
    .split(splitter)
    .map((word) => capitalizeFirstLetter(word))
    .join(separator)
}

/**
 * Extracts the host name from a URL.
 */
export const getHostName = (url: string) => {
  try {
    return new URL(url).hostname
  } catch (error) {
    console.error("Invalid URL:", url, error)
    return ""
  }
}
