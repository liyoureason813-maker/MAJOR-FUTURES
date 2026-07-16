# MAJOR FUTURES V3.3.1

中英双语的大学专业、AI职业影响与A-Level课程匹配网站。

## 课程匹配规则

- A-Level Mathematics 与 Chinese 固定选择
- Chemistry / Economics 二选一
- Psychology / Further Mathematics / Biology / Business 四选一
- Physics 可按需要加选

## 专业详情内容

学生完成选课后，可以在同一个专业详情页中查看：

- 课程匹配度、课程优势与需要补足的部分
- 具体学习建议
- 4个不同的EPQ选题方向
- 4门线上公开课
- 4本不同的专业阅读书籍
- 夏校与学术活动建议
- AI高危区、骑线区和安全区
- 对应岗位、学历要求与申读建议

V3.3已检查28个专业的阅读清单，确保每个专业的4本书互不重复；竞赛建议板块已删除。

## 文件说明

- `index.html`：网站入口
- `styles.css`：页面样式
- `app.js`：专业与职业地图主体数据及交互
- `matcher.js`：A-Level课程匹配规则、建议数据及交互

## GitHub Pages更新

将以上4个文件上传到原GitHub仓库根目录并覆盖旧文件，提交后网站会自动重新发布，原网址保持不变。

## 提醒

匹配度用于比较课程组合与不同专业的衔接程度，不代表大学录取概率。申请时仍需核对目标大学和课程当年的科目要求。


## V3.3.1 更新说明

- 为 `styles.css`、`app.js` 和 `matcher.js` 增加版本参数，避免 GitHub Pages 或浏览器继续读取旧缓存。
- 页面右下角增加 `BUILD 3.3.1` 标记，便于确认线上版本是否已更新。
