import {CurrencyWithKeyType} from "../redux/actions";
import {useNavigate} from "react-router-dom";

const CurrencyDesk: React.FC<CurrencyExchangePropsType> = ({valutes}) => {
    const redirect = useNavigate()
    const redirectToExchange = () => {
        redirect("/")
    }

    const valutesF = valutes || {}
    const mapedCurrencies = []
    for (let x in valutesF) {
        mapedCurrencies.push(<li key={valutesF[x].Name}>{x} : {valutesF[x].Value.toFixed(2)} RUB</li>)
    }

    return (
        <div className="currency">
            <h1 className="page-header">Currency Desk</h1>
            <div className="currency-names currency-list">
                <ul>
                    {mapedCurrencies}
                </ul>
            </div>
            <button className="redirect button" onClick={redirectToExchange}>EXCHANGE</button>
        </div>
    )
}
export default CurrencyDesk;

//-----------type-------
type CurrencyExchangePropsType = {
    valutes: CurrencyWithKeyType | null
};