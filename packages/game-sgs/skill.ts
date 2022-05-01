// @ts-nocheck
export const enum SkillType {
  Common,
  Compulsory,
  Awaken,
  Limit,
  Quest,
}

export const enum SwitchSkillState {
  Yang,
  Yin,
}

export abstract class Skill {
  private skillType: SkillType = SkillType.Common
  private shadowSkill = false
  private lordSkill = false
  private uniqueSkill = false
  private selfTargetSkill = false
  private sideEffectSkill = false
  private persistentSkill = false
  private stubbornSkill = false
  private circleSkill = false
  private switchSkill = false
  private switchable = false
  private description: string
  private skillName: string

  public get Description() {
    return this.description
  }

  public get Name() {
    return this.skillName
  }

  public get GeneralName() {
    return this.skillName.replace(/(#|~)+/, '')
  }

  public get Muted() {
    return false
  }

  public get RelatedCharacters(): string[] {
    return []
  }

  public get RelatedSkills(): string[] {
    return []
  }

  public static get Description() {
    return ''
  }
  public static get GeneralName() {
    return ''
  }
  public static get Name() {
    return ''
  }

  public isLordSkill() {
    return this.lordSkill
  }

  public isShadowSkill() {
    return this.shadowSkill
  }

  public isUniqueSkill() {
    return this.uniqueSkill
  }

  public isSelfTargetSkill() {
    return this.selfTargetSkill
  }
  public isSideEffectSkill() {
    return this.sideEffectSkill
  }
  public isPersistentSkill() {
    return this.persistentSkill
  }

  public isStubbornSkill() {
    return this.stubbornSkill
  }

  public isCircleSkill() {
    return this.circleSkill
  }

  public isSwitchSkill() {
    return this.switchSkill
  }

  public isSwitchable() {
    return this.switchable
  }

  public get SkillType() {
    return this.skillType
  }

  public audioIndex(characterName?: string): number {
    return 2
  }
}
