import "dotenv/config";
import { RESTDataSource } from "@apollo/datasource-rest";

class currencyAPI extends RESTDataSource {
  baseURL = "http://data.fixer.io/api/";

  async getCurrencyData(uriSting: string) {
    //console.log("URI", uriSting, process.env.FIXER_API_KEY);
    return this.get(
      `latest?access_key=${process.env.FIXER_API_KEY}${uriSting}`
    );
    //"latest?access_key=e33261093f558c6939d2aecc304a7946&base=EUR&symbols=SEK,GBP,LKR"
    //0644a4dbfd0ecbc92565d983d1a6f29a
  }
}

export default currencyAPI;
