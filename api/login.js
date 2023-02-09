var app = require('../appBase.js')
// 接口
app.post('/wa/scrm/management/login', function (req, res) {
  const result = {
    code: 0,
    data: {
      name: '124',
    },
  }
  res.send(result)
})
app.get('/wa/scrm/management/getUserInfo', function (req, res) {
  const result = {
    code: 0,
    msg: '',
    data: {
      id: 7,
      groupId: '1013',
      groupName: 'happy',
      username: 'chentao',
      firstname: '12',
      lastname: '3a111111',
      avatar: null,
      phone: '32432',
      region: '中国',
      email: '324',
      job: null,
      role: 1,
      roleName: null,
      tenantId: 1,
      status: 1,
      permissions: [
        {
          index: null,
          data: {
            id: 1,
            isDeleted: 0,
            creatorId: 1,
            createTime: '2022-09-17 16:59:41',
            updaterId: 1,
            updateTime: '2022-09-17 16:59:41',
            name: 'Tickets',
            belongPage: null,
            belongPageName: null,
            belongSystem: 1,
            permissionType: 0,
            pageIndex: null,
            permissionDesc: '联系人列表',
            usersDesc: '',
            pagePath: 'Tickets',
          },
          children: [
            {
              index: null,
              data: {
                id: 8,
                isDeleted: 0,
                creatorId: 29,
                createTime: '2022-09-21 15:37:07',
                updaterId: null,
                updateTime: '2022-09-21 15:37:07',
                name: 'TicketsSearch',
                belongPage: 1,
                belongPageName: 'Tickets',
                belongSystem: 1,
                permissionType: 1,
                pageIndex: null,
                permissionDesc: '工单查询接口',
                usersDesc: null,
                pagePath: 'TicketsSearch',
              },
              children: null,
            },
            {
              index: null,
              data: {
                id: 66,
                isDeleted: 0,
                creatorId: 29,
                createTime: '2022-09-21 16:07:27',
                updaterId: null,
                updateTime: '2022-09-21 16:07:27',
                name: 'Actions',
                belongPage: 1,
                belongPageName: 'Tickets',
                belongSystem: 1,
                permissionType: 0,
                pageIndex: null,
                permissionDesc: 'Tickets页面操作权限',
                usersDesc: null,
                pagePath: 'Actions',
              },
              children: null,
            },
          ],
        },
        {
          index: null,
          data: {
            id: 2,
            isDeleted: 0,
            creatorId: null,
            createTime: '2022-09-16 12:16:45',
            updaterId: null,
            updateTime: '2022-09-16 12:16:45',
            name: 'Contacts',
            belongPage: null,
            belongPageName: null,
            belongSystem: 1,
            permissionType: 0,
            pageIndex: null,
            permissionDesc: '客户列表',
            usersDesc: '',
            pagePath: 'Contacts',
          },
          children: [
            {
              index: null,
              data: {
                id: 61,
                isDeleted: 0,
                creatorId: 29,
                createTime: '2022-09-21 15:38:53',
                updaterId: null,
                updateTime: '2022-09-21 15:38:53',
                name: 'ContactsSearch',
                belongPage: 2,
                belongPageName: 'Contacts',
                belongSystem: 1,
                permissionType: 1,
                pageIndex: null,
                permissionDesc: '联系人查询接口',
                usersDesc: null,
                pagePath: 'ContactsSearch',
              },
              children: null,
            },
            {
              index: null,
              data: {
                id: 67,
                isDeleted: 0,
                creatorId: 29,
                createTime: '2022-09-21 16:08:16',
                updaterId: null,
                updateTime: '2022-09-21 16:08:16',
                name: 'Actions',
                belongPage: 2,
                belongPageName: 'Contacts',
                belongSystem: 1,
                permissionType: 0,
                pageIndex: null,
                permissionDesc: 'Contacts页面操作权限',
                usersDesc: '',
                pagePath: null,
              },
              children: null,
            },
          ],
        },
        {
          index: null,
          data: {
            id: 3,
            isDeleted: 0,
            creatorId: null,
            createTime: '2022-09-21 16:34:26',
            updaterId: null,
            updateTime: '2022-09-21 16:34:26',
            name: 'Member',
            belongPage: null,
            belongPageName: null,
            belongSystem: 1,
            permissionType: 0,
            pageIndex: null,
            permissionDesc: '成员相关页面设置',
            usersDesc: null,
            pagePath: 'Member',
          },
          children: [
            {
              index: null,
              data: {
                id: 7,
                isDeleted: 0,
                creatorId: 29,
                createTime: '2022-09-21 15:33:31',
                updaterId: null,
                updateTime: '2022-09-21 15:33:31',
                name: 'Buried',
                belongPage: 3,
                belongPageName: 'Member',
                belongSystem: 1,
                permissionType: 0,
                pageIndex: null,
                permissionDesc: '日志页面(数据埋点)',
                usersDesc: null,
                pagePath: null,
              },
              children: [
                {
                  index: null,
                  data: {
                    id: 1004,
                    isDeleted: 0,
                    creatorId: null,
                    createTime: '2022-09-21 18:06:44',
                    updaterId: null,
                    updateTime: '2022-09-21 18:06:44',
                    name: 'Actions',
                    belongPage: 7,
                    belongPageName: 'Buried',
                    belongSystem: 1,
                    permissionType: 0,
                    pageIndex: null,
                    permissionDesc: '日志页面操作权限',
                    usersDesc: null,
                    pagePath: 'Actions',
                  },
                  children: null,
                },
              ],
            },
            {
              index: null,
              data: {
                id: 62,
                isDeleted: 0,
                creatorId: 29,
                createTime: '2022-09-21 15:51:06',
                updaterId: null,
                updateTime: '2022-09-21 15:51:06',
                name: 'MemberManagement',
                belongPage: 3,
                belongPageName: 'Member',
                belongSystem: 1,
                permissionType: 0,
                pageIndex: null,
                permissionDesc: '用户管理页面',
                usersDesc: null,
                pagePath: 'MemberManagement',
              },
              children: [
                {
                  index: null,
                  data: {
                    id: 1002,
                    isDeleted: 0,
                    creatorId: 29,
                    createTime: '2022-09-21 16:41:28',
                    updaterId: null,
                    updateTime: '2022-09-21 16:41:28',
                    name: 'Actions',
                    belongPage: 62,
                    belongPageName: 'MemberManagement',
                    belongSystem: 1,
                    permissionType: 0,
                    pageIndex: null,
                    permissionDesc: '管理页面操作权限',
                    usersDesc: null,
                    pagePath: 'Actions',
                  },
                  children: null,
                },
              ],
            },
            {
              index: null,
              data: {
                id: 68,
                isDeleted: 0,
                creatorId: 29,
                createTime: '2022-09-21 16:23:29',
                updaterId: null,
                updateTime: '2022-09-21 16:23:29',
                name: 'TagManagement',
                belongPage: 3,
                belongPageName: 'MemberManagement',
                belongSystem: 1,
                permissionType: 0,
                pageIndex: null,
                permissionDesc: '标签管理页面',
                usersDesc: null,
                pagePath: 'TagManagement',
              },
              children: [
                {
                  index: null,
                  data: {
                    id: 1003,
                    isDeleted: 0,
                    creatorId: 29,
                    createTime: '2022-09-21 16:41:49',
                    updaterId: null,
                    updateTime: '2022-09-21 16:41:49',
                    name: 'Actions',
                    belongPage: 68,
                    belongPageName: 'TagManagement',
                    belongSystem: 1,
                    permissionType: 0,
                    pageIndex: null,
                    permissionDesc: '标签页面操作权限',
                    usersDesc: null,
                    pagePath: 'Actions',
                  },
                  children: null,
                },
              ],
            },
            {
              index: null,
              data: {
                id: 1027,
                isDeleted: 0,
                creatorId: 27,
                createTime: '2022-10-13 10:08:48',
                updaterId: null,
                updateTime: '2022-10-13 10:08:48',
                name: 'reminderSettings',
                belongPage: 3,
                belongPageName: 'Member',
                belongSystem: 1,
                permissionType: 0,
                pageIndex: null,
                permissionDesc: null,
                usersDesc: null,
                pagePath: null,
              },
              children: [
                {
                  index: null,
                  data: {
                    id: 1030,
                    isDeleted: 0,
                    creatorId: 27,
                    createTime: '2022-10-13 10:09:28',
                    updaterId: null,
                    updateTime: '2022-10-13 10:09:28',
                    name: 'actions',
                    belongPage: 1027,
                    belongPageName: 'reminderSettings',
                    belongSystem: 1,
                    permissionType: 0,
                    pageIndex: null,
                    permissionDesc: null,
                    usersDesc: null,
                    pagePath: null,
                  },
                  children: null,
                },
              ],
            },
          ],
        },
        {
          index: null,
          data: {
            id: 4,
            isDeleted: 0,
            creatorId: 29,
            createTime: '2022-09-21 15:31:59',
            updaterId: null,
            updateTime: '2022-09-21 15:31:59',
            name: 'Template',
            belongPage: null,
            belongPageName: null,
            belongSystem: 1,
            permissionType: 0,
            pageIndex: null,
            permissionDesc: '模板管理页面',
            usersDesc: '',
            pagePath: null,
          },
          children: [
            {
              index: null,
              data: {
                id: 74,
                isDeleted: 0,
                creatorId: 29,
                createTime: '2022-09-21 15:32:31',
                updaterId: null,
                updateTime: '2022-09-21 15:32:31',
                name: 'QuickReply',
                belongPage: 4,
                belongPageName: 'TemplateList',
                belongSystem: 1,
                permissionType: 0,
                pageIndex: null,
                permissionDesc: '快速回复页面',
                usersDesc: '',
                pagePath: null,
              },
              children: [
                {
                  index: null,
                  data: {
                    id: 1007,
                    isDeleted: 0,
                    creatorId: 29,
                    createTime: '2022-09-21 18:33:14',
                    updaterId: null,
                    updateTime: '2022-09-21 18:33:14',
                    name: 'Actions',
                    belongPage: 74,
                    belongPageName: 'QuickReply',
                    belongSystem: 1,
                    permissionType: 0,
                    pageIndex: null,
                    permissionDesc: '快速回复页面操作权限',
                    usersDesc: null,
                    pagePath: 'Actions',
                  },
                  children: null,
                },
              ],
            },
            {
              index: null,
              data: {
                id: 1006,
                isDeleted: 0,
                creatorId: 29,
                createTime: '2022-09-21 18:30:29',
                updaterId: null,
                updateTime: '2022-09-21 18:30:29',
                name: 'TemplateList',
                belongPage: 4,
                belongPageName: 'Template',
                belongSystem: 1,
                permissionType: 0,
                pageIndex: null,
                permissionDesc: '模板列表页面',
                usersDesc: null,
                pagePath: 'Template List',
              },
              children: [
                {
                  index: null,
                  data: {
                    id: 1008,
                    isDeleted: 0,
                    creatorId: 29,
                    createTime: '2022-09-21 18:33:42',
                    updaterId: null,
                    updateTime: '2022-09-21 18:33:42',
                    name: 'Actions',
                    belongPage: 1006,
                    belongPageName: 'TemplateList',
                    belongSystem: 1,
                    permissionType: 0,
                    pageIndex: null,
                    permissionDesc: '模板列表页面操作权限',
                    usersDesc: null,
                    pagePath: 'Actions',
                  },
                  children: null,
                },
              ],
            },
            {
              index: null,
              data: {
                id: 1028,
                isDeleted: 0,
                creatorId: 27,
                createTime: '2022-10-13 10:09:04',
                updaterId: null,
                updateTime: '2022-10-13 10:09:04',
                name: 'AutoReply',
                belongPage: 4,
                belongPageName: 'Template',
                belongSystem: 1,
                permissionType: 0,
                pageIndex: null,
                permissionDesc: null,
                usersDesc: null,
                pagePath: null,
              },
              children: [
                {
                  index: null,
                  data: {
                    id: 1029,
                    isDeleted: 0,
                    creatorId: 27,
                    createTime: '2022-10-13 10:09:15',
                    updaterId: null,
                    updateTime: '2022-10-13 10:09:15',
                    name: 'actions',
                    belongPage: 1028,
                    belongPageName: 'AutoReply',
                    belongSystem: 1,
                    permissionType: 0,
                    pageIndex: null,
                    permissionDesc: null,
                    usersDesc: null,
                    pagePath: null,
                  },
                  children: null,
                },
              ],
            },
          ],
        },
        {
          index: 5,
          data: {
            id: 1009,
            isDeleted: 0,
            creatorId: 4,
            createTime: '2022-09-24 10:28:07',
            updaterId: null,
            updateTime: '2022-09-24 10:28:07',
            name: 'Messaging',
            belongPage: null,
            belongPageName: null,
            belongSystem: 1,
            permissionType: 0,
            pageIndex: 5,
            permissionDesc: '消息群发',
            usersDesc: null,
            pagePath: '/Messaging',
          },
          children: [
            {
              index: null,
              data: {
                id: 1010,
                isDeleted: 0,
                creatorId: 4,
                createTime: '2022-09-24 10:28:45',
                updaterId: null,
                updateTime: '2022-09-24 10:28:45',
                name: 'actions',
                belongPage: 1009,
                belongPageName: 'Messaging',
                belongSystem: 1,
                permissionType: 0,
                pageIndex: null,
                permissionDesc: '操作权限',
                usersDesc: null,
                pagePath: null,
              },
              children: null,
            },
          ],
        },
        {
          index: null,
          data: {
            id: 1011,
            isDeleted: 0,
            creatorId: 27,
            createTime: '2022-09-24 14:58:34',
            updaterId: null,
            updateTime: '2022-09-24 14:58:34',
            name: 'Session',
            belongPage: null,
            belongPageName: null,
            belongSystem: 1,
            permissionType: 0,
            pageIndex: null,
            permissionDesc: '会话统计',
            usersDesc: null,
            pagePath: '/Session',
          },
          children: [
            {
              index: null,
              data: {
                id: 6,
                isDeleted: 0,
                creatorId: 29,
                createTime: '2022-09-21 15:34:17',
                updaterId: null,
                updateTime: '2022-09-21 15:34:17',
                name: 'Statistics',
                belongPage: 1011,
                belongPageName: 'Session',
                belongSystem: 1,
                permissionType: 0,
                pageIndex: null,
                permissionDesc: '数据报表页面',
                usersDesc: '6',
                pagePath: null,
              },
              children: [
                {
                  index: null,
                  data: {
                    id: 1018,
                    isDeleted: 0,
                    creatorId: 27,
                    createTime: '2022-09-28 10:12:04',
                    updaterId: null,
                    updateTime: '2022-09-28 10:12:04',
                    name: 'actions',
                    belongPage: 6,
                    belongPageName: 'Statistics',
                    belongSystem: 1,
                    permissionType: 0,
                    pageIndex: null,
                    permissionDesc: null,
                    usersDesc: null,
                    pagePath: null,
                  },
                  children: null,
                },
              ],
            },
            {
              index: null,
              data: {
                id: 1017,
                isDeleted: 0,
                creatorId: 27,
                createTime: '2022-09-28 10:11:48',
                updaterId: null,
                updateTime: '2022-09-28 10:11:48',
                name: 'RecordSession',
                belongPage: 1011,
                belongPageName: 'Session',
                belongSystem: 1,
                permissionType: 0,
                pageIndex: null,
                permissionDesc: null,
                usersDesc: null,
                pagePath: '/RecordSession',
              },
              children: [
                {
                  index: null,
                  data: {
                    id: 1019,
                    isDeleted: 0,
                    creatorId: 27,
                    createTime: '2022-09-28 10:12:17',
                    updaterId: null,
                    updateTime: '2022-09-28 10:12:17',
                    name: 'actions',
                    belongPage: 1017,
                    belongPageName: 'RecordSession',
                    belongSystem: 1,
                    permissionType: 0,
                    pageIndex: null,
                    permissionDesc: null,
                    usersDesc: null,
                    pagePath: null,
                  },
                  children: null,
                },
              ],
            },
          ],
        },
        {
          index: null,
          data: {
            id: 1012,
            isDeleted: 0,
            creatorId: 27,
            createTime: '2022-09-28 10:06:58',
            updaterId: null,
            updateTime: '2022-09-28 10:06:58',
            name: 'UserAnalysis',
            belongPage: null,
            belongPageName: null,
            belongSystem: 1,
            permissionType: 0,
            pageIndex: null,
            permissionDesc: '用户分析',
            usersDesc: '',
            pagePath: '/UserAnalysis',
          },
          children: [
            {
              index: null,
              data: {
                id: 1013,
                isDeleted: 0,
                creatorId: 27,
                createTime: '2022-09-28 10:07:29',
                updaterId: null,
                updateTime: '2022-09-28 10:07:29',
                name: 'Attribute',
                belongPage: 1012,
                belongPageName: 'UserAnalysis',
                belongSystem: 1,
                permissionType: 0,
                pageIndex: null,
                permissionDesc: '用户属性列表',
                usersDesc: null,
                pagePath: '/Attribute',
              },
              children: [
                {
                  index: null,
                  data: {
                    id: 1015,
                    isDeleted: 0,
                    creatorId: 27,
                    createTime: '2022-09-28 10:08:34',
                    updaterId: null,
                    updateTime: '2022-09-28 10:08:34',
                    name: 'actions',
                    belongPage: 1013,
                    belongPageName: 'Attribute',
                    belongSystem: 1,
                    permissionType: 0,
                    pageIndex: null,
                    permissionDesc: null,
                    usersDesc: null,
                    pagePath: null,
                  },
                  children: null,
                },
              ],
            },
            {
              index: null,
              data: {
                id: 1014,
                isDeleted: 0,
                creatorId: 27,
                createTime: '2022-09-28 10:07:59',
                updaterId: null,
                updateTime: '2022-09-28 10:07:59',
                name: 'UserLabel',
                belongPage: 1012,
                belongPageName: 'UserAnalysis',
                belongSystem: 1,
                permissionType: 0,
                pageIndex: null,
                permissionDesc: '用户标签分析',
                usersDesc: null,
                pagePath: '/UserLabel',
              },
              children: [
                {
                  index: null,
                  data: {
                    id: 1016,
                    isDeleted: 0,
                    creatorId: 27,
                    createTime: '2022-09-28 10:08:47',
                    updaterId: null,
                    updateTime: '2022-09-28 10:08:47',
                    name: 'actions',
                    belongPage: 1014,
                    belongPageName: 'UserLabel',
                    belongSystem: 1,
                    permissionType: 0,
                    pageIndex: null,
                    permissionDesc: null,
                    usersDesc: null,
                    pagePath: null,
                  },
                  children: null,
                },
              ],
            },
            {
              index: null,
              data: {
                id: 1020,
                isDeleted: 0,
                creatorId: 27,
                createTime: '2022-09-29 17:58:00',
                updaterId: null,
                updateTime: '2022-09-29 17:58:00',
                name: 'UserGroup',
                belongPage: 1012,
                belongPageName: 'UserAnalysis',
                belongSystem: 1,
                permissionType: 0,
                pageIndex: null,
                permissionDesc: null,
                usersDesc: null,
                pagePath: null,
              },
              children: [
                {
                  index: null,
                  data: {
                    id: 1022,
                    isDeleted: 0,
                    creatorId: 27,
                    createTime: '2022-09-29 18:00:06',
                    updaterId: null,
                    updateTime: '2022-09-29 18:00:06',
                    name: 'actions',
                    belongPage: 1020,
                    belongPageName: 'userGroup',
                    belongSystem: 1,
                    permissionType: 0,
                    pageIndex: null,
                    permissionDesc: null,
                    usersDesc: null,
                    pagePath: null,
                  },
                  children: null,
                },
              ],
            },
            {
              index: null,
              data: {
                id: 1021,
                isDeleted: 0,
                creatorId: 27,
                createTime: '2022-09-29 17:58:15',
                updaterId: null,
                updateTime: '2022-09-29 17:58:15',
                name: 'BaseAttribute',
                belongPage: 1012,
                belongPageName: 'UserAnalysis',
                belongSystem: 1,
                permissionType: 0,
                pageIndex: null,
                permissionDesc: null,
                usersDesc: null,
                pagePath: null,
              },
              children: [
                {
                  index: null,
                  data: {
                    id: 1023,
                    isDeleted: 0,
                    creatorId: 27,
                    createTime: '2022-09-29 18:00:19',
                    updaterId: null,
                    updateTime: '2022-09-29 18:00:19',
                    name: 'actions',
                    belongPage: 1021,
                    belongPageName: 'BaseAttribute',
                    belongSystem: 1,
                    permissionType: 0,
                    pageIndex: null,
                    permissionDesc: null,
                    usersDesc: null,
                    pagePath: null,
                  },
                  children: null,
                },
              ],
            },
          ],
        },
        {
          index: null,
          data: {
            id: 1024,
            isDeleted: 0,
            creatorId: 27,
            createTime: '2022-10-13 10:07:44',
            updaterId: null,
            updateTime: '2022-10-13 10:07:44',
            name: 'Notification',
            belongPage: null,
            belongPageName: null,
            belongSystem: 1,
            permissionType: 0,
            pageIndex: null,
            permissionDesc: null,
            usersDesc: null,
            pagePath: null,
          },
          children: [
            {
              index: null,
              data: {
                id: 1025,
                isDeleted: 0,
                creatorId: 27,
                createTime: '2022-10-13 10:08:05',
                updaterId: null,
                updateTime: '2022-10-13 10:08:05',
                name: 'noReply',
                belongPage: 1024,
                belongPageName: 'Notification',
                belongSystem: 1,
                permissionType: 0,
                pageIndex: null,
                permissionDesc: null,
                usersDesc: null,
                pagePath: null,
              },
              children: [
                {
                  index: null,
                  data: {
                    id: 1026,
                    isDeleted: 0,
                    creatorId: 27,
                    createTime: '2022-10-13 10:08:27',
                    updaterId: null,
                    updateTime: '2022-10-13 10:08:27',
                    name: 'actions',
                    belongPage: 1025,
                    belongPageName: 'noReply',
                    belongSystem: 1,
                    permissionType: 0,
                    pageIndex: null,
                    permissionDesc: null,
                    usersDesc: null,
                    pagePath: null,
                  },
                  children: null,
                },
              ],
            },
            {
              index: null,
              data: {
                id: 1031,
                isDeleted: 0,
                creatorId: null,
                createTime: '2022-10-14 17:22:04',
                updaterId: null,
                updateTime: '2022-10-14 17:22:04',
                name: 'ReplyReminder',
                belongPage: 1024,
                belongPageName: 'Notification',
                belongSystem: 1,
                permissionType: 1,
                pageIndex: null,
                permissionDesc: '未回复提醒数据权限',
                usersDesc: null,
                pagePath: 'ReplyReminder',
              },
              children: [
                {
                  index: null,
                  data: {
                    id: 1032,
                    isDeleted: 0,
                    creatorId: 13,
                    createTime: '2022-10-14 18:46:16',
                    updaterId: null,
                    updateTime: '2022-10-14 18:46:16',
                    name: 'ReminderInAgent',
                    belongPage: 1031,
                    belongPageName: 'ReplyReminder',
                    belongSystem: 1,
                    permissionType: 1,
                    pageIndex: null,
                    permissionDesc: '未回复提醒下拉框',
                    usersDesc: null,
                    pagePath: 'ReminderInAgent',
                  },
                  children: null,
                },
              ],
            },
          ],
        },
        {
          index: null,
          data: {
            id: 1033,
            isDeleted: 0,
            creatorId: 27,
            createTime: '2022-10-27 16:31:23',
            updaterId: null,
            updateTime: '2022-10-27 16:31:23',
            name: 'SetWhatsApp',
            belongPage: null,
            belongPageName: null,
            belongSystem: 1,
            permissionType: 0,
            pageIndex: null,
            permissionDesc: null,
            usersDesc: null,
            pagePath: null,
          },
          children: [
            {
              index: null,
              data: {
                id: 1034,
                isDeleted: 0,
                creatorId: 27,
                createTime: '2022-10-27 16:31:50',
                updaterId: null,
                updateTime: '2022-10-27 16:31:50',
                name: 'Actions',
                belongPage: 1033,
                belongPageName: 'SetWhatsApp',
                belongSystem: 1,
                permissionType: 0,
                pageIndex: null,
                permissionDesc: null,
                usersDesc: null,
                pagePath: null,
              },
              children: null,
            },
          ],
        },
      ],
      waQrUrl: null,
    },
    success: true,
    sendMsgFlag: false,
  }
  res.send(result)
})
