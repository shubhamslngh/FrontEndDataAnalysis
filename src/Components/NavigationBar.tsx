import { Tabs } from '@mantine/core';
import { Table } from './Table';
import { AverageTable } from './AvgTable';
import { MinMaxTable } from './MinMaxtable';

export function NavigationBar() {
  return (
    <Tabs defaultValue="table">
      <Tabs.List>
        
        <Tabs.Tab value="table" key="table">Table</Tabs.Tab>
        <Tabs.Tab value="minMaxTable" key="minMaxTable">MinMaxTable</Tabs.Tab>
        <Tabs.Tab value="averageTable" key="averageTable">AverageTable</Tabs.Tab>
      </Tabs.List>
   <div
        style={{
          overflowX: 'scroll',
          height: '700px',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
          borderRadius: '8px',
          padding: '10px',
          backgroundColor: 'white',
          transition: 'box-shadow 0.3s ease-in-out',
        }}
        className="table-container"
      >

      <Tabs.Panel value="table" key="panel-table">
        <Table />
      </Tabs.Panel>
      <Tabs.Panel value="minMaxTable" key="panel-minMaxTable">
        <MinMaxTable />
      </Tabs.Panel>
      <Tabs.Panel value="averageTable" key="panel-averageTable">
        <AverageTable />
        </Tabs.Panel>
      </div>
          
    </Tabs>

  );
}
