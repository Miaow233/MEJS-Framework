/**
 * let database = new Database()
 * database.use('sqlite') | database.use('mysql')
 * database.select('medic.db')
 * database.update('diary', {})
 */

// 获取 schedule 表中 id 为 1234 的数据行，返回一个数组
// await ctx.database.get('schedule', 1234)

// 获取 schedule 表中 id 为 1234 或 5678 的数据行，返回一个数组
// await ctx.database.get('schedule', [1234, 5678])
