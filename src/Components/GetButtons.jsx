import playstoreIcon from '/icons/playstore.svg'
import appleIcon from '/icons/apple.svg'
import PropTypes from "prop-types"
export const GetButton = ({platform}) => {
    return (
        <button
            className={"bg-dark hover:bg-secondary  flex justify-center items-center gap-x-2 columns-2 rounded-lg px-5 py-2"}>
                <img className={"w-[32px] h-[32px]"} src={platform === 'apple' ? appleIcon : playstoreIcon} loading={'lazy'} alt={'playstore'}/>
            <div className={"text-nowrap text-start"}>
                <p className={"text-[12px] leading-[18px] barlow-regular"}>{platform === 'apple' ? "DOWNLOAD ON THE" : "GET IT ON"}</p>
                <p className={"barlow-bold leading-[30px] text-[20px]"}>{platform === 'apple' ? "App Store" : "Play Store"}</p>
            </div>
        </button>
    )
}

GetButton.propTypes = {
    platform: PropTypes.string,
}