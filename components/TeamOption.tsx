interface TeamOptionProps {
  team: string;
}

const TeamOption = ({ team }: TeamOptionProps) => (
  <option className='teamselect__option' key={team} value={team}>
    {team}
  </option>
);

export default TeamOption;
