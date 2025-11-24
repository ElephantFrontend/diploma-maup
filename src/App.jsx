import HomePage from "./pages/HomePage/HomePage.jsx";
import {Suspense, useEffect, lazy, useState} from "react";
import {Navigate, Route, Routes, useNavigate} from "react-router";
import {useDispatch} from "react-redux";
import {fetchCatalog} from "./redux/catalogOps.js";
import {Toaster} from "react-hot-toast";

const Header = lazy(() => import("./components/Header/Header.jsx"));
const CatalogPage = lazy(() => import("./pages/CatalogPage/CatalogPage.jsx"));
const SelectionFormPage = lazy(() => import("./pages/SelectionFormPage/SelectionFormPage.jsx"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage/NotFoundPage.jsx"));

function App() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    // const selectionData = localStorage.getItem("selectionData");
    const [selectionData, setSelectionData] = useState(null);

    // Завантажуємо дані з localStorage при старті
    useEffect(() => {
        const data = localStorage.getItem("selectionData");
        if (data) setSelectionData(JSON.parse(data));
    }, []);

    useEffect(() => {
        dispatch(fetchCatalog());
    }, []);

    const handleOnSubmit = (data) => {
        localStorage.setItem("selectionData", JSON.stringify(data));
        setSelectionData(data);
        navigate("/");
    };

    const handleReset = () => {
        localStorage.removeItem("selectionData");
        setSelectionData(null); // 🔥 оновлюємо стан перед навігацією
        navigate("/selection-form", { replace: true });
    };
  return (
    <>
        <Suspense fallback={<p>Loading...</p>}>
            <div>
                <Header onReset={handleReset}></Header>
                <Routes>
                    <Route
                        path="/"
                        element={selectionData ? <HomePage /> : <Navigate to="/selection-form" replace />}
                    />
                    <Route
                        path="/selection-form"
                        element={!selectionData ? <SelectionFormPage onSubmit={handleOnSubmit} /> : <Navigate to="/" replace />}
                    />
                    {/*<Route path="/catalog" element={<CatalogPage/>}/>*/}
                    <Route path="*" element={<NotFoundPage/>}/>
                </Routes>
            </div>

            <Toaster
                position="bottom-center"
                reverseOrder={false}
            />
        </Suspense>
    </>
  )
}

export default App
