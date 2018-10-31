export const removeSpaces = (word) => word.replace(/\s/g, '');

/**
 * Returns a bool that to indicate whether the values satisfy the query. 
 *
 * @param {string[]} values that are processed
 * @param {string} query to be found in processed values
 * @returns {boolean} whether values satisfy the query
 */
export const satisfiesQuery = (values, query) =>  {
  return (
    query 
      ? values.map(x => x.toLowerCase()).join(' ').includes(query.toLowerCase())
      : true
  );
};
