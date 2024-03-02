import playstoreIcon from '/icons/playstore.svg'
import appleIcon from '/icons/apple.svg'
import PropTypes from "prop-types"
export const GetButton = ({platform}) => {
    return (
        <button
            className={"bg-dark hover:opacity-80  flex justify-center items-center gap-x-2 columns-2 rounded-lg px-5 py-2"}>
                <img className={"w-[32px] h-[32px]"} src={platform === 'apple' ? appleIcon : playstoreIcon} loading={'lazy'} alt={'playstore'}/>
            <div className={"text-nowrap text-start text-white"}>
                <div className={ "text-[12px]  leading-[18px] barlow-regular"}>{platform === 'apple' ? "DOWNLOAD ON THE" : "GET IT ON"}</div>
                <div className={"barlow-bold text-[19px]  md:text-[22px]"}>{platform === 'apple' ? "App Store" : "Play Store"}</div>
            </div>
        </button>
    )
}

GetButton.propTypes = {
    platform: PropTypes.string,
}