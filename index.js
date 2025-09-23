function formatJSON(input) {
  try {
    return JSON.stringify(JSON.parse(input), null, 2);
  } catch (err) {
    throw new Error("Invalid JSON: " + err.message);
  }
}

function minifyJSON(input) {
  try {
    return JSON.stringify(JSON.parse(input));
  } catch (err) {
    throw new Error("Invalid JSON: " + err.message);
  }
}

module.exports = { formatJSON, minifyJSON };
