import search1 from '/search1.png';
import search2 from '/search2.png';

export const Search = () => {
    return (
        <div className={"w-full bg-white mt-2 flex justify-center items-center"}>
            <div className={"w-11/12 flex items-center justify-center"}>
                <img src={search1} alt={"Search item 1"} />
                <div>
                    Items
                </div>
            </div>
        </div>
    )
}
