//import { gql, useLazyQuery, useQuery } from "@apollo/client";

import { selectedCountriesVar } from "../../lib/cache";

import { ScrollArea } from "../ui/scroll-area";

function setCountry(id: number, country: string) {
  selectedCountriesVar([...selectedCountriesVar(), country]);

  console.log("Once", id, ...selectedCountriesVar());
}

function SearchResults({
  countries,
  isopen,
  loading,
}: {
  countries: any;
  isopen: any;
  loading: any;
}) {
  //     const GET_COUNTRIES = gql`
  //   query ExampleQuery($uriString: String) {
  //     country(uriString: $uriString) {
  //       name {
  //         common
  //       }
  //       population
  //       currencies
  //     }
  //   }
  // `;

  // const { loading, error, data } = useQuery(GET_COUNTRIES, {
  //   variables: {
  //     uriString: `name/${}`,
  //   },
  // });
  return (
    <div>
      {isopen && (
        <ScrollArea className="w-full p-2 bg-white border rounded-lg max-h-40 border-slate-300">
          {loading && <div className="p-2 text-gray-500">Searching ....</div>}

          {!loading &&
            countries.map((user: any, index: any) => {
              return (
                <div key={index}>
                  <button
                    className="p-0.5 px-4 text-gray-800 rounded-md hover:bg-gray-200"
                    onClick={() => setCountry(index, user.name.common)}
                  >
                    ABC - {user.name.common}
                  </button>
                </div>
              );
            })}
        </ScrollArea>
      )}
    </div>
  );
}

export default SearchResults;
