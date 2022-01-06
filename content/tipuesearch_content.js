var tipuesearch = {"pages": [{'title': 'NOTE', 'text': '當倉儲網站發生404問題的排解方法 \n \n \n \n \n 1-先到D槽找到DATA \n \n \n \n 2-然後再進到tmp \n \n 3-cad2021_hw \n \n 4-點選config \n \n 5-\xa0 新增\xa0 <h1>solvespace</h1> \n 並且把原原本的<h1>的部分換成<h2> 然後 save 就完成了。 \n \n \n 最後記得把動態轉成靜態 -完成 。 \n', 'tags': '', 'url': 'NOTE.html'}, {'title': 'wink', 'text': '解說設定wink \n 1-先進到data開啟已經下載好的wink \n 然後進到wink工具列 \n 打開preferences\xa0 \n \n 2-在data裡找到已下載的shareX-portable \n \n \n 3-打開shareX的資料夾 \n \n', 'tags': '', 'url': 'wink.html'}, {'title': 'fossil', 'text': '1-download fossil \n \n 2-將 fossil 進行解壓縮 \n 然後建立資料夾 \n cd fossil\xa0 \xa0 \xa0....... \n', 'tags': '', 'url': 'fossil.html'}, {'title': '倉儲e-mail', 'text': '倉儲e-mail \n \n 當倉儲推送平率表發生問題時，需要進一步確認e-mail 是否與綁定帳號相同 \n \n 上圖中紅色表格中ZHILIN-0817才是修改過正確的e-mail帳號 \n \n 1-先到資料夾找到data \n 2-選home_ipv4 \n \n 3-打開小白窗SciTE 將.gitconfig 拉進小白窗進行編輯 \n \n 4-將e-mail改成正確的帳號 最後記得save\xa0', 'tags': '', 'url': '倉儲e-mail.html'}, {'title': '9444', 'text': '指令步驟 \n 1-\xa0 \xa0cd tmp \n 2-\xa0 \xa0cd cad2021_hw \n 3-\xa0 \xa0cms \n \n 4- 打完上述指令會得到  https://127.0.0.1:9444/ \n \n 5- 進到網站選 login  密碼: admin \n \n \n \n \n', 'tags': '', 'url': '9444.html'}, {'title': 'About', 'text': '本學期的電腦輔助設計實習，要求每一位學員根據本硬件模板的格式建立個人的作業與網頁。 \n \n 你的學號 40923156 \n 網站電子： https  :  //github.com/mdecourse/cad2021_hw \n 網站鏈接： https://github.com/ZHILIN-0817/cad2021_hw \n 其他與作者或作業相關資料說明或介紹 \n', 'tags': '', 'url': 'About.html'}, {'title': 'HW1', 'text': 'HW1 佔學生績效 25% \n HW1必須在2021.11.10 22:00之前完成。 \n HW1具體項目成果回報區 將於2021.09.23開啟，於 2021.11.10 22:00關閉。 \n 作業一：meArm機器人訂貨與機電運動模擬場景製作 \n Step1 ：下載 meARM.7z 這個包含未完成組立的meArm Robot場景與雷射切割粒子組立手冊。 \n meArm_75-0040_v1.pdf 則是另外一本組立參考手冊。 \n Step2 ：從課程網頁中的 Compile CoppeliaSim頁面 ，下載 coppeliaSim 4.1.0官方版與MSYS2編譯版.7z （檔案大小412 MB，解開壓縮後1GB）可攜套件。 \n Step3 ：在HW1中，要求每一位程序亂數分配（兩班實際亂數分配以上的課程）所使用的兩套參數式CAD套件，從軟體發展緣開始進行介紹、教育版軟體套件檔案的取得，下載安裝以及配置使用。 可知第一步中的零件尺寸，逐一完成我的手臂機器人各零件繪製與組立 。 鋸縫 匯入 CoppeliaSim進行整體配置後，以 UI介面 中的滑塊控制meArm機器人各軸的旋轉作動。 \n 圖2b CAD套件分配結果： HTTPS ：//mde.tw/cad2021/downloads/online/2b_hw1_cad.txt \n 附件： \n 1. CAD套件分配表： \n sw：Solidworks，inv：Inventor，nx：NX12，on：Onshape，slvs：Solvespace \n 2a 套裝亂數分配結果 \n 2b 套裝亂數分配結果 \n 2.在兩套CAD完成零件繪圖並轉入CoppeliaSim後，為了建立動態模型必須利用 姿態 編輯模式 轉為 乾淨模型 ，並與實際轉入的STL格式訂貨組合應用後建立模擬場景 （場景）。 \n 3. meARM機器人 動態模擬場景 的建構，可參考 0 ， 1 ， 2 ， 3 ， 4 ， 5 ， 6 ， 7 ，也可參考 Uarm模型機器人 與相關 影片 。 \n 4. CoppeliaSim設計動態模擬 頁面 。 \n 5. 網際Lua 程序執行。 \n 6.  meArm.slvs  ,  meArm_in_solvespace.slvs \n 7. UI介面程序參考： \n 函數 closeEventHandler(h) \n    sim.addLog(sim.verbosity_scriptinfos,\'窗口\'..h..\'正在關閉......\') \n    simUI.hide(h) \n結語 \n \n函數joint1_rotate(ui,id,newVal) \n    simUI.setLabelText(ui,3000,\'theta1 設置為\'..newVal) \n    sim.setJointTargetPosition(joint1, newVal*deg) \n結語 \n \n函數joint2_rotate(ui,id,newVal) \n    simUI.setLabelText(ui,3000,\'theta2 設置為\'..newVal) \n    sim.setJointTargetPosition(joint2, newVal*deg) \n結語 \n \n函數joint3_rotate(ui,id,newVal) \n    simUI.setLabelText(ui,3000,\'theta3 設置為\'..newVal) \n    sim.setJointTargetPosition(joint3, newVal*deg) \n結語 \n \n函數joint16_rotate(ui,id,newVal) \n    simUI.setLabelText(ui,3000,\'theta16 設置為\'..newVal) \n    sim.setJointTargetPosition(joint16, newVal*deg) \n    sim.setJointTargetPosition(joint20, -newVal*deg) \n結語 \n \n函數 sysCall_init() \n    --這裡做一些初始化 \n    關節 1 = sim.getObjectHandle(\'motor1\') \n    Joint2 = sim.getObjectHandle(\'motor2\') \n    Joint3 = sim.getObjectHandle(\'motor3\') \n    Joint16 = sim.getObjectHandle(\'motor16\') \n    Joint20 = sim.getObjectHandle(\'motor20\') \n    我 = 0 \n    度 = math.pi/180 \n    打印（一） \n    xml = [[ \n<ui closeable="true" on-close="closeEventHandler" resizable="true"> \n    " <label text="這是 CustomUI 插件的演示。瀏覽下面的選項卡以探索可以使用該插件創建的所有小部件。 wordwrap="true" /> \n    <標籤> \n        <tab title="數字">a \n            " <label text="滑塊可以水平或垂直定向，並且具有可以設置的可選屬性（在 XML 中），例如最小值和最大值。 wordwrap="true" /> \n            <label text="" id="3000" wordwrap="true" /> \n            <label text="theta1" /> <hslider tick-position="above" tick-interval="1"  \n            minimum="0" maximum="360" on-change="joint1_rotate" /> \n            <label text="theta2" /> <hslider tick-position="above" tick-interval="1"  \n            最小值="-90" 最大值="65" on-change="joint2_rotate" /> \n            <label text="theta3" /> <hslider tick-position="above" tick-interval="1"  \n            最小值="-90" 最大值="185" on-change="joint3_rotate" /> \n            <label text="theta16" /> <hslider tick-position="above" tick-interval="1"  \n            minimum="0" maximum="15" on-change="joint16_rotate" /> \n        </tab> \n    </標籤> \n</ui> \n]] \n    ui=simUI.create(xml) \n     \n結尾 \n \n （出自： 2016_ADDITIVE MANUFACTURING PROCESSES FOR FABRICATING A MINI ROBOOT - 計算模型和實驗結果.pdf ） \n \n', 'tags': '', 'url': 'HW1.html'}, {'title': 'CAD1Solvespace', 'text': 'solvespace緣起說明與介紹 \n Slocespace 屬於機械設計軟件 基礎功能跟大多數的機械設計軟件都大同小異。 \n 功能特性 \n 1-尺寸驅動的參數化二維草圖系統 \n 2-尺寸和約束的參數化裝配系統 \n 3-動態運動仿真功能 \n 4-PNG預覽圖形倒出的能力 \n 5-二維圖紙DXF/DWG 格式導入/導出 能力 \n 6-運動軌跡的捕捉 繪製 數據導出 \n 7-距離/體積/面積/重心的量測 \n \n \n', 'tags': '', 'url': 'CAD1Solvespace.html'}, {'title': 'CAD1 安裝配置', 'text': '每個人會被分配到兩套軟件 \n 這一套是solvespace \n 可參考以下步驟完成下載程序 \n \n \n \n \n 即可啟動solvespace \n \n \n \n', 'tags': '', 'url': 'CAD1 安裝配置.html'}, {'title': 'CAD1操作流程', 'text': 'CAD1 指各學員所分配到的第一套參數式 CAD 套件，包括 Solidworks、Inventor、NX、Onshape 與 Solvespace。 \n CAD1 零組件繪圖操作流程影片 (Youtube) \n CAD1零組件繪圖教學影片(Wink) \n CAD1零組件繪圖標題教學影片嵌入影片：必須為「 NFU-MDE-cad2021-學號-SW2020 零組件繪圖教學影片」且加上 語音說明 與 字幕。 \n 如果使用Solidworks 2017版，則將SW2020換成SW2017，其他套件INV2020代表AutoDesk Inventor 2020版，還有Onshape和Solvespace等套件名稱。 \n', 'tags': '', 'url': 'CAD1操作流程.html'}, {'title': 'CAD2Inventor', 'text': 'Inventor緣起說明與介紹 \n \n Autodesk inventor 3D CAD\xa0 這套軟件為3D機械設計 ，產品模擬，模具建立與設計溝通提供一套彈性的軟體。Inventor能讓設計 視覺化以及模擬產品， 超越3D進化至數位原型製作。同時Inventor 是一套較符合成本效益且較為容易學習的軟件 \n \n Inventor數位化原型製作優點 \n 1-在設計流程早期改進協作以及創新 \n 2-縮短產品設計和開發的生命週期 \n 3-能更有效的控制設計者的設計資料 \n 4-在複雜的環境中有效提升競爭力 \n \n 主要功能及特色 \n 1-整合直接建模和參數式工作流程 \n 2-CAD數據整合。使用任何3D CAD 系統中的資料，保持關聯設計連結 \n 3-iLogic支持規則驅動設計，無須複雜程式即可使用iLogic來標準化和自動化設計流程並且配置設計者的虛擬產品 \n 4-3D標註與 3D PDF匯出 ，使用3D標註在3D模型中添加公差尺寸 註解和其他工程細節 \n 5-大型組件效能 改進圖形交互速度加快 大型檔案打開時間縮短 這些都大大提升設計流程的工作效率 \n 6-機電整合 連結Inventor 和AutoCAD Electtrical的設計數據達到機電一體化的設計目的 \n \xa0\xa0 \n \xa0 \n', 'tags': '', 'url': 'CAD2Inventor.html'}, {'title': 'CAD2安裝配置', 'text': 'CAD2 指各學員所分配到的第二套參數式 CAD 套件，包括 Solidworks、Inventor、NX、Onshape 與 Solvespace。 \n CAD2套件下載安裝與配置 \n CAD2套件下載安裝與配置文件內嵌影片：標題必須為「 NFU - MDE - cad2021 - 學號 - SW2020 套件下載安裝與配置影片」，並且 加上語音說明 和 字幕。 \n 如果使用Solidworks 2017版，則將SW2020換成SW2017，其他套件INV2020代表AutoDesk Inventor 2020版，還有Onshape和Solvespace等套件名稱。 \n \n', 'tags': '', 'url': 'CAD2安裝配置.html'}, {'title': 'CAD2操作流程', 'text': 'CAD2 指各學員所分配到的第二套參數式 CAD 套件，包括 Solidworks、Inventor、NX、Onshape 與 Solvespace。 \n CAD2 零組件繪圖操作流程影片 (Youtube) \n CAD2零組件繪圖教學影片（Wink） \n CAD2零組件繪圖標題教學影片嵌入影片：必須為「 NFU-MDE-cad2021-學號-SW2020 零組件繪圖教學影片」且加上 語音說明 與 字幕。 \n 如果使用Solidworks 2017版，則將SW2020換成SW2017，其他套件INV2020代表AutoDesk Inventor 2020版，還有Onshape和Solvespace等套件名稱。 \n', 'tags': '', 'url': 'CAD2操作流程.html'}, {'title': '運動場景', 'text': '加元1： \n CAD1 訂貨轉出後轉入 CoppeliaSim 操作影片 (Youtube) \n CAD1訂貨轉入CoppeliaSim教學影片 (Wink) \n CAD1轉入Coppeliasim教學影片嵌入式影片：標題必須為「 NFU-MDE-cad2021-學號-SW2020 訂貨轉入CoppeliaSim教學影片」且加上 語音說明 與 字幕。 \n 加元2： \n CAD2 訂貨轉出後轉入 CoppeliaSim 操作影片 (Youtube) \n CAD2訂貨轉入CoppeliaSim教學影片 (Wink) \n CAD2轉入Coppeliasim教學影片嵌入式影片：標題必須為「 NFU-MDE-cad2021-學號-SW2020 訂貨轉入CoppeliaSim教學影片」且加上 語音說明 與 字幕。 \n 如果使用Solidworks 2017版，則將SW2020換成SW2017，其他套件INV2020代表AutoDesk Inventor 2020版，還有Onshape和Solvespace等套件名稱。 \n', 'tags': '', 'url': '運動場景.html'}, {'title': 'w13', 'text': '零組件繪圖進度 \n 目前用inventor繪製完大部分零件 \n \n \n \n \n \n \n \n   \n \n \n \n \n \n \n \n \n \n \n', 'tags': '', 'url': 'w13.html'}, {'title': 'HW1-1', 'text': 'HW1-1 佔學期成績15% \n HW1-1必須在2021.12.01 22:00之前完成。 \n HW1-1具體項目成果回報區 將於2021.11.18開啟，於 2021.12.01 22:00關閉。 \n 作業1-1：Mirobot機械精細場景組合 \n 說明：meArm Robot 有四個自由度，請根據 HW1 的零組件組立與 CoppeliaSim 運動場景模擬，延伸至 Task1-1 中梨自由度的 Mirobot 機械細節。 \n mirobot_part1_to_part5.7z 為取自 \xa0 https://github.com/wlkata/Mirobot-STL 的參考 訂貨 。 請利用場景中Mirobot STL訂貨，組合為可以通過 UI介面 中的滑塊控制各軸作動旋轉的運動模型。 \n 請根據 Task1-1 中的說明，完成各項指定的任務。 \n', 'tags': '', 'url': 'HW1-1.html'}, {'title': 'meARM 模擬', 'text': '四連桿組合 \n \n \n \n \n 零件組裝完成。 \n 組裝步驟 參考wink影片 .... \n \n \n', 'tags': '', 'url': 'meARM 模擬.html'}, {'title': 'HW2', 'text': 'HW2 佔學期績效 20% \n HW2必須在2021.12.22 22:00之前完成。 \n HW2具體項目成果回報區 將於2021.12.09開啟，於 2021.12.22 22:00關閉。 \n meArm 逆向運動學與網參數式 CAD API 結合應用。 \n 婚禮中 https://github.com/mdecourse/meArm 的meArm Robot逆向運動學程序，改為Lua與Python程序，使能套用至HW1所完成的CoppeliaSim meArm運動模擬場景。 並分別採 Lua，Legacy remote API 及 Bluezero remote API 逆向運動的方式進行控制。 \n 請利用 Task2 中的Solidworks，Inventor與NX API程序控制meArm Robot零組件尺寸，說明並討論如何通過網絡程序控制meArm Robot的零件尺寸，並結合上述逆向運動學程序庫，植入自動化機電產品開發流程更容易滿足客制化需求。 \n 參考： \n 2016_製造微型機器人的增材製造工藝——計算模型和實驗結果.pdf \n 具有逆向運動學 PD-偽逆雅可比行列式和正向運動學的機器人機械手控制 Denavit Hartenber.pdf \n 機器人手臂運動學分析.pdf \n https://codebender.cc/user/MeArm \n https://github.com/mdecourse/meArmPi \n /下載/MeArmPiTechnicalOverviewV0-3DRAFT.pdf \n https://github.com/mdecourse/me-arm-ik \n https://github.com/mdecourse/mearm_model \n https://courses.ece.cornell.edu/ece5990/ECE5725_Fall2016_Projects/pas324_ml634/index.html \n https://github.com/mdecourse/InefficientSkittleSorter \n https://mearm.com \n', 'tags': '', 'url': 'HW2.html'}, {'title': 'HW3', 'text': 'HW3 為選項作業。 \n HW3具體項目成果回報區 將於2021.12.09開啟，於 2022.01.05 22:00關閉 \n https://mde.tw/cad2021/content/Task3.html \xa0 \n https://mde.tw/cad2021/content/Task4.html \n https://mde.tw/cad2021/content/Task5.html \n https://mde.tw/cad2021/content/Task6.html \n https://mde.tw/cad2021/content/Task7.html \n 請從上列任務中自行選擇項目內容完成HW3。 \n', 'tags': '', 'url': 'HW3.html'}, {'title': 'run', 'text': ' 導入 FileSaver 與 filereader  \n \n \n \n \n  導入 ace  \n \n \n \n \n \n \n  請注意, 這裡使用 Javascript 將 localStorage["py_src"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n  印出版次與關鍵字程式  \n \n \n \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  Filename:  .py    存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div 作為切入位置  \n \n  導入 gearUtils-0.9.js Cango 齒輪繪圖程式庫  \n \n \n \n \n \n', 'tags': '', 'url': 'run.html'}, {'title': '最終項目', 'text': '當倉儲網站發生404問題的排解方法 \n \n \n \n \n 1-先到D槽找到DATA \n \n \n \n 2-然後再進到tmp \n \n 3-cad2021_hw \n \n 4-點選config \n \n 5-\xa0 新增\xa0 <h1>solvespace</h1> \n 並且把原原本的<h1>的部分換成<h2> 然後 save 就完成了。 \n \n \n 最後記得把動態轉成靜態 -完成 。 \n 指令步驟 \n 1-\xa0 \xa0cd tmp \n 2-\xa0 \xa0cd cad2021_hw \n 3-\xa0 \xa0cms \n \n 4- 打完上述指令會得到 \xa0 https://127.0.0.1:9444/ \n \n 5- 進到網站選 login \xa0 密碼: admin \n 解說設定wink \n 1-先進到data開啟已經下載好的wink \n 然後進到wink工具列 \n 打開preferences\xa0 \n \n 2-在data裡找到已下載的shareX-portable \n \n \n 3-打開shareX的資料夾 \n \n \n \n solvespace緣起說明與介紹 \n Slocespace 屬於機械設計軟件 基礎功能跟大多數的機械設計軟件都大同小異。 \n 功能特性 \n 1-尺寸驅動的參數化二維草圖系統 \n 2-尺寸和約束的參數化裝配系統 \n 3-動態運動仿真功能 \n 4-PNG預覽圖形倒出的能力 \n 5-二維圖紙DXF/DWG 格式導入/導出 能力 \n 6-運動軌跡的捕捉 繪製 數據導出 \n 7-距離/體積/面積/重心的量測 \n \n Inventor緣起說明與介紹 \n \n Autodesk inventor 3D CAD\xa0 這套軟件為3D機械設計 ，產品模擬，模具建立與設計溝通提供一套彈性的軟體。Inventor能讓設計 視覺化以及模擬產品， 超越3D進化至數位原型製作。同時Inventor 是一套較符合成本效益且較為容易學習的軟件 \n \n Inventor數位化原型製作優點 \n 1-在設計流程早期改進協作以及創新 \n 2-縮短產品設計和開發的生命週期 \n 3-能更有效的控制設計者的設計資料 \n 4-在複雜的環境中有效提升競爭力 \n \n 主要功能及特色 \n 1-整合直接建模和參數式工作流程 \n 2-CAD數據整合。使用任何3D CAD 系統中的資料，保持關聯設計連結 \n 3-iLogic支持規則驅動設計，無須複雜程式即可使用iLogic來標準化和自動化設計流程並且配置設計者的虛擬產品 \n 4-3D標註與 3D PDF匯出 ，使用3D標註在3D模型中添加公差尺寸 註解和其他工程細節 \n 5-大型組件效能 改進圖形交互速度加快 大型檔案打開時間縮短 這些都大大提升設計流程的工作效率 \n 6-機電整合 連結Inventor 和AutoCAD Electtrical的設計數據達到機電一體化的設計目的 \n \n 每個人會被分配到兩套軟件 \n 這一套是solvespace \n 可參考以下步驟完成下載程序 \n \n \n \n \n 即可啟動solvespace \n \n \n 零組件繪圖進度 \n 目前用inventor繪製完大部分零件 \n \n \n 四連桿組合 \n \n \n \n \n 零件組裝完成。 \n 組裝步驟 參考wink影片 .... \n 倉儲e-mail \n \n 當倉儲推送平率表發生問題時，需要進一步確認e-mail 是否與綁定帳號相同 \n \n 上圖中紅色表格中ZHILIN-0817才是修改過正確的e-mail帳號 \n \n 1-先到資料夾找到data \n 2-選home_ipv4 \n \n 3-打開小白窗SciTE 將.gitconfig 拉進小白窗進行編輯 \n \n 4-將e-mail改成正確的帳號 最後記得save\xa0 \n \n \xa0\xa0 \n \xa0 \n \n \n', 'tags': '', 'url': '最終項目.html'}]};