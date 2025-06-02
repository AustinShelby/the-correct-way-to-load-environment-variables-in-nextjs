# The correct way to load environment variables in Next.js

Requirements:

- Node.js 22.6.0 or higher

With node.js versions 23.6.0 and higher you can change the `package.json` commands to:

```json
"predev": "node validateEnvironmentVariables.ts",
"prebuild": "node validateEnvironmentVariables.ts"
```

as type stripping is enabled by default.
