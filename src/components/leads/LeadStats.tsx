interface Props{
    total:number;
}

export default function LeadStats({total}:Props){

    return(

        <div className="grid grid-cols-4 gap-4 mb-6">

            <div className="bg-white rounded-xl shadow p-5">

                <div className="text-gray-500 text-sm">

                    Total Leads

                </div>

                <div className="text-3xl font-bold mt-2">

                    {total}

                </div>

            </div>

        </div>

    );

}
