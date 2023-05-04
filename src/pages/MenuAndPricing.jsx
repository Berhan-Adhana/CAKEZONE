import NameBanner from "../components/common/NameBanner";
import Transitions from "../components/common/Tranisitions";
import MenuAndPricingSection from "../components/menuandpricing/MenuAndPricingSection";
import Special from "../components/special/Special";

const MenuAndPricing = () => {
  return (
    <Transitions>
      <div className="mb-[80px]">
        <NameBanner title="MENU & PRICING" />
        <Special />
        <MenuAndPricingSection/>
      </div>
    </Transitions>
  );
};

export default MenuAndPricing;
