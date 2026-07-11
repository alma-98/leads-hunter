import { useState } from "react";
import * as XLSX from "xlsx";

export default function ExcelImport(){

    const [rows,setRows]=useState<any[]>([]);

    function handleFile(e:any){

        const file=e.target.files[0];

        if(!file) return;

        const reader=new FileReader();

        reader.onload=(evt)=>{

            const data=new Uint8Array(evt.target?.result as ArrayBuffer);

            const workbook=XLSX.read(data,{
                type:"array"
            });

            const sheet=workbook.Sheets[
                workbook.SheetNames[0]
            ];

            const json=XLSX.utils.sheet_to_json(sheet);

            setRows(json);

        };

        reader.readAsArrayBuffer(file);

    }

    async function importExcel(){

        const result=await window.api.importCsv(rows);

        alert(

            "Import selesai\n\n"+
            "Success : "+result.success+
            "\nFailed : "+result.failed

        );

    }

    return(

        <div className="space-y-5">

            <div className="rounded-xl border bg-white p-6">

                <h2 className="text-xl font-bold">

                    Import Excel

                </h2>

                <input

                    className="mt-4"

                    type="file"

                    accept=".xlsx"

                    onChange={handleFile}

                />

                <div className="mt-3">

                    Rows :

                    <strong>

                        {rows.length}

                    </strong>

                </div>

                <button

                    onClick={importExcel}

                    className="mt-5 rounded-lg bg-cyan-600 px-5 py-3 text-white"

                >

                    Import ke Database

                </button>

            </div>

            <div className="overflow-auto rounded-xl border">

                <table className="w-full">

                    <thead>

                        <tr>

                            {

                                rows.length>0 &&

                                Object.keys(rows[0]).map(col=>(

                                    <th

                                        key={col}

                                        className="border-b p-3"

                                    >

                                        {col}

                                    </th>

                                ))

                            }

                        </tr>

                    </thead>

                    <tbody>

                        {

                            rows.slice(0,20).map((row:any,i:number)=>(

                                <tr key={i}>

                                    {

                                        Object.values(row).map((v:any,j:number)=>(

                                            <td

                                                key={j}

                                                className="border-b p-3"

                                            >

                                                {String(v)}

                                            </td>

                                        ))

                                    }

                                </tr>

                            ))

                        }

                    </tbody>

                </table>

            </div>

        </div>

    );

}
