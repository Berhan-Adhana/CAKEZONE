import SectionTitle from "../common/SectionTitle";
import team1 from "../../assets/img/team-1.jpg";
import team2 from "../../assets/img/team-2.jpg";
import team3 from "../../assets/img/team-3.jpg";
import TeamCard from "./TeamCard";
const Teams = () => {
  const teams = [
    {
      name: "FULL NAME",
      role: "Designation",
      img: team1,
    },
    {
      name: "FULL NAME",
      role: "Designation",
      img: team2,
    },
    {
      name: "FULL NAME",
      role: "Designation",
      img: team3,
    },
  ];
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
