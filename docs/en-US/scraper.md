Here’s a polished and improved version of your writing:

---

# 3. Scraper

In the previous chapters, we learned how to quickly scrape the tables we need using Clipsheet.

However, this is not sufficient for large-scale web scraping requirements. To handle such scenarios, we need to automate the data collection process. What we need is a **Scraper**!

<img src="./assets/en-US/shared/clipsheet_table_scraping_dialog.png" style="width: 400px; height: 200px; object-fit: contain;" />

In the `Confirm Selection` panel, you’ll notice a `Create Scraper` button located in the footer.

## 3.1 Web Scraping Automation

Clicking this button will open the **Scraper** configuration form in the side panel.

<img src="./assets/en-US/scraper/clipsheet_create_scraper_form.png" style="width: 340px; height: 600px; object-fit: contain;" />

We provide three adaptable scraping methods: `Scroll`, `Click`, and `Page`. These configurations allow you to extract more data from a webpage by customizing the scraping process.

### 3.1.1 Infinite Scroll

For pages with infinite scrolling to load more data, you can use the `Scroll` **Scraper** to extract the entire list.

<img src="./assets/en-US/scraper/clipsheet_scraper_scroll_form.png" style="width: 300px; height: 200px; object-fit: contain;" />

### 3.1.2 Click to Load More Data or Navigate to the Next Page

<img src="./assets/en-US/scraper/clipsheet_scraper_click_form.png" style="width: 300px; height: 200px; object-fit: contain;" />

For pages that require clicking a button to load more data or navigate to the next page, you can use the `Click` **Scraper** to retrieve all the data.

### 3.1.3 Pagination

<img src="./assets/en-US/scraper/clipsheet_scraper_page_form.png" style="width: 300px; height: 200px; object-fit: contain;" />

The `Page` configuration makes it easy to scrape data that is divided across multiple pages.

## 3.2 Columns of table

<img src="./assets/en-US/scraper/clipsheet_scraper_columns_of_table.png" style="width: 300px; height: 400px; object-fit: contain;" />

In this table, we list the columns from the scraped table, allowing you to customize it. You can define column names, delete columns, and preview the table data by clicking the `View Table` button

## 3.3 Save your scraper

After configuring, you can save the scraper, and it will appear in the scraper list in the popup. You can then `start` the scraper to begin web scraping and collect the data.

<img src="./assets/en-US/scraper/clipsheet_popup_scraper_list.png" style="width: 600px; height: 400px; object-fit: contain;" />

## 3.4 Upload & Export

We allow you to export your scraper as a JSON file and import a scraper JSON file shared by others, making it easy for you to use the scraper.

<img src="./assets/en-US/scraper/clipsheet_popup_scraper_upload_and_export.png" style="width: 600px; height: 400px; object-fit: contain;" />
