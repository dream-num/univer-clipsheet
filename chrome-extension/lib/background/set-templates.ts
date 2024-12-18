import { ScraperService } from '@univer-clipsheet-core/scraper';
import { TableService } from '@univer-clipsheet-core/table';
import type { Injector } from '@wendellhu/redi';

export async function setTemplate(injector: Injector) {
    const tableService = injector.get(TableService);
    const scraperService = injector.get(ScraperService);

    const tables = [
        {
            text: 'Results\nCheck each product page for other buying options.\nOverall Pick\nHP 14" Ultral Light Laptop for Students and Business, Intel Quad-Core, 8GB RAM, 192GB Storage(64GB eMMC+128GB Ghost Manta SD Card), 1 Year Office 365, USB C, Win 11 S\n4.1 out of 5 stars\n 1,993\n6K+ bought in past month\n$265.99\n$265\n.\n99\nDelivery Sat, Dec 28\nShips to Canada\nAdd to cart\nASUS Chromebook CM14 Laptop, 14" HD Anti-Glare Display (1366x768), MediaTek Kompanio 520, 4GB RAM, 64GB eMMC, ChromeOS, Gray, CM1402CM2A-DS44, Gravity Grey\n4.2 out of 5 stars\n 1,130\n3K+ bought in past month\n$157.00\n$157\n.\n00 List: \n$279.99\n$279.99\nDelivery Sat, Dec 28\nShips to Canada\nAdd to cart\nMore Buying Choices\n$136.22(30+ used & new offers)\nBest Seller\nHP 14 Laptop, Intel Celeron N4020, 4 GB RAM, 64 GB Storage, 14-inch Micro-edge HD Display, Windows 11 Home, Thin & Portable, 4K Graphics, One Year of Microsoft 365 (14-dq0040nr, Snowflake White)\n4.0 out of 5 stars\n 1,988\n5K+ bought in past month\n$179.87\n$179\n.\n87 List: \n$209.99\n$209.99\nDelivery Sat, Dec 28\nShips to Canada\nOnly 14 left in stock - order soon.\nAdd to cart\nMore Buying Choices\n$148.99(53+ used & new offers)\nDell Inspiron Touchscreen Laptop, 15.6" Business & Student Laptop Computer, Windows 11 Pro Laptop 32GB RAM 1TB SSD, Intel i5-1155G7 Processor, Full HD IPS Display, Numeric Keypad, HDMI, Carbon Black\n4.1 out of 5 stars\n 99\n1K+ bought in past month\n$498.00\n$498\n.\n00 List: \n$649.99\n$649.99\n$12.02 delivery\nShips to Canada\nAdd to cart\nMore Buying Choices\n$439.99(7+ used & new offers)\nASUS E410 Intel Celeron N4020 4GB 64GB 14-Inch HD LED Win 10 Laptop (Star Black)\nOptions:\n2 capacities\n2 capacities\n4.0 out of 5 stars\n 699\n2K+ bought in past month\n$144.00\n$144\n.\n00\n$11.23 delivery\nShips to Canada\nOnly 3 left in stock - order soon.\nAdd to cart\nMore Buying Choices\n$129.90(28+ used & new offers)\nHP Stream 14" HD BrightView Laptop, Intel Celeron N4120, 16GB RAM, 288GB Storage (128GB eMMC + 160GB Docking Station Set), Intel UHD Graphics, 720p Webcam, Wi-Fi, 1 Year Office 365, Win 11 S, Silver\nOptions:\n4 capacities\n4 capacities\n4.3 out of 5 stars\n 2,084\n7K+ bought in past month\n$309.00\n$309\n.\n00 List: \n$399.00\n$399.00\nDelivery Sat, Dec 28\nShips to Canada\nOnly 15 left in stock - order soon.\nAdd to cart\n15.6" Laptop Computer,16GB RAM 512GB SSD, Intel Celeron Quad-Core N5095 Processor, Laptop Computers with FHD IPS 1920x1080 Display,2.4/5G WiFi, Bluetooth, Type-C, Mini HDMI, USB 3.0\n5.0 out of 5 stars\n 12\n100+ bought in past month\n$209.99\n$209\n.\n99 List: \n$289.99\n$289.99\n$11.38 delivery\nShips to Canada\nAdd to cart\nHP Portable Laptop, Student and Business, 14" HD Display, Intel Quad-Core N4120, 8GB DDR4 RAM, 64GB eMMC, 1 Year Office 365, Webcam, RJ-45, HDMI, Wi-Fi, Windows 11 Home, Silver\nOptions:\n9 capacities\n9 capacities\n4.0 out of 5 stars\n 1,830\n1K+ bought in past month\n$198.92\n$198\n.\n92 List: \n$269.00\n$269.00\n$11.38 delivery\nShips to Canada\nOnly 4 left in stock - order soon.\nAdd to cart\nMore Buying Choices\n$98.99(16 used & new offers)\n+1\n16.0-inch Laptop, 16GB DDR4 512GB SSD, Windows 11 Laptop with Intel 12th Quad-Core Processor(Up to 3.6GHz), 1920P FHD Display, Metal Shell, WiFi 6, USB3.2, Type_C, Long Battery Life\n4.4 out of 5 stars\n 21\n$389.99\n$389\n.\n99 List: \n$1,399.99\n$1,399.99\nSave 5% with coupon\n$12.02 delivery\nShips to Canada\nAdd to cart\n+1 colors/patterns\nHP Newest 14" HD Laptop, Windows 11, Intel Celeron Dual-Core Processor Up to 2.60GHz, 4GB RAM, 64GB SSD, Webcam, Dale Pink(Renewed) (Dale Pink)\n4.2 out of 5 stars\n 2,168\n2K+ bought in past month\n$167.98\n$167\n.\n98\nDelivery Sat, Dec 28\nShips to Canada\n 1 sustainability feature\nSee options\nLenovo V15 Business Laptop Computer, 15.6" FHD Display, Intel Dual-Core CPU, 32GB DDR4 RAM, 1TB PCIe SSD, WiFi 6, Bluetooth 5.2, RJ-45, Type-C, HDMI, Numeric Keypad, Black, Windows 11 Pro, Tichang\nOptions:\n5 capacities\n5 capacities\n4.9 out of 5 stars\n 12\n$799.00\n$799\n.\n00\nSave 5% with coupon\nDelivery Sat, Dec 28\nShips to Canada\nAdd to cart\nHP 14" Laptop Stream Ultral Light for Students and Business, Quad-core Intel Celeron Processor, 8GB RAM, 256GB Storage (128GB eMMC+128GB SD Card), 1 Year Office 365, HDMI, Win 11\n4.3 out of 5 stars\n 28\n500+ bought in past month\n$269.98\n$269\n.\n98\n$11.38 delivery\nShips to Canada\nAdd to cart\nLenovo IdeaPad Slim 3 Chromebook - 2024 - Lightweight Laptop - Waves MaxxAudio® Speakers - 14" HD Display - HD 720p Camera - 4GB Memory - 64GB Storage - MediaTek Kompanio 520 - Abyss Blue\n4.4 out of 5 stars\n 16\n3K+ bought in past month\n$178.06\n$178\n.\n06 List: \n$219.99\n$219.99\nDelivery Sat, Dec 28\nShips to Canada\nAdd to cart\nMore Buying Choices\n$169.99(11+ used & new offers)\nGaming Laptop, 2024 Laptop Computer with Intel Quad-Core Processor(Up to 3.6GHz), 16GB DDR4 512GB SSD, Windows 11 Laptop, 15.6" IPS 1080P, Metal Shell, USB3.2, Long Battery Life\n5.0 out of 5 stars\n 1\n$1,499.99\n$1,499\n.\n99\nSave 5% with coupon\nDelivery Sat, Dec 28\nShips to Canada\nOnly 9 left in stock - order soon.\nAdd to cart\nMore Buying Choices\n$349.99(2 used & new offers)\nHP 15.6" Portable Laptop (Include 1 Year Microsoft 365), HD Display, Intel Quad-Core N200 Processor, 16GB RAM, 128GB Storage, Wi-Fi 5, Webcam, HDMI, Numeric Keypad, Windows 11 Home, Red\nOptions:\n5 capacities\n5 capacities\n4.2 out of 5 stars\n 748\n1K+ bought in past month\n$274.00\n$274\n.\n00\nDelivery Sat, Dec 28\nShips to Canada\nOnly 4 left in stock - order soon.\nAdd to cart\nMore Buying Choices\n$189.00(15+ used & new offers)\nDell Inspiron 3520 15.6" Touchscreen i7 Laptop, 15.6" FHD Touchscreen, Intel Core i7-1255U, 32GB RAM, 1TB SSD, Numeric Keypad, Webcam, SD Card Reader, HDMI, Wi-Fi, Windows 11 Home, Black\nOptions:\n2 capacities\n2 capacities\n4.8 out of 5 stars\n 7\n500+ bought in past month\n$602.97\n$602\n.\n97 Typical: \n$649.99\n$649.99\n$12.02 delivery\nShips to Canada\nAdd to cart\nMore Buying Choices\n$600.00(10 used & new offers)\nSponsored \nASUS ROG Strix G16 (2024) Gaming Laptop, 16” 16:10 FHD 165Hz Display, NVIDIA® GeForce RTX™ 4060, Intel Core i7-13650HX, 16GB DDR5, 1TB PCIe Gen4 SSD, Wi-Fi 6E, Windows 11, G614JV-AS74\n4.3 out of 5 stars\n 1,518\n8K+ bought in past month\n$1,262.73\n$1,262\n.\n73 List: \n$1,399.99\n$1,399.99\n$12.35 delivery Sat, Dec 28\nRelated searches\n\t\nlaptop\n\t\nlaptops on sale\n\t\nlaptop on sale clearance\n\t\ngaming laptop\n\t\nmacbook\n\t\nlaptop for college student\nPrevious12320Next\nBrands related to your search\nSponsored\nThe most intelligent and versatile 2-in-1 laptop.\nThe most intelligent and versatile 2-in-1 laptop.\nGift Smart This Season with Lenovo\nGift Smart This Season with Lenovo\nBuild for Apple Intelligence.*\nBuild for Apple Intelligence.*\nNeed help?\nVisit the help section or contact us',
            sheets: [
                {
                    sheetName: 'TableApproximation0',
                    columnName: [],
                    rows: [
                        {
                            cells: [
                                {
                                    type: 1,
                                    text: '',
                                    url: '',
                                },
                                {
                                    type: 1,
                                    text: '',
                                    url: '',
                                },
                                {
                                    type: 1,
                                    text: '',
                                    url: '',
                                },
                                {
                                    type: 1,
                                    text: '',
                                    url: '',
                                },
                                {
                                    type: 1,
                                    text: '',
                                    url: '',
                                },
                                {
                                    type: 1,
                                    text: '',
                                    url: '',
                                },
                                {
                                    type: 1,
                                    text: '',
                                    url: '',
                                },
                                {
                                    type: 1,
                                    text: '',
                                    url: '',
                                },
                                {
                                    type: 1,
                                    text: '',
                                    url: '',
                                },
                                {
                                    type: 1,
                                    text: '',
                                    url: '',
                                },
                                {
                                    type: 1,
                                    text: '',
                                    url: '',
                                },
                                {
                                    type: 1,
                                    text: '',
                                    url: '',
                                },
                                {
                                    type: 1,
                                    text: '',
                                    url: '',
                                },
                                {
                                    type: 1,
                                    text: '',
                                    url: '',
                                },
                                {
                                    type: 1,
                                    text: '',
                                    url: '',
                                },
                                {
                                    type: 1,
                                    text: '',
                                    url: '',
                                },
                            ],
                        },
                        {
                            cells: [
                                {
                                    type: 1,
                                    text: '4.1 out of 5 stars',
                                    url: '',
                                },
                                {
                                    type: 2,
                                    text: 'Remove',
                                    url: 'https://www.amazon.com/s?k=laptops&language=en_US&crid=XVD6QO3K5PQL&sprefix=lapto%2Caps%2C465&ref=nb_sb_noss_2#',
                                },
                                {
                                    type: 2,
                                    text: 'HP 14" Ultral Light Laptop for Students and Business, Intel Quad-Core, 8GB RAM, 192GB Storage(64GB eMMC+128GB Ghost Manta SD Card), 1 Year Office 365, USB C, Win 11 S',
                                    url: 'https://www.amazon.com/HP-Students-Business-Quad-Core-Storage/dp/B0B2D77YB8/ref=sr_1_1?crid=XVD6QO3K5PQL&dib=eyJ2IjoiMSJ9.1hzDXwuVanomZCsQzVSXdIsilgH9IBLaOvVZxJEpp7ob3ui1ite0yHiI9PVCYul6y_pX97Gy4pHvTh7yYJ4dtgCZMLrVoVKNNvFI_diGjv9bAKcWDk-Sj6sdrKm9gPpY4PDhXGPK0VIVIg741dShoFR-BZk4pFyNB8jGGXwHcfaAkfFIRTx-mgox1Ft_TBgnd2I9IRKL7EshG3vRiHanqw0PyxXGWd0__2EGhlr4pxo.yyvkuhdCOWy4Mi_DTO-cPlGE-3MF4Q2TtnuYIaUwQPI&dib_tag=se&keywords=laptops&qid=1734438898&sprefix=lapto%2Caps%2C465&sr=8-1',
                                },
                                {
                                    type: 2,
                                    text: '$265.99 $265 . 99',
                                    url: 'https://www.amazon.com/HP-Students-Business-Quad-Core-Storage/dp/B0B2D77YB8/ref=sr_1_1?crid=XVD6QO3K5PQL&dib=eyJ2IjoiMSJ9.1hzDXwuVanomZCsQzVSXdIsilgH9IBLaOvVZxJEpp7ob3ui1ite0yHiI9PVCYul6y_pX97Gy4pHvTh7yYJ4dtgCZMLrVoVKNNvFI_diGjv9bAKcWDk-Sj6sdrKm9gPpY4PDhXGPK0VIVIg741dShoFR-BZk4pFyNB8jGGXwHcfaAkfFIRTx-mgox1Ft_TBgnd2I9IRKL7EshG3vRiHanqw0PyxXGWd0__2EGhlr4pxo.yyvkuhdCOWy4Mi_DTO-cPlGE-3MF4Q2TtnuYIaUwQPI&dib_tag=se&keywords=laptops&qid=1734438898&sprefix=lapto%2Caps%2C465&sr=8-1',
                                },
                                {
                                    type: 2,
                                    text: '',
                                    url: 'https://www.amazon.com/HP-Students-Business-Quad-Core-Storage/dp/B0B2D77YB8/ref=sr_1_1?crid=XVD6QO3K5PQL&dib=eyJ2IjoiMSJ9.1hzDXwuVanomZCsQzVSXdIsilgH9IBLaOvVZxJEpp7ob3ui1ite0yHiI9PVCYul6y_pX97Gy4pHvTh7yYJ4dtgCZMLrVoVKNNvFI_diGjv9bAKcWDk-Sj6sdrKm9gPpY4PDhXGPK0VIVIg741dShoFR-BZk4pFyNB8jGGXwHcfaAkfFIRTx-mgox1Ft_TBgnd2I9IRKL7EshG3vRiHanqw0PyxXGWd0__2EGhlr4pxo.yyvkuhdCOWy4Mi_DTO-cPlGE-3MF4Q2TtnuYIaUwQPI&dib_tag=se&keywords=laptops&qid=1734438898&sprefix=lapto%2Caps%2C465&sr=8-1',
                                },
                                {
                                    type: 1,
                                    text: 'Add to cart',
                                    url: '',
                                },
                                {
                                    type: 1,
                                    text: 'Add to cart',
                                    url: '',
                                },
                                {
                                    type: 3,
                                    text: 'HP 14" Ultral Light Laptop for Students and Business, Intel Quad-Core, 8GB RAM, 192GB Storage(64GB eMMC+128GB Ghost Manta ...',
                                    url: 'https://m.media-amazon.com/images/I/81divYKpeTL._AC_UY218_.jpg',
                                },
                                {
                                    type: 1,
                                    text: 'Ships to Canada',
                                    url: '',
                                },
                                {
                                    type: 1,
                                    text: '4.1 out of 5 stars',
                                    url: '',
                                },
                                {
                                    type: 1,
                                    text: '$265.99',
                                    url: '',
                                },
                                {
                                    type: 1,
                                    text: '.',
                                    url: '',
                                },
                                {
                                    type: 1,
                                    text: '99',
                                    url: '',
                                },
                                {
                                    type: 1,
                                    text: '$',
                                    url: '',
                                },
                                {
                                    type: 1,
                                    text: '265 .',
                                    url: '',
                                },
                                {
                                    type: 1,
                                    text: '1,993',
                                    url: '',
                                },
                            ],
                        },
                        {
                            cells: [
                                {
                                    type: 1,
                                    text: '4.2 out of 5 stars',
                                    url: '',
                                },
                                {
                                    type: 2,
                                    text: 'Remove',
                                    url: 'https://www.amazon.com/s?k=laptops&language=en_US&crid=XVD6QO3K5PQL&sprefix=lapto%2Caps%2C465&ref=nb_sb_noss_2#',
                                },
                                {
                                    type: 2,
                                    text: 'ASUS Chromebook CM14 Laptop, 14" HD Anti-Glare Display (1366x768), MediaTek Kompanio 520, 4GB RAM, 64GB eMMC, ChromeOS, Gray, CM1402CM2A-DS44, Gravity Grey',
                                    url: 'https://www.amazon.com/ASUS-Chromebook-Anti-Glare-1366x768-CM1402CM2A-DS44/dp/B0CJS1399P/ref=sr_1_2?crid=XVD6QO3K5PQL&dib=eyJ2IjoiMSJ9.1hzDXwuVanomZCsQzVSXdIsilgH9IBLaOvVZxJEpp7ob3ui1ite0yHiI9PVCYul6y_pX97Gy4pHvTh7yYJ4dtgCZMLrVoVKNNvFI_diGjv9bAKcWDk-Sj6sdrKm9gPpY4PDhXGPK0VIVIg741dShoFR-BZk4pFyNB8jGGXwHcfaAkfFIRTx-mgox1Ft_TBgnd2I9IRKL7EshG3vRiHanqw0PyxXGWd0__2EGhlr4pxo.yyvkuhdCOWy4Mi_DTO-cPlGE-3MF4Q2TtnuYIaUwQPI&dib_tag=se&keywords=laptops&qid=1734438898&sprefix=lapto%2Caps%2C465&sr=8-2',
                                },
                                {
                                    type: 2,
                                    text: '$157.00 $157 . 00 List:  $279.99 $279.99',
                                    url: 'https://www.amazon.com/ASUS-Chromebook-Anti-Glare-1366x768-CM1402CM2A-DS44/dp/B0CJS1399P/ref=sr_1_2?crid=XVD6QO3K5PQL&dib=eyJ2IjoiMSJ9.1hzDXwuVanomZCsQzVSXdIsilgH9IBLaOvVZxJEpp7ob3ui1ite0yHiI9PVCYul6y_pX97Gy4pHvTh7yYJ4dtgCZMLrVoVKNNvFI_diGjv9bAKcWDk-Sj6sdrKm9gPpY4PDhXGPK0VIVIg741dShoFR-BZk4pFyNB8jGGXwHcfaAkfFIRTx-mgox1Ft_TBgnd2I9IRKL7EshG3vRiHanqw0PyxXGWd0__2EGhlr4pxo.yyvkuhdCOWy4Mi_DTO-cPlGE-3MF4Q2TtnuYIaUwQPI&dib_tag=se&keywords=laptops&qid=1734438898&sprefix=lapto%2Caps%2C465&sr=8-2',
                                },
                                {
                                    type: 2,
                                    text: '',
                                    url: 'https://www.amazon.com/ASUS-Chromebook-Anti-Glare-1366x768-CM1402CM2A-DS44/dp/B0CJS1399P/ref=sr_1_2?crid=XVD6QO3K5PQL&dib=eyJ2IjoiMSJ9.1hzDXwuVanomZCsQzVSXdIsilgH9IBLaOvVZxJEpp7ob3ui1ite0yHiI9PVCYul6y_pX97Gy4pHvTh7yYJ4dtgCZMLrVoVKNNvFI_diGjv9bAKcWDk-Sj6sdrKm9gPpY4PDhXGPK0VIVIg741dShoFR-BZk4pFyNB8jGGXwHcfaAkfFIRTx-mgox1Ft_TBgnd2I9IRKL7EshG3vRiHanqw0PyxXGWd0__2EGhlr4pxo.yyvkuhdCOWy4Mi_DTO-cPlGE-3MF4Q2TtnuYIaUwQPI&dib_tag=se&keywords=laptops&qid=1734438898&sprefix=lapto%2Caps%2C465&sr=8-2',
                                },
                                {
                                    type: 1,
                                    text: 'Add to cart',
                                    url: '',
                                },
                                {
                                    type: 1,
                                    text: 'List:  $279.99 $279.99',
                                    url: '',
                                },
                                {
                                    type: 3,
                                    text: 'ASUS Chromebook CM14 Laptop, 14" HD Anti-Glare Display (1366x768), MediaTek Kompanio 520, 4GB RAM, 64GB eMMC, ChromeOS, Gr...',
                                    url: 'https://m.media-amazon.com/images/I/616aCuRtnpL._AC_UY218_.jpg',
                                },
                                {
                                    type: 1,
                                    text: 'Ships to Canada',
                                    url: '',
                                },
                                {
                                    type: 1,
                                    text: '4.2 out of 5 stars',
                                    url: '',
                                },
                                {
                                    type: 1,
                                    text: '$157.00',
                                    url: '',
                                },
                                {
                                    type: 1,
                                    text: '.',
                                    url: '',
                                },
                                {
                                    type: 1,
                                    text: '00',
                                    url: '',
                                },
                                {
                                    type: 1,
                                    text: '$',
                                    url: '',
                                },
                                {
                                    type: 1,
                                    text: '157 .',
                                    url: '',
                                },
                                {
                                    type: 1,
                                    text: '1,130',
                                    url: '',
                                },
                            ],
                        },
                        {
                            cells: [
                                {
                                    type: 1,
                                    text: '4.0 out of 5 stars',
                                    url: '',
                                },
                                {
                                    type: 2,
                                    text: 'Remove',
                                    url: 'https://www.amazon.com/s?k=laptops&language=en_US&crid=XVD6QO3K5PQL&sprefix=lapto%2Caps%2C465&ref=nb_sb_noss_2#',
                                },
                                {
                                    type: 2,
                                    text: 'HP 14 Laptop, Intel Celeron N4020, 4 GB RAM, 64 GB Storage, 14-inch Micro-edge HD Display, Windows 11 Home, Thin & Portable, 4K Graphics, One Year of Microsoft 365 (14-dq0040nr, Snowflake White)',
                                    url: 'https://www.amazon.com/HP-Micro-edge-Microsoft-14-dq0040nr-Snowflake/dp/B0947BJ67M/ref=sr_1_3?crid=XVD6QO3K5PQL&dib=eyJ2IjoiMSJ9.1hzDXwuVanomZCsQzVSXdIsilgH9IBLaOvVZxJEpp7ob3ui1ite0yHiI9PVCYul6y_pX97Gy4pHvTh7yYJ4dtgCZMLrVoVKNNvFI_diGjv9bAKcWDk-Sj6sdrKm9gPpY4PDhXGPK0VIVIg741dShoFR-BZk4pFyNB8jGGXwHcfaAkfFIRTx-mgox1Ft_TBgnd2I9IRKL7EshG3vRiHanqw0PyxXGWd0__2EGhlr4pxo.yyvkuhdCOWy4Mi_DTO-cPlGE-3MF4Q2TtnuYIaUwQPI&dib_tag=se&keywords=laptops&qid=1734438898&sprefix=lapto%2Caps%2C465&sr=8-3',
                                },
                                {
                                    type: 2,
                                    text: '$179.87 $179 . 87 List:  $209.99 $209.99',
                                    url: 'https://www.amazon.com/HP-Micro-edge-Microsoft-14-dq0040nr-Snowflake/dp/B0947BJ67M/ref=sr_1_3?crid=XVD6QO3K5PQL&dib=eyJ2IjoiMSJ9.1hzDXwuVanomZCsQzVSXdIsilgH9IBLaOvVZxJEpp7ob3ui1ite0yHiI9PVCYul6y_pX97Gy4pHvTh7yYJ4dtgCZMLrVoVKNNvFI_diGjv9bAKcWDk-Sj6sdrKm9gPpY4PDhXGPK0VIVIg741dShoFR-BZk4pFyNB8jGGXwHcfaAkfFIRTx-mgox1Ft_TBgnd2I9IRKL7EshG3vRiHanqw0PyxXGWd0__2EGhlr4pxo.yyvkuhdCOWy4Mi_DTO-cPlGE-3MF4Q2TtnuYIaUwQPI&dib_tag=se&keywords=laptops&qid=1734438898&sprefix=lapto%2Caps%2C465&sr=8-3',
                                },
                                {
                                    type: 2,
                                    text: '',
                                    url: 'https://www.amazon.com/HP-Micro-edge-Microsoft-14-dq0040nr-Snowflake/dp/B0947BJ67M/ref=sr_1_3?crid=XVD6QO3K5PQL&dib=eyJ2IjoiMSJ9.1hzDXwuVanomZCsQzVSXdIsilgH9IBLaOvVZxJEpp7ob3ui1ite0yHiI9PVCYul6y_pX97Gy4pHvTh7yYJ4dtgCZMLrVoVKNNvFI_diGjv9bAKcWDk-Sj6sdrKm9gPpY4PDhXGPK0VIVIg741dShoFR-BZk4pFyNB8jGGXwHcfaAkfFIRTx-mgox1Ft_TBgnd2I9IRKL7EshG3vRiHanqw0PyxXGWd0__2EGhlr4pxo.yyvkuhdCOWy4Mi_DTO-cPlGE-3MF4Q2TtnuYIaUwQPI&dib_tag=se&keywords=laptops&qid=1734438898&sprefix=lapto%2Caps%2C465&sr=8-3',
                                },
                                {
                                    type: 1,
                                    text: 'Add to cart',
                                    url: '',
                                },
                                {
                                    type: 1,
                                    text: 'List:  $209.99 $209.99',
                                    url: '',
                                },
                                {
                                    type: 3,
                                    text: 'HP 14 Laptop, Intel Celeron N4020, 4 GB RAM, 64 GB Storage, 14-inch Micro-edge HD Display, Windows 11 Home, Thin & Portabl...',
                                    url: 'https://m.media-amazon.com/images/I/815uX7wkOZS._AC_UY218_.jpg',
                                },
                                {
                                    type: 1,
                                    text: 'Ships to Canada',
                                    url: '',
                                },
                                {
                                    type: 1,
                                    text: '4.0 out of 5 stars',
                                    url: '',
                                },
                                {
                                    type: 1,
                                    text: '$179.87',
                                    url: '',
                                },
                                {
                                    type: 1,
                                    text: '.',
                                    url: '',
                                },
                                {
                                    type: 1,
                                    text: '87',
                                    url: '',
                                },
                                {
                                    type: 1,
                                    text: '$',
                                    url: '',
                                },
                                {
                                    type: 1,
                                    text: '179 .',
                                    url: '',
                                },
                                {
                                    type: 1,
                                    text: '1,988',
                                    url: '',
                                },
                            ],
                        },
                        {
                            cells: [
                                {
                                    type: 1,
                                    text: '4.1 out of 5 stars',
                                    url: '',
                                },
                                {
                                    type: 2,
                                    text: 'Remove',
                                    url: 'https://www.amazon.com/s?k=laptops&language=en_US&crid=XVD6QO3K5PQL&sprefix=lapto%2Caps%2C465&ref=nb_sb_noss_2#',
                                },
                                {
                                    type: 2,
                                    text: 'Dell Inspiron Touchscreen Laptop, 15.6" Business & Student Laptop Computer, Windows 11 Pro Laptop 32GB RAM 1TB SSD, Intel i5-1155G7 Processor, Full HD IPS Display, Numeric Keypad, HDMI, Carbon Black',
                                    url: 'https://www.amazon.com/Dell-Inspiron-Touchscreen-i5-1155G7-Processor/dp/B0CTPCTW66/ref=sr_1_4?crid=XVD6QO3K5PQL&dib=eyJ2IjoiMSJ9.1hzDXwuVanomZCsQzVSXdIsilgH9IBLaOvVZxJEpp7ob3ui1ite0yHiI9PVCYul6y_pX97Gy4pHvTh7yYJ4dtgCZMLrVoVKNNvFI_diGjv9bAKcWDk-Sj6sdrKm9gPpY4PDhXGPK0VIVIg741dShoFR-BZk4pFyNB8jGGXwHcfaAkfFIRTx-mgox1Ft_TBgnd2I9IRKL7EshG3vRiHanqw0PyxXGWd0__2EGhlr4pxo.yyvkuhdCOWy4Mi_DTO-cPlGE-3MF4Q2TtnuYIaUwQPI&dib_tag=se&keywords=laptops&qid=1734438898&sprefix=lapto%2Caps%2C465&sr=8-4',
                                },
                                {
                                    type: 2,
                                    text: '$498.00 $498 . 00 List:  $649.99 $649.99',
                                    url: 'https://www.amazon.com/Dell-Inspiron-Touchscreen-i5-1155G7-Processor/dp/B0CTPCTW66/ref=sr_1_4?crid=XVD6QO3K5PQL&dib=eyJ2IjoiMSJ9.1hzDXwuVanomZCsQzVSXdIsilgH9IBLaOvVZxJEpp7ob3ui1ite0yHiI9PVCYul6y_pX97Gy4pHvTh7yYJ4dtgCZMLrVoVKNNvFI_diGjv9bAKcWDk-Sj6sdrKm9gPpY4PDhXGPK0VIVIg741dShoFR-BZk4pFyNB8jGGXwHcfaAkfFIRTx-mgox1Ft_TBgnd2I9IRKL7EshG3vRiHanqw0PyxXGWd0__2EGhlr4pxo.yyvkuhdCOWy4Mi_DTO-cPlGE-3MF4Q2TtnuYIaUwQPI&dib_tag=se&keywords=laptops&qid=1734438898&sprefix=lapto%2Caps%2C465&sr=8-4',
                                },
                                {
                                    type: 2,
                                    text: '',
                                    url: 'https://www.amazon.com/Dell-Inspiron-Touchscreen-i5-1155G7-Processor/dp/B0CTPCTW66/ref=sr_1_4?crid=XVD6QO3K5PQL&dib=eyJ2IjoiMSJ9.1hzDXwuVanomZCsQzVSXdIsilgH9IBLaOvVZxJEpp7ob3ui1ite0yHiI9PVCYul6y_pX97Gy4pHvTh7yYJ4dtgCZMLrVoVKNNvFI_diGjv9bAKcWDk-Sj6sdrKm9gPpY4PDhXGPK0VIVIg741dShoFR-BZk4pFyNB8jGGXwHcfaAkfFIRTx-mgox1Ft_TBgnd2I9IRKL7EshG3vRiHanqw0PyxXGWd0__2EGhlr4pxo.yyvkuhdCOWy4Mi_DTO-cPlGE-3MF4Q2TtnuYIaUwQPI&dib_tag=se&keywords=laptops&qid=1734438898&sprefix=lapto%2Caps%2C465&sr=8-4',
                                },
                                {
                                    type: 1,
                                    text: 'Add to cart',
                                    url: '',
                                },
                                {
                                    type: 1,
                                    text: 'List:  $649.99 $649.99',
                                    url: '',
                                },
                                {
                                    type: 3,
                                    text: 'Dell Inspiron Touchscreen Laptop, 15.6" Business & Student Laptop Computer, Windows 11 Pro Laptop 32GB RAM 1TB SSD, Intel ...',
                                    url: 'https://m.media-amazon.com/images/I/61Wc1fDGJuL._AC_UY218_.jpg',
                                },
                                {
                                    type: 1,
                                    text: 'Ships to Canada',
                                    url: '',
                                },
                                {
                                    type: 1,
                                    text: '4.1 out of 5 stars',
                                    url: '',
                                },
                                {
                                    type: 1,
                                    text: '$498.00',
                                    url: '',
                                },
                                {
                                    type: 1,
                                    text: '.',
                                    url: '',
                                },
                                {
                                    type: 1,
                                    text: '00',
                                    url: '',
                                },
                                {
                                    type: 1,
                                    text: '$',
                                    url: '',
                                },
                                {
                                    type: 1,
                                    text: '498 .',
                                    url: '',
                                },
                                {
                                    type: 1,
                                    text: '99',
                                    url: '',
                                },
                            ],
                        },
                        {
                            cells: [
                                {
                                    type: 1,
                                    text: '4.0 out of 5 stars',
                                    url: '',
                                },
                                {
                                    type: 2,
                                    text: 'Remove',
                                    url: 'https://www.amazon.com/s?k=laptops&language=en_US&crid=XVD6QO3K5PQL&sprefix=lapto%2Caps%2C465&ref=nb_sb_noss_2#',
                                },
                                {
                                    type: 2,
                                    text: 'ASUS E410 Intel Celeron N4020 4GB 64GB 14-Inch HD LED Win 10 Laptop (Star Black)',
                                    url: 'https://www.amazon.com/Intel-Celeron-N4020-14-Inch-Laptop/dp/B09YRY6QCX/ref=sr_1_5?crid=XVD6QO3K5PQL&dib=eyJ2IjoiMSJ9.1hzDXwuVanomZCsQzVSXdIsilgH9IBLaOvVZxJEpp7ob3ui1ite0yHiI9PVCYul6y_pX97Gy4pHvTh7yYJ4dtgCZMLrVoVKNNvFI_diGjv9bAKcWDk-Sj6sdrKm9gPpY4PDhXGPK0VIVIg741dShoFR-BZk4pFyNB8jGGXwHcfaAkfFIRTx-mgox1Ft_TBgnd2I9IRKL7EshG3vRiHanqw0PyxXGWd0__2EGhlr4pxo.yyvkuhdCOWy4Mi_DTO-cPlGE-3MF4Q2TtnuYIaUwQPI&dib_tag=se&keywords=laptops&qid=1734438898&sprefix=lapto%2Caps%2C465&sr=8-5',
                                },
                                {
                                    type: 2,
                                    text: '$144.00 $144 . 00',
                                    url: 'https://www.amazon.com/Intel-Celeron-N4020-14-Inch-Laptop/dp/B09YRY6QCX/ref=sr_1_5?crid=XVD6QO3K5PQL&dib=eyJ2IjoiMSJ9.1hzDXwuVanomZCsQzVSXdIsilgH9IBLaOvVZxJEpp7ob3ui1ite0yHiI9PVCYul6y_pX97Gy4pHvTh7yYJ4dtgCZMLrVoVKNNvFI_diGjv9bAKcWDk-Sj6sdrKm9gPpY4PDhXGPK0VIVIg741dShoFR-BZk4pFyNB8jGGXwHcfaAkfFIRTx-mgox1Ft_TBgnd2I9IRKL7EshG3vRiHanqw0PyxXGWd0__2EGhlr4pxo.yyvkuhdCOWy4Mi_DTO-cPlGE-3MF4Q2TtnuYIaUwQPI&dib_tag=se&keywords=laptops&qid=1734438898&sprefix=lapto%2Caps%2C465&sr=8-5',
                                },
                                {
                                    type: 2,
                                    text: '',
                                    url: 'https://www.amazon.com/Intel-Celeron-N4020-14-Inch-Laptop/dp/B09YRY6QCX/ref=sr_1_5?crid=XVD6QO3K5PQL&dib=eyJ2IjoiMSJ9.1hzDXwuVanomZCsQzVSXdIsilgH9IBLaOvVZxJEpp7ob3ui1ite0yHiI9PVCYul6y_pX97Gy4pHvTh7yYJ4dtgCZMLrVoVKNNvFI_diGjv9bAKcWDk-Sj6sdrKm9gPpY4PDhXGPK0VIVIg741dShoFR-BZk4pFyNB8jGGXwHcfaAkfFIRTx-mgox1Ft_TBgnd2I9IRKL7EshG3vRiHanqw0PyxXGWd0__2EGhlr4pxo.yyvkuhdCOWy4Mi_DTO-cPlGE-3MF4Q2TtnuYIaUwQPI&dib_tag=se&keywords=laptops&qid=1734438898&sprefix=lapto%2Caps%2C465&sr=8-5',
                                },
                                {
                                    type: 1,
                                    text: 'Add to cart',
                                    url: '',
                                },
                                {
                                    type: 1,
                                    text: 'Options:',
                                    url: '',
                                },
                                {
                                    type: 3,
                                    text: 'ASUS E410 Intel Celeron N4020 4GB 64GB 14-Inch HD LED Win 10 Laptop (Star Black)',
                                    url: 'https://m.media-amazon.com/images/I/614Jk1dIoGL._AC_UY218_.jpg',
                                },
                                {
                                    type: 1,
                                    text: 'Ships to Canada',
                                    url: '',
                                },
                                {
                                    type: 1,
                                    text: '4.0 out of 5 stars',
                                    url: '',
                                },
                                {
                                    type: 1,
                                    text: '2 capacities',
                                    url: '',
                                },
                                {
                                    type: 1,
                                    text: '.',
                                    url: '',
                                },
                                {
                                    type: 1,
                                    text: '00',
                                    url: '',
                                },
                                {
                                    type: 1,
                                    text: '$',
                                    url: '',
                                },
                                {
                                    type: 1,
                                    text: '144 .',
                                    url: '',
                                },
                                {
                                    type: 1,
                                    text: '699',
                                    url: '',
                                },
                            ],
                        },
                        {
                            cells: [
                                {
                                    type: 1,
                                    text: '4.3 out of 5 stars',
                                    url: '',
                                },
                                {
                                    type: 2,
                                    text: 'Remove',
                                    url: 'https://www.amazon.com/s?k=laptops&language=en_US&crid=XVD6QO3K5PQL&sprefix=lapto%2Caps%2C465&ref=nb_sb_noss_2#',
                                },
                                {
                                    type: 2,
                                    text: 'HP Stream 14" HD BrightView Laptop, Intel Celeron N4120, 16GB RAM, 288GB Storage (128GB eMMC + 160GB Docking Station Set), Intel UHD Graphics, 720p Webcam, Wi-Fi, 1 Year Office 365, Win 11 S, Silver',
                                    url: 'https://www.amazon.com/HP-Stream-BrightView-N4120-Graphics/dp/B0CZKPF2QH/ref=sr_1_6?crid=XVD6QO3K5PQL&dib=eyJ2IjoiMSJ9.1hzDXwuVanomZCsQzVSXdIsilgH9IBLaOvVZxJEpp7ob3ui1ite0yHiI9PVCYul6y_pX97Gy4pHvTh7yYJ4dtgCZMLrVoVKNNvFI_diGjv9bAKcWDk-Sj6sdrKm9gPpY4PDhXGPK0VIVIg741dShoFR-BZk4pFyNB8jGGXwHcfaAkfFIRTx-mgox1Ft_TBgnd2I9IRKL7EshG3vRiHanqw0PyxXGWd0__2EGhlr4pxo.yyvkuhdCOWy4Mi_DTO-cPlGE-3MF4Q2TtnuYIaUwQPI&dib_tag=se&keywords=laptops&qid=1734438898&sprefix=lapto%2Caps%2C465&sr=8-6',
                                },
                                {
                                    type: 2,
                                    text: '$309.00 $309 . 00 List:  $399.00 $399.00',
                                    url: 'https://www.amazon.com/HP-Stream-BrightView-N4120-Graphics/dp/B0CZKPF2QH/ref=sr_1_6?crid=XVD6QO3K5PQL&dib=eyJ2IjoiMSJ9.1hzDXwuVanomZCsQzVSXdIsilgH9IBLaOvVZxJEpp7ob3ui1ite0yHiI9PVCYul6y_pX97Gy4pHvTh7yYJ4dtgCZMLrVoVKNNvFI_diGjv9bAKcWDk-Sj6sdrKm9gPpY4PDhXGPK0VIVIg741dShoFR-BZk4pFyNB8jGGXwHcfaAkfFIRTx-mgox1Ft_TBgnd2I9IRKL7EshG3vRiHanqw0PyxXGWd0__2EGhlr4pxo.yyvkuhdCOWy4Mi_DTO-cPlGE-3MF4Q2TtnuYIaUwQPI&dib_tag=se&keywords=laptops&qid=1734438898&sprefix=lapto%2Caps%2C465&sr=8-6',
                                },
                                {
                                    type: 2,
                                    text: '',
                                    url: 'https://www.amazon.com/HP-Stream-BrightView-N4120-Graphics/dp/B0CZKPF2QH/ref=sr_1_6?crid=XVD6QO3K5PQL&dib=eyJ2IjoiMSJ9.1hzDXwuVanomZCsQzVSXdIsilgH9IBLaOvVZxJEpp7ob3ui1ite0yHiI9PVCYul6y_pX97Gy4pHvTh7yYJ4dtgCZMLrVoVKNNvFI_diGjv9bAKcWDk-Sj6sdrKm9gPpY4PDhXGPK0VIVIg741dShoFR-BZk4pFyNB8jGGXwHcfaAkfFIRTx-mgox1Ft_TBgnd2I9IRKL7EshG3vRiHanqw0PyxXGWd0__2EGhlr4pxo.yyvkuhdCOWy4Mi_DTO-cPlGE-3MF4Q2TtnuYIaUwQPI&dib_tag=se&keywords=laptops&qid=1734438898&sprefix=lapto%2Caps%2C465&sr=8-6',
                                },
                                {
                                    type: 1,
                                    text: 'Add to cart',
                                    url: '',
                                },
                                {
                                    type: 1,
                                    text: 'Options:',
                                    url: '',
                                },
                                {
                                    type: 3,
                                    text: 'HP Stream 14" HD BrightView Laptop, Intel Celeron N4120, 16GB RAM, 288GB Storage (128GB eMMC + 160GB Docking Station Set),...',
                                    url: 'https://m.media-amazon.com/images/I/61Uw0-2+2YL._AC_UY218_.jpg',
                                },
                                {
                                    type: 1,
                                    text: 'Ships to Canada',
                                    url: '',
                                },
                                {
                                    type: 1,
                                    text: '4.3 out of 5 stars',
                                    url: '',
                                },
                                {
                                    type: 1,
                                    text: '4 capacities',
                                    url: '',
                                },
                                {
                                    type: 1,
                                    text: '.',
                                    url: '',
                                },
                                {
                                    type: 1,
                                    text: '00',
                                    url: '',
                                },
                                {
                                    type: 1,
                                    text: '$',
                                    url: '',
                                },
                                {
                                    type: 1,
                                    text: '309 .',
                                    url: '',
                                },
                                {
                                    type: 1,
                                    text: '2,084',
                                    url: '',
                                },
                            ],
                        },
                        {
                            cells: [
                                {
                                    type: 1,
                                    text: '5.0 out of 5 stars',
                                    url: '',
                                },
                                {
                                    type: 2,
                                    text: 'Remove',
                                    url: 'https://www.amazon.com/s?k=laptops&language=en_US&crid=XVD6QO3K5PQL&sprefix=lapto%2Caps%2C465&ref=nb_sb_noss_2#',
                                },
                                {
                                    type: 2,
                                    text: '15.6" Laptop Computer,16GB RAM 512GB SSD, Intel Celeron Quad-Core N5095 Processor, Laptop Computers with FHD IPS 1920x1080 Display,2.4/5G WiFi, Bluetooth, Type-C, Mini HDMI, USB 3.0',
                                    url: 'https://www.amazon.com/UGRIHACH-Quad-Core-Processor-Computers-1920x1080/dp/B0DJM1GPWN/ref=sr_1_7?crid=XVD6QO3K5PQL&dib=eyJ2IjoiMSJ9.1hzDXwuVanomZCsQzVSXdIsilgH9IBLaOvVZxJEpp7ob3ui1ite0yHiI9PVCYul6y_pX97Gy4pHvTh7yYJ4dtgCZMLrVoVKNNvFI_diGjv9bAKcWDk-Sj6sdrKm9gPpY4PDhXGPK0VIVIg741dShoFR-BZk4pFyNB8jGGXwHcfaAkfFIRTx-mgox1Ft_TBgnd2I9IRKL7EshG3vRiHanqw0PyxXGWd0__2EGhlr4pxo.yyvkuhdCOWy4Mi_DTO-cPlGE-3MF4Q2TtnuYIaUwQPI&dib_tag=se&keywords=laptops&qid=1734438898&sprefix=lapto%2Caps%2C465&sr=8-7',
                                },
                                {
                                    type: 2,
                                    text: '$209.99 $209 . 99 List:  $289.99 $289.99',
                                    url: 'https://www.amazon.com/UGRIHACH-Quad-Core-Processor-Computers-1920x1080/dp/B0DJM1GPWN/ref=sr_1_7?crid=XVD6QO3K5PQL&dib=eyJ2IjoiMSJ9.1hzDXwuVanomZCsQzVSXdIsilgH9IBLaOvVZxJEpp7ob3ui1ite0yHiI9PVCYul6y_pX97Gy4pHvTh7yYJ4dtgCZMLrVoVKNNvFI_diGjv9bAKcWDk-Sj6sdrKm9gPpY4PDhXGPK0VIVIg741dShoFR-BZk4pFyNB8jGGXwHcfaAkfFIRTx-mgox1Ft_TBgnd2I9IRKL7EshG3vRiHanqw0PyxXGWd0__2EGhlr4pxo.yyvkuhdCOWy4Mi_DTO-cPlGE-3MF4Q2TtnuYIaUwQPI&dib_tag=se&keywords=laptops&qid=1734438898&sprefix=lapto%2Caps%2C465&sr=8-7',
                                },
                                {
                                    type: 2,
                                    text: '',
                                    url: 'https://www.amazon.com/UGRIHACH-Quad-Core-Processor-Computers-1920x1080/dp/B0DJM1GPWN/ref=sr_1_7?crid=XVD6QO3K5PQL&dib=eyJ2IjoiMSJ9.1hzDXwuVanomZCsQzVSXdIsilgH9IBLaOvVZxJEpp7ob3ui1ite0yHiI9PVCYul6y_pX97Gy4pHvTh7yYJ4dtgCZMLrVoVKNNvFI_diGjv9bAKcWDk-Sj6sdrKm9gPpY4PDhXGPK0VIVIg741dShoFR-BZk4pFyNB8jGGXwHcfaAkfFIRTx-mgox1Ft_TBgnd2I9IRKL7EshG3vRiHanqw0PyxXGWd0__2EGhlr4pxo.yyvkuhdCOWy4Mi_DTO-cPlGE-3MF4Q2TtnuYIaUwQPI&dib_tag=se&keywords=laptops&qid=1734438898&sprefix=lapto%2Caps%2C465&sr=8-7',
                                },
                                {
                                    type: 1,
                                    text: 'Add to cart',
                                    url: '',
                                },
                                {
                                    type: 1,
                                    text: 'List:  $289.99 $289.99',
                                    url: '',
                                },
                                {
                                    type: 3,
                                    text: 'UGRIHACH 15.6" Laptop Computer,16GB RAM 512GB SSD, Intel Celeron Quad-Core N5095 Processor, Laptop Computers with FHD IPS ...',
                                    url: 'https://m.media-amazon.com/images/I/7186fjf5ITL._AC_UY218_.jpg',
                                },
                                {
                                    type: 1,
                                    text: 'Ships to Canada',
                                    url: '',
                                },
                                {
                                    type: 1,
                                    text: '5.0 out of 5 stars',
                                    url: '',
                                },
                                {
                                    type: 1,
                                    text: '$209.99',
                                    url: '',
                                },
                                {
                                    type: 1,
                                    text: '.',
                                    url: '',
                                },
                                {
                                    type: 1,
                                    text: '99',
                                    url: '',
                                },
                                {
                                    type: 1,
                                    text: '$',
                                    url: '',
                                },
                                {
                                    type: 1,
                                    text: '209 .',
                                    url: '',
                                },
                                {
                                    type: 1,
                                    text: '12',
                                    url: '',
                                },
                            ],
                        },
                        {
                            cells: [
                                {
                                    type: 1,
                                    text: '4.0 out of 5 stars',
                                    url: '',
                                },
                                {
                                    type: 2,
                                    text: 'Remove',
                                    url: 'https://www.amazon.com/s?k=laptops&language=en_US&crid=XVD6QO3K5PQL&sprefix=lapto%2Caps%2C465&ref=nb_sb_noss_2#',
                                },
                                {
                                    type: 2,
                                    text: 'HP Portable Laptop, Student and Business, 14" HD Display, Intel Quad-Core N4120, 8GB DDR4 RAM, 64GB eMMC, 1 Year Office 365, Webcam, RJ-45, HDMI, Wi-Fi, Windows 11 Home, Silver',
                                    url: 'https://www.amazon.com/HP-Portable-Student-Business-Quad-Core/dp/B0CPL25J3W/ref=sr_1_8?crid=XVD6QO3K5PQL&dib=eyJ2IjoiMSJ9.1hzDXwuVanomZCsQzVSXdIsilgH9IBLaOvVZxJEpp7ob3ui1ite0yHiI9PVCYul6y_pX97Gy4pHvTh7yYJ4dtgCZMLrVoVKNNvFI_diGjv9bAKcWDk-Sj6sdrKm9gPpY4PDhXGPK0VIVIg741dShoFR-BZk4pFyNB8jGGXwHcfaAkfFIRTx-mgox1Ft_TBgnd2I9IRKL7EshG3vRiHanqw0PyxXGWd0__2EGhlr4pxo.yyvkuhdCOWy4Mi_DTO-cPlGE-3MF4Q2TtnuYIaUwQPI&dib_tag=se&keywords=laptops&qid=1734438898&sprefix=lapto%2Caps%2C465&sr=8-8',
                                },
                                {
                                    type: 2,
                                    text: '$198.92 $198 . 92 List:  $269.00 $269.00',
                                    url: 'https://www.amazon.com/HP-Portable-Student-Business-Quad-Core/dp/B0CPL25J3W/ref=sr_1_8?crid=XVD6QO3K5PQL&dib=eyJ2IjoiMSJ9.1hzDXwuVanomZCsQzVSXdIsilgH9IBLaOvVZxJEpp7ob3ui1ite0yHiI9PVCYul6y_pX97Gy4pHvTh7yYJ4dtgCZMLrVoVKNNvFI_diGjv9bAKcWDk-Sj6sdrKm9gPpY4PDhXGPK0VIVIg741dShoFR-BZk4pFyNB8jGGXwHcfaAkfFIRTx-mgox1Ft_TBgnd2I9IRKL7EshG3vRiHanqw0PyxXGWd0__2EGhlr4pxo.yyvkuhdCOWy4Mi_DTO-cPlGE-3MF4Q2TtnuYIaUwQPI&dib_tag=se&keywords=laptops&qid=1734438898&sprefix=lapto%2Caps%2C465&sr=8-8',
                                },
                                {
                                    type: 2,
                                    text: '',
                                    url: 'https://www.amazon.com/HP-Portable-Student-Business-Quad-Core/dp/B0CPL25J3W/ref=sr_1_8?crid=XVD6QO3K5PQL&dib=eyJ2IjoiMSJ9.1hzDXwuVanomZCsQzVSXdIsilgH9IBLaOvVZxJEpp7ob3ui1ite0yHiI9PVCYul6y_pX97Gy4pHvTh7yYJ4dtgCZMLrVoVKNNvFI_diGjv9bAKcWDk-Sj6sdrKm9gPpY4PDhXGPK0VIVIg741dShoFR-BZk4pFyNB8jGGXwHcfaAkfFIRTx-mgox1Ft_TBgnd2I9IRKL7EshG3vRiHanqw0PyxXGWd0__2EGhlr4pxo.yyvkuhdCOWy4Mi_DTO-cPlGE-3MF4Q2TtnuYIaUwQPI&dib_tag=se&keywords=laptops&qid=1734438898&sprefix=lapto%2Caps%2C465&sr=8-8',
                                },
                                {
                                    type: 1,
                                    text: 'Add to cart',
                                    url: '',
                                },
                                {
                                    type: 1,
                                    text: 'Options:',
                                    url: '',
                                },
                                {
                                    type: 3,
                                    text: 'HP Portable Laptop, Student and Business, 14" HD Display, Intel Quad-Core N4120, 8GB DDR4 RAM, 64GB eMMC, 1 Year Office 36...',
                                    url: 'https://m.media-amazon.com/images/I/61IpRGnny7L._AC_UY218_.jpg',
                                },
                                {
                                    type: 1,
                                    text: 'Ships to Canada',
                                    url: '',
                                },
                                {
                                    type: 1,
                                    text: '4.0 out of 5 stars',
                                    url: '',
                                },
                                {
                                    type: 1,
                                    text: '9 capacities',
                                    url: '',
                                },
                                {
                                    type: 1,
                                    text: '.',
                                    url: '',
                                },
                                {
                                    type: 1,
                                    text: '92',
                                    url: '',
                                },
                                {
                                    type: 1,
                                    text: '$',
                                    url: '',
                                },
                                {
                                    type: 1,
                                    text: '198 .',
                                    url: '',
                                },
                                {
                                    type: 1,
                                    text: '1,830',
                                    url: '',
                                },
                            ],
                        },
                        {
                            cells: [
                                {
                                    type: 1,
                                    text: '4.4 out of 5 stars',
                                    url: '',
                                },
                                {
                                    type: 2,
                                    text: 'Remove',
                                    url: 'https://www.amazon.com/s?k=laptops&language=en_US&crid=XVD6QO3K5PQL&sprefix=lapto%2Caps%2C465&ref=nb_sb_noss_2#',
                                },
                                {
                                    type: 2,
                                    text: '16.0-inch Laptop, 16GB DDR4 512GB SSD, Windows 11 Laptop with Intel 12th Quad-Core Processor(Up to 3.6GHz), 1920P FHD Display, Metal Shell, WiFi 6, USB3.2, Type_C, Long Battery Life',
                                    url: 'https://www.amazon.com/KAIGERR-16-0-inch-Windows-Quad-Core-Processor/dp/B0DN1MNBPK/ref=sr_1_9?crid=XVD6QO3K5PQL&dib=eyJ2IjoiMSJ9.1hzDXwuVanomZCsQzVSXdIsilgH9IBLaOvVZxJEpp7ob3ui1ite0yHiI9PVCYul6y_pX97Gy4pHvTh7yYJ4dtgCZMLrVoVKNNvFI_diGjv9bAKcWDk-Sj6sdrKm9gPpY4PDhXGPK0VIVIg741dShoFR-BZk4pFyNB8jGGXwHcfaAkfFIRTx-mgox1Ft_TBgnd2I9IRKL7EshG3vRiHanqw0PyxXGWd0__2EGhlr4pxo.yyvkuhdCOWy4Mi_DTO-cPlGE-3MF4Q2TtnuYIaUwQPI&dib_tag=se&keywords=laptops&qid=1734438898&sprefix=lapto%2Caps%2C465&sr=8-9',
                                },
                                {
                                    type: 2,
                                    text: '$389.99 $389 . 99 List:  $1,399.99 $1,399.99',
                                    url: 'https://www.amazon.com/KAIGERR-16-0-inch-Windows-Quad-Core-Processor/dp/B0DN1MNBPK/ref=sr_1_9?crid=XVD6QO3K5PQL&dib=eyJ2IjoiMSJ9.1hzDXwuVanomZCsQzVSXdIsilgH9IBLaOvVZxJEpp7ob3ui1ite0yHiI9PVCYul6y_pX97Gy4pHvTh7yYJ4dtgCZMLrVoVKNNvFI_diGjv9bAKcWDk-Sj6sdrKm9gPpY4PDhXGPK0VIVIg741dShoFR-BZk4pFyNB8jGGXwHcfaAkfFIRTx-mgox1Ft_TBgnd2I9IRKL7EshG3vRiHanqw0PyxXGWd0__2EGhlr4pxo.yyvkuhdCOWy4Mi_DTO-cPlGE-3MF4Q2TtnuYIaUwQPI&dib_tag=se&keywords=laptops&qid=1734438898&sprefix=lapto%2Caps%2C465&sr=8-9',
                                },
                                {
                                    type: 2,
                                    text: '',
                                    url: 'https://www.amazon.com/KAIGERR-16-0-inch-Windows-Quad-Core-Processor/dp/B0DN1MNBPK/ref=sr_1_9?crid=XVD6QO3K5PQL&dib=eyJ2IjoiMSJ9.1hzDXwuVanomZCsQzVSXdIsilgH9IBLaOvVZxJEpp7ob3ui1ite0yHiI9PVCYul6y_pX97Gy4pHvTh7yYJ4dtgCZMLrVoVKNNvFI_diGjv9bAKcWDk-Sj6sdrKm9gPpY4PDhXGPK0VIVIg741dShoFR-BZk4pFyNB8jGGXwHcfaAkfFIRTx-mgox1Ft_TBgnd2I9IRKL7EshG3vRiHanqw0PyxXGWd0__2EGhlr4pxo.yyvkuhdCOWy4Mi_DTO-cPlGE-3MF4Q2TtnuYIaUwQPI&dib_tag=se&keywords=laptops&qid=1734438898&sprefix=lapto%2Caps%2C465&sr=8-9',
                                },
                                {
                                    type: 1,
                                    text: 'Add to cart',
                                    url: '',
                                },
                                {
                                    type: 1,
                                    text: 'List:  $1,399.99 $1,399.99',
                                    url: '',
                                },
                                {
                                    type: 3,
                                    text: 'KAIGERR 16.0-inch Laptop, 16GB DDR4 512GB SSD, Windows 11 Laptop with Intel 12th Quad-Core Processor(Up to 3.6GHz), 1920P ...',
                                    url: 'https://m.media-amazon.com/images/I/71Ls2+M7TSL._AC_UY218_.jpg',
                                },
                                {
                                    type: 1,
                                    text: 'Ships to Canada',
                                    url: '',
                                },
                                {
                                    type: 1,
                                    text: '4.4 out of 5 stars',
                                    url: '',
                                },
                                {
                                    type: 1,
                                    text: '$389.99',
                                    url: '',
                                },
                                {
                                    type: 1,
                                    text: '.',
                                    url: '',
                                },
                                {
                                    type: 1,
                                    text: '99',
                                    url: '',
                                },
                                {
                                    type: 1,
                                    text: '$',
                                    url: '',
                                },
                                {
                                    type: 1,
                                    text: '389 .',
                                    url: '',
                                },
                                {
                                    type: 1,
                                    text: '21',
                                    url: '',
                                },
                            ],
                        },
                        {
                            cells: [
                                {
                                    type: 1,
                                    text: '4.2 out of 5 stars',
                                    url: '',
                                },
                                {
                                    type: 1,
                                    text: '',
                                    url: '',
                                },
                                {
                                    type: 2,
                                    text: 'HP Newest 14" HD Laptop, Windows 11, Intel Celeron Dual-Core Processor Up to 2.60GHz, 4GB RAM, 64GB SSD, Webcam, Dale Pink(Renewed) (Dale Pink)',
                                    url: 'https://www.amazon.com/HP-14-Laptop-Dual-Core-Processor/dp/B09VRX9YVW/ref=sr_1_10?crid=XVD6QO3K5PQL&dib=eyJ2IjoiMSJ9.1hzDXwuVanomZCsQzVSXdIsilgH9IBLaOvVZxJEpp7ob3ui1ite0yHiI9PVCYul6y_pX97Gy4pHvTh7yYJ4dtgCZMLrVoVKNNvFI_diGjv9bAKcWDk-Sj6sdrKm9gPpY4PDhXGPK0VIVIg741dShoFR-BZk4pFyNB8jGGXwHcfaAkfFIRTx-mgox1Ft_TBgnd2I9IRKL7EshG3vRiHanqw0PyxXGWd0__2EGhlr4pxo.yyvkuhdCOWy4Mi_DTO-cPlGE-3MF4Q2TtnuYIaUwQPI&dib_tag=se&keywords=laptops&qid=1734438898&sprefix=lapto%2Caps%2C465&sr=8-10',
                                },
                                {
                                    type: 2,
                                    text: '$167.98 $167 . 98',
                                    url: 'https://www.amazon.com/HP-14-Laptop-Dual-Core-Processor/dp/B09VRX9YVW/ref=sr_1_10?crid=XVD6QO3K5PQL&dib=eyJ2IjoiMSJ9.1hzDXwuVanomZCsQzVSXdIsilgH9IBLaOvVZxJEpp7ob3ui1ite0yHiI9PVCYul6y_pX97Gy4pHvTh7yYJ4dtgCZMLrVoVKNNvFI_diGjv9bAKcWDk-Sj6sdrKm9gPpY4PDhXGPK0VIVIg741dShoFR-BZk4pFyNB8jGGXwHcfaAkfFIRTx-mgox1Ft_TBgnd2I9IRKL7EshG3vRiHanqw0PyxXGWd0__2EGhlr4pxo.yyvkuhdCOWy4Mi_DTO-cPlGE-3MF4Q2TtnuYIaUwQPI&dib_tag=se&keywords=laptops&qid=1734438898&sprefix=lapto%2Caps%2C465&sr=8-10',
                                },
                                {
                                    type: 2,
                                    text: '',
                                    url: 'https://www.amazon.com/HP-14-Laptop-Dual-Core-Processor/dp/B09VRX9YVW/ref=sr_1_10?crid=XVD6QO3K5PQL&dib=eyJ2IjoiMSJ9.1hzDXwuVanomZCsQzVSXdIsilgH9IBLaOvVZxJEpp7ob3ui1ite0yHiI9PVCYul6y_pX97Gy4pHvTh7yYJ4dtgCZMLrVoVKNNvFI_diGjv9bAKcWDk-Sj6sdrKm9gPpY4PDhXGPK0VIVIg741dShoFR-BZk4pFyNB8jGGXwHcfaAkfFIRTx-mgox1Ft_TBgnd2I9IRKL7EshG3vRiHanqw0PyxXGWd0__2EGhlr4pxo.yyvkuhdCOWy4Mi_DTO-cPlGE-3MF4Q2TtnuYIaUwQPI&dib_tag=se&keywords=laptops&qid=1734438898&sprefix=lapto%2Caps%2C465&sr=8-10',
                                },
                                {
                                    type: 1,
                                    text: '',
                                    url: '',
                                },
                                {
                                    type: 1,
                                    text: '<img alt="" src="https://m.media-amazon.com/images/I/319JVBnl5IL._SS200_.png" height="24px" width="24px"/>  Pre-owned Certified: Electronics',
                                    url: '',
                                },
                                {
                                    type: 3,
                                    text: 'HP Newest 14" HD Laptop, Windows 11, Intel Celeron Dual-Core Processor Up to 2.60GHz, 4GB RAM, 64GB SSD, Webcam, Dale Pin...',
                                    url: 'https://m.media-amazon.com/images/I/61MGsq1ZVaL._AC_UY218_.jpg',
                                },
                                {
                                    type: 1,
                                    text: 'Ships to Canada',
                                    url: '',
                                },
                                {
                                    type: 1,
                                    text: '4.2 out of 5 stars',
                                    url: '',
                                },
                                {
                                    type: 1,
                                    text: '$167.98',
                                    url: '',
                                },
                                {
                                    type: 1,
                                    text: '.',
                                    url: '',
                                },
                                {
                                    type: 1,
                                    text: '98',
                                    url: '',
                                },
                                {
                                    type: 1,
                                    text: '$',
                                    url: '',
                                },
                                {
                                    type: 1,
                                    text: '167 .',
                                    url: '',
                                },
                                {
                                    type: 1,
                                    text: '2,168',
                                    url: '',
                                },
                            ],
                        },
                        {
                            cells: [
                                {
                                    type: 1,
                                    text: '4.9 out of 5 stars',
                                    url: '',
                                },
                                {
                                    type: 2,
                                    text: 'Remove',
                                    url: 'https://www.amazon.com/s?k=laptops&language=en_US&crid=XVD6QO3K5PQL&sprefix=lapto%2Caps%2C465&ref=nb_sb_noss_2#',
                                },
                                {
                                    type: 2,
                                    text: 'Lenovo V15 Business Laptop Computer, 15.6" FHD Display, Intel Dual-Core CPU, 32GB DDR4 RAM, 1TB PCIe SSD, WiFi 6, Bluetooth 5.2, RJ-45, Type-C, HDMI, Numeric Keypad, Black, Windows 11 Pro, Tichang',
                                    url: 'https://www.amazon.com/Lenovo-Business-Computer-Dual-Core-Bluetooth/dp/B0DPGJFNQK/ref=sr_1_11?crid=XVD6QO3K5PQL&dib=eyJ2IjoiMSJ9.1hzDXwuVanomZCsQzVSXdIsilgH9IBLaOvVZxJEpp7ob3ui1ite0yHiI9PVCYul6y_pX97Gy4pHvTh7yYJ4dtgCZMLrVoVKNNvFI_diGjv9bAKcWDk-Sj6sdrKm9gPpY4PDhXGPK0VIVIg741dShoFR-BZk4pFyNB8jGGXwHcfaAkfFIRTx-mgox1Ft_TBgnd2I9IRKL7EshG3vRiHanqw0PyxXGWd0__2EGhlr4pxo.yyvkuhdCOWy4Mi_DTO-cPlGE-3MF4Q2TtnuYIaUwQPI&dib_tag=se&keywords=laptops&qid=1734438898&sprefix=lapto%2Caps%2C465&sr=8-11',
                                },
                                {
                                    type: 2,
                                    text: '$799.00 $799 . 00',
                                    url: 'https://www.amazon.com/Lenovo-Business-Computer-Dual-Core-Bluetooth/dp/B0DPGJFNQK/ref=sr_1_11?crid=XVD6QO3K5PQL&dib=eyJ2IjoiMSJ9.1hzDXwuVanomZCsQzVSXdIsilgH9IBLaOvVZxJEpp7ob3ui1ite0yHiI9PVCYul6y_pX97Gy4pHvTh7yYJ4dtgCZMLrVoVKNNvFI_diGjv9bAKcWDk-Sj6sdrKm9gPpY4PDhXGPK0VIVIg741dShoFR-BZk4pFyNB8jGGXwHcfaAkfFIRTx-mgox1Ft_TBgnd2I9IRKL7EshG3vRiHanqw0PyxXGWd0__2EGhlr4pxo.yyvkuhdCOWy4Mi_DTO-cPlGE-3MF4Q2TtnuYIaUwQPI&dib_tag=se&keywords=laptops&qid=1734438898&sprefix=lapto%2Caps%2C465&sr=8-11',
                                },
                                {
                                    type: 2,
                                    text: '',
                                    url: 'https://www.amazon.com/Lenovo-Business-Computer-Dual-Core-Bluetooth/dp/B0DPGJFNQK/ref=sr_1_11?crid=XVD6QO3K5PQL&dib=eyJ2IjoiMSJ9.1hzDXwuVanomZCsQzVSXdIsilgH9IBLaOvVZxJEpp7ob3ui1ite0yHiI9PVCYul6y_pX97Gy4pHvTh7yYJ4dtgCZMLrVoVKNNvFI_diGjv9bAKcWDk-Sj6sdrKm9gPpY4PDhXGPK0VIVIg741dShoFR-BZk4pFyNB8jGGXwHcfaAkfFIRTx-mgox1Ft_TBgnd2I9IRKL7EshG3vRiHanqw0PyxXGWd0__2EGhlr4pxo.yyvkuhdCOWy4Mi_DTO-cPlGE-3MF4Q2TtnuYIaUwQPI&dib_tag=se&keywords=laptops&qid=1734438898&sprefix=lapto%2Caps%2C465&sr=8-11',
                                },
                                {
                                    type: 1,
                                    text: 'Add to cart',
                                    url: '',
                                },
                                {
                                    type: 1,
                                    text: 'Options:',
                                    url: '',
                                },
                                {
                                    type: 3,
                                    text: 'Lenovo V15 Business Laptop Computer, 15.6" FHD Display, Intel Dual-Core CPU, 32GB DDR4 RAM, 1TB PCIe SSD, WiFi 6, Bluetoot...',
                                    url: 'https://m.media-amazon.com/images/I/71Cn431oDML._AC_UY218_.jpg',
                                },
                                {
                                    type: 1,
                                    text: 'Ships to Canada',
                                    url: '',
                                },
                                {
                                    type: 1,
                                    text: '4.9 out of 5 stars',
                                    url: '',
                                },
                                {
                                    type: 1,
                                    text: '5 capacities',
                                    url: '',
                                },
                                {
                                    type: 1,
                                    text: '.',
                                    url: '',
                                },
                                {
                                    type: 1,
                                    text: '00',
                                    url: '',
                                },
                                {
                                    type: 1,
                                    text: '$',
                                    url: '',
                                },
                                {
                                    type: 1,
                                    text: '799 .',
                                    url: '',
                                },
                                {
                                    type: 1,
                                    text: '12',
                                    url: '',
                                },
                            ],
                        },
                        {
                            cells: [
                                {
                                    type: 1,
                                    text: '4.3 out of 5 stars',
                                    url: '',
                                },
                                {
                                    type: 2,
                                    text: 'Remove',
                                    url: 'https://www.amazon.com/s?k=laptops&language=en_US&crid=XVD6QO3K5PQL&sprefix=lapto%2Caps%2C465&ref=nb_sb_noss_2#',
                                },
                                {
                                    type: 2,
                                    text: 'HP 14" Laptop Stream Ultral Light for Students and Business, Quad-core Intel Celeron Processor, 8GB RAM, 256GB Storage (128GB eMMC+128GB SD Card), 1 Year Office 365, HDMI, Win 11',
                                    url: 'https://www.amazon.com/HP-Students-Business-Quad-core-Processor/dp/B0CYBZ4JFC/ref=sr_1_12?crid=XVD6QO3K5PQL&dib=eyJ2IjoiMSJ9.1hzDXwuVanomZCsQzVSXdIsilgH9IBLaOvVZxJEpp7ob3ui1ite0yHiI9PVCYul6y_pX97Gy4pHvTh7yYJ4dtgCZMLrVoVKNNvFI_diGjv9bAKcWDk-Sj6sdrKm9gPpY4PDhXGPK0VIVIg741dShoFR-BZk4pFyNB8jGGXwHcfaAkfFIRTx-mgox1Ft_TBgnd2I9IRKL7EshG3vRiHanqw0PyxXGWd0__2EGhlr4pxo.yyvkuhdCOWy4Mi_DTO-cPlGE-3MF4Q2TtnuYIaUwQPI&dib_tag=se&keywords=laptops&qid=1734438898&sprefix=lapto%2Caps%2C465&sr=8-12',
                                },
                                {
                                    type: 2,
                                    text: '$269.98 $269 . 98',
                                    url: 'https://www.amazon.com/HP-Students-Business-Quad-core-Processor/dp/B0CYBZ4JFC/ref=sr_1_12?crid=XVD6QO3K5PQL&dib=eyJ2IjoiMSJ9.1hzDXwuVanomZCsQzVSXdIsilgH9IBLaOvVZxJEpp7ob3ui1ite0yHiI9PVCYul6y_pX97Gy4pHvTh7yYJ4dtgCZMLrVoVKNNvFI_diGjv9bAKcWDk-Sj6sdrKm9gPpY4PDhXGPK0VIVIg741dShoFR-BZk4pFyNB8jGGXwHcfaAkfFIRTx-mgox1Ft_TBgnd2I9IRKL7EshG3vRiHanqw0PyxXGWd0__2EGhlr4pxo.yyvkuhdCOWy4Mi_DTO-cPlGE-3MF4Q2TtnuYIaUwQPI&dib_tag=se&keywords=laptops&qid=1734438898&sprefix=lapto%2Caps%2C465&sr=8-12',
                                },
                                {
                                    type: 2,
                                    text: '',
                                    url: 'https://www.amazon.com/HP-Students-Business-Quad-core-Processor/dp/B0CYBZ4JFC/ref=sr_1_12?crid=XVD6QO3K5PQL&dib=eyJ2IjoiMSJ9.1hzDXwuVanomZCsQzVSXdIsilgH9IBLaOvVZxJEpp7ob3ui1ite0yHiI9PVCYul6y_pX97Gy4pHvTh7yYJ4dtgCZMLrVoVKNNvFI_diGjv9bAKcWDk-Sj6sdrKm9gPpY4PDhXGPK0VIVIg741dShoFR-BZk4pFyNB8jGGXwHcfaAkfFIRTx-mgox1Ft_TBgnd2I9IRKL7EshG3vRiHanqw0PyxXGWd0__2EGhlr4pxo.yyvkuhdCOWy4Mi_DTO-cPlGE-3MF4Q2TtnuYIaUwQPI&dib_tag=se&keywords=laptops&qid=1734438898&sprefix=lapto%2Caps%2C465&sr=8-12',
                                },
                                {
                                    type: 1,
                                    text: 'Add to cart',
                                    url: '',
                                },
                                {
                                    type: 1,
                                    text: 'Add to cart',
                                    url: '',
                                },
                                {
                                    type: 3,
                                    text: 'HP 14" Laptop Stream Ultral Light for Students and Business, Quad-core Intel Celeron Processor, 8GB RAM, 256GB Storage (12...',
                                    url: 'https://m.media-amazon.com/images/I/61F8tAynu6L._AC_UY218_.jpg',
                                },
                                {
                                    type: 1,
                                    text: 'Ships to Canada',
                                    url: '',
                                },
                                {
                                    type: 1,
                                    text: '4.3 out of 5 stars',
                                    url: '',
                                },
                                {
                                    type: 1,
                                    text: '$269.98',
                                    url: '',
                                },
                                {
                                    type: 1,
                                    text: '.',
                                    url: '',
                                },
                                {
                                    type: 1,
                                    text: '98',
                                    url: '',
                                },
                                {
                                    type: 1,
                                    text: '$',
                                    url: '',
                                },
                                {
                                    type: 1,
                                    text: '269 .',
                                    url: '',
                                },
                                {
                                    type: 1,
                                    text: '28',
                                    url: '',
                                },
                            ],
                        },
                        {
                            cells: [
                                {
                                    type: 1,
                                    text: '4.4 out of 5 stars',
                                    url: '',
                                },
                                {
                                    type: 2,
                                    text: 'Remove',
                                    url: 'https://www.amazon.com/s?k=laptops&language=en_US&crid=XVD6QO3K5PQL&sprefix=lapto%2Caps%2C465&ref=nb_sb_noss_2#',
                                },
                                {
                                    type: 2,
                                    text: 'Lenovo IdeaPad Slim 3 Chromebook - 2024 - Lightweight Laptop - Waves MaxxAudio® Speakers - 14" HD Display - HD 720p Camera - 4GB Memory - 64GB Storage - MediaTek Kompanio 520 - Abyss Blue',
                                    url: 'https://www.amazon.com/Lenovo-IdeaPad-Slim-Chromebook-Lightweight/dp/B0D5HZVQDL/ref=sr_1_13?crid=XVD6QO3K5PQL&dib=eyJ2IjoiMSJ9.1hzDXwuVanomZCsQzVSXdIsilgH9IBLaOvVZxJEpp7ob3ui1ite0yHiI9PVCYul6y_pX97Gy4pHvTh7yYJ4dtgCZMLrVoVKNNvFI_diGjv9bAKcWDk-Sj6sdrKm9gPpY4PDhXGPK0VIVIg741dShoFR-BZk4pFyNB8jGGXwHcfaAkfFIRTx-mgox1Ft_TBgnd2I9IRKL7EshG3vRiHanqw0PyxXGWd0__2EGhlr4pxo.yyvkuhdCOWy4Mi_DTO-cPlGE-3MF4Q2TtnuYIaUwQPI&dib_tag=se&keywords=laptops&qid=1734438898&sprefix=lapto%2Caps%2C465&sr=8-13',
                                },
                                {
                                    type: 2,
                                    text: '$178.06 $178 . 06 List:  $219.99 $219.99',
                                    url: 'https://www.amazon.com/Lenovo-IdeaPad-Slim-Chromebook-Lightweight/dp/B0D5HZVQDL/ref=sr_1_13?crid=XVD6QO3K5PQL&dib=eyJ2IjoiMSJ9.1hzDXwuVanomZCsQzVSXdIsilgH9IBLaOvVZxJEpp7ob3ui1ite0yHiI9PVCYul6y_pX97Gy4pHvTh7yYJ4dtgCZMLrVoVKNNvFI_diGjv9bAKcWDk-Sj6sdrKm9gPpY4PDhXGPK0VIVIg741dShoFR-BZk4pFyNB8jGGXwHcfaAkfFIRTx-mgox1Ft_TBgnd2I9IRKL7EshG3vRiHanqw0PyxXGWd0__2EGhlr4pxo.yyvkuhdCOWy4Mi_DTO-cPlGE-3MF4Q2TtnuYIaUwQPI&dib_tag=se&keywords=laptops&qid=1734438898&sprefix=lapto%2Caps%2C465&sr=8-13',
                                },
                                {
                                    type: 2,
                                    text: '',
                                    url: 'https://www.amazon.com/Lenovo-IdeaPad-Slim-Chromebook-Lightweight/dp/B0D5HZVQDL/ref=sr_1_13?crid=XVD6QO3K5PQL&dib=eyJ2IjoiMSJ9.1hzDXwuVanomZCsQzVSXdIsilgH9IBLaOvVZxJEpp7ob3ui1ite0yHiI9PVCYul6y_pX97Gy4pHvTh7yYJ4dtgCZMLrVoVKNNvFI_diGjv9bAKcWDk-Sj6sdrKm9gPpY4PDhXGPK0VIVIg741dShoFR-BZk4pFyNB8jGGXwHcfaAkfFIRTx-mgox1Ft_TBgnd2I9IRKL7EshG3vRiHanqw0PyxXGWd0__2EGhlr4pxo.yyvkuhdCOWy4Mi_DTO-cPlGE-3MF4Q2TtnuYIaUwQPI&dib_tag=se&keywords=laptops&qid=1734438898&sprefix=lapto%2Caps%2C465&sr=8-13',
                                },
                                {
                                    type: 1,
                                    text: 'Add to cart',
                                    url: '',
                                },
                                {
                                    type: 1,
                                    text: 'List:  $219.99 $219.99',
                                    url: '',
                                },
                                {
                                    type: 3,
                                    text: 'Lenovo IdeaPad Slim 3 Chromebook - 2024 - Lightweight Laptop - Waves MaxxAudio® Speakers - 14" HD Display - HD 720p Camera...',
                                    url: 'https://m.media-amazon.com/images/I/61BRKJYlOSL._AC_UY218_.jpg',
                                },
                                {
                                    type: 1,
                                    text: 'Ships to Canada',
                                    url: '',
                                },
                                {
                                    type: 1,
                                    text: '4.4 out of 5 stars',
                                    url: '',
                                },
                                {
                                    type: 1,
                                    text: '$178.06',
                                    url: '',
                                },
                                {
                                    type: 1,
                                    text: '.',
                                    url: '',
                                },
                                {
                                    type: 1,
                                    text: '06',
                                    url: '',
                                },
                                {
                                    type: 1,
                                    text: '$',
                                    url: '',
                                },
                                {
                                    type: 1,
                                    text: '178 .',
                                    url: '',
                                },
                                {
                                    type: 1,
                                    text: '16',
                                    url: '',
                                },
                            ],
                        },
                        {
                            cells: [
                                {
                                    type: 1,
                                    text: '5.0 out of 5 stars',
                                    url: '',
                                },
                                {
                                    type: 2,
                                    text: 'Remove',
                                    url: 'https://www.amazon.com/s?k=laptops&language=en_US&crid=XVD6QO3K5PQL&sprefix=lapto%2Caps%2C465&ref=nb_sb_noss_2#',
                                },
                                {
                                    type: 2,
                                    text: 'Gaming Laptop, 2024 Laptop Computer with Intel Quad-Core Processor(Up to 3.6GHz), 16GB DDR4 512GB SSD, Windows 11 Laptop, 15.6" IPS 1080P, Metal Shell, USB3.2, Long Battery Life',
                                    url: 'https://www.amazon.com/KAIGERR-Computer-Quad-Core-Processor-Windows/dp/B0DP2D4J45/ref=sr_1_14?crid=XVD6QO3K5PQL&dib=eyJ2IjoiMSJ9.1hzDXwuVanomZCsQzVSXdIsilgH9IBLaOvVZxJEpp7ob3ui1ite0yHiI9PVCYul6y_pX97Gy4pHvTh7yYJ4dtgCZMLrVoVKNNvFI_diGjv9bAKcWDk-Sj6sdrKm9gPpY4PDhXGPK0VIVIg741dShoFR-BZk4pFyNB8jGGXwHcfaAkfFIRTx-mgox1Ft_TBgnd2I9IRKL7EshG3vRiHanqw0PyxXGWd0__2EGhlr4pxo.yyvkuhdCOWy4Mi_DTO-cPlGE-3MF4Q2TtnuYIaUwQPI&dib_tag=se&keywords=laptops&qid=1734438898&sprefix=lapto%2Caps%2C465&sr=8-14',
                                },
                                {
                                    type: 2,
                                    text: '$1,499.99 $1,499 . 99',
                                    url: 'https://www.amazon.com/KAIGERR-Computer-Quad-Core-Processor-Windows/dp/B0DP2D4J45/ref=sr_1_14?crid=XVD6QO3K5PQL&dib=eyJ2IjoiMSJ9.1hzDXwuVanomZCsQzVSXdIsilgH9IBLaOvVZxJEpp7ob3ui1ite0yHiI9PVCYul6y_pX97Gy4pHvTh7yYJ4dtgCZMLrVoVKNNvFI_diGjv9bAKcWDk-Sj6sdrKm9gPpY4PDhXGPK0VIVIg741dShoFR-BZk4pFyNB8jGGXwHcfaAkfFIRTx-mgox1Ft_TBgnd2I9IRKL7EshG3vRiHanqw0PyxXGWd0__2EGhlr4pxo.yyvkuhdCOWy4Mi_DTO-cPlGE-3MF4Q2TtnuYIaUwQPI&dib_tag=se&keywords=laptops&qid=1734438898&sprefix=lapto%2Caps%2C465&sr=8-14',
                                },
                                {
                                    type: 2,
                                    text: '',
                                    url: 'https://www.amazon.com/KAIGERR-Computer-Quad-Core-Processor-Windows/dp/B0DP2D4J45/ref=sr_1_14?crid=XVD6QO3K5PQL&dib=eyJ2IjoiMSJ9.1hzDXwuVanomZCsQzVSXdIsilgH9IBLaOvVZxJEpp7ob3ui1ite0yHiI9PVCYul6y_pX97Gy4pHvTh7yYJ4dtgCZMLrVoVKNNvFI_diGjv9bAKcWDk-Sj6sdrKm9gPpY4PDhXGPK0VIVIg741dShoFR-BZk4pFyNB8jGGXwHcfaAkfFIRTx-mgox1Ft_TBgnd2I9IRKL7EshG3vRiHanqw0PyxXGWd0__2EGhlr4pxo.yyvkuhdCOWy4Mi_DTO-cPlGE-3MF4Q2TtnuYIaUwQPI&dib_tag=se&keywords=laptops&qid=1734438898&sprefix=lapto%2Caps%2C465&sr=8-14',
                                },
                                {
                                    type: 1,
                                    text: 'Add to cart',
                                    url: '',
                                },
                                {
                                    type: 1,
                                    text: 'Add to cart',
                                    url: '',
                                },
                                {
                                    type: 3,
                                    text: 'KAIGERR Gaming Laptop, 2024 Laptop Computer with Intel Quad-Core Processor(Up to 3.6GHz), 16GB DDR4 512GB SSD, Windows 11 ...',
                                    url: 'https://m.media-amazon.com/images/I/61j3uzJvVLL._AC_UY218_.jpg',
                                },
                                {
                                    type: 1,
                                    text: 'Ships to Canada',
                                    url: '',
                                },
                                {
                                    type: 1,
                                    text: '5.0 out of 5 stars',
                                    url: '',
                                },
                                {
                                    type: 1,
                                    text: '$1,499.99',
                                    url: '',
                                },
                                {
                                    type: 1,
                                    text: '.',
                                    url: '',
                                },
                                {
                                    type: 1,
                                    text: '99',
                                    url: '',
                                },
                                {
                                    type: 1,
                                    text: '$',
                                    url: '',
                                },
                                {
                                    type: 1,
                                    text: '1,499 .',
                                    url: '',
                                },
                                {
                                    type: 1,
                                    text: '1',
                                    url: '',
                                },
                            ],
                        },
                        {
                            cells: [
                                {
                                    type: 1,
                                    text: '4.2 out of 5 stars',
                                    url: '',
                                },
                                {
                                    type: 2,
                                    text: 'Remove',
                                    url: 'https://www.amazon.com/s?k=laptops&language=en_US&crid=XVD6QO3K5PQL&sprefix=lapto%2Caps%2C465&ref=nb_sb_noss_2#',
                                },
                                {
                                    type: 2,
                                    text: 'HP 15.6" Portable Laptop (Include 1 Year Microsoft 365), HD Display, Intel Quad-Core N200 Processor, 16GB RAM, 128GB Storage, Wi-Fi 5, Webcam, HDMI, Numeric Keypad, Windows 11 Home, Red',
                                    url: 'https://www.amazon.com/HP-Portable-Microsoft-Quad-Core-Processor/dp/B0CPGKT77T/ref=sr_1_15?crid=XVD6QO3K5PQL&dib=eyJ2IjoiMSJ9.1hzDXwuVanomZCsQzVSXdIsilgH9IBLaOvVZxJEpp7ob3ui1ite0yHiI9PVCYul6y_pX97Gy4pHvTh7yYJ4dtgCZMLrVoVKNNvFI_diGjv9bAKcWDk-Sj6sdrKm9gPpY4PDhXGPK0VIVIg741dShoFR-BZk4pFyNB8jGGXwHcfaAkfFIRTx-mgox1Ft_TBgnd2I9IRKL7EshG3vRiHanqw0PyxXGWd0__2EGhlr4pxo.yyvkuhdCOWy4Mi_DTO-cPlGE-3MF4Q2TtnuYIaUwQPI&dib_tag=se&keywords=laptops&qid=1734438898&sprefix=lapto%2Caps%2C465&sr=8-15',
                                },
                                {
                                    type: 2,
                                    text: '$274.00 $274 . 00',
                                    url: 'https://www.amazon.com/HP-Portable-Microsoft-Quad-Core-Processor/dp/B0CPGKT77T/ref=sr_1_15?crid=XVD6QO3K5PQL&dib=eyJ2IjoiMSJ9.1hzDXwuVanomZCsQzVSXdIsilgH9IBLaOvVZxJEpp7ob3ui1ite0yHiI9PVCYul6y_pX97Gy4pHvTh7yYJ4dtgCZMLrVoVKNNvFI_diGjv9bAKcWDk-Sj6sdrKm9gPpY4PDhXGPK0VIVIg741dShoFR-BZk4pFyNB8jGGXwHcfaAkfFIRTx-mgox1Ft_TBgnd2I9IRKL7EshG3vRiHanqw0PyxXGWd0__2EGhlr4pxo.yyvkuhdCOWy4Mi_DTO-cPlGE-3MF4Q2TtnuYIaUwQPI&dib_tag=se&keywords=laptops&qid=1734438898&sprefix=lapto%2Caps%2C465&sr=8-15',
                                },
                                {
                                    type: 2,
                                    text: '',
                                    url: 'https://www.amazon.com/HP-Portable-Microsoft-Quad-Core-Processor/dp/B0CPGKT77T/ref=sr_1_15?crid=XVD6QO3K5PQL&dib=eyJ2IjoiMSJ9.1hzDXwuVanomZCsQzVSXdIsilgH9IBLaOvVZxJEpp7ob3ui1ite0yHiI9PVCYul6y_pX97Gy4pHvTh7yYJ4dtgCZMLrVoVKNNvFI_diGjv9bAKcWDk-Sj6sdrKm9gPpY4PDhXGPK0VIVIg741dShoFR-BZk4pFyNB8jGGXwHcfaAkfFIRTx-mgox1Ft_TBgnd2I9IRKL7EshG3vRiHanqw0PyxXGWd0__2EGhlr4pxo.yyvkuhdCOWy4Mi_DTO-cPlGE-3MF4Q2TtnuYIaUwQPI&dib_tag=se&keywords=laptops&qid=1734438898&sprefix=lapto%2Caps%2C465&sr=8-15',
                                },
                                {
                                    type: 1,
                                    text: 'Add to cart',
                                    url: '',
                                },
                                {
                                    type: 1,
                                    text: 'Options:',
                                    url: '',
                                },
                                {
                                    type: 3,
                                    text: 'HP 15.6" Portable Laptop (Include 1 Year Microsoft 365), HD Display, Intel Quad-Core N200 Processor, 16GB RAM, 128GB Stora...',
                                    url: 'https://m.media-amazon.com/images/I/71pTP-ll4sL._AC_UY218_.jpg',
                                },
                                {
                                    type: 1,
                                    text: 'Ships to Canada',
                                    url: '',
                                },
                                {
                                    type: 1,
                                    text: '4.2 out of 5 stars',
                                    url: '',
                                },
                                {
                                    type: 1,
                                    text: '5 capacities',
                                    url: '',
                                },
                                {
                                    type: 1,
                                    text: '.',
                                    url: '',
                                },
                                {
                                    type: 1,
                                    text: '00',
                                    url: '',
                                },
                                {
                                    type: 1,
                                    text: '$',
                                    url: '',
                                },
                                {
                                    type: 1,
                                    text: '274 .',
                                    url: '',
                                },
                                {
                                    type: 1,
                                    text: '748',
                                    url: '',
                                },
                            ],
                        },
                        {
                            cells: [
                                {
                                    type: 1,
                                    text: '4.8 out of 5 stars',
                                    url: '',
                                },
                                {
                                    type: 2,
                                    text: 'Remove',
                                    url: 'https://www.amazon.com/s?k=laptops&language=en_US&crid=XVD6QO3K5PQL&sprefix=lapto%2Caps%2C465&ref=nb_sb_noss_2#',
                                },
                                {
                                    type: 2,
                                    text: 'Dell Inspiron 3520 15.6" Touchscreen i7 Laptop, 15.6" FHD Touchscreen, Intel Core i7-1255U, 32GB RAM, 1TB SSD, Numeric Keypad, Webcam, SD Card Reader, HDMI, Wi-Fi, Windows 11 Home, Black',
                                    url: 'https://www.amazon.com/Dell-Inspiron-3520-Touchscreen-i7-1255U/dp/B0D951M4F8/ref=sr_1_16?crid=XVD6QO3K5PQL&dib=eyJ2IjoiMSJ9.1hzDXwuVanomZCsQzVSXdIsilgH9IBLaOvVZxJEpp7ob3ui1ite0yHiI9PVCYul6y_pX97Gy4pHvTh7yYJ4dtgCZMLrVoVKNNvFI_diGjv9bAKcWDk-Sj6sdrKm9gPpY4PDhXGPK0VIVIg741dShoFR-BZk4pFyNB8jGGXwHcfaAkfFIRTx-mgox1Ft_TBgnd2I9IRKL7EshG3vRiHanqw0PyxXGWd0__2EGhlr4pxo.yyvkuhdCOWy4Mi_DTO-cPlGE-3MF4Q2TtnuYIaUwQPI&dib_tag=se&keywords=laptops&qid=1734438898&sprefix=lapto%2Caps%2C465&sr=8-16',
                                },
                                {
                                    type: 2,
                                    text: '$602.97 $602 . 97 Typical:  $649.99 $649.99',
                                    url: 'https://www.amazon.com/Dell-Inspiron-3520-Touchscreen-i7-1255U/dp/B0D951M4F8/ref=sr_1_16?crid=XVD6QO3K5PQL&dib=eyJ2IjoiMSJ9.1hzDXwuVanomZCsQzVSXdIsilgH9IBLaOvVZxJEpp7ob3ui1ite0yHiI9PVCYul6y_pX97Gy4pHvTh7yYJ4dtgCZMLrVoVKNNvFI_diGjv9bAKcWDk-Sj6sdrKm9gPpY4PDhXGPK0VIVIg741dShoFR-BZk4pFyNB8jGGXwHcfaAkfFIRTx-mgox1Ft_TBgnd2I9IRKL7EshG3vRiHanqw0PyxXGWd0__2EGhlr4pxo.yyvkuhdCOWy4Mi_DTO-cPlGE-3MF4Q2TtnuYIaUwQPI&dib_tag=se&keywords=laptops&qid=1734438898&sprefix=lapto%2Caps%2C465&sr=8-16',
                                },
                                {
                                    type: 2,
                                    text: '',
                                    url: 'https://www.amazon.com/Dell-Inspiron-3520-Touchscreen-i7-1255U/dp/B0D951M4F8/ref=sr_1_16?crid=XVD6QO3K5PQL&dib=eyJ2IjoiMSJ9.1hzDXwuVanomZCsQzVSXdIsilgH9IBLaOvVZxJEpp7ob3ui1ite0yHiI9PVCYul6y_pX97Gy4pHvTh7yYJ4dtgCZMLrVoVKNNvFI_diGjv9bAKcWDk-Sj6sdrKm9gPpY4PDhXGPK0VIVIg741dShoFR-BZk4pFyNB8jGGXwHcfaAkfFIRTx-mgox1Ft_TBgnd2I9IRKL7EshG3vRiHanqw0PyxXGWd0__2EGhlr4pxo.yyvkuhdCOWy4Mi_DTO-cPlGE-3MF4Q2TtnuYIaUwQPI&dib_tag=se&keywords=laptops&qid=1734438898&sprefix=lapto%2Caps%2C465&sr=8-16',
                                },
                                {
                                    type: 1,
                                    text: 'Add to cart',
                                    url: '',
                                },
                                {
                                    type: 1,
                                    text: 'Options:',
                                    url: '',
                                },
                                {
                                    type: 3,
                                    text: 'Dell Inspiron 3520 15.6" Touchscreen i7 Laptop, 15.6" FHD Touchscreen, Intel Core i7-1255U, 32GB RAM, 1TB SSD, Numeric Key...',
                                    url: 'https://m.media-amazon.com/images/I/61W6039Mm5L._AC_UY218_.jpg',
                                },
                                {
                                    type: 1,
                                    text: 'Ships to Canada',
                                    url: '',
                                },
                                {
                                    type: 1,
                                    text: '4.8 out of 5 stars',
                                    url: '',
                                },
                                {
                                    type: 1,
                                    text: '2 capacities',
                                    url: '',
                                },
                                {
                                    type: 1,
                                    text: '.',
                                    url: '',
                                },
                                {
                                    type: 1,
                                    text: '97',
                                    url: '',
                                },
                                {
                                    type: 1,
                                    text: '$',
                                    url: '',
                                },
                                {
                                    type: 1,
                                    text: '602 .',
                                    url: '',
                                },
                                {
                                    type: 1,
                                    text: '7',
                                    url: '',
                                },
                            ],
                        },
                        {
                            cells: [
                                {
                                    type: 1,
                                    text: '4.3 out of 5 stars',
                                    url: '',
                                },
                                {
                                    type: 1,
                                    text: '',
                                    url: '',
                                },
                                {
                                    type: 1,
                                    text: '',
                                    url: '',
                                },
                                {
                                    type: 2,
                                    text: '$1,262.73 $1,262 . 73 List:  $1,399.99 $1,399.99',
                                    url: 'https://aax-us-iad.amazon.com/x/c/JH8shcYN7kfAL4ylY9wr-jMAAAGT1J1MhgEAAAH2AQBvbm9fdHhuX2JpZDYgICBvbm9fdHhuX2ltcDIgICDynSBg/clv1_CEuOPUxokZA0iHrVVPY87TLfG21BApMrtrQ592eh6b1Q13975GqUKPw18nHE8xvWjq0yzpNb3XTPsunPNWcACVlyGTGeTdfJQ2gTZGJPSQCKAthZokfB8IkGXHyXUXZ5rhHlQJ0Lfw7W3W5XUY4bqti_GwLQ93WsBJEJRNpsUhiYi_2DhRIgVEG2MJusK7AjRioRNNeDh8xBB3hneYAKaaFSzNWz1tQoGAWUZugh0QYNsYMulremNDcyil-xxVwBHWfqObnPtRUr30EeO509Jz3lOVCbozbBIv-27fDFCrQSEkm_1uS-9AqaewyGIraJHZ1mNo8OP7XzmLbJIdCZBoJT8O20MFNSxtSssmesos5QyEmc3VFovKM/https://www.amazon.com/ASUS-ROG-Strix-Gaming-Laptop/dp/B0CRDCXRK2/ref=sxbs_sbv_search_btf?content-id=amzn1.sym.2f0a8989-0b67-47e7-b61e-9e3ef9908602%3Aamzn1.sym.2f0a8989-0b67-47e7-b61e-9e3ef9908602&crid=XVD6QO3K5PQL&cv_ct_cx=laptops&keywords=laptops&pd_rd_i=B0CRDCXRK2&pd_rd_r=fddf6ba7-d111-4815-9d1a-0946c36bbe28&pd_rd_w=TGNKi&pd_rd_wg=6cCf6&pf_rd_p=2f0a8989-0b67-47e7-b61e-9e3ef9908602&pf_rd_r=C6E32EDG2W6F8VB5M4D6&qid=1734438898&sbo=RZvfv%2F%2FHxDF%2BO5021pAnSA%3D%3D&sprefix=lapto%2Caps%2C465&sr=1-1-a61ee601-6e56-4862-a8a2-1d3da5a5406f',
                                },
                                {
                                    type: 2,
                                    text: '',
                                    url: 'https://aax-us-iad.amazon.com/x/c/JH8shcYN7kfAL4ylY9wr-jMAAAGT1J1MhgEAAAH2AQBvbm9fdHhuX2JpZDYgICBvbm9fdHhuX2ltcDIgICDynSBg/clv1_CEuOPUxokZA0iHrVVPY87TLfG21BApMrtrQ592eh6b1Q13975GqUKPw18nHE8xvWjq0yzpNb3XTPsunPNWcACVlyGTGeTdfJQ2gTZGJPSQCKAthZokfB8IkGXHyXUXZ5rhHlQJ0Lfw7W3W5XUY4bqti_GwLQ93WsBJEJRNpsUhiYi_2DhRIgVEG2MJusK7AjRioRNNeDh8xBB3hneYAKaaFSzNWz1tQoGAWUZugh0QYNsYMulremNDcyil-xxVwBHWfqObnPtRUr30EeO509Jz3lOVCbozbBIv-27fDFCrQSEkm_1uS-9AqaewyGIraJHZ1mNo8OP7XzmLbJIdCZBoJT8O20MFNSxtSssmesos5QyEmc3VFovKM/https://www.amazon.com/ASUS-ROG-Strix-Gaming-Laptop/dp/B0CRDCXRK2/ref=sxbs_sbv_search_btf?content-id=amzn1.sym.2f0a8989-0b67-47e7-b61e-9e3ef9908602%3Aamzn1.sym.2f0a8989-0b67-47e7-b61e-9e3ef9908602&crid=XVD6QO3K5PQL&cv_ct_cx=laptops&keywords=laptops&pd_rd_i=B0CRDCXRK2&pd_rd_r=fddf6ba7-d111-4815-9d1a-0946c36bbe28&pd_rd_w=TGNKi&pd_rd_wg=6cCf6&pf_rd_p=2f0a8989-0b67-47e7-b61e-9e3ef9908602&pf_rd_r=C6E32EDG2W6F8VB5M4D6&qid=1734438898&sbo=RZvfv%2F%2FHxDF%2BO5021pAnSA%3D%3D&sprefix=lapto%2Caps%2C465&sr=1-1-a61ee601-6e56-4862-a8a2-1d3da5a5406f',
                                },
                                {
                                    type: 1,
                                    text: '',
                                    url: '',
                                },
                                {
                                    type: 1,
                                    text: 'List:  $1,399.99 $1,399.99',
                                    url: '',
                                },
                                {
                                    type: 3,
                                    text: 'ASUS ROG Strix G16 (2024) Gaming Laptop, 16” 16:10 FHD 165Hz Display, NVIDIA® GeForce RTX™ 4060, Intel Core i7-13650HX, 16...',
                                    url: 'https://m.media-amazon.com/images/I/81GrCeuCzxL._AC_UL640_QL65_.jpg',
                                },
                                {
                                    type: 1,
                                    text: '',
                                    url: '',
                                },
                                {
                                    type: 1,
                                    text: '4.3 out of 5 stars',
                                    url: '',
                                },
                                {
                                    type: 1,
                                    text: '$1,262.73',
                                    url: '',
                                },
                                {
                                    type: 1,
                                    text: '.',
                                    url: '',
                                },
                                {
                                    type: 1,
                                    text: '73',
                                    url: '',
                                },
                                {
                                    type: 1,
                                    text: '$',
                                    url: '',
                                },
                                {
                                    type: 1,
                                    text: '1,262 .',
                                    url: '',
                                },
                                {
                                    type: 1,
                                    text: '1,518',
                                    url: '',
                                },
                            ],
                        },
                        {
                            cells: [
                                {
                                    type: 1,
                                    text: '',
                                    url: '',
                                },
                                {
                                    type: 1,
                                    text: '',
                                    url: '',
                                },
                                {
                                    type: 1,
                                    text: '',
                                    url: '',
                                },
                                {
                                    type: 1,
                                    text: '',
                                    url: '',
                                },
                                {
                                    type: 1,
                                    text: '',
                                    url: '',
                                },
                                {
                                    type: 1,
                                    text: '',
                                    url: '',
                                },
                                {
                                    type: 1,
                                    text: '',
                                    url: '',
                                },
                                {
                                    type: 1,
                                    text: '',
                                    url: '',
                                },
                                {
                                    type: 1,
                                    text: '',
                                    url: '',
                                },
                                {
                                    type: 1,
                                    text: '',
                                    url: '',
                                },
                                {
                                    type: 1,
                                    text: '',
                                    url: '',
                                },
                                {
                                    type: 1,
                                    text: '',
                                    url: '',
                                },
                                {
                                    type: 1,
                                    text: '',
                                    url: '',
                                },
                                {
                                    type: 1,
                                    text: '',
                                    url: '',
                                },
                                {
                                    type: 1,
                                    text: '',
                                    url: '',
                                },
                                {
                                    type: 1,
                                    text: '',
                                    url: '',
                                },
                            ],
                        },
                        {
                            cells: [
                                {
                                    type: 1,
                                    text: '',
                                    url: '',
                                },
                                {
                                    type: 1,
                                    text: '',
                                    url: '',
                                },
                                {
                                    type: 1,
                                    text: '',
                                    url: '',
                                },
                                {
                                    type: 1,
                                    text: '',
                                    url: '',
                                },
                                {
                                    type: 1,
                                    text: '',
                                    url: '',
                                },
                                {
                                    type: 1,
                                    text: '',
                                    url: '',
                                },
                                {
                                    type: 1,
                                    text: '',
                                    url: '',
                                },
                                {
                                    type: 1,
                                    text: '',
                                    url: '',
                                },
                                {
                                    type: 1,
                                    text: '',
                                    url: '',
                                },
                                {
                                    type: 1,
                                    text: '',
                                    url: '',
                                },
                                {
                                    type: 1,
                                    text: '',
                                    url: '',
                                },
                                {
                                    type: 1,
                                    text: '',
                                    url: '',
                                },
                                {
                                    type: 1,
                                    text: '',
                                    url: '',
                                },
                                {
                                    type: 1,
                                    text: '',
                                    url: '',
                                },
                                {
                                    type: 1,
                                    text: '',
                                    url: '',
                                },
                                {
                                    type: 1,
                                    text: '',
                                    url: '',
                                },
                            ],
                        },
                        {
                            cells: [
                                {
                                    type: 1,
                                    text: '',
                                    url: '',
                                },
                                {
                                    type: 1,
                                    text: '',
                                    url: '',
                                },
                                {
                                    type: 1,
                                    text: '',
                                    url: '',
                                },
                                {
                                    type: 1,
                                    text: '',
                                    url: '',
                                },
                                {
                                    type: 1,
                                    text: '',
                                    url: '',
                                },
                                {
                                    type: 1,
                                    text: '',
                                    url: '',
                                },
                                {
                                    type: 1,
                                    text: '',
                                    url: '',
                                },
                                {
                                    type: 1,
                                    text: '',
                                    url: '',
                                },
                                {
                                    type: 1,
                                    text: '',
                                    url: '',
                                },
                                {
                                    type: 1,
                                    text: '',
                                    url: '',
                                },
                                {
                                    type: 1,
                                    text: 'The most intelligent and versatile 2-in-1 laptop.',
                                    url: '',
                                },
                                {
                                    type: 1,
                                    text: '',
                                    url: '',
                                },
                                {
                                    type: 1,
                                    text: '',
                                    url: '',
                                },
                                {
                                    type: 1,
                                    text: '',
                                    url: '',
                                },
                                {
                                    type: 1,
                                    text: '',
                                    url: '',
                                },
                                {
                                    type: 1,
                                    text: '',
                                    url: '',
                                },
                            ],
                        },
                        {
                            cells: [
                                {
                                    type: 1,
                                    text: '',
                                    url: '',
                                },
                                {
                                    type: 1,
                                    text: '',
                                    url: '',
                                },
                                {
                                    type: 1,
                                    text: '',
                                    url: '',
                                },
                                {
                                    type: 1,
                                    text: '',
                                    url: '',
                                },
                                {
                                    type: 1,
                                    text: '',
                                    url: '',
                                },
                                {
                                    type: 1,
                                    text: '',
                                    url: '',
                                },
                                {
                                    type: 1,
                                    text: '',
                                    url: '',
                                },
                                {
                                    type: 1,
                                    text: '',
                                    url: '',
                                },
                                {
                                    type: 1,
                                    text: '',
                                    url: '',
                                },
                                {
                                    type: 1,
                                    text: '',
                                    url: '',
                                },
                                {
                                    type: 1,
                                    text: '',
                                    url: '',
                                },
                                {
                                    type: 1,
                                    text: '',
                                    url: '',
                                },
                                {
                                    type: 1,
                                    text: '',
                                    url: '',
                                },
                                {
                                    type: 1,
                                    text: '',
                                    url: '',
                                },
                                {
                                    type: 1,
                                    text: '',
                                    url: '',
                                },
                                {
                                    type: 1,
                                    text: '',
                                    url: '',
                                },
                            ],
                        },
                    ],
                    type: 2,
                    density: 0.7585227272727273,
                    cellCount: 352,
                    selectorString: 'div#a-page>div#search>div.s-desktop-width-max.s-desktop-content.s-opposite-dir.s-wide-grid-style.sg-row>div.sg-col-20-of-24.s-matching-dir.sg-col-16-of-20.sg-col.sg-col-8-of-12.sg-col-12-of-16>div.sg-col-inner>span.rush-component.s-latency-cf-section>div.s-main-slot.s-result-list.s-search-results.sg-row',
                },
            ],
            record: {
                recordType: 'sheet',
                title: 'Amazon.com : laptops',
                sourceUrl: 'https://www.amazon.com/s?k=laptops&language=en_US&crid=XVD6QO3K5PQL&sprefix=lapto%2Caps%2C465&ref=nb_sb_noss_2',
                id: 'MPHzAMynaaP80-sEKGtVY',
            },
        },
    ];

    tables.forEach((table) => {
        tableService.addTable(table as any);
    });

    const scrapers = [
        {
            columns: [
                {
                    id: 'D_Xe9PXvJebg4o8Duc48S',
                    index: 1,
                    name: 'Product link',
                    type: 2,
                    url: 'https://www.ebay.com/itm/296877903057?itmmeta=01JFC168P1TH3C51N1WJS38TZ9&hash=item451f4d4cd1%3Ag%3AKfMAAOSw1H5nW8WG&_trkparms=%2526rpp_cid%253D66a0c2ac98fe108738170858',
                },
                {
                    id: 'l_w5r_YVJ4veg9wNdcdd6',
                    index: 2,
                    name: 'Trade name',
                    type: 1,
                    url: '',
                },
                {
                    id: 'IBiknyEwsZJoUQ7jhkFjV',
                    index: 3,
                    name: 'Product picture',
                    type: 3,
                    url: 'https://i.ebayimg.com/thumbs/images/g/KfMAAOSw1H5nW8WG/s-l960.webp',
                },
                {
                    id: 'fm-fpgdpAdEwgixD8fs1o',
                    index: 4,
                    name: 'End time',
                    type: 1,
                    url: '',
                },
                {
                    id: 'CZe6VgjTf2X1vEwSMWpkT',
                    index: 5,
                    name: 'Bidding time',
                    type: 1,
                    url: '',
                },
                {
                    id: 'K7S6ApDiWL1KjRFrtsrlp',
                    index: 6,
                    name: 'Shipping',
                    type: 1,
                    url: '',
                },
                {
                    id: 'FbXquMYuBiWy8RStgS5Bg',
                    index: 7,
                    name: 'Commodity price',
                    type: 1,
                    url: '',
                },
                {
                    id: 'c9SRzFpB9fXppMz9qIO7Q',
                    index: 8,
                    name: 'Remaining time',
                    type: 1,
                    url: '',
                },
            ],
            config: {
                endPage: 3,
                startPage: 1,
                templateUrl: 'https://www.ebay.com/e/row/tcg-auctions?_pgn={pageNo}',
            },
            createAt: 1734504003.966,
            description: '',
            id: 'scraper.example.ebay',
            mode: 3,
            name: 'Page Scraper example - www.ebay.com',
            targetSelector: 'div.pagecontainer.srp-main--isLarge>div.pagecontainer__center.PR_right_wrap>div#mainContent>section.b-module.b-list.b-listing.srp-grid.b-display--landscape>ul.b-list__items_nofooter.srp-results.srp-grid',
            url: 'https://www.ebay.com/e/row/tcg-auctions?_pgn=2',
        },
        {
            columns: [
                {
                    id: 'FIo2KhGLPKIhg5RmFaeen',
                    index: 0,
                    name: 'Column 1',
                    type: 2,
                    url: 'https://www.google.com/maps/place/Lun%C3%AC+-+Scent,+Bar+%26+Kitchen/data=!4m7!3m6!1s0x31da1932b389e035:0x16e17899e9892860!8m2!3d1.3126401!4d103.8610956!16s%2Fg%2F11y7lzm8n5!19sChIJNeCJszIZ2jERYCiJ6Zl44RY?authuser=0&hl=en&rclk=1',
                },
                {
                    id: 'PAFgaqa9uaIXqyRKB31Co',
                    index: 1,
                    name: 'Column 2',
                    type: 1,
                    url: '',
                },
                {
                    id: 'umS8MsSQfVZs0HQesTwtl',
                    index: 2,
                    name: 'Column 3',
                    type: 1,
                    url: '',
                },
                {
                    id: 'zTB1gJPcSrf86GQidfpXA',
                    index: 3,
                    name: 'Column 4',
                    type: 1,
                    url: '',
                },
                {
                    id: 'ETVSShBNeefBcJvx5ZkRS',
                    index: 4,
                    name: 'Column 5',
                    type: 1,
                    url: '',
                },
                {
                    id: 'vD3C4OzAxocXwR0VWnqIw',
                    index: 5,
                    name: 'Column 6',
                    type: 1,
                    url: '',
                },
            ],
            config: {
                maxInterval: 6,
                minInterval: 3,
            },
            createAt: 1734504245.554,
            description: '',
            id: 'scraper.example.googlemap',
            mode: 2,
            name: 'Scroll Sraper example - google map',
            targetSelector: 'div>div#app-container>div#content-container>div>div>div.XltNde.tTVLSc>div.w6VYqd>div.bJzME.tTVLSc>div.k7jAl.miFGmb.lJ3Kh.PLbyfe>div.e07Vkf.kA9KIf>div.aIFcqe>div.m6QErb.WNBkOb.XiKgde>div.m6QErb.DxyBCb.kA9KIf.dS8AEf.XiKgde.ecceSd>div.m6QErb.DxyBCb.kA9KIf.dS8AEf.XiKgde.ecceSd',
            url: 'https://www.google.com/maps/search/restaurants/@1.3131106,103.828338,14z/data=!3m1!4b1?entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D',
        },
        {
            columns: [
                {
                    id: '1Pe2HrODrvBo5dquJ_0iC',
                    index: 0,
                    name: 'Column 1',
                    type: 1,
                    url: '',
                },
                {
                    id: 'NtHLP2inXnEO7o34BpH04',
                    index: 1,
                    name: 'Column 2',
                    type: 1,
                    url: '',
                },
                {
                    id: 'prYCXJLXOWPK6K80hn5UW',
                    index: 2,
                    name: 'Column 3',
                    type: 2,
                    url: 'https://www.amazon.com/Logitech-Wireless-Headset-Black-Tico/dp/B081415GCS/ref=sr_1_1?crid=186AZ2V5K0E8H&dib=eyJ2IjoiMSJ9.YnpfBRDcc95cpZadDVufDD-nh_trFvc_pK5bicLXXk9WDCAfffWpzrxq7maAIdC13lPgURpkS-SIKcS_jnrhalOwysDlCXgKGB9mv5QGiLR2q4f6mXosKTuREemJVgjS9ukpSHOyDW7YYVe4aIVrpilT_0Fg9Jp5_wffycOvFM0pInsuvDEAAp47Zw3QMZSjZrSvSB430hmkTGnp6UfO-OCWg40JBZYgy_4HtWuQeDw.L0OFCX3aPua1jncRTkS3WrMLIvzooe1q1YnpEB1JqUQ&dib_tag=se&keywords=logitech+g733+headset&qid=1734494836&sprefix=logitech+g733+headse%2Caps%2C559&sr=8-1',
                },
                {
                    id: 'mFAt0m8h6y4EzIUgcIx0w',
                    index: 3,
                    name: 'Column 4',
                    type: 2,
                    url: 'https://www.amazon.com/Logitech-Wireless-Headset-Black-Tico/dp/B081415GCS/ref=sr_1_1?crid=186AZ2V5K0E8H&dib=eyJ2IjoiMSJ9.YnpfBRDcc95cpZadDVufDD-nh_trFvc_pK5bicLXXk9WDCAfffWpzrxq7maAIdC13lPgURpkS-SIKcS_jnrhalOwysDlCXgKGB9mv5QGiLR2q4f6mXosKTuREemJVgjS9ukpSHOyDW7YYVe4aIVrpilT_0Fg9Jp5_wffycOvFM0pInsuvDEAAp47Zw3QMZSjZrSvSB430hmkTGnp6UfO-OCWg40JBZYgy_4HtWuQeDw.L0OFCX3aPua1jncRTkS3WrMLIvzooe1q1YnpEB1JqUQ&dib_tag=se&keywords=logitech+g733+headset&qid=1734494836&sprefix=logitech+g733+headse%2Caps%2C559&sr=8-1',
                },
                {
                    id: 'gxt9R8iamvOthcNNLFHcZ',
                    index: 4,
                    name: 'Column 5',
                    type: 1,
                    url: '',
                },
                {
                    id: 'kpCFfX9lqdlqtN7IfTBR9',
                    index: 5,
                    name: 'Column 6',
                    type: 2,
                    url: 'https://www.amazon.com/s?k=logitech+g733+headset&crid=186AZ2V5K0E8H&sprefix=logitech+g733+headse%2Caps%2C559&ref=nb_sb_noss_2#',
                },
                {
                    id: '1n3pr-7eg4KyCxFaOmUdC',
                    index: 6,
                    name: 'Column 7',
                    type: 2,
                    url: 'https://www.amazon.com/Logitech-Wireless-Headset-Black-Tico/dp/B081415GCS/ref=sr_1_1?crid=186AZ2V5K0E8H&dib=eyJ2IjoiMSJ9.YnpfBRDcc95cpZadDVufDD-nh_trFvc_pK5bicLXXk9WDCAfffWpzrxq7maAIdC13lPgURpkS-SIKcS_jnrhalOwysDlCXgKGB9mv5QGiLR2q4f6mXosKTuREemJVgjS9ukpSHOyDW7YYVe4aIVrpilT_0Fg9Jp5_wffycOvFM0pInsuvDEAAp47Zw3QMZSjZrSvSB430hmkTGnp6UfO-OCWg40JBZYgy_4HtWuQeDw.L0OFCX3aPua1jncRTkS3WrMLIvzooe1q1YnpEB1JqUQ&dib_tag=se&keywords=logitech+g733+headset&qid=1734494836&sprefix=logitech+g733+headse%2Caps%2C559&sr=8-1',
                },
                {
                    id: 'FIv5iKRnOszhy-xJ_wNmi',
                    index: 7,
                    name: 'Column 8',
                    type: 1,
                    url: '',
                },
                {
                    id: '91IJGqVKExdutc1o_24-w',
                    index: 8,
                    name: 'Column 9',
                    type: 1,
                    url: '',
                },
                {
                    id: 'jjDMggkOD6JBEQCFjCG7K',
                    index: 9,
                    name: 'Column 10',
                    type: 1,
                    url: '',
                },
                {
                    id: 'nXgIvIHFcTWHzN7qEjgUm',
                    index: 10,
                    name: 'Column 11',
                    type: 1,
                    url: '',
                },
                {
                    id: '6goljvCBofDsnFq1wxSao',
                    index: 11,
                    name: 'Column 12',
                    type: 1,
                    url: '',
                },
                {
                    id: 'elADZ9f9Iv7DrQVhQ4XQR',
                    index: 12,
                    name: 'Column 13',
                    type: 1,
                    url: '',
                },
                {
                    id: 'lbxcudRGL-z3diSPUqgQ4',
                    index: 13,
                    name: 'Column 14',
                    type: 1,
                    url: '',
                },
                {
                    id: '5-aujkzq3Kj18y3yuzYWt',
                    index: 14,
                    name: 'Column 15',
                    type: 1,
                    url: '',
                },
                {
                    id: 'QQ-tqwkunI8C5_6GVh0Cc',
                    index: 15,
                    name: 'Column 16',
                    type: 1,
                    url: '',
                },
                {
                    id: 'w6GTFcRkprr5pxaBnoplU',
                    index: 16,
                    name: 'Column 17',
                    type: 1,
                    url: '',
                },
                {
                    id: '6dI3RRfWhb9nH87L8vg-1',
                    index: 17,
                    name: 'Column 18',
                    type: 1,
                    url: '',
                },
                {
                    id: 'MD6j2o7TcRK5r8KY6WJdy',
                    index: 18,
                    name: 'Column 19',
                    type: 1,
                    url: '',
                },
                {
                    id: 'SWoNv8kzC7K3H3yW5LvYD',
                    index: 19,
                    name: 'Column 20',
                    type: 1,
                    url: '',
                },
                {
                    id: '8XTApzZ3SGEfxLvDULKww',
                    index: 20,
                    name: 'Column 21',
                    type: 1,
                    url: '',
                },
            ],
            config: {
                buttonSelector: 'div#a-page:nth-last-of-type(4)>div#search:nth-last-of-type(5)>div.s-desktop-width-max.s-desktop-content.s-opposite-dir.s-wide-grid-style.sg-row:nth-last-of-type(2)>div.sg-col-20-of-24.s-matching-dir.sg-col-16-of-20.sg-col.sg-col-8-of-12.sg-col-12-of-16:nth-last-of-type(2)>div.sg-col-inner:nth-last-of-type(1)>span.rush-component.s-latency-cf-section:nth-last-of-type(2)>div.s-main-slot.s-result-list.s-search-results.sg-row:nth-last-of-type(2)>div.a-section.a-spacing-none.s-result-item.s-flex-full-width.s-widget.s-widget-spacing-large:nth-last-of-type(3)>div.s-widget-container.s-spacing-medium.s-widget-container-height-medium.celwidget.slot\\=MAIN.template\\=PAGINATION.widgetId\\=pagination-button:nth-last-of-type(1)>div.a-section.a-text-center.s-pagination-container:nth-last-of-type(1)>span.s-pagination-strip:nth-last-of-type(1)>ul.a-unordered-list.a-horizontal.s-unordered-list-accessibility:nth-last-of-type(1)>li.s-list-item-margin-right-adjustment:nth-last-of-type(1)>span.a-list-item:nth-last-of-type(1)>a.s-pagination-item.s-pagination-next.s-pagination-button.s-pagination-button-accessibility.s-pagination-separator:nth-last-of-type(1)',
                maxInterval: 6,
                minInterval: 3,
            },
            createAt: 1734494960.877,
            description: '',
            id: 'scraper.example.amazon',
            mode: 1,
            name: 'Click Sraper example - amazon.com',
            targetSelector: 'div#a-page>div#search>div.s-desktop-width-max.s-desktop-content.s-opposite-dir.s-wide-grid-style.sg-row>div.sg-col-20-of-24.s-matching-dir.sg-col-16-of-20.sg-col.sg-col-8-of-12.sg-col-12-of-16>div.sg-col-inner>span.rush-component.s-latency-cf-section>div.s-main-slot.s-result-list.s-search-results.sg-row',
            url: 'https://www.amazon.com/s?k=logitech+g733+headset&crid=186AZ2V5K0E8H&sprefix=logitech+g733+headse%2Caps%2C559&ref=nb_sb_noss_2',
        },
    ];

    for (const scraper of scrapers) {
        scraper.columns.forEach((column, columnIndex) => {
            column.id = `${scraper.id}.column.${columnIndex}`;
        });
        await scraperService.addScraper(scraper);
    }
}
