
# 5. Data Drill-Down

When a scraped table contains columns of the URL type, a **drill-down** icon will appear in the corresponding column.

<img src="../clipsheet/assets/en-US/data-drill-down/column_drill_down_example.png" style="width: 280px; height: 500px; object-fit: contain;" />

## 5.1 Create Drill-down columns

Clicking the button will navigate to the URL as a detail page.

As shown in the image below, you can select three highlighted blocks on the detail page. These selected blocks can be saved as your drill-down configuration for the URL column.

<img src="../clipsheet/assets/en-US/data-drill-down/drill_down_detail_page.png" style="width: 600px; height: 400px; object-fit: contain;" />

Returning to the `Scraper` form, you will see the **drill-down**-down columns created beneath the URL column.

<img src="../clipsheet/assets/en-US/data-drill-down/table_drill_down_columns.png" style="width: 260px; height: 400px; object-fit: contain;" />

## 5.2 Get Drill-down data

When you run the `Scraper` with drill-**drill-down** columns in the scraped table, it will automatically visit each URL in the URL column. For every visited URL, it will scrape the data based on the blocks you selected in the **drill-down**-down column configuration.

As shown in the picture below, You can see that Clipsheet has scraped the three **drill-down** columns we selected earlier.

<img src="../clipsheet/assets/en-US/data-drill-down/data_with_drill_down_columns.png" style="width: 800px; height: 380px; object-fit: contain;" />
