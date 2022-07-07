import useIsMobile from "../hooks/useIsMobile";
import logo from "./../../public/images/logo.png";
import { Imagem, Wrapper } from "./styles";
import menu from "./../../public/images/header-menu.png";
const Header = () => {
  const isMobile = useIsMobile();
  const routes = [{ label: "quem somos", path: "/quem-somos" }];
  return (
    <Wrapper>
      <div>
        <Imagem src={logo} alt="logo" />
      </div>
      <div>{isMobile ? <Imagem src={menu} alt="menu" /> : <span>quem somos</span>}</div>
    </Wrapper>
  );
};
export default Header;
