import {NotFound} from "./NotFound";

export const NotFoundBox = () => {

    return(
        <>
            <div className={'text-center rounded-4 mt-4'} style={{border: '1px solid #ddd'}}>
                <NotFound/>
            </div>
        </>
    )
}