import React from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { searched } from "../../features/filter/filterSlice";
import { useMatch, useNavigate } from "react-router-dom";

const Search = () => {
  const { search } = useAppSelector((state) => state.filter);
  const dispatch = useAppDispatch();
  const [input, setInput] = React.useState<string>(search);
  const match = useMatch("/");
  const navigate = useNavigate();

  const handleSubmit = (e: any) => {
    e.preventDefault();
    dispatch(searched(input));
    if(!match){
        navigate('/')
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          className="outline-none border-none mr-2"
          type="search"
          name="search"
          placeholder="Search"
          value={input}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setInput(e.target.value)
          }
        />
      </form>
      <img
        className="inline h-4 cursor-pointer"
        src="/assets/search.svg"
        alt="Search"
        onClick={handleSubmit}
      />
    </>
  );
};

export default Search;
