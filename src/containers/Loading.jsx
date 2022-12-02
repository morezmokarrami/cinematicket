import React, { useState } from 'react'
import LoadingBar from 'react-top-loading-bar'


export const Loading = () => {
    const [progress, setProgress] = useState(0)

    /*if (progress !== 100){
        const time = setTimeout(() => {
            setProgress(progress + 20)
        }, 200)
    }else{
        clearTimeout(time);
    }*/

    const time = setTimeout(() => {
        setProgress(progress + 20)
    }, 200)

    if (progress === 100) {
        clearTimeout(time);
    }



    return (
        <div>
            <LoadingBar
                color='#f11946'
                progress={progress}
                onLoaderFinished={() => setProgress(100)}
            />
        </div>
    )
}

