import CsvImport from "../../features/import/CsvImport";
import ExcelImport from "../../features/import/ExcelImport";

export default function LeadDatabase(){

    return(

        <div className="space-y-8">

            <div>

                <h1 className="text-3xl font-bold">

                    Lead Database

                </h1>

                <p className="text-slate-500">

                    Import CSV dan Excel

                </p>

            </div>

            <ExcelImport/>

            <CsvImport/>

        </div>

    );

}
