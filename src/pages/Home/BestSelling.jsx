import {useSelector} from "react-redux";
import persianJs from 'persianjs'
import {Link} from "react-router-dom";

export const BestSelling = () => {

    const bestSeller = useSelector(state => state.bSell);
    let nf = new Intl.NumberFormat();

    return (
        <>
            {
                bestSeller.map((item, index) => {
                    if (index < 20){
                        return (
                            <div key={index.toString()} className={'rounded-3'}>
                                <ul className={'list-group'}>
                                    <Link to={`/cinematicket/${item.id}`}>
                                        <li className={'list-group-item d-flex justify-content-between'}>
                                            <div className={'mt-4'}>{nf.format(item.total_sale)}</div>
                                            <div className={'d-flex mt-4'}>
                                                <div className={'ms-1'}><span>{item.name}</span></div>
                                                <div className={''}>
                                                    <span>{persianJs(index + 1).englishNumber().toString()}</span></div>
                                            </div>
                                            <div><img className={'rounded-3'} src={item.poster?.desktop_url}
                                                                     style={{width: '64px', height: '80px'}} alt=""/></div>
                                        </li>
                                    </Link>
                                </ul>
                            </div>
                        )
                    }

                })
            }
        </>
    )
}