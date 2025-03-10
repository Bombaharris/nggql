export function difference(a: Set<any>, b: Set<any>) {
  const result: Set<any> = new Set();

  for (const item of a) {
    if (b.has(item)) {
      continue;
    }

    result.add(item);
  }

  return result;
}
