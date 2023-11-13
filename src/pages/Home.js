import { Center, Heading, Stack, Text } from "@chakra-ui/react";
import GithubCorner from "components/GtihubCorner";
import { useState, useEffect } from "react";

const HomePage = () => {
  const [backendData, setBackendData] = useState('');

  useEffect(() => {
    fetchDataFromBackend();
  }, []);

  const fetchDataFromBackend = async () => {
    try {
      const response = await fetch('/api/'); // Замените '/api/' на реальный путь к вашему API на бэкенде
      const data = await response.text();
      setBackendData(data);
    } catch (error) {
      console.error('Error fetching data from backend:', error);
    }
  };

  return (
    <Center h={'100vh'}>
      <Stack>
        <Heading>React + Chakra UI</Heading>
        <Text>Create React App. Boilerplate. Docker.</Text>
        <Text>Data from Backend: {backendData}</Text>
      </Stack>

      <GithubCorner />
    </Center>
  );
};

export default HomePage;
