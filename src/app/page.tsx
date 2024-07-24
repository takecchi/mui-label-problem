import {MenuItem, OutlinedInput, Select} from "@mui/material";

export default function Home() {
  return (
    <main>
      <div style={{display: 'flex', padding: '20px', gap: '20px', flexDirection: 'column', maxWidth: '400px'}}>
        <OutlinedInput label={'TEST INPUT'}/>
        <Select label={'TEST SELECT'}>
          <MenuItem>ITEM1</MenuItem>
          <MenuItem>ITEM2</MenuItem>
          <MenuItem>ITEM3</MenuItem>
        </Select>
      </div>
    </main>
  );
}
