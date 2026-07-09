import CsvImport from "../../features/import/CsvImport";

export default function LeadDatabase() {

  return (

    <div className="space-y-6">

      <div>

        <h1 className="text-3xl font-bold">
          Lead Database
        </h1>

        <p className="text-slate-500">
          Import dan kelola data lead
        </p>

      </div>

      <CsvImport />

    </div>

  );

}
