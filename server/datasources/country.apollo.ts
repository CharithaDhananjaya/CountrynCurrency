import { RESTDataSource } from "@apollo/datasource-rest";

class countryAPI extends RESTDataSource {
  baseURL = "https://restcountries.com/v3.1/";

  async getCountryData(searchText: string) {
    return this.get(`${searchText}`);
  }
}

export default countryAPI;
