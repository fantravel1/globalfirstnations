const fs = require('fs');
const path = require('path');

// List of all culture IDs
const cultureIds = [
  'maasai', 'inuit', 'navajo', 'maori', 'san', 'sami', 'zulu', 'tuareg', 'quechua', 'cherokee',
  'aboriginal-australian', 'yupik', 'hmong', 'berber', 'ainu', 'basque', 'yanomami', 'rapanui',
  'nenets', 'himba', 'lakota', 'mapuche', 'guarani', 'tlingit', 'haida', 'mixtec', 'zapotec',
  'hopi', 'dogon', 'hadza', 'igbo', 'samburu', 'wodaabe', 'nuer', 'malagasy', 'mongol', 'karen',
  'moken', 'sherpa', 'kalash', 'dayak', 'bedouin', 'tongan', 'fijian', 'papuan'
];

// Function to generate Image Gallery HTML
function generateImageGalleryHTML(images, primaryColor, secondaryColor) {
  const imageCards = images.map((img, idx) => `
                    <div class="gallery-item" data-index="${idx}">
                        <img src="${img.url}"
                             alt="${img.alt}"
                             loading="lazy"
                             class="gallery-image">
                        <div class="gallery-caption">
                            <p class="gallery-text">${img.caption}</p>
                            <a href="${img.creditLink}" target="_blank" rel="noopener noreferrer" class="gallery-credit">${img.credit}</a>
                        </div>
                    </div>`).join('');

  return `
                <section class="content-section image-gallery-section">
                    <h2 class="section-title">Image Gallery</h2>
                    <p class="content-text" style="text-align: center; font-style: italic; margin-bottom: 2rem;">
                        Explore visual documentation of culture, traditions, and daily life through these carefully curated images from Wikimedia Commons.
                    </p>
                    <div class="image-gallery">
${imageCards}
                    </div>
                </section>

                <!-- Lightbox Modal -->
                <div id="lightbox" class="lightbox" role="dialog" aria-modal="true" aria-label="Image lightbox">
                    <button class="lightbox-close" aria-label="Close lightbox">&times;</button>
                    <button class="lightbox-prev" aria-label="Previous image">&#8249;</button>
                    <button class="lightbox-next" aria-label="Next image">&#8250;</button>
                    <div class="lightbox-content">
                        <img src="" alt="" id="lightbox-image">
                        <div class="lightbox-caption">
                            <p id="lightbox-text"></p>
                            <a href="" target="_blank" rel="noopener noreferrer" id="lightbox-credit"></a>
                        </div>
                    </div>
                </div>`;
}

// Function to generate Related Cultures HTML
function generateRelatedCulturesHTML(relatedCultures, icon) {
  const allRelated = [];

  if (relatedCultures.similar) {
    relatedCultures.similar.forEach(culture => {
      allRelated.push({ ...culture, type: 'Similar Culture' });
    });
  }

  if (relatedCultures.regional) {
    relatedCultures.regional.forEach(culture => {
      allRelated.push({ ...culture, type: 'Regional Neighbor' });
    });
  }

  if (relatedCultures.contrasting) {
    relatedCultures.contrasting.forEach(culture => {
      allRelated.push({ ...culture, type: 'Contrasting Culture' });
    });
  }

  const cultureCards = allRelated.map(culture => `
                    <a href="${culture.id}.html" class="related-card">
                        <div class="related-icon">${culture.icon}</div>
                        <h4 class="related-name">${culture.name}</h4>
                        <p class="related-location">${culture.location}</p>
                        <span class="related-badge">${culture.type}</span>
                        <p class="related-description">${culture.similarity}</p>
                    </a>`).join('');

  return `
    <section class="related-cultures-section">
        <h2 class="section-title">Explore Related Cultures</h2>
        <p class="content-text" style="text-align: center; font-style: italic; margin-bottom: 2rem;">
            Discover connections between cultures through shared traditions, geographic proximity, or contrasting ways of life.
        </p>
        <div class="related-cultures-grid">
${cultureCards}
        </div>
    </section>`;
}

// Function to generate CSS for enhancements
function generateEnhancementCSS() {
  return `
        /* ============================================
           IMAGE GALLERY STYLES
           ============================================ */
        .image-gallery-section {
            margin: 4rem 0;
        }

        .image-gallery {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
            gap: 2rem;
            margin-top: 2rem;
        }

        .gallery-item {
            background: white;
            border-radius: 12px;
            overflow: hidden;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
            transition: all 0.3s ease;
            cursor: pointer;
            border: 3px solid transparent;
        }

        .gallery-item:hover {
            transform: translateY(-8px);
            box-shadow: 0 12px 24px rgba(0, 0, 0, 0.2);
            border-color: var(--primary-color, #333);
        }

        .gallery-image {
            width: 100%;
            height: 280px;
            object-fit: cover;
            display: block;
            transition: transform 0.3s ease;
        }

        .gallery-item:hover .gallery-image {
            transform: scale(1.05);
        }

        .gallery-caption {
            padding: 1.25rem;
            background: linear-gradient(to bottom, white, #f8f8f8);
        }

        .gallery-text {
            font-size: 0.95rem;
            line-height: 1.6;
            color: #333;
            margin-bottom: 0.75rem;
        }

        .gallery-credit {
            font-size: 0.8rem;
            color: #666;
            text-decoration: none;
            display: inline-block;
            transition: color 0.2s ease;
        }

        .gallery-credit:hover {
            color: var(--primary-color, #333);
            text-decoration: underline;
        }

        /* Lightbox Styles */
        .lightbox {
            display: none;
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.95);
            z-index: 10000;
            animation: fadeIn 0.3s ease;
        }

        .lightbox.active {
            display: flex;
            align-items: center;
            justify-content: center;
        }

        @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
        }

        .lightbox-content {
            max-width: 90%;
            max-height: 90%;
            display: flex;
            flex-direction: column;
            align-items: center;
        }

        #lightbox-image {
            max-width: 100%;
            max-height: 80vh;
            object-fit: contain;
            border-radius: 8px;
            box-shadow: 0 8px 32px rgba(0, 0, 0, 0.5);
        }

        .lightbox-caption {
            background: white;
            padding: 1.5rem;
            margin-top: 1rem;
            border-radius: 8px;
            max-width: 600px;
            text-align: center;
        }

        #lightbox-text {
            color: #333;
            margin-bottom: 0.5rem;
            font-size: 1rem;
        }

        #lightbox-credit {
            color: #666;
            font-size: 0.875rem;
            text-decoration: none;
        }

        #lightbox-credit:hover {
            text-decoration: underline;
        }

        .lightbox-close,
        .lightbox-prev,
        .lightbox-next {
            position: fixed;
            background: rgba(255, 255, 255, 0.9);
            border: none;
            font-size: 2.5rem;
            cursor: pointer;
            padding: 0.5rem 1rem;
            border-radius: 50%;
            transition: all 0.2s ease;
            z-index: 10001;
            color: #333;
            font-weight: 300;
            line-height: 1;
        }

        .lightbox-close {
            top: 2rem;
            right: 2rem;
            width: 50px;
            height: 50px;
        }

        .lightbox-prev {
            left: 2rem;
            top: 50%;
            transform: translateY(-50%);
            width: 50px;
            height: 50px;
        }

        .lightbox-next {
            right: 2rem;
            top: 50%;
            transform: translateY(-50%);
            width: 50px;
            height: 50px;
        }

        .lightbox-close:hover,
        .lightbox-prev:hover,
        .lightbox-next:hover {
            background: white;
            transform: translateY(-50%) scale(1.1);
        }

        .lightbox-close:hover {
            transform: scale(1.1);
        }

        /* ============================================
           RELATED CULTURES STYLES
           ============================================ */
        .related-cultures-section {
            margin: 4rem 0;
            padding: 3rem 0;
            background: linear-gradient(to bottom, transparent, rgba(0, 0, 0, 0.02));
            border-radius: 15px;
        }

        .related-cultures-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
            gap: 2rem;
            margin-top: 2rem;
        }

        .related-card {
            background: white;
            border-radius: 15px;
            padding: 2rem;
            text-decoration: none;
            color: inherit;
            border: 3px solid #e0e0e0;
            transition: all 0.3s ease;
            display: flex;
            flex-direction: column;
            align-items: center;
            text-align: center;
            position: relative;
            overflow: hidden;
        }

        .related-card::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 6px;
            background: linear-gradient(90deg,
                var(--primary-color, #666),
                var(--secondary-color, #999));
            transform: scaleX(0);
            transition: transform 0.3s ease;
        }

        .related-card:hover::before {
            transform: scaleX(1);
        }

        .related-card:hover {
            transform: translateY(-8px);
            box-shadow: 0 12px 28px rgba(0, 0, 0, 0.15);
            border-color: var(--primary-color, #666);
        }

        .related-icon {
            font-size: 4rem;
            margin-bottom: 1rem;
            filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.1));
            animation: float 3s ease-in-out infinite;
        }

        @keyframes float {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-10px); }
        }

        .related-name {
            font-size: 1.5rem;
            font-weight: 800;
            color: var(--primary-color, #333);
            margin-bottom: 0.5rem;
        }

        .related-location {
            font-size: 0.9rem;
            color: #666;
            margin-bottom: 1rem;
            font-style: italic;
        }

        .related-badge {
            display: inline-block;
            background: linear-gradient(135deg,
                var(--primary-color, #666),
                var(--secondary-color, #999));
            color: white;
            padding: 0.4rem 1rem;
            border-radius: 20px;
            font-size: 0.75rem;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 0.5px;
            margin-bottom: 1rem;
        }

        .related-description {
            font-size: 0.95rem;
            line-height: 1.6;
            color: #555;
            flex-grow: 1;
        }

        /* Responsive adjustments */
        @media (max-width: 768px) {
            .image-gallery {
                grid-template-columns: 1fr;
            }

            .related-cultures-grid {
                grid-template-columns: 1fr;
            }

            .lightbox-prev,
            .lightbox-next {
                font-size: 2rem;
                padding: 0.3rem 0.7rem;
            }

            .lightbox-close {
                top: 1rem;
                right: 1rem;
            }
        }

        @media (max-width: 480px) {
            .gallery-image {
                height: 220px;
            }

            .lightbox-prev {
                left: 1rem;
            }

            .lightbox-next {
                right: 1rem;
            }
        }`;
}

// Function to generate JavaScript for lightbox
function generateLightboxJS(images) {
  return `
        // Lightbox functionality
        const galleryImages = ${JSON.stringify(images)};
        let currentImageIndex = 0;

        function openLightbox(index) {
            currentImageIndex = index;
            updateLightboxImage();
            document.getElementById('lightbox').classList.add('active');
            document.body.style.overflow = 'hidden';
        }

        function closeLightbox() {
            document.getElementById('lightbox').classList.remove('active');
            document.body.style.overflow = '';
        }

        function updateLightboxImage() {
            const img = galleryImages[currentImageIndex];
            document.getElementById('lightbox-image').src = img.url;
            document.getElementById('lightbox-image').alt = img.alt;
            document.getElementById('lightbox-text').textContent = img.caption;
            document.getElementById('lightbox-credit').textContent = img.credit;
            document.getElementById('lightbox-credit').href = img.creditLink;
        }

        function nextImage() {
            currentImageIndex = (currentImageIndex + 1) % galleryImages.length;
            updateLightboxImage();
        }

        function prevImage() {
            currentImageIndex = (currentImageIndex - 1 + galleryImages.length) % galleryImages.length;
            updateLightboxImage();
        }

        // Event listeners
        document.addEventListener('DOMContentLoaded', function() {
            // Gallery items click
            document.querySelectorAll('.gallery-item').forEach((item, index) => {
                item.addEventListener('click', () => openLightbox(index));
                item.addEventListener('keypress', (e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        openLightbox(index);
                    }
                });
                item.setAttribute('tabindex', '0');
                item.setAttribute('role', 'button');
                item.setAttribute('aria-label', 'View image ' + (index + 1));
            });

            // Lightbox controls
            document.querySelector('.lightbox-close').addEventListener('click', closeLightbox);
            document.querySelector('.lightbox-prev').addEventListener('click', prevImage);
            document.querySelector('.lightbox-next').addEventListener('click', nextImage);

            // Click outside to close
            document.getElementById('lightbox').addEventListener('click', function(e) {
                if (e.target === this) closeLightbox();
            });

            // Keyboard navigation
            document.addEventListener('keydown', function(e) {
                if (!document.getElementById('lightbox').classList.contains('active')) return;

                if (e.key === 'Escape') closeLightbox();
                if (e.key === 'ArrowRight') nextImage();
                if (e.key === 'ArrowLeft') prevImage();
            });
        });`;
}

// Main processing function
function processAllCultures() {
  let successCount = 0;
  let errorCount = 0;
  let skippedSections = {};
  const results = [];

  cultureIds.forEach(cultureId => {
    try {
      console.log(`Processing ${cultureId}...`);

      // Read JSON data
      const jsonPath = path.join(__dirname, 'data', 'cultures', `${cultureId}.json`);
      let jsonData;
      try {
        jsonData = JSON.parse(fs.readFileSync(jsonPath, 'utf8'));
      } catch (parseError) {
        throw new Error(`JSON parse error: ${parseError.message}`);
      }

      // Read HTML file
      const htmlPath = path.join(__dirname, 'peoples', `${cultureId}.html`);
      let htmlContent = fs.readFileSync(htmlPath, 'utf8');

      // Check which enhancements are already present
      const hasGalleryAlready = htmlContent.includes('class="image-gallery-section"');
      const hasRelatedAlready = htmlContent.includes('Explore Related Cultures');

      // Check if both enhancements have already been added
      if (hasGalleryAlready && hasRelatedAlready) {
        console.log(`  ✓ Skipping ${cultureId} - both enhancements already present`);
        successCount++;
        results.push(`⊙ ${cultureId} (already complete)`);
        return;
      }

      let hasImages = false;
      let hasRelatedCultures = false;

      // Check if images exist and have sufficient data
      if (jsonData.images && Array.isArray(jsonData.images) && jsonData.images.length >= 3) {
        hasImages = true;
      } else {
        console.log(`  ⚠ Skipping image gallery for ${cultureId} - insufficient images (${jsonData.images ? jsonData.images.length : 0})`);
        skippedSections[cultureId] = skippedSections[cultureId] || [];
        skippedSections[cultureId].push('images');
      }

      // Check if relatedCultures exists
      if (jsonData.relatedCultures &&
          (jsonData.relatedCultures.similar || jsonData.relatedCultures.regional || jsonData.relatedCultures.contrasting)) {
        hasRelatedCultures = true;
      } else {
        console.log(`  ⚠ Skipping related cultures for ${cultureId} - no related cultures data`);
        skippedSections[cultureId] = skippedSections[cultureId] || [];
        skippedSections[cultureId].push('relatedCultures');
      }

      // Only proceed if we have at least one enhancement to add
      if (!hasImages && !hasRelatedCultures) {
        throw new Error('No enhancements to add - missing both images and related cultures data');
      }

      // Add CSS to the style section (before </style>) - only if not already present
      if (!htmlContent.includes('IMAGE GALLERY STYLES')) {
        const cssToAdd = generateEnhancementCSS();
        htmlContent = htmlContent.replace('</style>', `${cssToAdd}\n    </style>`);
      }

      // Generate and add Image Gallery if available and not already present
      if (hasImages && !hasGalleryAlready) {
        const imageGalleryHTML = generateImageGalleryHTML(
          jsonData.images,
          jsonData.culturalIdentity.primaryColor,
          jsonData.culturalIdentity.secondaryColor
        );

        const firstSectionEnd = htmlContent.indexOf('</section>');
        if (firstSectionEnd !== -1) {
          const insertPosition = firstSectionEnd + '</section>'.length;
          htmlContent = htmlContent.slice(0, insertPosition) +
                       '\n' + imageGalleryHTML +
                       htmlContent.slice(insertPosition);
        }

        // Add JavaScript for lightbox
        const lightboxJS = generateLightboxJS(jsonData.images);
        htmlContent = htmlContent.replace('</body>', `    <script>${lightboxJS}\n    </script>\n</body>`);
      }

      // Generate and add Related Cultures if available and not already present
      if (hasRelatedCultures && !hasRelatedAlready) {
        const relatedCulturesHTML = generateRelatedCulturesHTML(
          jsonData.relatedCultures,
          jsonData.culturalIdentity.icon
        );

        // Find the last div with a border or pattern class (could be bead-border, ice-border, weaving-pattern, etc.)
        const borderPatternRegex = /<div class="[^"]*(border|pattern)[^"]*"><\/div>/g;
        const matches = [...htmlContent.matchAll(borderPatternRegex)];

        let insertPosition;
        if (matches.length > 0) {
          // Found a border/pattern div - insert before it
          const lastMatch = matches[matches.length - 1];
          insertPosition = lastMatch.index;
          htmlContent = htmlContent.slice(0, insertPosition) +
                       relatedCulturesHTML +
                       '\n\n    ' +
                       htmlContent.slice(insertPosition);
        } else {
          // No border/pattern div found - insert before the first <script> tag
          const scriptIndex = htmlContent.indexOf('<script>');
          if (scriptIndex !== -1) {
            htmlContent = htmlContent.slice(0, scriptIndex) +
                         '\n' + relatedCulturesHTML +
                         '\n\n    ' +
                         htmlContent.slice(scriptIndex);
          }
        }
      }

      // Write updated HTML
      fs.writeFileSync(htmlPath, htmlContent, 'utf8');

      successCount++;
      const status = hasImages && hasRelatedCultures ? '✓' : '⚠';
      results.push(`${status} ${cultureId}${hasImages && hasRelatedCultures ? '' : ' (partial)'}`);
    } catch (error) {
      errorCount++;
      results.push(`✗ ${cultureId}: ${error.message}`);
      console.error(`Error processing ${cultureId}:`, error.message);
    }
  });

  // Print summary
  console.log('\n' + '='.repeat(60));
  console.log('PROCESSING COMPLETE');
  console.log('='.repeat(60));
  console.log(`Total cultures: ${cultureIds.length}`);
  console.log(`Successful: ${successCount}`);
  console.log(`Failed: ${errorCount}`);
  console.log('\nDetailed results:');
  results.forEach(r => console.log(r));

  // Print skipped sections summary
  const totalSkipped = Object.keys(skippedSections).length;
  if (totalSkipped > 0) {
    console.log('\n' + '='.repeat(60));
    console.log('SKIPPED SECTIONS SUMMARY');
    console.log('='.repeat(60));
    Object.entries(skippedSections).forEach(([culture, sections]) => {
      console.log(`${culture}: ${sections.join(', ')}`);
    });
  }

  return { successCount, errorCount, results, skippedSections };
}

// Run the script
processAllCultures();
