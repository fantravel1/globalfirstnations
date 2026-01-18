#!/usr/bin/env python3
"""
Script to update all peoples pages with modern, consistent styling.
Updates:
1. Navigation to match homepage (Home, About, Contribute, Contact)
2. Dark mode support via CSS media query
3. Footer with updated year and consistent text
4. Skip link for accessibility
"""

import os
import re
import glob

PEOPLES_DIR = '/home/user/globalfirstnations/peoples'

# New navigation HTML
NEW_NAV = '''<nav><a href="/">Home</a><a href="/about.html">About</a><a href="/contribute.html">Contribute</a><a href="mailto:info@play4tomorrow.com">Contact</a></nav>'''

# New footer HTML
NEW_FOOTER = '''<footer><p>&copy; 2025 Indigenous Peoples Database. Committed to cultural preservation and education.</p></footer>'''

# Dark mode CSS to add after existing styles
DARK_MODE_CSS = '''
        /* Dark Mode Support */
        @media (prefers-color-scheme: dark) {
            body { background: linear-gradient(135deg, #1a1a2e, #16213e); }
            .container { }
            header { background: linear-gradient(135deg, var(--primary-dark, var(--primary)), var(--accent)); }
            nav { background: #1f2937; }
            nav a { color: #e5e7eb; }
            nav a:hover { color: var(--secondary); }
            .content { background: #1f2937; color: #e5e7eb; }
            .content h2 { color: var(--secondary); border-bottom-color: var(--accent); }
            .content p, .content li { color: #d1d5db; }
            .stat { background: linear-gradient(135deg, var(--primary), var(--accent)); }
            footer { background: #111827; }
        }
        /* Accessibility - Skip Link */
        .skip-link { position: absolute; top: -40px; left: 0; background: var(--accent); color: white; padding: 8px 16px; text-decoration: none; z-index: 100; border-radius: 0 0 5px 0; }
        .skip-link:focus { top: 0; }
        /* Focus styles */
        a:focus, button:focus { outline: 2px solid var(--accent); outline-offset: 2px; }
'''

def process_file(filepath):
    """Process a single peoples page file."""
    try:
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()

        original_content = content

        # 1. Update navigation - handle various nav patterns
        nav_patterns = [
            r'<nav><a href="/">Home</a><a href="/cultures\.html">Cultures</a><a href="/map\.html">Map</a><a href="/about\.html">About</a></nav>',
            r'<nav>.*?</nav>',
        ]

        for pattern in nav_patterns:
            if re.search(pattern, content, re.DOTALL):
                content = re.sub(pattern, NEW_NAV, content, count=1)
                break

        # 2. Update footer - handle various footer patterns
        footer_patterns = [
            r'<footer><p>&copy; 2024 Indigenous Peoples Repository</p></footer>',
            r'<footer><p>&copy; 2025 Indigenous Peoples Repository</p></footer>',
            r'<footer>.*?</footer>',
        ]

        for pattern in footer_patterns:
            if re.search(pattern, content, re.DOTALL):
                content = re.sub(pattern, NEW_FOOTER, content, count=1)
                break

        # 3. Add dark mode CSS if not already present
        if '@media (prefers-color-scheme: dark)' not in content:
            # Insert dark mode CSS before </style>
            content = content.replace('</style>', DARK_MODE_CSS + '\n    </style>')

        # 4. Add skip link if not present
        if '<a href="#main-content" class="skip-link">' not in content:
            # Add skip link after <body> with flexible whitespace
            content = re.sub(r'<body>\s*<div class="container">',
                           '<body>\n    <a href="#main-content" class="skip-link">Skip to content</a>\n    <div class="container">',
                           content)
            # Add id to content div if not present
            if 'id="main-content"' not in content:
                content = re.sub(r'<div class="content">',
                               '<div class="content" id="main-content">',
                               content, count=1)

        # Only write if changes were made
        if content != original_content:
            with open(filepath, 'w', encoding='utf-8') as f:
                f.write(content)
            return True
        return False
    except Exception as e:
        print(f"Error processing {filepath}: {e}")
        return False

def main():
    """Process all peoples pages."""
    html_files = glob.glob(os.path.join(PEOPLES_DIR, '*.html'))
    total = len(html_files)
    updated = 0
    errors = 0

    print(f"Found {total} HTML files to process...")

    for i, filepath in enumerate(html_files, 1):
        filename = os.path.basename(filepath)
        if process_file(filepath):
            updated += 1
            if i % 100 == 0:
                print(f"Progress: {i}/{total} files processed, {updated} updated...")

    print(f"\nComplete! Processed {total} files, updated {updated} files.")

if __name__ == '__main__':
    main()
