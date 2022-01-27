class Bot {
  uin = bot.uin
  batteryStatus = bot.batteryStatus
  batteryLevel = bot.batteryLevel
  machineCode = bot.machineCode
  /**
   * 发送消息
   * @param {client} client
   * Returns nothing.
   */
  send(client) {}

  /**
   * 重载词库
   */
  reload() {
    bot.reload()
  }
}
