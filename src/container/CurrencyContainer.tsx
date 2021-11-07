import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {selectValutes} from "../redux/selectors";
import {getCurrencyTC} from "../redux/thunk";
import {CurrencyWithKeyType} from "../redux/actions";


export const CurrencyContainer: React.FC<ContainerType> = ({UniversalComponent}) => {
    const dispatch = useDispatch()
    const valutes = useSelector(selectValutes)

    useEffect(() => {
        dispatch(getCurrencyTC())
    }, [dispatch])

    return <UniversalComponent valutes={valutes}/>
}

//-----------type-------
type ContainerType = {
    UniversalComponent: React.FC<{ valutes: CurrencyWithKeyType | null }>
}