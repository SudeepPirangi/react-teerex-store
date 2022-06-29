import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as RegularIcons from "@fortawesome/free-regular-svg-icons";
import * as SolidIcons from "@fortawesome/free-solid-svg-icons";
import IFontAwesome from "../interfaces/IFontAwesome";

export const HomeIcon = () => <FontAwesomeIcon icon={SolidIcons.faHome} />;
export const GearIcon = () => <FontAwesomeIcon icon={SolidIcons.faGear} />;
export const CartIcon = () => <FontAwesomeIcon icon={SolidIcons.faShoppingCart} />;
export const UserIcon = () => <FontAwesomeIcon icon={SolidIcons.faUser} />;
export const LockIcon = () => <FontAwesomeIcon icon={SolidIcons.faLock} />;
export const SearchIcon = () => <FontAwesomeIcon icon={SolidIcons.faSearch} />;
export const FilterIcon = () => <FontAwesomeIcon icon={SolidIcons.faFilter} />;
export const QuestionIcon = () => <FontAwesomeIcon icon={RegularIcons.faQuestionCircle} />;

export const FontAwesome = ({ type, icon }: IFontAwesome) => {
  if (type === "solid") {
    return <FontAwesomeIcon icon={SolidIcons["faUser"]} />;
  }
  return <FontAwesomeIcon icon={RegularIcons.faQuestionCircle} />;
};
