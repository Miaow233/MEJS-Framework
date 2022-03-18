declare namespace bot {
  const batteryLevel: number
  const batteryStatus: string
  const machineCode: string
  const name: string
  const pskey: string
  const skey: string
  const uin: number
  function checkAdmin(group_id: number, qq_id: number): boolean
  function deleteMember(group_id: number, qq_id: number): void
  function getClientKey(): string
  function getPSkey(): string
  function getSkey(): string
  function getTroopList(): number[]
  function getTroopMemberList(group_id: number | number[]): number[]
  function getTroopSwicth(group_id: number): boolean
  function pokeAvatar(group_id: number, qq_id: number): void
  function reload(): void
  function send(client: client): void
  function sendRedPacket(group_id: number, title: string, money: number, qq_id: number | number[]): void
  function setAdmin(group_id: number, qq_id: number, is_admin: boolean): void
  function setGroupAdmin(id: number, qq: number, is_admin: boolean): any
  function setMemberCard(group_id: number, qq_id: number, card: string): void
  function setTroopSwicth(group_id: number, iSwitch: boolean): void
  function shutup(group_id: number, qq_id: number, time: number): void
  function shutupAll(group_id: number, time: number): void
  function withDrawMsg(group_id: number, qq_id: number): void
}

declare namespace $ {
  function emit(event: string, ...args: any[]): void
  function on(event: string, callback: (...args: any[]) => void): void
}
