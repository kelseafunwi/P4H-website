import imgFeatureWorker2 from '/img-feature-worker-2.png'
export const Customize = () => {
    return (
        <div className={"flex  bg-[url('/public/customizeBackground.png')]  items-center justify-center py-5"}>
            <div className={"grid grid-cols-2 items-center justify-center"}>
                <div>
                    <img  src={imgFeatureWorker2} alt={"Worker Details"}/>
                </div>
                <div>

                </div>
            </div>
        </div>
    )
}
