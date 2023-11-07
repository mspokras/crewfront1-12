const ApiService = {
  fetchData: async () => {
      const response = await fetch('your-api-endpoint');
      const data = await response.json();
      return data;
  }
};

export default ApiService;