'use client';

import {MenuItem, OutlinedInput, Select} from "@mui/material";
import {useState} from "react";

export default function Home() {
  const [value, setValue] = useState('');
  return (
    <main>
      <div style={{display: 'flex', padding: '20px', gap: '20px', flexDirection: 'column', maxWidth: '400px'}}>
        <OutlinedInput label={'TEST INPUT'}/>
        <Select value={value} label={'TEST SELECT'} onChange={(event)=>setValue(event.target.value)}>
          <MenuItem value={1}>ITEM1</MenuItem>
          <MenuItem value={2}>ITEM2</MenuItem>
          <MenuItem value={3}>ITEM3</MenuItem>
        </Select>
      </div>
    </main>
  );
}
