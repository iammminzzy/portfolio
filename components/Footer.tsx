const Footer = () => {
  return (
    <footer className="mb-10 px-[25px] sml:px-[50px] mdl:px-[100px] lgl:px-[150px] text-center text-dark/60 font-bodyFont">
      <small className="mb-2 block text-xs">
        &copy; 2023 Minjee. All rights reserved.
      </small>
      <p className="text-xs">
        <span className="font-semibold">About this website:</span> built with
        React & Next.js (App Router & Server Actions), TypeScript, Tailwind CSS,
        Framer Motion, Resend, Vercel hosting.
      </p>
    </footer>
  );
};
export default Footer;
