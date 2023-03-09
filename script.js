function deepEquals(a, b) {
  // Handle simple cases first
  if (typeof a !== typeof b) {
    return false;
  }
  if (Number.isNaN(a) && Number.isNaN(b)) {
    return true;
  }
  if (a === null || b === null || a === undefined || b === undefined) {
    return a === b;
  }
  
  // Handle arrays
  if (Array.isArray(a) && Array.isArray(b)) {
    if (a.length !== b.length) {
      return false;
    }
    for (let i = 0; i < a.length; i++) {
      if (!deepEquals(a[i], b[i])) {
        return false;
      }
    }
    return true;
  }
  
  // Handle objects
  if (typeof a === 'object' && typeof b === 'object') {
    const aKeys = Object.keys(a);
    const bKeys = Object.keys(b);
    if (aKeys.length !== bKeys.length) {
      return false;
    }
    for (const key of aKeys) {
      if (!deepEquals(a[key], b[key])) {
        return false;
      }
    }
    return true;
  }
  
  // Handle everything else
  return a === b;
}

module.exports=deepEquals