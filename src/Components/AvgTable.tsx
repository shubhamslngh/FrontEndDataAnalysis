import { DataTable } from 'mantine-datatable';
import Dataset from '../Data/IAD.json'; // path to data
import { useState, useEffect } from 'react';
import { preprocessData } from '../utils'; // Import the preprocessor utility function

const aggregateData = (data: any[]) => {
  const aggregatedData: any[] = [];

  const dataByCrop: { [cropName: string]: any[] } = data.reduce((acc, record) => {
    const cropName = record['Crop Name'];
    if (!acc[cropName]) {
      acc[cropName] = [];
    }
    acc[cropName].push(record);
    return acc;
  }, {});

  for (const cropName in dataByCrop) {
    const records = dataByCrop[cropName];
    const totalYield = records.reduce((sum, record) => {
      const yieldValue = record['Yield Of Crops (UOM:Kg/Ha(KilogramperHectare))'];
      return sum + (yieldValue ? parseFloat(yieldValue) : 0);
    }, 0);
    const totalArea = records.reduce((sum, record) => {
      const areaValue = record['Area Under Cultivation (UOM:Ha(Hectares))'];
      return sum + (areaValue ? parseFloat(areaValue) : 0);
    }, 0);

    const averageYield = totalYield / records.length;
    const averageArea = totalArea / records.length;

    aggregatedData.push({
      'Crop': cropName,
      'Average Yield (Kg/Ha)': averageYield.toFixed(3),//fixing decimal points to 3
      'Average Cultivation Area (Ha)': averageArea.toFixed(3),
    });
  }

  return aggregatedData;
};

export function AverageTable() {
  const [aggregatedData, setAggregatedData] = useState<any[]>([]);

  useEffect(() => {
    const processedData = preprocessData(Dataset);
    const data = aggregateData(processedData);
    setAggregatedData(data);
  }, []);

  return (
    <div style={{ overflowX: 'auto' }}>
      <h1>Average Yield and Cultivation Area</h1>
      <DataTable
        withTableBorder
        withColumnBorders
        striped
        highlightOnHover
        horizontalSpacing="md"
        noRecordsText=" "
        noRecordsIcon={
          <p></p>
        }
        columns={[
          { accessor: 'Crop' },
          {
            accessor: 'Average Yield (Kg/Ha)', title: 'Average Yield of the Crop between 1950-2020'
          },
          {
            accessor: 'Average Cultivation Area (Ha)', title: 'Average Cultivation Area of the Crop between 1950-2020    '
          },
        ]}
        records={aggregatedData}
      />
    </div>
  );
}
