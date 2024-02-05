import { useReactiveVar } from "@apollo/client";
import { selectedCountriesVar } from "../../lib/cache";

import { ScrollArea } from "../ui/scroll-area";

import CountryandCurrencyView from "./CountryandCurrencyView";

function CountryList() {
  const selectedCountries = useReactiveVar(selectedCountriesVar);

  //console.log("Selected Countries", selectedCountries);

  return (
    <>
      <div className="flex items-center h-10 w-full  p-0.5 justify-start text-xl font-semibold text-center text-black">
        Country List
      </div>
      <ScrollArea className="w-full text-black h-fit">
        <div className="h-full p-0.5 w-full space-y-4">
          {selectedCountries.length == 0 && (
            <div>Select a Country for Currency Conversion</div>
          )}
          {selectedCountries.length > 0 &&
            selectedCountries.map((country, index) => {
              return (
                <div className="" key={index}>
                  <CountryandCurrencyView
                    countryData={country}
                  ></CountryandCurrencyView>
                  {/* {JSON.stringify(country)} */}
                </div>
              );
            })}
        </div>
      </ScrollArea>
    </>
  );
}

export default CountryList;
