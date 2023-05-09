import react from "react"


export default function Pagenation({ gotoNextPage, gotoPreviousPage }) {
    return (
        <>
        <div className=" ">
        <div className="flex p-4 gap-4 justify-center">
        {gotoPreviousPage && <button className="bg-red-600 py-1 px-2 rounded-sm text-white" onClick={gotoPreviousPage}>Previous</button>}
        {gotoNextPage && <button className="bg-red-600 py-1 px-2 rounded-sm text-white" onClick={gotoNextPage}>Next</button>}
            </div>
        </div>
        
        </>
    )
    }