# 5. 数据下钻

当一个采集的表格包含 URL 类型的列时，相应的列将显示一个 **数据下钻** 图标。

<img src="/assets/zh-CN/data-drill-down/column_drill_down_example.png" style="width: 280px; height: 500px; object-fit: contain;" />

## 5.1 创建数据下钻列

点击该按钮将导航到该 URL 的详情页。

如下面的图片所示，您可以在详情页上选择三个高亮的块。这些选中的块可以保存为您用于 URL 列的数据下钻配置。

<img src="/assets/zh-CN/data-drill-down/drill_down_detail_page.png" style="width: 600px; height: 400px; object-fit: contain;" />

返回到 `采集器（Scraper）` 表单，您将看到在 URL 列下方创建的 **数据下钻** 列。

<img src="/assets/zh-CN/data-drill-down/table_drill_down_columns.png" style="width: 260px; height: 400px; object-fit: contain;" />

## 5.2 获取数据下钻数据

当您运行包含 **数据下钻** 列的 `采集器（Scraper）` 时，它将自动访问 URL 列中的每个 URL。对于每个访问的 URL，它将根据您在 **数据下钻** 配置中选择的块采集数据。

如下面的图片所示，您可以看到 Clipsheet 已成功采集了我们之前选择的三个 **数据下钻** 列的数据。

<img src="/assets/zh-CN/data-drill-down/data_with_drill_down_columns.png" style="width: 800px; height: 380px; object-fit: contain;" />
