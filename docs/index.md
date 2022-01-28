# Welcome to MkDocs

For full documentation visit [mkdocs.org](https://www.mkdocs.org).

## Commands

- `mkdocs new [dir-name]` - Create a new project.
- `mkdocs serve` - Start the live-reloading docs server.
- `mkdocs build` - Build the documentation site.
- `mkdocs -h` - Print help message and exit.

## Project layout

    mkdocs.yml    # The configuration file.
    docs/
        index.md  # The documentation homepage.
        ...       # Other markdown pages, images and other files.

=== "请求参数"

    无。

=== "响应数据"

    字段名 | 数据类型 | 默认值 | 说明
    --- | --- | --- | ---
    `user_id` | string | - | 机器人用户 ID
    `nickname` | string | - | 机器人名称/昵称

=== "请求示例"

    ```json
    {
        "action": "get_self_info",
        "params": {}
    }
    ```

=== "响应示例"

    ```json
    {
        "status": "ok",
        "retcode": 0,
        "data": {
            "user_id": "123456",
            "nickname": "我是大笨蛋"
        },
        "message": ""
    }
    ```
