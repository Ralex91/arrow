export const queryNestedObjects = (obj, prefix = "") =>
  Object.keys(obj).reduce((acc, key) => {
    const newKey = prefix ? `${prefix}.${key}` : key

    if (typeof obj[key] === "object" && obj[key] !== null) {
      Object.assign(acc, queryNestedObjects(obj[key], newKey))
    } else {
      acc[newKey] = obj[key]
    }

    return acc
  }, {})
