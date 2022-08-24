import FrontPage from "../../pages/FrontPage";
import Login from '../../pages/Login';
import Single from '../../pages/Single';
import New from '../../pages/New';
import List from '../../pages/List';

import NotFound from "../../pages/NotFound";
import { GlobalStyle } from '../../styles/gobal.style';
import { Routes, Route } from "react-router-dom";

function App() {
    return (
      <>
        <GlobalStyle />
          <Routes>
            <Route path="/">
              <Route index element={<FrontPage />} />

              <Route path="users">
                <Route index element={<List />} />
                <Route path=":userId" element={<Single />} />
                <Route path="new" element={<New />} />
              </Route>

              <Route path="products">
                <Route index element={<List />} />
                <Route path=":userId" element={<Single />} />
                <Route path="new" element={<New />} />
              </Route>
            </Route>
          </Routes>
      </>
    );
  }
  export default App;