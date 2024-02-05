import { useState } from "react";

import { gql, useQuery } from "@apollo/client";

import CurrencyConverterView from "./CurrencyConverterView";

function CountryandCurrencyView({ countryData }) {
  const [currencyConvertions, setcurrencyConvertions] = useState([]);

  console.log("from component", countryData);
  const currencyLiteral = Object.keys(countryData.currencies)[0];
  const currencyObject = {
    currencyLiteral: currencyLiteral,
    name: countryData.currencies[currencyLiteral].name,
    symbol: countryData.currencies[currencyLiteral].symbol,
  };

  const GET_CURRENCY = gql`
    query SearchCountry($uriString: String, $countryName: String) {
      searchCountry(uriString: $uriString, countryName: $countryName) {
        name {
          common
          official
        }

        currencies
        convertCurrancy {
          success
          base
          rates
        }
      }
    }
  `;

  const { loading, error, data } = useQuery(GET_CURRENCY, {
    variables: {
      uriString: "all",
      countryName: `${countryData.name.official}`,
    },
    onCompleted: (querydata) => {
      setcurrencyConvertions(querydata.searchCountry[0].convertCurrancy.rates);
    },
  });

  return (
    <>
      <div className="flex flex-col items-start justify-center w-full gap-2 py-4 bg-white border border-gray-300 rounded-md shadow-sm">
        <div className="flex flex-row justify-between w-full gap-2 h-fit">
          <div className="flex flex-col px-4 py-2 w-8/10">
            <div className="flex flex-row items-center gap-2 text-2xl italic font-extrabold text-black text-normal">
              <img
                className="w-8 h-5"
                src={countryData.flags.png}
                alt={`flag-${countryData.name.common}`}
              ></img>
              {countryData.name.common}{" "}
            </div>
            <div className="flex flex-row gap-2">
              <span className="text-lg font-light text-black text-nowrap">
                Official Name:
              </span>
              <span className="font-bold text-black text-md sm:text-lg text-wrap">
                {countryData.name.official}
              </span>
            </div>
            <div className="flex flex-row gap-2">
              <span className="text-lg font-light text-black text-nowrap">
                Population:
              </span>
              <span className="font-bold text-black text-md sm:text-lg text-wrap">
                {countryData.population
                  .toString()
                  .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
              </span>
            </div>
            <div className="flex flex-row gap-2">
              <span className="text-lg font-light text-black text-nowrap">
                Currency:
              </span>
              <div className="flex flex-col gap-1">
                <span className="font-bold text-black text-md sm:text-lg text-wrap">
                  {currencyObject.name}
                </span>
              </div>
            </div>
            <div className="flex flex-row gap-2">
              <span className="text-lg font-light text-black text-nowrap">
                Literal:
              </span>
              <div className="flex flex-col gap-1">
                <span className="font-bold text-black text-md sm:text-lg text-wrap">
                  {currencyObject.currencyLiteral}
                </span>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-2 px-4 py-2 w-4/10">
            <span className="text-sm font-medium text-gray-600">
              Convert Currency
            </span>
            {loading && <div>Currency Conversion Loading</div>}
            {!loading && (
              <>
                <CurrencyConverterView
                  conversionData={{
                    currencyLiteral: currencyObject.currencyLiteral,
                    rates: currencyConvertions,
                  }}
                />
                {/* <div className="flex flex-row items-center gap-2 font-bold">
                  <span className="text-sm text-wrap">
                    {currencyObject.currencyLiteral}
                  </span>
                  <input
                    className="w-full h-8 px-2 font-normal border border-gray-300 rounded-md outline-none"
                    placeholder={`Enter Amount in ${currencyObject.currencyLiteral}`}
                  ></input>
                </div>
                <div className="flex flex-row items-center gap-2 font-bold">
                  <span className="text-sm text-wrap">SEK</span>
                  <input
                    className="w-full h-8 px-2 font-normal border border-gray-300 rounded-md outline-none"
                    disabled
                    placeholder="Amount in SEK"
                  ></input>
                </div> */}
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default CountryandCurrencyView;
