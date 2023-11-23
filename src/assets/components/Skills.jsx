import SkillItems from "./SkillItems";

const Skills = () => {
    return ( 
        <div className="skills_wrap">
            <SkillItems
                skills={'HTML'}
            />
            <SkillItems
                skills={'CSS'}
            />
            <SkillItems
                skills={'JavaScript'}
            />
            <SkillItems
                skills={'React'}
            />
            <SkillItems
                skills={'SASS'}
            />
            <SkillItems
                skills={'Tailwind CSS'}
            />
            <SkillItems
                skills={'Git'}
            />
            <SkillItems
                skills={'UX/UI'}
            />
        </div>
        
        
    );
}
 
export default Skills;