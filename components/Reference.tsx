export default function Reference() {
  return (
    <footer className="mb-1 mt-auto flex w-full max-w-[90rem] flex-col bg-dark-grey pt-4 text-center text-sm sm:flex-row sm:justify-center sm:gap-1 lg:absolute lg:bottom-0 lg:z-10">
      <div>
        Challenge by{" "}
        <a
          href="https://www.frontendmentor.io"
          target="_blank"
          className="footer-link"
          rel="noreferrer noopener"
        >
          Frontend Mentor
        </a>
        ,{" "}
      </div>
      <div>
        Coded by{" "}
        <a
          className="footer-link"
          href="https://www.linkedin.com/in/ehsan-tatasadi-2161a433"
          target="_blank"
          rel="noreferrer noopener"
        >
          Ehsan Tatasadi
        </a>
        ,{" "}
      </div>
      <div>
        <a
          className="footer-link"
          href="https://github.com/tatasadi/single-page-developer-portfolio"
          target="_blank"
          rel="noreferrer noopener"
        >
          Source Code
        </a>
      </div>
    </footer>
  )
}
