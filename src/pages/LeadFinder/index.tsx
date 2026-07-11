import SearchForm from "../../features/maps/SearchForm";

export default function LeadFinder() {

  return (

    <div className="space-y-8">

      <div>

        <h1 className="text-3xl font-bold">

          Lead Finder

        </h1>

        <p className="text-slate-500">

          Google Maps Search Engine

        </p>

      </div>

      <SearchForm />

    </div>

  );

}
