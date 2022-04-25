/** 描述群成员在群组中所具备的权限 */
export enum MemberPerm {
  Member = 'MEMBER', // 普通成员
  Administrator = 'ADMINISTRATOR', // 管理员
  Owner = 'OWNER', // 群主
}

/** 描述 Tencent QQ 中的可发起聊天区域 '群组(group)' 的能被获取到的信息. */
interface Group {
  id: number
  name: string
  accountPerm: MemberPerm
}
/** 描述用户在群组中所具备的有关状态, 包括所在群组, 群中昵称, 所具备的权限, 唯一ID. */
interface Member {
  id: number
  name: string
  permssion: MemberPerm
  group: Group
}

interface MemberInfo {
  name: string
  specialTitle: string
}
