import Navbar from "./navbar";
import Footer from "./footer";
import MobNavBar from "./mobile/MobNavbar";
import MobFooter from "./mobile/MobFooter";
import { useMediaQuery } from "react-responsive";

const Desktop = ({ children }) => {
  const isDesktop = useMediaQuery({ minWidth: 992 });
  return isDesktop ? children : null;
};

const Mobile = ({ children }) => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  return isMobile ? children : null;
};

export default function Layout({ children }) {
  return (
    <>
      <Desktop>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </Desktop>
      <Mobile>
        <MobNavBar />
        <main>{children}</main>
        <MobFooter />
      </Mobile>
    </>
  );
}
