import { DataTable } from 'mantine-datatable';
import Dataset from '../Data/IAD.json'; // Adjust the path as necessary
import { preprocessData } from '../utils'; // Import the utility function
import { useState, useEffect } from 'react';

export function Table() {
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    // Preprocess data before setting it
    const processedData = preprocessData(Dataset);
    setData(processedData);
  }, []);

  return (
    <div style={{ overflowX: 'auto' }}>
      <h1 style={{ font: 'bold'}}>Indian Agriculture Data</h1>
      <DataTable
        withTableBorder
        withColumnBorders
        minHeight={150}
        striped
        highlightOnHover
       noRecordsText=" "
         noRecordsIcon={
           <p></p>
          }
        horizontalSpacing="md"
        columns={[
          { accessor: 'Country'  },
          { accessor: 'Year' },
          { accessor: 'Crop Name' },
          { accessor: 'Crop Production (UOM:t(Tonnes))' ,title:'Crop Production '},
          { accessor: 'Yield Of Crops (UOM:Kg/Ha(KilogramperHectare))', title:'Yield Of Crops' },
          { accessor: 'Area Under Cultivation (UOM:Ha(Hectares))' ,title:'Area Under Cultivation '},
        ]}
        records={data}
      />
    </div>
  );
}
