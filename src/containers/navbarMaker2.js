import {Button} from "reactstrap";

export const NavbarMaker2 = () => {

    return(
        <>
            <div className={'under-nav ms-3'}>
                <ul className="nav" dir={'rtl'}>
                    <li className="nav-item">
                        <a className="nav-link active" style={{color: '#ff3543'}} aria-current="page" href="#">اکران</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link active" style={{color: '#ff3543'}} aria-current="page" href="#">تئاتر</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link active" style={{color: '#ff3543'}} aria-current="page" href="#">تئاتر کمدی</a>
                    </li>
                </ul>
            </div>
        </>
    )
}



