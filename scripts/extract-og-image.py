#!/usr/bin/env python3
"""Extract og:image URL from a news article page.

Usage:
    python3 scripts/extract-og-image.py <URL>

Outputs the og:image URL if found, or 'NO_OG_IMAGE' if not found.
Exit code: 0 on success, 1 on failure.

Requires: curl (to download the page), python3 (stdlib only -- no pip deps)
"""
import re, sys, subprocess

def extract_og_image(html: str) -> str | None:
    m = re.search(
        r'<meta[^>]+property=["\']og:image["\'][^>]+content=["\']([^"\']+)["\']',
        html, re.I
    )
    if m:
        return m.group(1)
    m = re.search(
        r'<meta[^>]+content=["\']([^"\']+)["\'][^>]+property=["\']og:image["\']',
        html, re.I
    )
    if m:
        return m.group(1)
    return None

if __name__ == '__main__':
    if len(sys.argv) < 2:
        print('Usage: extract-og-image.py <URL>', file=sys.stderr)
        sys.exit(1)
    url = sys.argv[1]
    result = subprocess.run(['curl', '-sL', url], capture_output=True, text=True, timeout=30)
    if result.returncode != 0:
        print(f'CURL_FAILED: {result.stderr.strip()}')
        sys.exit(1)
    og_url = extract_og_image(result.stdout)
    if og_url:
        print(og_url)
        sys.exit(0)
    else:
        print('NO_OG_IMAGE')
        sys.exit(1)
