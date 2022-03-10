import { createContext, useState } from "react";

export const SearchContext = createContext();

const SearchProvider = ({ children }) => {
  const [gif, setGif] = useState([]);
  const [loader, setLoader] = useState(false);

  return (
    <div>
      <SearchContext.Provider
        value={[
          { gif, setGif },
          { loader, setLoader },
        ]}
      >
        {children}
      </SearchContext.Provider>
    </div>
  );
};

export default SearchProvider;
