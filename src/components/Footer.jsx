import logo from "../assets/itl_logo_tondo.png";
import { InstagramLogoIcon } from "@radix-ui/react-icons";

function Footer() {
  const time = new Date().getFullYear();

  return (
    <footer className="mt-20 pt-12 pb-8 bg-red-900 text-white">
      <div className="max-w-3xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center">
          <img
            src={logo}
            alt="Logo Tempio Ludico"
            className="w-32 h-32 md:w-40 md:h-40 object-contain drop-shadow-2xl"
          />
        </div>
        <div className="text-center md:text-left space-y-3">
          <h1 className="text-2xl md:text-3xl font-bold tracking-wider">
            Tempio Ludico © {time}
          </h1>
          <p className="text-amber-100 text-sm md:text-base">
            Ogni mercoledì e venerdì sera, giochiamo insieme a Brescia!
          </p>
          <div className="mt-6">
            <p className="text-lg font-semibold text-amber-200">Contatti</p>
            <p className="text-sm md:text-base">
              Email:
              <a
                href="mailto:iltempioludico@gmail.com"
                className="underline hover:text-amber-300 transition ml-1"
              >
                iltempioludico@gmail.com
              </a>
            </p>
            <a href="https://www.instagram.com/iltempioludico/">
              <InstagramLogoIcon height={25} width={25} className="mt-1" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
