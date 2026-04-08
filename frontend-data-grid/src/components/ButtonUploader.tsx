import React, { useRef } from "react"
import * as XLSX from "xlsx"
import { Button } from "./ui/button"

export default function ButtonUploader({ onData }: any) {
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleClick = () => {
    fileInputRef.current?.click()
  }

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (!file) return

    const reader = new FileReader()

    reader.onload = (e) => {
      const data = new Uint8Array(e.target?.result as ArrayBuffer)

      const workbook = XLSX.read(data, { type: "array" })
      const sheetName = workbook.SheetNames[0]
      const worksheet = workbook.Sheets[sheetName]

      const jsonData = XLSX.utils.sheet_to_json(worksheet)

      console.log("📦 Datos del Excel:", jsonData)

      // 🔥 Enviar datos + nombre del archivo
      onData({
        data: jsonData,
        fileName: file.name
      })
    }

    reader.readAsArrayBuffer(file)
  }

  return (
    <div className="flex flex-col gap-4">
      <Button onClick={handleClick}>
        Subir archivo Excel
      </Button>

      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        accept=".xlsx, .xls, .csv"
        className="hidden"
      />
    </div>
  )
}