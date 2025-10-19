---
title: "About"
draft: false
---

<!DOCTYPE html>
<html lang="en">
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
    <h1>Sundex Optical Co., Ltd. ─ Professional PC (Polycarbonate) Ophthalmic and Sun Lens Manufacturer</h1>
</header>

<main>
    <p>Sundex Optical 👓 is an independent company specializing in the manufacturing of ophthalmic lenses, sun lenses, safety lenses, winter and extreme sports goggles, and all types of protective eyewear. We began as the Optical Lens Department of Mildex Optical Inc., a pioneer in PC lens manufacturing based in Taiwan.</p>
    <p>Sundex Optical has inherited over 20 years of technical expertise from Mildex Optical. We retained a cohort of elite and experienced employees who are now focused on a new goal: to professionalize and fine-tune Sundex's product line. Sundex will continue to develop practical and applicable products to meet future market demands.</p>
    <p>Now operating as an independent entity, we are intensely focused on the manufacturing and R&D of the latest ophthalmic lenses. Our core strength, as it has always been, lies in our production and coating technology. As a trusted channel for the distribution of ophthalmic lenses and eye care products, Sundex Optical Co., Ltd. inspires confidence, provides comprehensive product guarantees, and creates value for our customers.</p>
    <p>Sundex is proud of its successful QA system, R&D capabilities, and fully automated production equipment. We are SGS-certified for the ISO 9001:2015 quality standard** and are registered with the U.S. Food and Drug Administration (FDA). We are confident that Sundex's excellent QA record is the best guarantee for our products. By satisfying customer demands and excelling in the market competition, Sundex is dedicated to creating lasting value for all of our customers.</p>
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
        <h2>Company Development Milestone</h2>
        <div class="timeline-container">
            <div class="timeline-item">
                <div class="timeline-content">
                    <div class="timeline-year">2001</div>
                    <div class="timeline-description">Registered as Mildex Optical</div>
                </div>
            </div>
            <div class="timeline-item">
                <div class="timeline-content">
                    <div class="timeline-year">2002</div>
                    <div class="timeline-description">RD department established</div>
                </div>
            </div>
            <div class="timeline-item">
                <div class="timeline-content">
                    <div class="timeline-year">2003</div>
                    <div class="timeline-description">Introduced ISO 9001 standard</div>
                </div>
            </div>
            <div class="timeline-item">
                <div class="timeline-content">
                    <div class="timeline-year">2004</div>
                    <div class="timeline-description">Successfully developed Quick-swap injection molding</div>
                </div>
            </div>
            <div class="timeline-item">
                <div class="timeline-content">
                    <div class="timeline-year">2005</div>
                    <div class="timeline-description">1st generation Photochromic grey lens developed, the first of its kind in Taiwan</div>
                </div>
            </div>
            <div class="timeline-item">
                <div class="timeline-content">
                    <div class="timeline-year">2006</div>
                    <div class="timeline-description">Introduced ERP system, strengthened production quality control</div>
                </div>
            </div>
            <div class="timeline-item">
                <div class="timeline-content">
                    <div class="timeline-year">2007</div>
                    <div class="timeline-description">4th Generation Photochromic grey lens & 1st Photochromic brown lens developed. Rx lab established. De-centered sun lens & Photochromic sun lens developed</div>
                </div>
            </div>
            <div class="timeline-item">
                <div class="timeline-content">
                    <div class="timeline-year">2008</div>
                    <div class="timeline-description">Formed sun lens & glasses alliance with frame supplier</div>
                </div>
            </div>
            <div class="timeline-item">
                <div class="timeline-content">
                    <div class="timeline-year">2009</div>
                    <div class="timeline-description">4th automated production line expanded & upgraded, improved product quality</div>
                </div>
            </div>
            <div class="timeline-item">
                <div class="timeline-content">
                    <div class="timeline-year">2010</div>
                    <div class="timeline-description">Extreme & winter sports lens and industrial safety lens R&D started</div>
                </div>
            </div>
            <div class="timeline-item">
                <div class="timeline-content">
                    <div class="timeline-year">2011</div>
                    <div class="timeline-description">Increased USD 5 million capital, purchased new equipments & relocation to present day location</div>
                </div>
            </div>
            <div class="timeline-item">
                <div class="timeline-content">
                    <div class="timeline-year">2013</div>
                    <div class="timeline-description">5th Gen high performance Photochromic grey & 2nd Gen Photochromic brown introduced. Swimming goggle developed and MP completed</div>
                </div>
            </div>
            <div class="timeline-item">
                <div class="timeline-content">
                    <div class="timeline-year">2014</div>
                    <div class="timeline-description">High-performance, impact-resistant sports photochromic lens developed to enhance the safety efficacy of sports sunglasses. Successfully entered United States 3M brand manufacturers supply chain</div>
                </div>
            </div>
            <div class="timeline-item">
                <div class="timeline-content">
                    <div class="timeline-year">2016</div>
                    <div class="timeline-description">Washable anti-fog photochromic lens managing the transition to mass production successfully, enhancing the function of sports lens and market demand</div>
                </div>
            </div>
            <div class="timeline-item">
                <div class="timeline-content">
                    <div class="timeline-year">2017</div>
                    <div class="timeline-description">The ISO 9001 Quality System of the International Standard passed the 2015 new edition certification</div>
                </div>
            </div>
            <div class="timeline-item">
                <div class="timeline-content">
                    <div class="timeline-year">2018</div>
                    <div class="timeline-description">Sundex Optical Co., LTD established approval in January. Sundex took over the operation officially in February</div>
                </div>
            </div>
        </div>
    </div>
    <img src="/images/biggi.png" alt="Sundex Image 0">
    <!-- Google Map Section -->
    <div class="map-container">
        <h2>Our Location</h2>
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