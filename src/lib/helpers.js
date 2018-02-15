export const getUniqueAuthors = issues =>
  issues
    .map(({ user }) => user.login) // map to array of strings
    .filter((x, i, a) => a.indexOf(x) === i); // filter to find unique values

export const getUniqueLabels = issues =>
  issues
    .map(({ labels }) => labels) // map to array of labels arrays
    .reduce((a, b) => [...a, ...b], []) // flatten nested arrays
    .map(label => label.name) // map to array of strings
    .filter((x, i, a) => a.indexOf(x) === i); // filter to find unique values
