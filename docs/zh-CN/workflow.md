# 6. 工作流（Workflow）

尽管在大多数场景下，网页采集通常可以通过单击一次来执行，但有时我们更希望能够定时或定期运行特定的采集任务。

在这种情况下，我们需要一个 **工作流（workflow）** 来自动化这些任务。

一个 **工作流（workflow）** 是由多个采集器组合而成的。运行一个 **工作流（workflow）** 将执行其中包含的所有采集器，您将能够 **整合** 所有采集器的数据进行进一步处理。

接下来，我们将介绍工作流的几个关键功能，包括定时执行、增量数据更新到绑定的数据源，以及多个采集器的集成。

## 6.1 绑定工作流数据源

一个 **工作流（workflow）** 可以绑定到一个数据源。如果没有定义数据源，工作流第一次执行后会自动创建并绑定一个新的数据源。

<img src="../univer-clipsheet/assets/zh-CN/workflow/data_source_form.png" style="width: 400px; height: 300px; object-fit: contain;" />

> **注意：** 当 **工作流（workflow）** 绑定到数据源时，数据源的列将设置为该 **工作流（workflow）** 并且无法修改。（因为一旦数据源创建，其表结构是不可更改的。）

一旦 **工作流（workflow）** 绑定了数据源，工作流的输出数据将被追加到该数据源中，重复的行将被自动移除。

您可以自定义去重配置。

<img src="../univer-clipsheet/assets/zh-CN/workflow/remove_duplicates_form.png" style="width: 400px; height: 300px; object-fit: contain;" />

## 6.2 与采集器结合

一个 **工作流（workflow）** 是由多个采集器共同工作组成的。

您需要根据构成 **工作流（workflow）** 的采集器来定义工作流。例如，在以下配置中，我们将 **工作流（workflow）** 配置为包括 `Amazon Scraper` 和 `Google Maps Scraper`。

<img src="../univer-clipsheet/assets/zh-CN/workflow/data_merge_form_scraper.png" style="width: 400px; height: 300px; object-fit: contain;" />

接下来，我们需要确定 **工作流（workflow）** 中的每一列与每个 **采集器（scraper）** 中的相应列如何映射。

<img src="../univer-clipsheet/assets/zh-CN/workflow/data_merge_form_column.png" style="width: 400px; height: 300px; object-fit: contain;" />

## 6.3 定时执行

对于定时执行，我们提供了高度可定制的调度配置，允许您设置 **工作流（workflow）** 运行的具体时间。

<img src="../univer-clipsheet/assets/zh-CN/workflow/timer_form.png" style="width: 400px; height: 300px; object-fit: contain;" />

工作流的定时执行是一个强大的功能，帮助您满足网页采集的需求。
