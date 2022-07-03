import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as RegularIcons from "@fortawesome/free-regular-svg-icons";
import * as SolidIcons from "@fortawesome/free-solid-svg-icons";
import IFontAwesome from "../interfaces/IFontAwesome";

export const HomeIcon = (props: any) => <FontAwesomeIcon {...props} className="faIcon" icon={SolidIcons.faHome} />;
export const ProductsIcon = (props: any) => <FontAwesomeIcon {...props} className="faIcon" icon={SolidIcons.faCubes} />;
export const GearIcon = (props: any) => <FontAwesomeIcon {...props} className="faIcon" icon={SolidIcons.faGear} />;
export const CartIcon = (props: any) => <FontAwesomeIcon {...props} className="faIcon" icon={SolidIcons.faShoppingCart} />;
export const UserIcon = (props: any) => <FontAwesomeIcon {...props} className="faIcon" icon={SolidIcons.faUser} />;
export const LockIcon = (props: any) => <FontAwesomeIcon {...props} className="faIcon" icon={SolidIcons.faLock} />;
export const SearchIcon = (props: any) => <FontAwesomeIcon {...props} className="faIcon" icon={SolidIcons.faSearch} />;
export const FilterIcon = (props: any) => <FontAwesomeIcon {...props} className="faIcon" icon={SolidIcons.faFilter} />;
export const QuestionIcon = (props: any) => <FontAwesomeIcon {...props} className="faIcon" icon={RegularIcons.faQuestionCircle} />;
export const PlusIcon = (props: any) => <FontAwesomeIcon {...props} className="faIcon" icon={SolidIcons.faPlus} />;
export const MinusIcon = (props: any) => <FontAwesomeIcon {...props} className="faIcon" icon={SolidIcons.faMinus} />;
export const TrashIcon = (props: any) => <FontAwesomeIcon {...props} className="faIcon" icon={SolidIcons.faTrash} />;
export const MenuIcon = (props: any) => <FontAwesomeIcon {...props} className="faIcon" icon={SolidIcons.faBars} />;
export const WalletIcon = (props: any) => <FontAwesomeIcon {...props} className="faIcon" icon={SolidIcons.faWallet} />;

export const FontAwesome = ({ type, icon }: IFontAwesome) => {
  if (type === "solid") {
    return <FontAwesomeIcon icon={SolidIcons["faUser"]} />;
  }
  return <FontAwesomeIcon icon={RegularIcons.faQuestionCircle} />;
};
