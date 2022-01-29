#  接口一览

## 状态码

大部分 API 返回的数据包含一个 code 字段的状态码, 分别代表不同的响应状态.
所有 API 返回状态码的意义都一致.

以下为状态码一览:

| 状态码 | 原因                                        |
| ------ | ------------------------------------------- |
| 0      | 正常                                        |
| 5      | 发送消息目标不存在                          |
| 6      | 指定文件不存在                              |
| 10     | 无操作权限，指 Bot 没有对应操作的限权       |
| 20     | Bot 被禁言，指 Bot 当前无法向指定群发送消息 |
| 30     | 消息过长                                    |
| 400    | 错误的访问，如参数错误等                    |

- 获取账号信息
    - 获取好友列表 `getFriends()`
    - 获取群列表
    - 获取群成员列表
    - 获取 Bot 资料
    - 获取好友资料
    - 获取群成员资料

- 消息发送与撤回
    - 发送好友消息
    - 发送群消息
    - 发送临时会话消息
    - 发送头像戳一戳消息
    - 撤回消息

- 账号管理
    - 删除好友

- 群管理
    - 禁言群成员
    - 解除群成员禁言
    - 移除群成员
    - 退出群聊
    - 全体禁言
    - 解除全体禁言
    - 设置群精华消息
    - 获取群设置
    - 修改群设置
    - 获取群员资料
    - 修改群员资料

- [send_private_msg 发送私聊消息](#get_group_member_info)
- send_group_msg 发送群消息
- send_msg 发送消息
- delete_msg 撤回消息
- get_msg 获取消息
- get_forward_msg 获取合并转发消息
- send_like 发送好友赞
- set_group_kick 群组踢人
- set_group_ban 群组单人禁言
- set_group_anonymous_ban 群组匿名用户禁言
- set_group_whole_ban 群组全员禁言
- set_group_admin 群组设置管理员
- set_group_anonymous 群组匿名
- set_group_card 设置群名片（群备注）
- set_group_name 设置群名
- set_group_leave 退出群组
- set_group_special_title 设置群组专属头衔
- set_friend_add_request 处理加好友请求
- set_group_add_request 处理加群请求／邀请
- get_login_info 获取登录号信息
- get_stranger_info 获取陌生人信息
- get_friend_list 获取好友列表
- get_group_info 获取群信息
- get_group_list 获取群列表
## get_group_member_info 获取群成员信息
## get_group_member_list 获取群成员列表
## get_group_honor_info 获取群荣誉信息
## get_cookies 获取 Cookies
## get_csrf_token 获取 CSRF Token
## get_credentials 获取 QQ 相关接口凭证（Skey）
## get_record 获取语音
## get_image 获取图片
## send_private_msg 发送私聊消息