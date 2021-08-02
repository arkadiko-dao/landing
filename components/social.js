export default function HeroSocial() {
  return (
    <section id="hero-social" className="lg:relative bg-indigo-200 relative bg-opacity-30">
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
          <h2 className="max-w-md text-base md:text-xl text-center lg:max-w-xl lg:text-left text-white mx-auto md:mx-0">
            Built on Stacks, secured by Bitcoin.
          </h2>
          <div className="flow-root self-center mt-3 md:mt-8 lg:mt-0">
            <div className="-mt-4 -ml-8 flex flex-wrap justify-between lg:-ml-4 items-center">
              <div className="mt-4 ml-8 flex flex-grow flex-shrink-0 justify-center lg:flex-grow-0 lg:ml-4">
                <a target="_blank" rel="noopener noreferrer" href="https://www.hiro.so/blog/breaking-down-defi-on-bitcoin" className="text-white opacity-60 hover:opacity-100 transition duration-300">
                  <svg className="h-7 md:h-9 text-white" viewBox="0 0 88 28" role="img" aria-label="Breaking Down DeFi on the Bitcoin Blockchain — Hiro Blog" focusable="false"><path d="M45.23 5.17v17.92h2.92V15.3h8.25v7.78h2.91V5.17H56.4v7.52h-8.25V5.17h-2.92zM63.39 4.76c-.94 0-1.67.7-1.67 1.66 0 .98.73 1.67 1.67 1.67s1.67-.7 1.67-1.67-.73-1.66-1.67-1.66zm-1.37 5.22v13.1h2.74V9.99h-2.74zM73.76 9.98c-2.13 0-3.17.87-3.83 1.97l-.3-1.97h-2.44v13.1h2.74v-6.57c0-2.02.79-3.94 3.22-3.94h1.22V9.98h-.6zM81.38 23.24c3.96 0 6.62-2.69 6.62-6.7 0-4-2.66-6.71-6.62-6.71s-6.62 2.71-6.62 6.7c0 4.02 2.66 6.71 6.62 6.71zm0-2.35c-2.31 0-3.8-1.82-3.8-4.36 0-2.53 1.49-4.35 3.8-4.35 2.3 0 3.83 1.82 3.83 4.35 0 2.54-1.52 4.36-3.83 4.36z" fill="#fff"/><path fillRule="evenodd" clipRule="evenodd" d="M9.44 28h19.42V0H9.44L0 14l9.44 14zm16.65-16.56h-4.15L24.85 7h-2.2l-3.5 5.36L15.65 7h-2.2l2.91 4.44h-4.15v1.72H26.1v-1.72zM28.87 28l9.43-14-9.43-14v28zm-7.01-11.5l2.95 4.5h-2.2l-3.46-5.29L15.68 21H13.5l2.95-4.49h-4.23v-1.7H26.1v1.69h-4.23z" fill="#fff"/></svg>
                </a>
              </div>
              <div className="mt-4 ml-8 flex flex-grow flex-shrink-0 justify-center lg:flex-grow-0 lg:ml-4">
                <a target="_blank" rel="noopener noreferrer" href="https://stacks.ac/teams" className="text-white opacity-60 hover:opacity-100 transition duration-300">
                  <svg className="h-7 md:h-9 text-white" viewBox="0 0 766 195" role="img" aria-label="Meet the first-ever Stacks Accelerator teams!" focusable="false">
                    <path fill="#FFF" d="M250.61 81.08c-4.26-1.56-7.86-4.07-10.8-7.53-2.94-3.45-4.7-7.84-5.31-13.18h11.01c1.04 4.91 3.31 8.41 6.8 10.53 3.48 2.1 7.52 3.15 12.12 3.15 4.47 0 7.97-.93 10.51-2.8 2.54-1.86 3.82-4.6 3.82-8.21 0-2.69-.81-4.85-2.41-6.47-1.59-1.62-3.58-2.82-5.97-3.58-2.38-.76-5.65-1.6-9.8-2.53-5.09-1.1-9.2-2.22-12.31-3.34-3.13-1.13-5.8-2.97-8.01-5.51-2.19-2.54-3.29-6.04-3.29-10.51 0-4.17 1-7.76 3.02-10.76 2.04-3 4.85-5.27 8.46-6.82 3.61-1.56 7.74-2.34 12.4-2.34 6.85 0 12.75 1.76 17.7 5.28 4.96 3.52 7.99 8.79 9.1 15.82h-10.82c-.93-3.98-2.85-6.91-5.76-8.81-2.9-1.89-6.38-2.84-10.41-2.84-4.04 0-7.19.85-9.45 2.53-2.27 1.67-3.4 4.01-3.4 7.01 0 2.33.75 4.2 2.24 5.61 1.5 1.4 3.36 2.47 5.55 3.22 2.21.73 5.27 1.53 9.19 2.38 5.33 1.16 9.64 2.36 12.91 3.59 3.28 1.21 6.07 3.22 8.4 6.01 2.32 2.78 3.48 6.58 3.48 11.42 0 6.48-2.22 11.61-6.66 15.38-4.43 3.76-10.66 5.64-18.67 5.64-4.84 0-9.39-.78-13.64-2.34zM316.022 82.32c-3.98 0-6.98-.92-8.99-2.76-2.02-1.83-3.03-4.92-3.03-9.26V39.64h-7.9v-8.46h7.9v-18.9h10.1v18.9h10.65v8.46h-10.65v27.98c0 2.15.3 3.71.91 4.69.61.98 2.01 1.47 4.23 1.47h5.41v8.54h-8.63zM336.481 79.34c-3.06-2.67-4.59-6.3-4.59-10.89 0-4.71 1.84-8.41 5.52-11.11 2.74-2.01 6.7-3.51 11.85-4.5 1.68-.32 15.04-2.89 16.71-3.21-.07-3.55-1.02-6.27-2.86-8.17-2.02-2.01-4.7-3.02-8.06-3.02-2.77 0-5.17.78-7.22 2.34-2.04 1.56-3.34 3.66-3.89 6.28h-10.01c.85-5.37 3.27-9.54 7.25-12.48 3.98-2.94 8.63-4.41 13.95-4.41 3 0 5.83.45 8.48 1.34 2.66.89 4.92 2.19 6.76 3.9 2.44 2.27 3.98 4.93 4.62 8 .65 3.06.97 6.57.97 10.53v28.38h-10.09V74.8c-1.41 2.39-3.19 4.26-5.33 5.59-3.06 1.96-7.03 2.95-11.92 2.95-5.03 0-9.08-1.34-12.14-4zm21.49-6.02c3-1.53 5.09-3.56 6.28-6.09 1.2-2.54 1.81-5.84 1.81-9.89-1.45.29-12.97 2.58-14.41 2.86-3.56.74-6.13 1.84-7.71 3.3-1.29 1.28-1.93 2.85-1.93 4.68 0 2.15.78 3.82 2.34 5.02 1.56 1.19 3.66 1.78 6.28 1.78 2.7 0 5.14-.55 7.34-1.66zM397.682 79.94c-3.83-2.27-6.82-5.43-8.96-9.5-2.14-4.07-3.21-8.71-3.21-13.93 0-5.07 1.07-9.6 3.21-13.58 2.14-3.98 5.13-7.09 8.96-9.36 3.82-2.27 8.22-3.4 13.18-3.4 5.93 0 10.96 1.53 15.09 4.6 4.13 3.06 6.81 7.15 8.05 12.29h-10.85c-.91-2.62-2.44-4.67-4.58-6.14-2.14-1.47-4.71-2.21-7.71-2.21-2.94 0-5.55.75-7.81 2.26-2.26 1.49-4.04 3.58-5.33 6.28-1.29 2.69-1.93 5.78-1.93 9.26 0 3.62.64 6.81 1.93 9.56 1.29 2.75 3.07 4.89 5.33 6.42 2.26 1.54 4.87 2.31 7.81 2.31 3.18 0 5.88-.84 8.11-2.53 2.24-1.69 3.73-3.94 4.47-6.76h10.93c-1.16 5.51-3.87 9.87-8.13 13.06-4.26 3.18-9.38 4.77-15.38 4.77-4.96 0-9.36-1.13-13.18-3.4zM453.92 82.32h-10.1V12.28h10.1v38.55l20.56-19.65h13.31l-23.86 22.31 25.79 28.83h-12.94l-22.86-26.08v26.08zM501.791 78.69c-4.31-3.09-6.89-7.49-7.75-13.18h10.18c.73 3.02 2.24 5.35 4.54 7.01 2.3 1.64 5.35 2.46 9.14 2.46 3.12 0 5.63-.59 7.52-1.78 1.91-1.2 2.87-2.9 2.87-5.1 0-1.73-.6-3.09-1.77-4.1-1.16-1.01-2.62-1.79-4.39-2.33-1.77-.55-4.13-1.14-7.07-1.76-4.04-.79-7.31-1.6-9.83-2.46-2.51-.86-4.65-2.27-6.42-4.23-1.77-1.96-2.65-4.66-2.65-8.09 0-4.83 1.8-8.54 5.41-11.11 3.6-2.57 8.19-3.85 13.76-3.85 5.76 0 10.57 1.48 14.43 4.45 3.85 2.98 6.24 7.09 7.15 12.36h-9.45c-.74-2.87-2.17-5.02-4.32-6.43-2.14-1.41-4.74-2.11-7.81-2.11-2.93 0-5.22.55-6.88 1.66-1.65 1.09-2.47 2.59-2.47 4.49 0 1.53.55 2.73 1.64 3.63 1.1.89 2.47 1.58 4.08 2.07 1.63.49 3.91 1.01 6.84 1.56 4.16.79 7.55 1.63 10.18 2.53 2.64.88 4.89 2.35 6.76 4.39 1.87 2.05 2.82 4.88 2.82 8.5 0 4.89-1.82 8.8-5.43 11.71-3.61 2.91-8.6 4.36-14.97 4.36-6.43 0-11.79-1.55-16.11-4.65zM243.12 171.94h-11.29l25.24-70.04h12.03l25.25 70.04h-11.2l-5.41-15.79h-29.21l-5.41 15.79zm20.03-58.58l-11.3 33.25h22.58l-11.28-33.25zM311.471 169.56c-3.83-2.27-6.81-5.43-8.95-9.5-2.15-4.07-3.22-8.71-3.22-13.93 0-5.06 1.07-9.59 3.22-13.57 2.14-3.98 5.12-7.1 8.95-9.37 3.82-2.27 8.22-3.4 13.18-3.4 5.93 0 10.96 1.53 15.09 4.6 4.14 3.06 6.81 7.15 8.05 12.29h-10.84c-.92-2.62-2.44-4.67-4.58-6.13-2.15-1.48-4.72-2.22-7.72-2.22-2.94 0-5.55.75-7.81 2.26-2.26 1.49-4.03 3.58-5.33 6.28-1.28 2.69-1.93 5.78-1.93 9.26 0 3.63.65 6.81 1.93 9.56 1.3 2.75 3.07 4.89 5.33 6.43 2.26 1.53 4.87 2.3 7.81 2.3 3.18 0 5.88-.84 8.11-2.53 2.24-1.69 3.73-3.94 4.48-6.76h10.92c-1.16 5.51-3.87 9.87-8.12 13.06-4.26 3.18-9.39 4.77-15.39 4.77-4.96 0-9.36-1.13-13.18-3.4zM367.56 169.56c-3.83-2.27-6.81-5.43-8.95-9.5-2.15-4.07-3.21-8.71-3.21-13.93 0-5.06 1.06-9.59 3.21-13.57 2.14-3.98 5.12-7.1 8.95-9.37 3.83-2.27 8.22-3.4 13.19-3.4 5.93 0 10.95 1.53 15.09 4.6 4.13 3.06 6.81 7.15 8.04 12.29h-10.84c-.91-2.62-2.44-4.67-4.58-6.13-2.15-1.48-4.72-2.22-7.71-2.22-2.95 0-5.55.75-7.82 2.26-2.25 1.49-4.03 3.58-5.32 6.28-1.29 2.69-1.93 5.78-1.93 9.26 0 3.63.64 6.81 1.93 9.56 1.29 2.75 3.07 4.89 5.32 6.43 2.27 1.53 4.87 2.3 7.82 2.3 3.18 0 5.88-.84 8.1-2.53 2.24-1.69 3.73-3.94 4.48-6.76h10.93c-1.17 5.51-3.88 9.87-8.13 13.06-4.26 3.18-9.39 4.77-15.38 4.77-4.97 0-9.36-1.13-13.19-3.4zM423.7 169.52c-3.86-2.29-6.86-5.44-9-9.46-2.14-4.02-3.21-8.5-3.21-13.45 0-4.65.96-9.03 2.88-13.12 1.94-4.11 4.8-7.41 8.61-9.93 3.79-2.51 8.35-3.77 13.68-3.77 4.53 0 8.7.98 12.52 2.94 3.82 1.97 6.9 4.89 9.22 8.77 2.33 3.89 3.5 8.61 3.5 14.18v2.76h-40.13c.19 2.02.69 3.85 1.47 5.51 1.23 3.12 3.07 5.61 5.52 7.44 2.44 1.84 5.23 2.76 8.35 2.76 3.25 0 6.03-.84 8.36-2.53 2.32-1.69 4-3.85 5.05-6.49h10.56c-1.72 5.27-4.62 9.56-8.69 12.87-4.06 3.31-9.22 4.96-15.46 4.96-4.95 0-9.36-1.15-13.23-3.44zm27.74-29.25c-.25-1.89-.77-3.52-1.56-4.87-1.23-2.33-2.99-4.11-5.28-5.37-2.3-1.26-4.82-1.89-7.57-1.89-2.88 0-5.42.63-7.63 1.89-2.2 1.26-3.94 3.04-5.22 5.37-.74 1.23-1.32 2.85-1.76 4.87h29.02zM483.761 171.94c-3.98 0-6.99-.92-9.02-2.76-2.02-1.83-3.02-4.92-3.02-9.26V101.9h10.11v55.53c0 2.15.33 3.68 1 4.6.67.92 2.05 1.37 4.14 1.37h2.84v8.54h-6.05zM508.53 169.52c-3.85-2.29-6.86-5.44-9-9.46-2.14-4.02-3.21-8.5-3.21-13.45 0-4.65.96-9.03 2.88-13.12 1.94-4.11 4.8-7.41 8.61-9.93 3.79-2.51 8.35-3.77 13.68-3.77 4.53 0 8.7.98 12.52 2.94 3.82 1.97 6.9 4.89 9.22 8.77 2.33 3.89 3.5 8.61 3.5 14.18v2.76H506.6c.19 2.02.69 3.85 1.47 5.51 1.23 3.12 3.07 5.61 5.52 7.44 2.44 1.84 5.23 2.76 8.35 2.76 3.25 0 6.03-.84 8.36-2.53 2.32-1.69 4-3.85 5.05-6.49h10.56c-1.72 5.27-4.62 9.56-8.69 12.87-4.06 3.31-9.22 4.96-15.46 4.96-4.95 0-9.36-1.15-13.23-3.44zm27.74-29.25c-.25-1.89-.77-3.52-1.56-4.87-1.23-2.33-2.99-4.11-5.28-5.37-2.3-1.26-4.82-1.89-7.57-1.89-2.88 0-5.42.63-7.63 1.89-2.2 1.26-3.94 3.04-5.22 5.37-.74 1.23-1.32 2.85-1.76 4.87h29.02zM556.73 171.94V120.8h10.12v6.53c2.07-2.69 4.361-4.62 6.861-5.78 2.51-1.17 5.419-1.76 8.729-1.76h1.011v9.93h-2.75c-4.1 0-7.271 1.13-9.541 3.4-2.88 2.75-4.31 7.27-4.31 13.57v25.25h-10.12zM593.81 168.96c-3.06-2.67-4.58-6.29-4.58-10.89 0-4.71 1.84-8.41 5.51-11.11 2.75-2.01 6.71-3.51 11.86-4.49 1.67-.33 15.04-2.9 16.71-3.22-.07-3.55-1.029-6.27-2.859-8.17-2.02-2.01-4.71-3.02-8.06-3.02-2.77 0-5.181.78-7.221 2.34-2.05 1.57-3.349 3.66-3.899 6.28H591.26c.86-5.37 3.281-9.53 7.261-12.48 3.98-2.94 8.629-4.41 13.949-4.41 2.99 0 5.821.45 8.481 1.34 2.66.89 4.91 2.19 6.75 3.9 2.45 2.27 3.99 4.94 4.63 8 .64 3.06.969 6.57.969 10.53v28.38h-10.089v-7.52c-1.41 2.39-3.191 4.26-5.331 5.59-3.06 1.96-7.029 2.95-11.919 2.95-5.03 0-9.081-1.33-12.151-4zm21.5-6.01c2.99-1.54 5.091-3.57 6.281-6.1 1.2-2.54 1.8-5.83 1.8-9.89-1.44.29-12.961 2.58-14.401 2.86-3.56.74-6.129 1.84-7.719 3.3-1.28 1.29-1.921 2.85-1.921 4.68 0 2.15.77 3.82 2.34 5.02 1.56 1.19 3.65 1.78 6.28 1.78 2.69 0 5.14-.55 7.34-1.65zM661.131 171.94c-3.98 0-6.98-.92-9-2.76-2.02-1.83-3.02-4.92-3.02-9.26v-30.66h-7.9v-8.46h7.9v-18.9h10.09v18.9h10.66v8.46h-10.66v27.98c0 2.15.3 3.71.91 4.69.61.98 2.02 1.47 4.23 1.47h5.41v8.54h-8.62zM689.35 169.56c-3.88-2.27-6.92-5.43-9.1-9.5-2.17-4.07-3.25-8.71-3.25-13.93 0-5.06 1.08-9.59 3.25-13.57 2.18-3.98 5.22-7.1 9.1-9.37 3.88-2.27 8.31-3.4 13.27-3.4 4.96 0 9.38 1.13 13.27 3.4 3.88 2.27 6.9 5.39 9.08 9.37 2.18 3.98 3.27 8.51 3.27 13.57 0 5.14-1.07 9.76-3.21 13.83-2.15 4.08-5.16 7.27-9.06 9.56-3.89 2.29-8.33 3.44-13.35 3.44-4.96 0-9.39-1.13-13.27-3.4zm21.17-7.71c2.32-1.54 4.13-3.68 5.45-6.43 1.33-2.76 1.99-5.86 1.99-9.29 0-3.3-.66-6.28-1.99-8.93-1.32-2.66-3.13-4.76-5.45-6.28-2.32-1.54-4.96-2.3-7.9-2.3-2.93 0-5.57.75-7.9 2.26-2.32 1.49-4.14 3.57-5.47 6.24-1.32 2.65-1.97 5.66-1.97 9.01 0 3.5.65 6.61 1.97 9.33 1.33 2.73 3.15 4.85 5.47 6.39 2.33 1.53 4.97 2.3 7.9 2.3 2.94 0 5.58-.77 7.9-2.3zM738.33 171.94V120.8h10.11v6.53c2.08-2.69 4.36-4.62 6.87-5.78 2.51-1.17 5.42-1.76 8.72-1.76h1.02v9.93h-2.76c-4.09 0-7.27 1.13-9.53 3.4-2.88 2.75-4.32 7.27-4.32 13.57v25.25h-10.11z"/>
                    <path fill="#FFF" fillRule="evenodd" d="M194.021 97.47c0 53.52-43.38 96.91-96.9 96.91-53.53 0-96.91-43.39-96.91-96.91C.21 43.95 43.59.54 97.12.57h96.9v96.9zm-75.951 14.75l20.68 31.32h-15.42l-24.29-36.8-24.29 36.8H59.33L80 112.23H50.32V100.4h97.44v11.82h-29.69zm29.69-35.23v11.94H50.32V77.01h29.11L59.02 46.09h15.41l24.61 37.29 24.61-37.29h15.42l-20.39 30.9h29.08z" clipRule="evenodd"/>
                  </svg>
                </a>
              </div>
              <div className="mt-4 ml-8 flex flex-grow flex-shrink-0 justify-center lg:flex-grow-0 lg:ml-4">
                <a target="_blank" rel="noopener noreferrer" href="https://youtu.be/2K79H1d1DFI?t=823" className="text-white opacity-60 hover:opacity-100 transition duration-300">
                  <svg className="h-7 md:h-10 text-white" role="img" aria-label="Bitcoin DeFi with Stacks by Dan Held - YouTube video" focusable="false" viewBox="0 0 263 264" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.499612 1.19998C0.199612 1.89998 0.0996089 61.2 0.199609 133L0.499612 263.5L44.2996 263.8L87.9996 264V0H44.4996C10.5996 0 0.799612 0.299982 0.499612 1.19998ZM77.9996 132V254H9.99961V10H77.9996V132ZM176 0.699982C176 1.19998 175.9 20.8 175.7 44.5L175.5 87.5L143.3 87.8L111 88V97H185V10H254V254H185V166H111V176L143.3 176.2L175.5 176.5L175.7 220L175.9 263.5L219.5 263.8L263 264V0H219.5C195.6 0 176 0.299982 176 0.699982Z" fill="white"/>
                  </svg>
                    </a>              
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}



