# Listado de extensiones incluidas

 * [dbaeumer.vscode-eslint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
 * [eamodio.gitlens](https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens)
 * [biomejs.biome](https://marketplace.visualstudio.com/items?itemName=biomejs.biome)
 * [usernamehw.errorlens](https://marketplace.visualstudio.com/items?itemName=usernamehw.errorlens)
 * [dsznajder.es7-react-js-snippets](https://marketplace.visualstudio.com/items?itemName=dsznajder.es7-react-js-snippets)
 * [miguelsolorio.fluent-icons](https://marketplace.visualstudio.com/items?itemName=miguelsolorio.fluent-icons)
 * [GitHub.codespaces](https://marketplace.visualstudio.com/items?itemName=GitHub.codespaces)
 * [GitHub.github-vscode-theme](https://marketplace.visualstudio.com/items?itemName=GitHub.github-vscode-theme)
 * [capaj.vscode-standardjs-snippets](https://marketplace.visualstudio.com/items?itemName=capaj.vscode-standardjs-snippets)
 * [diwanshumidha.nextboost-snippet](https://marketplace.visualstudio.com/items?itemName=diwanshumidha.nextboost-snippet)
 * [krishnaacharyaa.nextjs-13-power-snippets](https://marketplace.visualstudio.com/items?itemName=krishnaacharyaa.nextjs-13-power-snippets)
 * [Prisma.prisma](https://marketplace.visualstudio.com/items?itemName=Prisma.prisma)
 * [MS-CEINTL.vscode-language-pack-es](https://marketplace.visualstudio.com/items?itemName=MS-CEINTL.vscode-language-pack-es)
 * [bradlc.vscode-tailwindcss](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss)
 * [emmanuelbeziat.vscode-great-icons](https://marketplace.visualstudio.com/items?itemName=emmanuelbeziat.vscode-great-icons)
 * [Vue.volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar)
 * [exer7um.vue-3-vscode-snippets](https://marketplace.visualstudio.com/items?itemName=exer7um.vue-3-vscode-snippets)
 * [hakcorp.php-awesome-snippets](https://marketplace.visualstudio.com/items?itemName=hakcorp.php-awesome-snippets)
 * [vsc-snippets.vsc-php-snippets](https://marketplace.visualstudio.com/items?itemName=vsc-snippets.vsc-php-snippets)
 * [vscodeshift.material-ui-snippets](https://marketplace.visualstudio.com/items?itemName=vscodeshift.material-ui-snippets)
 * [YoavBls.pretty-ts-errors](https://marketplace.visualstudio.com/items?itemName=YoavBls.pretty-ts-errors)

 # Snippets 
 


## javascript, javascriptreact, typescript, typescriptreact
### Mui theme provider 
prefix: `muithemeprovider`
```javascript
'use client'

import { ThemeProvider, createTheme, StyledEngineProvider } from '@mui/material/styles';
import { PropsWithChildren } from "react"

const theme = createTheme({
})

export default function MuiThemeProvider({children}: PropsWithChildren) {
  return (
	<StyledEngineProvider injectFirst>
	  <ThemeProvider theme={theme}>
		  {children}
	  </ThemeProvider>
	</StyledEngineProvider>
  )
}
```

### Mui react hook form 
prefix: `muirhform`
```javascript
'use client'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import { Alert, Backdrop, Card, CardActions, CardContent, CardHeader, CircularProgress, Grid } from '@mui/material'

export type ${TM_FILENAME_BASE}FormFields = {
	name: string;
	surname: string;
	email: string;
	password: string;
};


export default function ${TM_FILENAME_BASE}Form() {
	const { register, handleSubmit } = useForm<${TM_FILENAME_BASE}FormFields>()
	const [loading, setLoading] = useState(false)
	const [error, setError] = useState('')

	const onSubmit = handleSubmit(async (values) => {
		console.log('valores', values)
		setLoading(true)
		setError('')
		try {
			
		} catch (error) {
			console.log(error)
		} finally {
			setLoading(false)
		}
	})

	return (
		<Card sx={{ position: 'relative' }} component={'form'} onSubmit={onSubmit}>
			<CardHeader title="${1:titleform}" />
			<CardContent>
				<Backdrop open={loading}
					sx={(theme) => ({ color: '#fff', zIndex: theme.zIndex.drawer + 1, position: 'absolute' })}
				>
					<CircularProgress style={{ color: 'white' }} />
				</Backdrop>
				<Grid container spacing={2}>
					<Grid size={12}>
						{error && <Alert severity='error'>
							{error}
						</Alert>}
					</Grid>
				</Grid>
			</CardContent>
			<CardActions sx={{ display: 'flex', justifyContent: 'space-between', placeItems: 'center' }}>
				<Typography variant="body1" color="initial">
					<Button variant="text" href='/'>
						${3:linktoother}
					</Button>
				</Typography>
				<Button variant="contained" type='submit' loading={loading} disableElevation>
					${2:submitbuttontext}
				</Button>
			</CardActions>
		</Card>
	)
}
```

### Validar variables de entorno con zod 
prefix: `envzod`
```javascript
import { z } from 'zod'

const envSchema = z.object({
  NODE_ENV: z.enum(["development", "production", "test"]),
  PORT: z.string().regex(/^\d+\$/).transform(Number).default("3000"),
  DATABASE_URL: z.string().url(),
  SALTS_HASH: z.string()
});

const parsedEnv = envSchema.safeParse(process.env);

if (!parsedEnv.success) {
  console.error("Environment variables are not valid:", parsedEnv.error.format());
  throw new Error('Environment variables are not valid')
}

console.log("Environment variables loaded successfully:", parsedEnv.data);

export const envData = parsedEnv.data;
```

### Componente de react typescript 
prefix: `rfcts`
```javascript
type ${TM_FILENAME_BASE}Type = {

}

export default function ${TM_FILENAME_BASE}({}: ${TM_FILENAME_BASE}Type) {
  return (
	<div>ExampleComponent</div>
  )
}
```

### Componente de react typescript con prospwithchildren 
prefix: `rfctschildren`
```javascript
import {PropsWithChildren} from 'react'

type ${TM_FILENAME_BASE}Type = PropsWithChildren<{

}>

export default function ${TM_FILENAME_BASE}({children}: ${TM_FILENAME_BASE}Type) {
  return (
	<div>
	  {children}
	</div>
  )
}
```



## javascript, typescript
### Environment variables zod 
prefix: `envzod`
```javascript
import { z } from 'zod'

const envSchema = z.object({
  NODE_ENV: z.enum(["development", "production", "test"]),
  PORT: z.string().regex(/^\d+\$/).transform(Number).default("3000"),
  DATABASE_URL: z.string().url(),
  SALTS_HASH: z.string()
});

const parsedEnv = envSchema.safeParse(process.env);

if (!parsedEnv.success) {
  console.error("Environment variables are not valid:", parsedEnv.error.format());
  throw new Error('Environment variables are not valid')
}

console.log("Environment variables loaded successfully:", parsedEnv.data);

export const envData = parsedEnv.data;
```

