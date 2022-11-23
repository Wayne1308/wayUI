import { DefaultTheme } from "vitepress";

export const sidebar: DefaultTheme.Sidebar = {
    "/pages/guide": [
        {
            text: "指南",
            items: [
                { text: "介绍", link: "/pages/guide/" },
                { text: "快速开始", link: "/pages/guide/quickstart" },
            ],
        },
    ],
    "/pages/demos": [
        {
            text: "通用基础组件",
            items: [
                { text: "示例组件", link: "/pages/demos/basic/button/",  },
            ],
        },
        {
            text: "通用业务组件",
            items: [
                { text: "通用组件 1", link: "/pages/demos/business/button/" },
            ],
        },
        {
            text: "高级业务组件",
            items: [
                { text: "高级组件 1", link: "/pages/demos/pro/button/" },
            ],
        },
    ],
};


