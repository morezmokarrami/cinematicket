import {useEffect, useState} from "react";
import {Link, useParams} from "react-router-dom";
import {useSelector} from "react-redux";
import {SearchResult} from "../pages/Home/searchResult";
import {Button} from "reactstrap";
import {SearchOutlined, UserOutlined} from "@ant-design/icons";



export const NavbarMaker = () => {

    const [value2, setValue2] = useState('');
    const movies = useSelector(state => state.sDetails);
    const {bool, names} = useSelector(state => state.phone);
    const allMovies = [];
    let [value, setValue] = useState(movies);
    const {product_id} = useParams();

    useEffect(() => {
        setValue2('');
        console.log(allMovies);
    }, [product_id]);

    const onChange = (e) => {
        if (!e.target.value) return setValue2('');
        setValue2(e.target.value);
        console.log(value2);
    }

    if (value2. length > 0) {
        value = movies.filter((i) => {
            return i.name.match(value2);
        })
    }


    return (
        <>
            <nav className={"navbar navbar-expand-lg py-3"} dir={'rtl'}>
                <div className="container-fluid">
                    <Link to={'/cinematicket'}>
                        <img src={require('../assets/images/slider pic/logo.svg').default} alt=""/>
                        <svg height="27.283" viewBox="0 0 108.931 27.283" width="108.931"
                             xmlns="http://www.w3.org/2000/svg" className="typography isDesktop">
                            <g>
                                <path
                                    d="M74.629 12.009a1.761 1.761 0 1 0-1.653-1.757 1.71 1.71 0 0 0 1.653 1.757m-25.566-.5a1.761 1.761 0 1 0-1.655-1.758 1.708 1.708 0 0 0 1.655 1.758m-3.8 0a1.761 1.761 0 1 0-1.656-1.758 1.708 1.708 0 0 0 1.656 1.758m-31.05-.1a1.761 1.761 0 1 0-1.655-1.758 1.71 1.71 0 0 0 1.655 1.758m-3.8 0a1.761 1.761 0 1 0-1.655-1.758 1.71 1.71 0 0 0 1.655 1.758m71.508 17.549a1.761 1.761 0 1 0 1.655 1.759 1.708 1.708 0 0 0-1.655-1.759m-3.8 0a1.761 1.761 0 1 0 1.65 1.76 1.71 1.71 0 0 0-1.655-1.759m-38.081 0a1.761 1.761 0 1 0 1.654 1.759 1.709 1.709 0 0 0-1.654-1.759m-3.8 0a1.761 1.761 0 1 0 1.655 1.759 1.709 1.709 0 0 0-1.655-1.759"
                                    data-name="Path 3172" transform="translate(-.057 -5.191)"></path>
                                <path
                                    d="M107.29 14.051a1.446 1.446 0 0 0-1.406 1.482l-.008 5.065a2.837 2.837 0 0 1-2.8 2.9 24.788 24.788 0 0 1-17.7-9.433h-1.7a1.376 1.376 0 0 0-1 .435 1.514 1.514 0 0 0-.41 1.047l-.01 5.1a2.759 2.759 0 1 1-5.509 0l.008-5.1a1.515 1.515 0 0 0-.407-1.048 1.377 1.377 0 0 0-1-.439h-1.7v.879a5.678 5.678 0 0 0-2.865-.78 6.143 6.143 0 0 0-5.955 6.3c0 .046.005.092.006.139a2.825 2.825 0 0 1-2.934 2.876 2.926 2.926 0 0 1-2.568-3.012V6.051a.879.879 0 0 0-.237-.607.8.8 0 0 0-.578-.253h-1.47a.839.839 0 0 0-.815.86V20.4c0 3.465 2.679 6.415 5.956 6.358a5.707 5.707 0 0 0 4.232-2.038 5.713 5.713 0 0 0 8.719.036 5.7 5.7 0 0 0 4.367 2.083 6.038 6.038 0 0 0 5.856-6.192v-1.97c5.879 5.544 15.509 9.114 19.34 7.886v-.006a6.154 6.154 0 0 0 4.272-5.956l.012-6.548h-1.7zm-36.5 9.428a2.933 2.933 0 0 1-2.849-2.88v-.035c0-.036-.005-.069-.005-.1a2.86 2.86 0 1 1 2.855 3.02m-21.284-7.951l-.007 5.079a2.76 2.76 0 1 1-5.512 0L44 15.541a1.5 1.5 0 0 0-.855-1.369 1.345 1.345 0 0 0-.547-.118h-1.7l-.01 6.559a2.835 2.835 0 0 1-2.922 2.953 2.806 2.806 0 0 1-2.423-1.9 8.5 8.5 0 0 1-.291-1.6 6.08 6.08 0 0 0-1.194-2.644L30.7 13.2l5.471-5.452a.846.846 0 0 0 .029-1.153l-1.017-1.147a.738.738 0 0 0-1.083-.036l-6.535 6.511.012.014a1.662 1.662 0 0 0-.1 2.188c3.567 4.6 4.778 5.269 4.788 6.559a2.782 2.782 0 0 1-2.382 2.816 2.818 2.818 0 0 1-3.118-2.889l.008-5.061a1.447 1.447 0 0 0-1.4-1.486h-1.7A24.791 24.791 0 0 1 5.972 23.5a2.837 2.837 0 0 1-2.8-2.9l-.012-5.1a1.446 1.446 0 0 0-1.406-1.482h-1.7L.068 20.6a6.154 6.154 0 0 0 4.274 5.956v.006c3.828 1.227 13.448-2.335 19.325-7.873v1.922a6 6 0 0 0 5.854 6.189 5.482 5.482 0 0 0 4.254-2 5.669 5.669 0 0 0 8.661 0 5.7 5.7 0 0 0 4.305 2.01 6.037 6.037 0 0 0 5.859-6.198l.011-6.559h-1.7a1.446 1.446 0 0 0-1.406 1.482"
                                    data-name="Path 3173" transform="translate(-.057 -5.191)"></path>
                            </g>
                        </svg>
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        </ul>
                        <div className={'me-3'}>
                            <Button style={{backgroundColor: "white", color:'#818181'}} className={bool ? 'disabled' : ''}><Link to={bool ? '/cinematicket' : '/cinematicket/register'} style={{color: '#818181'}}><UserOutlined className={'me-1'} style={{fontSize: '17px'}}/>{bool ? names : 'ورود یا ثبت نام'}</Link></Button>
                        </div>
                        <div className="d-flex">
                            <input className="form-control me-2" type="text" placeholder="جستجو..."
                                   aria-label="Search" onChange={onChange} value={value2.toString()}></input>
                            <SearchOutlined style={{position: 'absolute', top:'27px', left: '27px',fontSize: '16px'}}/>
                        </div>
                    </div>
                </div>
                <div className={'search'}>
                    <SearchResult value={value} value2={value2}/>
                </div>
            </nav>
            <div>

            </div>
        </>
    )
}

