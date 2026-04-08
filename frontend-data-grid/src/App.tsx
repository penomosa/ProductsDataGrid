import { useState } from "react"
import ButtonUploader from "./components/ButtonUploader"
import DataGrid from "./components/DataGrid"

export default function App() {
  const [dataset, setDataset] = useState<any>(null)

  return (
    <div className="p-4">
      <DataGrid dataset={dataset} />
      <ButtonUploader onData={setDataset} />
    </div>
  )
}