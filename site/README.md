### Clean old builds
rm -rf dist pkg

### Rebuild Rust code
wasm-pack build --target web

### Reinstall dependencies
npm install

### Rebuild the project
npm run build

### Start the server
npm run serve