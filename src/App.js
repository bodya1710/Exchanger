import {useEffect, useState} from "react";

import {exchangeService} from "./service/exchange.service";

import Header from "./components/Header/Header";
import Exchange from "./components/Exchange/Exchange";
import Loader from "./components/UI/Loader/Loader";
import css from "./App.module.css";



function App() {

    const [isPostLoading, setIsPostLoading] = useState(false);

    const [data, setData] = useState(null);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        setIsPostLoading(true);
        await exchangeService.getAll().then(value => {
            const selectedData = value.data.filter(item => item.cc === 'USD' || item.cc === 'EUR');
            const trimRateData = selectedData.map(item => {
                return {...item, rate: item.rate.toFixed(2)}
            });
            setData([{r030: 1, txt: 'Гривня', rate: 1, cc: 'UA'}, ...trimRateData]);
        });
        setIsPostLoading(false);
    }

    return (
        data && !isPostLoading
            ? <>
                <Header data={data}/>
                <Exchange data={data}/>
            </>
            : <div className={css.wrap_loader}><Loader/></div>
    );
}

export default App;
