type QueryParameters = { [key: string]: any };
export const objectToQueryString = (queryParameters: QueryParameters) => {
  return queryParameters
    ? Object.entries(queryParameters).reduce((queryString, [key, value]) => {
        const encodedValue = encodeURIComponent(value);
        const symbol = queryString.length === 0 ? '?' : '&';
        queryString += encodedValue ? `${symbol}${key}=${encodedValue}` : '';
        return queryString;
      }, '')
    : '';
};
