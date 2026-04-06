import { useRef } from "react";
import { Spreadsheet, Worksheet } from "@jspreadsheet-ce/react";

import "jspreadsheet-ce/dist/jspreadsheet.css";
import "jsuites/dist/jsuites.css";

export default function App() {
    // Spreadsheet array of worksheets
    const spreadsheet = useRef(null);

    // Render component
    return (
        <Spreadsheet ref={spreadsheet} tabs={true} toolbar={true}>
            <Worksheet minDimensions={[14,14]} />
        </Spreadsheet>
    );
}