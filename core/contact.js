/** 所有用户和群的基类 */
export abstract class Contactable {

    /** 对方QQ号 */
	protected uid?: number
	/** 对方群号 */
	protected gid?: number
	
    // 对方账号，可能是群号也可能是QQ号
	private get target() {
		return this.uid || this.gid || this.c.uin
	}
	
    // 是否是 Direct Message (私聊)
	private get dm() {
		return !!this.uid
	}
}