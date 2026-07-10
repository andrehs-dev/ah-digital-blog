#!/usr/bin/env python3
"""Parse RSS/Atom feed and print title | link for each item.

Usage:
    # Save to file first (avoids pipe-to-interpreter scanner)
    curl -sL <RSS_URL> -o /tmp/feed.xml
    python3 scripts/parse-rss.py /tmp/feed.xml

Output: one line per item -- "Title | https://link"
Exit code: 0 always (prints nothing on empty feed)

Handles CDATA, namespaces, RSS 2.0 and Atom feeds.
Uses python3 stdlib only -- no pip deps.
"""
import sys, xml.etree.ElementTree as ET

NS = {
    'content': 'http://purl.org/rss/1.0/modules/content/',
    'dc': 'http://purl.org/dc/elements/1.1/',
}

def parse_rss(path: str):
    tree = ET.parse(path)
    root = tree.getroot()
    # RSS 2.0
    for item in root.findall('.//item'):
        title_el = item.find('title')
        link_el = item.find('link')
        title = ''
        if title_el is not None and title_el.text:
            title = title_el.text.strip()
        link = ''
        if link_el is not None and link_el.text:
            link = link_el.text.strip()
        if title or link:
            yield (title, link)
    # Atom
    for entry in root.findall('.//{http://www.w3.org/2005/Atom}entry'):
        title_el = entry.find('{http://www.w3.org/2005/Atom}title')
        link_el = entry.find('{http://www.w3.org/2005/Atom}link')
        title = title_el.text.strip() if title_el is not None and title_el.text else ''
        link = link_el.get('href', '') if link_el is not None else ''
        if title or link:
            yield (title, link)

if __name__ == '__main__':
    path = sys.argv[1] if len(sys.argv) > 1 else '/dev/stdin'
    for title, link in parse_rss(path):
        print(f'{title} | {link}')
