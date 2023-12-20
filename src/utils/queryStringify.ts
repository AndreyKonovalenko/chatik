type StringIndexed = Record<string, unknown>;

function queryStringify(data: StringIndexed): string {
  if (typeof data !== 'object' || data === null || Array.isArray(data)) {
    throw new Error('input must be an object');
  }
  console.log(data);
  const params: string[] = [];

  function processValue(key: string, value: unknown): void {
    if (value === null || value === undefined) {
      return;
    }

    if (typeof value === 'object') {
      if (Array.isArray(value)) {
        value.forEach((item, index) => {
          processValue(`${key}[${index}]`, item);
        });
      } else {
        Object.entries(value).forEach(([nestedKey, nestedValue]) => {
          processValue(`${key}[${nestedKey}]`, nestedValue);
        });
      }
    } else {
      params.push(
        `${encodeURIComponent(key)}=${encodeURIComponent(String(value))}`
      );
    }
  }

  Object.entries(data).forEach(([key, value]) => {
    processValue(key, value);
  });

  return decodeURIComponent(params.join('&'));
}

export default queryStringify;

//console.log(queryStringify(obj)); // 'key=1&key2=test&key3=false&key4=true&key5[0]=1&key5[1]=2&key5[2]=3&key6[a]=1&key7[b][d]=2'
