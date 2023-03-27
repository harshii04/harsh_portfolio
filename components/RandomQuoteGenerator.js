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
      <p className="text-lightGrey2 dark:text-darkGrey2 text-xs">{quote}</p>
    </div>
  );
}

export default RandomQuoteGenerator;
