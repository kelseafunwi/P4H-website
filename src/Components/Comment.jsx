import aboutBlogContact from "/aboutBlogContact.png";
import replyIcon from "/icon-reply.svg";
import PropTypes from "prop-types";

export const Comment = ({name, last_seen, body, mine}) => {
    return (
        <div className={` ${mine && 'w-[90%] ms-auto'} flex flex-col  gap-y-5 py-2`}>
            <div className={"flex justify-between"}>
                <div className={"flex "}>
                    <img className={"max-w-[45px]"} src={aboutBlogContact}
                         alt={"About Blog Contact"}/>
                    <div className={"ps-2 text-black2 flex flex-col justify-between"}>
                        <h1 className={" text-lg font-bold"}>{name}</h1>
                        <h5 className={"w-fit text-center font-bold text-xs opacity-70"}>{last_seen}</h5>
                    </div>
                </div>
                <div>
                    <button
                        className={"text-primary2 font-bold text-[14px] border-[1px] hover:bg-primary2 hover:text-white border-primary2 rounded-md p-2 flex items-center gap-x-1"}>
                        <img src={replyIcon} alt={"Reply Icon"}/>
                        Reply <span className={"hidden sm:block"}>Comment</span>
                    </button>
                </div>
            </div>
            <div>
                <p className={"text-black2 opacity-70"}>
                    {body}
                </p>
            </div>
        </div>
    )
}

Comment.propTypes = {
    name: PropTypes.string,
    last_seen: PropTypes.string,
    body: PropTypes.string,
    mine: PropTypes.bool,
}
