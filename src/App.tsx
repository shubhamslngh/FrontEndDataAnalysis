import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";
import { theme } from "./theme";
import { NavigationBar } from "./Components/NavigationBar";

export default function App() {
  return (
    <MantineProvider theme={theme}>
      <NavigationBar />
   
    </MantineProvider>
  );
}
