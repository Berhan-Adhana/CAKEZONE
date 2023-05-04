import { teams } from "../../utils/constants";
import SectionTitle from "../common/SectionTitle";

import TeamCard from "./TeamCard";
const Teams = () => {
 
  return (
    <section className="section">
      <SectionTitle subTitle="Team Members" title="OUR MASTER CHEFS" />
      <div className="grid grid-cols-1 gap-y-[80px] md:grid-cols-2 gap-x-[60px] lg:grid-cols-3 mt-10">
        {teams.map((team, index) => (
          <TeamCard key={index} team={team} />
        ))}
      </div>
    </section>
  );
};

export default Teams;
