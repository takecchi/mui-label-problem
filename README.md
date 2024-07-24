# mui-label-problem

~~This is a reproduction repository for the issue where the label is not visible when using MUI's Input or Select with
Next.js.~~

This issue has been resolved! It appears that wrapping it in FormControl as shown below is necessary.

```tsx
<FormControl fullWidth>
  <InputLabel>TEST SELECT</InputLabel>
  <Select value={value} label={'TEST SELECT'}
          onChange={(event) => setValue(event.target.value)}>
    <MenuItem value={1}>ITEM1</MenuItem>
    <MenuItem value={2}>ITEM2</MenuItem>
    <MenuItem value={3}>ITEM3</MenuItem>
  </Select>
</FormControl>
```

## Getting Started

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Screenshots

![screenshot](https://raw.githubusercontent.com/takecchi/mui-label-problem/main/screenshots/2024-07-24%2018.36.05.png)
