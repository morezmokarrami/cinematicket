import axios from "axios";

const sans = (cinema, id) => {
    return axios({
        url: `https://cinematicket.org/api/v1/movie/sessions/?start_at__gte=2022-12-14T20%3A30%3A00.000Z&start_at__lte=2022-12-15T20%3A29%3A59.000Z&cinema=${cinema}&movie=${id}`,
        method: 'GET'
    })
}

export default sans;