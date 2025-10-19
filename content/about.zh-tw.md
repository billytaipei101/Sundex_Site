---
title: "關於我們"
draft: false
---
<!DOCTYPE html>
<html lang="zh-tw">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>About Sundex Optical</title>
    <style>
        .image-gallery {
            display: flex;
            justify-content: space-between; 
            margin: 40px 0; 
            gap: 20px;
            max-width: 900px;
            margin-left: auto;
            margin-right: auto;
        }
        .image-gallery div {
            flex: 1; /* Make all three images take up equal space */
            text-align: center;
        }
        .image-gallery img {
            max-width: 100%;
            max-height: 150px;
            height: auto;
            display: block; 
        }
        .youtube-container {
            margin-top: 40px; 
            text-align: center; 
        }
        .youtube-container iframe {
            max-width: 100%;
        }
        h1 {
            margin-bottom: 20px; /* Space below the main heading */
        }
        /* Timeline Styles */
        .timeline {
            margin: 60px 0;
            padding: 0 20px;
        }
        .timeline h2 {
            text-align: center;
            margin-bottom: 50px;
            font-size: 28px;
            color: #333;
        }
        .timeline-container {
            position: relative;
            max-width: 1000px;
            margin: 0 auto;
        }
        .timeline-container::before {
            content: '';
            position: absolute;
            left: 50%;
            transform: translateX(-50%);
            width: 4px;
            height: 100%;
            background-color: #0066cc;
        }
        .timeline-item {
            margin-bottom: 30px;
            position: relative;
        }
        .timeline-item:nth-child(odd) .timeline-content {
            margin-left: 0;
            margin-right: 52%;
            text-align: right;
        }
        .timeline-item:nth-child(even) .timeline-content {
            margin-left: 52%;
            margin-right: 0;
            text-align: left;
        }
        .timeline-item::before {
            content: '';
            position: absolute;
            left: 50%;
            transform: translateX(-50%);
            width: 16px;
            height: 16px;
            background-color: #0066cc;
            border: 3px solid white;
            border-radius: 50%;
            top: 0;
            z-index: 1;
        }
        .timeline-content {
            background-color: #f9f9f9;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
            border-left: 3px solid #0066cc;
        }
        .timeline-item:nth-child(even) .timeline-content {
            border-left: none;
            border-right: 3px solid #0066cc;
        }
        .timeline-year {
            font-weight: bold;
            color: #0066cc;
            font-size: 18px;
            margin-bottom: 8px;
        }
        .timeline-description {
            color: #555;
            font-size: 14px;
            line-height: 1.6;
        }
        /* Mobile Responsive */
        @media (max-width: 768px) {
            .timeline-container::before {
                left: 20px;
            }
            .timeline-item::before {
                left: 20px;
            }
            .timeline-item:nth-child(odd) .timeline-content,
            .timeline-item:nth-child(even) .timeline-content {
                margin-left: 60px;
                margin-right: 0;
                text-align: left;
                border-left: 3px solid #0066cc;
                border-right: none;
            }
            .timeline-content {
                padding: 15px;
            }
            .timeline-year {
                font-size: 16px;
            }
            .timeline-description {
                font-size: 13px;
            }
        }
        main img {
            max-width: 100%;
            height: auto;
            display: block;
            width: 100%;
        }
        /* Map Container Styles */
        .map-container {
            margin: 60px 0;
            padding: 0 20px;
        }
        .map-container h2 {
            text-align: center;
            margin-bottom: 30px;
            font-size: 28px;
            color: #333;
        }
        .map-container iframe {
            max-width: 100%;
            width: 100%;
        }
        @media (max-width: 768px) {
            .map-container iframe {
                height: 350px !important;
            }
        }
    </style>
</head>
<body>
<br>
<br>
<header>
    <h1>晴绮光學股份有限公司 ─ 專業 PC（聚碳酸酯）光學和太陽眼鏡鏡片製造商</h1>
</header>

<main>
    <p>晴綺光學股份有限公司 👓 是一家獨立公司，專門製造光學鏡片（視力矯正鏡片）、太陽眼鏡鏡片、安全防護鏡片、冬季和極限運動護目鏡，以及所有類型的防護眼鏡。我們的起源是熒茂光學股份有限公司（一家立足台灣的 PC 鏡片製造先驅）旗下的光學鏡片部門。</p>
    <p>晴綺光學股份有限公司繼承了 Mildex Optical 超過 20 年的技術專長。我們留用了一批精英且經驗豐富的員工，他們現在正專注於一個新目標：專業化並精進 Sundex 的產品線。Sundex 將持續開發實用且適用的產品，以滿足未來的市場需求。</p>
    <p>晴綺光學股份有限公司現以獨立實體運營，正專注於最新光學鏡片的製造與研發。我們一貫的核心優勢，在於我們的生產和鍍膜技術。作為光學鏡片和眼部護理產品值得信賴的分銷渠道，晴綺光學股份有限公司為客戶帶來信心、提供全面的產品保證，並創造價值。</p>
    <p>晴綺光學股份有限公司以其成功的品質保證（QA）系統、研發能力，以及全自動化生產設備為傲。我們已獲得 SGS 頒發的 ISO 9001:2015 品質標準認證，並在美國食品藥物管理局（FDA）完成註冊。我們深信晴綺光學股份有限公司卓越的 QA 紀錄就是我們產品的最佳保證。透過滿足客戶需求並在市場競爭中脫穎而出，Sundex 致力於為所有客戶創造持久價值。</p>
    <div class="image-gallery">
        <div><img src="/images/sgs.png" alt="Sundex Image 1"></div> 
        <div><img src="/images/ce.png" alt="Sundex Image 2"></div>
        <div><img src="/images/fda.png" alt="Sundex Image 3"></div>
    </div>
    <div class="youtube-container">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/4t74z3rVqLE?si=nWUABgnt0CTLVsYl" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    </div>
        <!-- Timeline Section -->
    <div class="timeline">
        <h2>公司發展歷程</h2>
        <div class="timeline-container">
            <div class="timeline-item">
                <div class="timeline-content">
                    <div class="timeline-year">2001年</div>
                    <div class="timeline-description">原公司奉准設立登記</div>
                </div>
            </div>
            <div class="timeline-item">
                <div class="timeline-content">
                    <div class="timeline-year">2002年</div>
                    <div class="timeline-description">研發技術部正式成立</div>
                </div>
            </div>
            <div class="timeline-item">
                <div class="timeline-content">
                    <div class="timeline-year">2003年</div>
                    <div class="timeline-description">推行國際標準組織ISO 9001品質系統認證</div>
                </div>
            </div>
            <div class="timeline-item">
                <div class="timeline-content">
                    <div class="timeline-year">2004年</div>
                    <div class="timeline-description">射出快速換模模具開發成功導入量產</div>
                </div>
            </div>
            <div class="timeline-item">
                <div class="timeline-content">
                    <div class="timeline-year">2005年</div>
                    <div class="timeline-description">第1代變色灰產品開發完成，創台灣變色鏡片先鋒</div>
                </div>
            </div>
            <div class="timeline-item">
                <div class="timeline-content">
                    <div class="timeline-year">2006年</div>
                    <div class="timeline-description">導入ERP資訊系統，強化製造管控</div>
                </div>
            </div>
            <div class="timeline-item">
                <div class="timeline-content">
                    <div class="timeline-year">2007年</div>
                    <div class="timeline-description">第4代變色灰產品推出，第1代變色茶同年問世。成立RX 訂製鏡片車房加工中心。太陽偏心模具自行開發生產，導入太陽變色市場</div>
                </div>
            </div>
            <div class="timeline-item">
                <div class="timeline-content">
                    <div class="timeline-year">2008年</div>
                    <div class="timeline-description">推廣太陽變色產品並連結台灣框廠成為全球太陽片市場最強供應鏈</div>
                </div>
            </div>
            <div class="timeline-item">
                <div class="timeline-content">
                    <div class="timeline-year">2009年</div>
                    <div class="timeline-description">擴增強化第4條全自動化伺服設備生產線，提升產品穩定性</div>
                </div>
            </div>
            <div class="timeline-item">
                <div class="timeline-content">
                    <div class="timeline-year">2010年</div>
                    <div class="timeline-description">投入研發極地耐候運動太陽變色片及工業安全光學鏡片技術</div>
                </div>
            </div>
            <div class="timeline-item">
                <div class="timeline-content">
                    <div class="timeline-year">2011年</div>
                    <div class="timeline-description">增資1.5億元擴建現代化廠房於現址，並購置5000萬元新型自動化設備擴充產能</div>
                </div>
            </div>
            <div class="timeline-item">
                <div class="timeline-content">
                    <div class="timeline-year">2013年</div>
                    <div class="timeline-description">第5代高性能變色灰產品推出，第2代變色茶同年問世。泳鏡模具開發成功導入量產</div>
                </div>
            </div>
            <div class="timeline-item">
                <div class="timeline-content">
                    <div class="timeline-year">2014年</div>
                    <div class="timeline-description">高性能耐衝擊運動型變色片開發完成，提升運動太陽鏡片安全護目效果，進而結合上下游廠商成功打進美國3M品牌大廠供應鏈</div>
                </div>
            </div>
            <div class="timeline-item">
                <div class="timeline-content">
                    <div class="timeline-year">2016年</div>
                    <div class="timeline-description">耐水洗防霧變色片開發成功導入量產，提升運動型鏡片功能及市場需求</div>
                </div>
            </div>
            <div class="timeline-item">
                <div class="timeline-content">
                    <div class="timeline-year">2017年</div>
                    <div class="timeline-description">國際標準組織ISO 9001品質系統2015年新版認證通過</div>
                </div>
            </div>
            <div class="timeline-item">
                <div class="timeline-content">
                    <div class="timeline-year">2018年</div>
                    <div class="timeline-description">晴綺光學一月設立核准（原公司一月底停止營運），晴綺二月正式接手營運</div>
                </div>
            </div>
        </div>
    </div>
    <img src="/images/biggi.png" alt="Sundex Image 0">
    <!-- Google Map Section -->
    <div class="map-container">
        <h2>公司地點</h2>
        <iframe 
            width="100%" 
            height="500" 
            style="border:0; border-radius: 8px; margin-top: 30px;" 
            loading="lazy" 
            allowfullscreen="" 
            referrerpolicy="no-referrer-when-downgrade" 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3677.6429401531614!2d120.24941641173993!3d22.815690779233144!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x346e0d2636f729a7%3A0x99831ad49443090e!2sSundex%20Optical!5e0!3m2!1sen!2stw!4v1760858575839!5m2!1sen!2stw">
        </iframe>
    </div>
</main>
<footer>
    </footer>
</body>
</html>