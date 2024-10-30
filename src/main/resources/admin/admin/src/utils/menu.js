const menu = {
    list() {
        return [
    {
        "backMenu":[
            {
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "删除",
                            "修改"
                        ],
                        "menu":"班级管理",
                        "menuJump":"列表",
                        "tableName":"dictionaryBanji"
                    }
                    ,
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "删除",
                            "修改"
                        ],
                        "menu":"学院管理",
                        "menuJump":"列表",
                        "tableName":"dictionaryXueyuan"
                    }
                    ,
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "删除",
                            "修改"
                        ],
                        "menu":"专业管理",
                        "menuJump":"列表",
                        "tableName":"dictionaryZhuanye"
                    }
                    ,
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "删除",
                            "修改"
                        ],
                        "menu":"公告类型管理",
                        "menuJump":"列表",
                        "tableName":"dictionaryGonggao"
                    }
                    ,
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "删除",
                            "修改"
                        ],
                        "menu":"组团活动类型管理",
                        "menuJump":"列表",
                        "tableName":"dictionaryHuodong"
                    }
                ],
                "menu":"基础数据管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "修改",
                            "删除"
                        ],
                        "menu":"公告管理",
                        "menuJump":"列表",
                        "tableName":"gonggao"
                    }
                ],
                "menu":"公告管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "修改",
                            "删除"
                        ],
                        "menu":"组团活动管理",
                        "menuJump":"列表",
                        "tableName":"huodong"
                    }
                    ,
                    {
                        "buttons":[
                            "查看",
                            "修改",
                            "删除"
                        ],
                        "menu":"组团活动留言管理",
                        "menuJump":"列表",
                        "tableName":"huodongLiuyan"
                    }
                    ,
                    {
                        "buttons":[
                            "查看",
                            "删除"
                        ],
                        "menu":"组团活动收藏管理",
                        "menuJump":"列表",
                        "tableName":"huodongCollection"
                    }
                    ,
                    {
                        "buttons":[
                            "导入导出",
                            "查看",
                            "删除"
                        ],
                        "menu":"组团活动报名管理",
                        "menuJump":"列表",
                        "tableName":"huodongOrder"
                    }
                ],
                "menu":"组团活动管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "修改",
                            "删除"
                        ],
                        "menu":"用户管理",
                        "menuJump":"列表",
                        "tableName":"yonghu"
                    }
                ],
                "menu":"用户管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "修改",
                            "删除"
                        ],
                        "menu":"活动管理员管理",
                        "menuJump":"列表",
                        "tableName":"huodongguanliyuan"
                    }
                ],
                "menu":"活动管理员管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "修改",
                            "删除"
                        ],
                        "menu":"轮播图管理",
                        "menuJump":"列表",
                        "tableName":"config"
                    }
                ],
                "menu":"轮播图信息"
            }
        ],
        "frontMenu":[],
        "hasBackLogin":"是",
        "hasBackRegister":"否",
        "hasFrontLogin":"否",
        "hasFrontRegister":"否",
        "roleName":"管理员",
        "tableName":"users"
    }
	,
	{
        "backMenu":[
            {
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "修改",
                            "删除"
                        ],
                        "menu":"公告管理",
                        "menuJump":"列表",
                        "tableName":"gonggao"
                    }
                ],
                "menu":"公告管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看",
                            "新增",
                            "修改",
                            "删除"
                        ],
                        "menu":"组团活动管理",
                        "menuJump":"列表",
                        "tableName":"huodong"
                    }
                    ,
                    {
                        "buttons":[
                            "查看",
                            "修改"
                        ],
                        "menu":"组团活动留言管理",
                        "menuJump":"列表",
                        "tableName":"huodongLiuyan"
                    }
                    ,
                    {
                        "buttons":[
                            "审核",
                            "导入导出",
                            "查看"
                        ],
                        "menu":"组团活动报名管理",
                        "menuJump":"列表",
                        "tableName":"huodongOrder"
                    }
                ],
                "menu":"组团活动管理"
            }
        ],
        "frontMenu":[],
        "hasBackLogin":"是",
        "hasBackRegister":"否",
        "hasFrontLogin":"否",
        "hasFrontRegister":"否",
        "roleName":"活动管理员管理",
        "tableName":"huodongguanliyuan"
    }
	,
	{
        "backMenu":[
            {
                "child":[
                    {
                        "buttons":[
                            "查看"
                        ],
                        "menu":"公告管理",
                        "menuJump":"列表",
                        "tableName":"gonggao"
                    }
                ],
                "menu":"公告管理"
            }
            ,{
                "child":[
                    {
                        "buttons":[
                            "查看"
                        ],
                        "menu":"组团活动留言管理",
                        "menuJump":"列表",
                        "tableName":"huodongLiuyan"
                    }
                    ,
                    {
                        "buttons":[
                            "查看",
                            "删除"
                        ],
                        "menu":"组团活动收藏管理",
                        "menuJump":"列表",
                        "tableName":"huodongCollection"
                    }
                    ,
                    {
                        "buttons":[
                            "查看"
                        ],
                        "menu":"组团活动报名管理",
                        "menuJump":"列表",
                        "tableName":"huodongOrder"
                    }
                ],
                "menu":"组团活动管理"
            }
        ],
        "frontMenu":[],
        "hasBackLogin":"是",
        "hasBackRegister":"否",
        "hasFrontLogin":"否",
        "hasFrontRegister":"否",
        "roleName":"用户",
        "tableName":"yonghu"
    }
]
    }
}
export default menu;