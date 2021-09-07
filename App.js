import React from 'react';
import TabComponent from './src/tabs/TabContent';
import { MyBusProvider } from './src/context/MyBusContext';

export default function App() {
  
  return (
    <MyBusProvider>
      <TabComponent />
    </MyBusProvider>
  );

}
