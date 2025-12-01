---
title: GAS自动清理Gmail未读邮件
slug: gas-auto-clean-gmail
publishDate: 01 Dec 2025
---

Gmail 里躺着 1000+ 封未读邮件，需要自动化批量清理的方法。于是从 ChatGPT 那里第一次了解到 Google Apps Script（GAS），记录一下。

## 什么是 Google Apps Script

「Google Apps Script（GAS）是一种基于 JavaScript 的**云端脚本语言**，由 Google 开发，旨在为 Google Workspace（前称 G Suite）平台提供便捷的自动化、集成和扩展能力。简单来说，它是一种让用户能够编写代码来控制和连接 Google 服务（如 Gmail、Google Docs、Sheets、Calendar、Drive 等）的工具。」

## 如何用 GAS 自动批量清理 Gmail 未读邮件

1. 传送门：[https://script.google.com](https://script.google.com/)
2. 新建项目

![image 1](/my-blog/assets/gas-tutorial/image 1.png)

3. 编辑器 - 文件，新建一个脚本，粘贴以下代码：

![image 2](/my-blog/assets/gas-tutorial/image 2.png)

```jsx
function markAllEmailsAsRead() {
  const batchSize = 100; // 每次最多处理 100 个线程，超过会报错
  let threads;

  do {
    threads = GmailApp.search("is:unread", 0, batchSize);

    if (threads.length > 0) {
      GmailApp.markThreadsRead(threads);
      Logger.log(`已处理并标记为已读 ${threads.length} 封邮件`);
    }
  } while (threads.length > 0);

  Logger.log("所有未读邮件已标记为已读。");
}
```

4. 点击运行，执行日志会有 log 输出，等待脚本执行完毕即可

![image.png](/my-blog/assets/gas-tutorial/image.png)