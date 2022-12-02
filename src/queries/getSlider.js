import axios from "axios";

const getSlider = ({url, ...other}) => {

    return(
        axios({
                url: url,
                ...other
            })
    )
}


export default getSlider;
