import { useState } from "react";

function CurrencyConverterView({ conversionData }) {
  const [convertionValue, setConvertionValue] = useState();
  const [inputValue, setInputValue] = useState();

  return (
    <>
      <div className="flex flex-row items-center gap-2 font-bold">
        <span className="text-sm text-wrap">
          {conversionData.currencyLiteral}
        </span>
        <input
          type="Number"
          value={inputValue}
          className="w-full h-8 px-2 font-normal border border-gray-300 rounded-md outline-none"
          placeholder="Enter Amount"
          onChange={(e) => {
            const value = parseFloat(e.target.value);
            if (value === null) setConvertionValue(0);
            setInputValue(value);
            setConvertionValue(
              parseFloat(
                (value * conversionData.rates["SEK"]) /
                  conversionData.rates[conversionData.currencyLiteral]
              ).toFixed(4)
            );
          }}
        ></input>
      </div>
      <div className="flex flex-row items-center gap-2 font-bold">
        <span className="text-sm text-wrap">SEK</span>
        <input
          value={convertionValue}
          className="w-full h-8 px-2 font-normal border border-gray-300 rounded-md outline-none"
          disabled
          placeholder="Amount in SEK"
        ></input>
      </div>
    </>
  );
}

export default CurrencyConverterView;
