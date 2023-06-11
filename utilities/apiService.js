class ApiService {
    constructor(url = "http://localhost:4000/api/"){
        this.url = url;
    }
    async getAllSpells(user_id){
        const response = await fetch(`${this.url}/spells/${user_id}`);
        return await response.json();
    }
    async getAllClasses(user_id){
        const response = await fetch(`${this.url}/classes/${user_id}`);
        return await response.json();
    }
    async getAllProjects(user_id){
        const response = await fetch(`${this.url}/projects/${user_id}`);
        return await response.json();
    }
    async getAllSubclasses(user_id){
        const response = await fetch(`${this.url}/subclasses/${user_id}`);
        return await response.json();
    }
    async getAllFeats(user_id){
        const response = await fetch(`${this.url}/feats/${user_id}`);
        return await response.json();
    }
    async getAllAbilities(user_id){
        const response = await fetch(`${this.url}/abilities/${user_id}`);
        return await response.json();
    }
    async createAbility(project_id, user_id, level, name,subhead,desc){
        const response = await fetch(`${this.url}/abilities`,{
            method: 'POST',
            body: JSON.stringify({
                project_id: project_id,
                ability_owner: user_id,
                ability_level: level,
                ability_title: name,
                ability_subhead: subhead,
                ability_desc: desc,
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        return await response.json();
    }
    async createClass(
        project_id,
        user_id,
        name,
        hd,
        armor,
        weap,
        tools,
        skills,
        abilities
      ){
        const response = await fetch(`${this.url}/classes`,{
            method: 'POST',
            body: JSON.stringify({
                project_id: project_id,
                class_owner: user_id,
                class_name: name,
                class_hd: hd,
                class_armor: [...armor],
                class_weap: [...weap],
                class_tools: [...tools],
                class_skills: [...skills],
                class_abilities_abl: [...abilities],
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        return await response.json();
      }
      async createProject(owner, group_access, name, desc) {
        const response = await fetch(`${this.url}/projects`,{
            method: 'POST',
            body: JSON.stringify({
                project_owner: owner,
                project_group_access: group_access,
                project_name: name,
                project_desc: desc,
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        return await response.json();
      }
      async createSpell(project_id, owner, name, desc, subhead) {
        const response = await fetch(`${this.url}/spells`,{
            method: 'POST',
            body: JSON.stringify({
                project_id: project_id,
                spell_owner: owner,
                spell_name: name,
                spell_desc: desc,
                spell_subhead: subhead,
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        return await response.json();
      }
      async createFeat(project_id, owner, name, desc, subhead){
        const response = await fetch(`${this.url}/feats`,{
            method: 'POST',
            body: JSON.stringify({
                project_id: project_id,
                feat_owner: owner,
                feat_name: name,
                feat_desc: desc,
                feat_subhead: subhead,
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        return await response.json();
      }
      async createSubclass(project_id, owner, subname, desc, className, abilities) {
        const response = await fetch(`${this.url}/subclasses`,{
            method: 'POST',
            body: JSON.stringify({
                project_id: project_id,
                subclass_owner: owner,
                subclass_name: subname,
                subclass_desc: desc,
                subclass_class: className,
                subclass_abilities_abl: abilities,
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        return await response.json();
      }
      async updateSpell(spell_id, spellName, spellSubhead, spellDesc) {
        const response = await fetch(`${this.url}/spells`,{
            method: 'PUT',
            body: JSON.stringify({
                spell_id: spell_id,
                spell_name: spellName,
                spell_subhead: spellSubhead,
                spell_desc: spellDesc,
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        return await response.json();
      }
        async updateFeat(feat_id, featName, featSubhead, featDesc) {
        const response = await fetch(`${this.url}/feats`,{
            method: 'PUT',
            body: JSON.stringify({
                feat_id: feat_id,
                feat_name: featName,
                feat_subhead: featSubhead,
                feat_desc: featDesc,
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        return await response.json();
    }
    async updateAbility(ability_id, abilityName, abilitySubhead, abilityDesc) {
        const response = await fetch(`${this.url}/abilities`,{
            method: 'PUT',
            body: JSON.stringify({
                ability_id: ability_id,
                ability_name: abilityName,
                ability_subhead: abilitySubhead,
                ability_desc: abilityDesc,
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        return await response.json();
    }
    async updateClass(class_id, className, classHD, classArmor, classWeap, classTools, classSkills, classAbilities) {
        const response = await fetch(`${this.url}/classes`,{
            method: 'PUT',
            body: JSON.stringify({
                class_id: class_id,
                class_name: className,
                class_hd: classHD,
                class_armor: classArmor,
                class_weap: classWeap,
                class_tools: classTools,
                class_skills: classSkills,
                class_abilities_abl: classAbilities,
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        return await response.json();
    }
    async updateSubclass(subclass_id, subclassName, subclassDesc, subclassClass, subclassAbilities) {
        const response = await fetch(`${this.url}/subclasses`,{
            method: 'PUT',
            body: JSON.stringify({
                subclass_id: subclass_id,
                subclass_name: subclassName,
                subclass_desc: subclassDesc,
                subclass_class: subclassClass,
                subclass_abilities_abl: subclassAbilities,
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        return await response.json();
    }
    async updateProject(project_id, projectName, projectDesc) {
        const response = await fetch(`${this.url}/projects`,{
            method: 'PUT',
            body: JSON.stringify({
                project_id: project_id,
                project_name: projectName,
                project_desc: projectDesc,
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        return await response.json();
    }
    async deleteSpell(spell_id) {
        const response = await fetch(`${this.url}/spells`,{
            method: 'DELETE',
            body: JSON.stringify({
                spell_id: spell_id,
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        return await response.json();
    }
    async deleteFeat(feat_id) {
        const response = await fetch(`${this.url}/feats`,{
            method: 'DELETE',
            body: JSON.stringify({
                feat_id: feat_id,
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        return await response.json();
    }
    async deleteAbility(ability_id) {
        const response = await fetch(`${this.url}/abilities`,{
            method: 'DELETE',
            body: JSON.stringify({
                ability_id: ability_id,
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        return await response.json();
    }
    async deleteClass(class_id) {
        const response = await fetch(`${this.url}/classes`,{
            method: 'DELETE',
            body: JSON.stringify({
                class_id: class_id,
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        return await response.json();
    }
    async deleteSubclass(subclass_id) {
        const response = await fetch(`${this.url}/subclasses`,{
            method: 'DELETE',
            body: JSON.stringify({
                subclass_id: subclass_id,
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        return await response.json();
    }
    async deleteProject(project_id) {
        const response = await fetch(`${this.url}/projects`,{
            method: 'DELETE',
            body: JSON.stringify({
                project_id: project_id,
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        return await response.json();
    }

}