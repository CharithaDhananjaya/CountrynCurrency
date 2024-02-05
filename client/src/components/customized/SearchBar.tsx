import { useState } from "react";
import { useDebounce } from "../../hooks/useDebounce";

import { gql, useQuery } from "@apollo/client";
import { selectedCountriesVar } from "../../lib/cache";

import { MagnifyingGlassIcon } from "@radix-ui/react-icons";

import { ScrollArea } from "../ui/scroll-area";

function SearchBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [selectCountry, setSelectCountry] = useState();
  const debouncedSearch = useDebounce(search);

  const SEARCH_COUNTRY = gql`
    query SearchCountry($uriString: String, $countryName: String) {
      searchCountry(uriString: $uriString, countryName: $countryName) {
        name {
          common
          official
        }
        cca3
        currencies
        population
        flags {
          png
        }
      }
    }
  `;

  const { loading, error, data } = useQuery(SEARCH_COUNTRY, {
    variables: {
      uriString: "all",
      countryName: `${debouncedSearch}`,
    },
    onCompleted: (data) => {
      if (search == "") {
        setIsOpen(false);
        return "SEARCH COUNTRY";
      }
      const filteredCountries = data.searchCountry.map((country) => {
        //const countryCurrencies = country.currencies;
        const currencyLiteral = Object.keys(country.currencies)[0];
        console.log("CL", currencyLiteral);
        const currencyObject = {
          currencyLiteral: currencyLiteral,
          name: country.currencies[currencyLiteral].name,
          symbol: country.currencies[currencyLiteral].symbol,
        };
        return { ...country, currencyObject };
      });
      //console.log("SEARCHED:", filteredCountries);
      return filteredCountries;
    },
  });

  function setCountry(country) {
    setIsOpen(!isOpen);
    setSelectCountry(country.name.common);

    selectedCountriesVar([...selectedCountriesVar(), country]);

    console.log("Once", ...selectedCountriesVar(), loading, selectCountry);
  }

  return (
    <>
      <div className="relative flex flex-col gap-2 mt-1">
        <span className="pl-1 font-bold text-black text-md">
          Search Country
        </span>
        <div className="flex flex-row items-center w-full gap-2 p-1 pl-2 bg-white border rounded-md border-slate-300">
          <MagnifyingGlassIcon
            className="font-bold text-blue-800"
            width="25"
            height="25"
          />
          <input
            type="text"
            placeholder="Sweden"
            className="w-full h-full bg-white border-none outline-none"
            onChange={(e) => {
              setIsOpen(true);
              setSearch(e.target.value);
              if (e.target.value == "") setIsOpen(false);
            }}
          ></input>
          {/* <div className="w-10 h-fit p-0.5 text-md font-medium text-center text-gray-500">
            &#9166;
          </div> */}
        </div>
        {isOpen && (
          <ScrollArea className="w-full p-2 bg-white border rounded-lg max-h-40 border-slate-300">
            {loading && <div className="p-2 text-gray-500">Searching ....</div>}

            {!loading &&
              data.searchCountry.map((country, index) => {
                return (
                  <div key={index}>
                    <button
                      className="p-0.5 px-4 text-gray-800 rounded-md hover:bg-gray-200"
                      onClick={() => setCountry(country)}
                    >
                      {country.cca3} - {country.name.common}
                    </button>
                  </div>
                );
              })}
          </ScrollArea>
        )}
      </div>
    </>
  );
}

//{cn("w-full h-10 focus:border-none focus:ring-white")}
export default SearchBar;
