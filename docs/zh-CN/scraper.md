# 3. 采集器（Scraper）

在前面的章节中，我们学习了如何使用 Clipsheet 快速采集所需的表格。

然而，对于大规模网页采集需求，这种方法并不够。为了处理这种情况，我们需要自动化数据收集过程。这时我们需要的是 **采集器（Scraper）**！

<img src="../clipsheet/assets/zh-CN/shared/clipsheet_table_scraping_dialog.png" style="width: 400px; height: 200px; object-fit: contain;" />

在 `确认选择` 面板中，您会注意到页脚有一个 `创建采集器` 按钮。

## 3.1 网页采集自动化

点击该按钮会在侧边栏中打开 **采集器** 配置表单。

<img src="../clipsheet/assets/zh-CN/scraper/clipsheet_create_scraper_form.png" style="width: 340px; height: 600px; object-fit: contain;" />

我们提供了三种可调整的采集方式：`滚动（Scroll）`、`点击（Click）` 和 `翻页（Page）`。这些配置可以让你通过自定义采集过程来提取更多网页数据。

### 3.1.1 无限滚动

对于有无限滚动加载更多数据的页面，您可以使用 `滚动（Scroll）` **采集器** 来提取整个列表。

<img src="../clipsheet/assets/zh-CN/scraper/clipsheet_scraper_scroll_form.png" style="width: 300px; height: 200px; object-fit: contain;" />

### 3.1.2 点击加载更多数据或跳转到下一页

<img src="../clipsheet/assets/zh-CN/scraper/clipsheet_scraper_click_form.png" style="width: 300px; height: 200px; object-fit: contain;" />

对于需要点击按钮加载更多数据或跳转到下一页的页面，您可以使用 `点击（Click）` **采集器** 来获取所有数据。

### 3.1.3 翻页

<img src="../clipsheet/assets/zh-CN/scraper/clipsheet_scraper_page_form.png" style="width: 300px; height: 200px; object-fit: contain;" />

`翻页（Page）` 配置可以轻松采集分布在多个页面上的数据。

## 3.2 表格列

<img src="../clipsheet/assets/zh-CN/scraper/clipsheet_scraper_columns_of_table.png" style="width: 300px; height: 400px; object-fit: contain;" />

在这个表格中，我们列出了采集表格中的列，您可以对其进行自定义。您可以定义列名、删除列，并通过点击 `查看表格` 按钮预览表格数据。

## 3.3 保存您的采集器

配置完成后，您可以保存采集器，它将出现在弹出窗口中的采集器列表中。然后您可以 `启动` 采集器，开始网页采集并收集数据。

<img src="../clipsheet/assets/zh-CN/scraper/clipsheet_popup_scraper_list.png" style="width: 600px; height: 400px; object-fit: contain;" />

## 3.4 上传与导出

我们允许您将采集器导出为 JSON 文件，并导入其他人分享的采集器 JSON 文件，使您可以轻松使用这些采集器。

<img src="../clipsheet/assets/zh-CN/scraper/clipsheet_popup_scraper_upload_and_export.png" style="width: 600px; height: 400px; object-fit: contain;" />
