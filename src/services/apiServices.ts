import { nYTimesApi } from "./apiUtils";


  export const getArticlesFromApi = async () => {
    try {
      let response = await fetch(
        nYTimesApi
      );
      let json = await response.json();
      return json.results;
    } catch (error) {
       console.error(error);
    }
  };
