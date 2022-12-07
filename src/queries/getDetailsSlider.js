import axios from "axios";
import getSlider from "./getSlider";
import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";


const getDetailsSlider = (id, city) => {
    return(
        getSlider({
            url: `https://cinematicket.org/api/v1/cinematicket/home/movies/${id}/?city=235`,
            method: 'GET'
        })
    )
}

export default getDetailsSlider;
