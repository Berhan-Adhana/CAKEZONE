import NameBanner from "../components/common/NameBanner";
import Transitions from "../components/common/Tranisitions";
import Teams from "../components/team/Teams";

const MasterChef = () => {
  return (
    <Transitions>
      <div className="mb-[80px]">
        <NameBanner title="MASTER CHEFS" />
        <Teams />
      </div>
    </Transitions>
  );
};

export default MasterChef;
