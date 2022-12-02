import {Button, Input} from "reactstrap";
import {Entrance} from "./Entrance";
import {Link, useNavigate} from "react-router-dom";
import {useState} from "react";
import getSlider from "../../queries/getSlider";
import {getBool, getName} from "../../redux/slices/entrance";
import {useDispatch} from "react-redux";

export const GCInputs = () => {

    const [numb, setNumb] = useState('');
    const [name, setName] = useState('');
    const navigate = useNavigate();
    const dispatcher = useDispatch();

    const onChange = (e) => {
        setNumb(e.target.value);
    }

    const onChange2 = (e) => {
        setName(e.target.value);
    }

    const postCustomer = async () => {
        try {
            await getSlider({
                url: 'http://localhost:8080/customer',
                method: 'POST',
                data:{
                    name: name,
                    phone: numb
                }
            });
        } catch (e) {
            alert('شماره اشتباه است')
            console.log(e);
        }
    }

    const onSave = () => {
        if (numb.length === 11 && name.length > 5 && name.length < 50){
            postCustomer();
            alert('ثبت نام با موفقیت انجام شد');
            navigate('/cinematicket');
            dispatcher(getBool(true));
            dispatcher(getName(name))
        }else {
            alert('شماره یا نام و نام خانوادگی اشتباه است')
        }
    }

    return (
        <>
            <div className={'text-start'}>
                <div className={'border-bottom w-100 px-3 py-5'}>
                    <div className={'text-start float'}>
                        <strong style={{marginLeft: '85px'}}>ایجاد حساب کاربری</strong>
                        <p className={'mt-5'}>شماره موبایل خود را وارد کنید</p>
                        <div className={'text-start d-flex justify-content-between mt-5'}>
                            <Button onClick={onSave}>ثبت نام</Button>
                            <Input type={'text'} placeholder={'شماره موبایل...'} dir={'rtl'} style={{width: '200px'}} value={numb} onChange={onChange}/>
                            <Input type={'text'} placeholder={'نام و نام خانوادگی...'} dir={'rtl'} style={{width: '200px'}} value={name} onChange={onChange2}/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}