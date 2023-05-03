import NameBanner from "../components/common/NameBanner";
import Transitions from "../components/common/Tranisitions";
import Special from "../components/special/Special";

const MenuAndPricing = () => {
  return (
    <Transitions>
      <div className="mb-[80px]">
        <NameBanner title="MENU & PRICING" />
        <Special />
      </div>
    </Transitions>
  );
};

export default MenuAndPricing;
