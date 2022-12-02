import {Button, Input} from "reactstrap";
import {Entrance} from "./Entrance";
import {Link} from "react-router-dom";

export const RegisterInputs = ({value}) => {

    const onClick = () => {

    }

    return (
        <>
            <div className={'text-start'}>
                <div className={'border-bottom w-100 px-3 py-5'}>
                    <div className={'text-start float'}>
                        <Link to={'/cinematicket/setCustomer'}><Button onClick={onClick} style={{backgroundColor: '#ff3543'}} className={'ms-5'}>ایجاد حساب کاربری</Button></Link>
                        <strong style={{marginLeft: '85px'}}>اگر حساب کاربری ندارید ثبت نام کنید</strong>
                    </div>
                </div>
                <Entrance value={value}/>
            </div>
        </>
    )
}