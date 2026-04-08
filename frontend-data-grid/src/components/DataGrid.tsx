import { useRef } from "react";
import { Spreadsheet, Worksheet } from "@jspreadsheet-ce/react";

import "jspreadsheet-ce/dist/jspreadsheet.css";
import "jsuites/dist/jsuites.css";

export default function DataGrid({ dataset }: any) {
    const spreadsheet = useRef(null);

    if (!dataset?.data) {
        return (
            <Spreadsheet ref={spreadsheet} tabs={true} toolbar={true}>
                <Worksheet minDimensions={[14, 14]} />
            </Spreadsheet>
        );
    }

    const { data } = dataset;

    // 🔥 columnas dinámicas
    const columns = Object.keys(data[0] || {}).map((key) => ({
        title: key,
        width: 120
    }));

    // 🔥 filas
    const rows = data.map((obj: any) => Object.values(obj));

    return (
        <Spreadsheet ref={spreadsheet} tabs={true} toolbar={true}>
            <Worksheet
                data={rows}
                columns={columns}
                minDimensions={[14, 14]}
            />
        </Spreadsheet>
    );
}