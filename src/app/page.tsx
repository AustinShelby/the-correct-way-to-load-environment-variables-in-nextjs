import { Message } from "./Message";

const HomePage = () => {
  // API_KEY available here because we are in a server component
  const apiKey = process.env.API_KEY;

  console.log(apiKey); // secret

  return <Message />;
};

export default HomePage;
