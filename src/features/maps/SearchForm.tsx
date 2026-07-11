import { useState } from "react";
import { startMaps, stopMaps } from "../../services/maps.service";

export default function SearchForm() {

  const [keyword, setKeyword] = useState("");
  const [location, setLocation] = useState("");
  const [limit, setLimit] = useState(100);

  const [status, setStatus] = useState("Idle");

  async function handleStart() {

    setStatus("Running...");

    const result = await startMaps({
      keyword,
      location,
      limit,
    });

    console.log(result);
  }

  async function handleStop() {

    await stopMaps();

    setStatus("Stopped");

  }

  return (

    <div className="rounded-xl bg-white shadow p-6">

      <h2 className="text-2xl font-bold mb-6">
        Google Maps Search
      </h2>

      <div className="grid gap-4">

        <input
          className="border rounded-lg p-3"
          placeholder="Keyword (Coffee Shop)"
          value={keyword}
          onChange={(e)=>setKeyword(e.target.value)}
        />

        <input
          className="border rounded-lg p-3"
          placeholder="Location (Jakarta)"
          value={location}
          onChange={(e)=>setLocation(e.target.value)}
        />

        <input
          type="number"
          className="border rounded-lg p-3"
          value={limit}
          onChange={(e)=>setLimit(Number(e.target.value))}
        />

        <div className="flex gap-3">

          <button
            onClick={handleStart}
            className="bg-cyan-600 text-white px-6 py-3 rounded-lg"
          >
            Start Search
          </button>

          <button
            onClick={handleStop}
            className="bg-red-600 text-white px-6 py-3 rounded-lg"
          >
            Stop
          </button>

        </div>

        <div className="rounded-lg bg-slate-100 p-4">

          <strong>Status :</strong> {status}

        </div>

      </div>

    </div>

  );

}
