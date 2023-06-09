import { useEffect, useState } from "react";
import quotes from "@/pages/api/Quotes";

function RandomQuoteGenerator() {
  const [quote, setQuote] = useState("");

  useEffect(() => {
    const newQuote = quotes[Math.floor(Math.random() * quotes.length)];
    setQuote(newQuote);
  }, []);

  return (
    <div>
      <p className="text-xs text-lightGrey2   dark:text-darkGrey2 md:text-sm">
        {quote}
      </p>
    </div>
  );
}

export default RandomQuoteGenerator;
