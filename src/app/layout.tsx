import {ReactNode} from 'react';
import {AppRouterCacheProvider} from '@mui/material-nextjs/v13-appRouter';
import {CssBaseline, ThemeProvider} from '@mui/material';
import theme from "@/app/theme";


export default function RootLayout({children}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="ja" style={{overflowY: 'scroll'}}>
    <body>
    <AppRouterCacheProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline/>
        {children}
      </ThemeProvider>
    </AppRouterCacheProvider>
    </body>
    </html>
  );
}
