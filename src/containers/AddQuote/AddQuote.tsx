import { useState } from "react";
import "./AddQuote.css";
import { categories } from "../../categories";
import { useNavigate } from "react-router-dom";
import Toast from "../../components/Toast/Toast";
import Preloader from "../../components/Preloader/Preloader";
import { axiosApi } from "../../axiosApi";

interface IQuoteForm {
  text: string;
  author: string;
  category: string;
  categoryId?: string;
}

function AddQuote() {
  const [quoteData, setQuoteData] = useState<IQuoteForm>({
    text: "",
    author: "Джейсон Стетхем",
    category: "",
  });
  const navigate = useNavigate();
  const [toastVisible, setToastVisible] = useState(false);
  const [loading, setLoading] = useState(false);

  const newQuote = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const dataToSend = {
      ...quoteData,
      id: crypto.randomUUID(),
    };
    setLoading(true);
    try {
      await axiosApi.post("quotes.json", dataToSend);
      setToastVisible(true);
      setTimeout(() => {
        setToastVisible(false);
        navigate("/");
      }, 1000);
      setQuoteData({
        text: "",
        author: "Джейсон Стетхем",
        category: "",
      });
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const onChangeInput = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;

    if (name === "category") {
      const found = categories.find((c) => c.title === value);
      const categoryId = found?.id ?? "";

      setQuoteData((prev) => ({
        ...prev,
        category: value,
        categoryId,
      }));
      return;
    }
    setQuoteData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  if (loading) return <Preloader />;

  return (
    <>
      <div>
        <form onSubmit={newQuote} className="form-add">
          <select
            name="category"
            value={quoteData.category}
            onChange={onChangeInput}
            required
          >
            <option value="">Здесь категорию выбират</option>

            {categories
              .filter((cat) => cat.id !== "all")
              .map((cat) => (
                <option key={cat.id} value={cat.title}>
                  {cat.title}
                </option>
              ))}
          </select>
          <label htmlFor="text">Text:</label>
          <input
            type="text"
            name="text"
            className="text-field"
            required
            value={quoteData.text}
            onChange={onChangeInput}
            placeholder="Сюда цитату писат"
          />
          <button type="submit" className="btn-add">
            Добавить цитату
          </button>
        </form>
      </div>
      <Toast message="Цитата успешно добавлена!" visible={toastVisible} />
    </>
  );
}

export default AddQuote;
