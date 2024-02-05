import { useEffect, useState } from "react";
import { useDebounce } from "../../hooks/useDebounce";

import { gql, useLazyQuery } from "@apollo/client";
import { selectedCountriesVar } from "../../lib/cache";

import { MagnifyingGlassIcon } from "@radix-ui/react-icons";

import { ScrollArea } from "../ui/scroll-area";

import { fetchUsers, ICountry } from "../../lib/utils";

function SearchBar() {
  const [aloading, setLoading] = useState(false);

  const [search, setSearch] = useState("");
  const debouncedSearch = useDebounce(search);

  const [countries, setCountries] = useState<ICountry[]>([]);

  const [isopen, setIsOpen] = useState(false);

  useEffect(() => {
    const loadUsers = async () => {
      setLoading(true);

      const countries = await fetchUsers(debouncedSearch);
      setCountries(countries);

      setLoading(false);
    };
    loadUsers();
  }, [debouncedSearch]);

  function setCountry(id: number, country: object) {
    getCountries();
    setIsOpen(!isopen);
    setSearch(country.name.common);

    selectedCountriesVar([...selectedCountriesVar(), data]);

    console.log("Once", ...selectedCountriesVar(), loading);
  }

  const GET_COUNTRY = gql`
    query GetCountries($uriStringCountry: String, $uriStringCurrency: String) {
      country(uriString: $uriStringCountry) {
        name {
          common
        }
        population
        currencies
      }
      convertCurrancy(uriString: $uriStringCountry) {
        date
        base
        rates
      }
    }
  `;

  const [getCountries, { loading, error, data }] = useLazyQuery(GET_COUNTRY, {
    variables: {
      uriStringCountry: `name/usa`,
      uriStringCurrency: "&base=EUR&symbols=SEK,GBP,LKR",
    },
  });

  console.log("Render", data, error, loading);

  return (
    <>
      <div className="relative flex flex-col gap-2">
        <span className="pl-1 font-normal text-gray-600 text-md">
          Search Country
        </span>
        <div className="flex flex-row items-center w-full gap-2 p-1 pl-2 bg-white border rounded-md border-slate-300">
          <MagnifyingGlassIcon width="25" height="25" />
          <input
            type="text"
            value={search}
            className="w-full h-full bg-white border-none outline-none"
            onChange={(e) => {
              setIsOpen(true);
              console.log("evnt", e.target.value);
              setSearch(e.target.value);
              if (e.target.value == "") setIsOpen(false);
            }}
          ></input>
        </div>
        {isopen && (
          <ScrollArea className="w-full p-2 bg-white border rounded-lg max-h-40 border-slate-300">
            {aloading && (
              <div className="p-2 text-gray-500">Searching ....</div>
            )}

            {!aloading &&
              countries.map((country, index) => {
                return (
                  <div key={index}>
                    <button
                      className="p-0.5 px-4 text-gray-800 rounded-md hover:bg-gray-200"
                      onClick={() => setCountry(index, country)}
                    >
                      {country.name.common}
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
