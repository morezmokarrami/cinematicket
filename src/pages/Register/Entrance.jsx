import {Button, Input} from "reactstrap";
import {useDispatch, useSelector} from "react-redux";
import {useState} from "react";
import {getBool, getName} from "../../redux/slices/entrance";
import {Link, useNavigate} from "react-router-dom";

export const Entrance = ({value}) => {

    const [numb, setNumb] = useState('');
    const [valid, setValid] = useState(false);
    const dispatcher = useDispatch();
    const navigate = useNavigate();

    const onChange = (e) => {
        setNumb(e.target.value);
        if (numb.length === 10){
            setValid(true);
        }else if (numb.length < 10 || numb.length > 10){
            setValid(false);
        }
        console.log(numb.length);
    }

    const onEnter = () => {
        value.map((item,index) => {
            if (item.phone === numb){
                setValid(true);
                console.log(dispatcher(getName(item.name)));
                dispatcher(getBool(true));
                setNumb('');
                navigate('/cinematicket')
            }else if (!item.phone) {
                alert('شماره اشتباه است یا هنوز ثبت نام نکردید')
                setNumb('');
                setValid(false);
            }
        })
    }

    return(
        <>
            <div className={'px-3 py-5'}>
                <div>
                    <strong>اگر حساب کاربری دارید وارد شوید</strong>
                </div>
                <div className={'d-flex mt-2'}>
                    <Button onClick={onEnter} className={valid ? '' : 'disabled'} style={{backgroundColor: '#0000005f', padding: '5px 65px'}}>ورود</Button>
                    <Input type={"text"} className={'w-75 me-5'} dir={'rtl'} placeholder={'شماره موبایل...'} value={numb} onChange={onChange}/>
                </div>
            </div>
        </>
    )
}