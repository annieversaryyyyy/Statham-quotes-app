import "./Quote.css";
import deleteImg from "../../assets/trash.png";
import type { IQuote } from "../../containers/Home/quote.types";
import { categories } from "../../categories";

interface IQuoteProps {
  quote: IQuote;
  deleteQuote: () => void;
}
function Quote({ quote, deleteQuote }: IQuoteProps) {
  const category = categories.find((c) => c.id === quote.categoryId);
  return (
    <>
      <div className="quote-card">
        <h1 className="quote-text">“{quote.text}”</h1>
        <p className="quote-author">— {quote.author}</p>
        <p className="quote-category">{category?.title}</p>
        <button onClick={deleteQuote} className="delete-btn">

          <img src={deleteImg} width="24px" alt="trash" />
        </button>
      </div>
    </>
  );
}

export default Quote;
