import axios from "axios";

export async function useServices() {
  const response = await axios.get(
    "https://api.github.com/leonardowlopes/repos"
  );

  console.log(response);
}
