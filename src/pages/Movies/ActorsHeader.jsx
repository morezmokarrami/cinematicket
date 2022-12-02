
export const ActorsHeader = ({value}) => {

    return (
        <>
            <div className={'d-flex mt-3'} dir={'rtl'}>
                {
                    value.movie?.actors.map((item, index) => {
                        if (index < 3){
                            return (
                                <div key={index.toString()} className={'d-flex align-content-center px-3 py-1 box_fm slider-text rounded-4 me-2'}>
                                    <div className={''}><img src={item.profile_photo?.desktop_url} className={'me-2 rounded-1'} alt="" style={{width: '25px', height: '25px'}}/></div>
                                    <div className={''}><span>{item.full_name}</span></div>
                                </div>
                            )
                        }
                    })
                }
            </div>
        </>
    )
}