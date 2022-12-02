
export const NotFound = () => {

    return(
        <>
            <div className={'text-center'}>
                <div className={'mt-5'}>
                    <img src={require('./../../assets/images/notFound/session.png')} alt="" style={{width:'200px', height:'200px'}}/>
                </div>
                <div className={'mt-5 mb-5'}>
                    <strong className={'text-center'} style={{fontSize: '20px'}}>این فیلم در شهر تهران، سانسی برای اکران ندارد.</strong>
                    <p className={'text-center mt-4'}>در شهر خود برنامه‌های دیگری را جستجو کنید</p>
                </div>
            </div>
        </>
    )
}