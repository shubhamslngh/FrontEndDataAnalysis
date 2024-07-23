import { DataTable } from 'mantine-datatable';
import Dataset from '../Data/IAD.json'; // Adjust the path as necessary
import { useState, useEffect } from 'react';
import { preprocessData } from '../utils'; // Import the utility function

const aggregateMinMaxData = (data: any[]) => {
  const aggregatedData: any[] = [];

  const dataByYear: { [year: string]: any[] } = data.reduce((acc, record) => {
    const year = record['Year'];
    if (!acc[year]) {
      acc[year] = [];
    }
    acc[year].push(record);
    return acc;
  }, {});

  for (const year in dataByYear) {
    const records = dataByYear[year];
    let maxProduction = -Infinity;
    let minProduction = Infinity;
    let maxCrop = '';
    let minCrop = '';

    records.forEach(record => {
      const production = parseFloat(record['Crop Production (UOM:t(Tonnes))'] || '0');
      if (production > maxProduction) {
        maxProduction = production;
        maxCrop = record['Crop Name'];
      }
      if (production < minProduction) {
        minProduction = production;
        minCrop = record['Crop Name'];
      }
    });

    aggregatedData.push({
      'Year': year,
      'Crop with Max Production': maxCrop,
      'Crop with Min Production': minCrop,
    });
  }

  return aggregatedData;
};

export function MinMaxTable() {
  const [aggregatedData, setAggregatedData] = useState<any[]>([]);

  useEffect(() => {
    const processedData = preprocessData(Dataset);
    const data = aggregateMinMaxData(processedData);
    setAggregatedData(data);
  }, []);

  return (
    <div style={{ overflowX: 'auto' }}>
      <h1>Crop Production - Min and Max</h1>
      <DataTable
        withTableBorder
        withColumnBorders
        minHeight={150}
        striped
        highlightOnHover
        horizontalSpacing="md"
         noRecordsText=" "
         noRecordsIcon={
           <p></p>
          }
        columns={[
          { accessor: 'Year'  },
          { accessor: 'Crop with Max Production',title: 'Crop with Maximum Production in that Year' },
          { accessor: 'Crop with Min Production',title: 'Crop with Minimum Production in that Year' },
        ]}
        records={aggregatedData}
      />
    </div>
  );
}
