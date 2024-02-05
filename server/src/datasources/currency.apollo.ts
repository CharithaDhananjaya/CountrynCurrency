import "dotenv/config";
import { RESTDataSource } from "@apollo/datasource-rest";

class currencyAPI extends RESTDataSource {
  baseURL = "http://data.fixer.io/api/";

  async getCurrencyData(uriSting: string) {
    //console.log("URI", uriSting, process.env.FIXER_API_KEY);
    return this.get(
      `latest?access_key=${process.env.FIXER_API_KEY}${uriSting}`
    );
  }
}

export default currencyAPI;
