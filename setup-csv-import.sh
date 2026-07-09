#!/bin/bash

echo "======================================="
echo "Leads-Hunter PART 3D"
echo "CSV Import Engine"
echo "======================================="

mkdir -p src/features/import

cat > src/features/import/CsvImport.tsx <<'EOT'
import { useState } from "react";
import Papa from "papaparse";

export default function CsvImport() {

  const [rows, setRows] = useState<any[]>([]);

  function handleFile(e: React.ChangeEvent<HTMLInputElement>) {

    const file = e.target.files?.[0];

    if (!file) return;

    Papa.parse(file, {
      header: true,
      skipEmptyLines: true,
      complete(result) {
        setRows(result.data as any[]);
      },
    });

  }

  return (
    <div className="space-y-6">

      <div className="rounded-xl border bg-white p-6 shadow-sm">

        <h2 className="mb-4 text-xl font-bold">
          Import CSV
        </h2>

        <input
          type="file"
          accept=".csv"
          onChange={handleFile}
        />

        <p className="mt-4 text-slate-600">
          Total Rows : <strong>{rows.length}</strong>
        </p>

      </div>

      <div className="overflow-auto rounded-xl border bg-white shadow-sm">

        <table className="w-full text-sm">

          <thead className="bg-slate-100">

            <tr>

              {rows.length > 0 &&
                Object.keys(rows[0]).map((key) => (
                  <th key={key} className="border-b p-3 text-left">
                    {key}
                  </th>
                ))}

            </tr>

          </thead>

          <tbody>

            {rows.slice(0,20).map((row,index)=>(

              <tr key={index} className="border-b">

                {Object.values(row).map((value:any,i)=>(

                  <td key={i} className="p-3">
                    {String(value)}
                  </td>

                ))}

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>
  );

}
EOT

echo ""
echo "CSV Import Created"
echo ""
