# CSE 2000 Software Project: Sonifying Billiards
Repository for the Sonifying Billiards application. The application serves as the Technical University of Delft software project course, done by students Arnas Misevicius, Lea Romanek, Lapo Masiero, Zeyd Belouaer and Daniel Voronkov

## Requirements
### Rust tooling
Rust and cargo are required for this project. Recommended way is to use rustup.
#### On Linux and macOS systems:
```bash
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
```
#### On Windows
Download and run the rustup-init.exe built for the [x86_64-pc-windows-msvc](https://static.rust-lang.org/rustup/dist/x86_64-pc-windows-msvc/rustup-init.exe) or [aarch64-pc-windows-msvc](https://static.rust-lang.org/rustup/dist/aarch64-pc-windows-msvc/rustup-init.exe) target, depending on your OS architecture.

### Node.js and NPM
Node.js and npm are required to run the web application frontend in this project. Both tool can be installed as follows:
#### Linux and macOS
```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.4/install.sh | bash
\. "$HOME/.nvm/nvm.sh"
nvm install 24
``` 
#### Windows
The Windows installation of Node requires installing Chocolatey, you can read more about it [here](https://chocolatey.org)

```bash
powershell -c "irm https://community.chocolatey.org/install.ps1|iex"
choco install nodejs --version="24.15.0"
```

## Building and compilation
Building this project consists of 2 parts: building the rust crate(sim-lib) and building the Node web application(web-ui)

!!TODO: Make a build script for both
### sim-lib
Run `wasm-pack` within the sim-lib as such:
```bash
wasm-pack build --target web
``` 
### web-ui
Vite supports hotswapping code, so the application can be directly run without needing to build it separately.
## Running the application
The application can be launched from the web-ui project root, by running
```bash
npm run dev
```
The application can be accessed on localhost at the port shown by Vite in the console that is running the Node instance.

## Project structure
```text
sonifying-billiards/
├── README.md
├── sim-lib/
│   ├── Cargo.lock
│   ├── Cargo.toml
│   ├── pkg/
│   └── src/
│       └── lib.rs
└── web-ui/
    ├── README.md
    ├── eslint.config.js
    ├── index.html
    ├── package-lock.json
    ├── package.json
    ├── public/
    ├── src/
    │   ├── App.css
    │   ├── App.tsx
    │   ├── assets
    │   ├── index.css
    │   └── main.tsx
    ├── tsconfig.app.json
    ├── tsconfig.json
    ├── tsconfig.node.json
    └── vite.config.ts
```
