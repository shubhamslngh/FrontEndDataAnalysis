export const preprocessData = (data: any[]) => {
  return data.map(record => {
    const newRecord = { ...record };
    Object.keys(newRecord).forEach(key => {
      if (newRecord[key] === '' || newRecord[key] == null) {
        newRecord[key] = 0;
      }
    });
    return newRecord;
  });
};
//for null value to 0
