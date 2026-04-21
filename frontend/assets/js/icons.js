/**
 * Premium SVG icons for Vima Sneha (stroke style, 24x24).
 * Admin: use keys like icon: 'brain' or legacy emoji.
 */
(function (global) {
    'use strict';

    var NS = 'http://www.w3.org/2000/svg';

    function S(inner) {
        return (
            '<svg xmlns="' + NS + '" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" class="svg-icon" aria-hidden="true">' +
            inner +
            '</svg>'
        );
    }

    var ICONS = {
        sparkle: S(
            '<path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .962 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .962L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.962 0z"/>'
        ),
        sparkles: S(
            '<path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .962 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .962L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.962 0z"/><path d="M20 3v4"/><path d="M22 5h-4"/><path d="M4 17v2"/><path d="M5 18h-2"/>'
        ),
        brain: S(
            '<path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"/><path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18"/><path d="M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4"/><path d="M12 18v4"/><path d="M8 20h8"/>'
        ),
        shield: S('<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>'),
        star: S('<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>'),
        heart: S(
            '<path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>'
        ),
        users: S(
            '<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>'
        ),
        graduation: S('<path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/>'),
        sunrise: S(
            '<path d="M12 2v8"/><path d="m4.93 10.93 1.41 1.41"/><path d="M20 12h2"/><path d="m19.07 10.93-1.41 1.41"/><path d="M4.93 4.93 6.34 6.34"/><path d="m17.66 6.34 1.41-1.41"/><path d="M2 12h2"/><path d="m20.66 17.66-1.41-1.41"/><path d="m6.34 17.66-1.41 1.41"/><path d="M12 18a6 6 0 0 0 6-6"/>'
        ),
        gem: S('<path d="M6 3h12l4 6-10 12L2 9z"/><path d="M11 3 8 9l4 12 4-12-3-6"/><path d="M2 9h20"/>'),
        clipboard: S(
            '<path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><rect x="8" y="2" width="8" height="4" rx="1" ry="1"/><path d="M9 12h6"/><path d="M9 16h6"/>'
        ),
        trophy: S(
            '<path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/><path d="M4 22h16"/><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"/><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"/><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"/>'
        ),
        pointer: S('<path d="M12 3v9"/><path d="m16 8-4-4-4 4"/><path d="M4 21h16"/>'),
        arrowRight: S('<path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>'),
        arrowUp: S('<path d="M12 19V5"/><path d="m5 12 7-7 7 7"/>'),
        x: S('<path d="M18 6 6 18"/><path d="m6 6 12 12"/>'),
        check: S('<path d="M20 6 9 17l-5-5"/>'),
        lightbulb: S(
            '<path d="M9 18h6"/><path d="M10 22h4"/><path d="M12 2v1"/><path d="M12 18a6 6 0 0 0 6-6c0-3.314-2.686-6-6-6s-6 2.686-6 6a6 6 0 0 0 6 6Z"/>'
        ),
        alert: S(
            '<path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"/><path d="M12 9v4"/><path d="M12 17h.01"/>'
        ),
        trash: S(
            '<path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/><line x1="10" y1="11" x2="10" y2="17"/><line x1="14" y1="11" x2="14" y2="17"/>'
        ),
        image: S(
            '<rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/>'
        ),
        message: S('<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>'),
        phone: S(
            '<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.07 13.9a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3 3h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.09 10.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21 18l.01-.08v-1z"/>'
        ),
        mail: S('<path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>'),
        clock: S('<circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>'),
        mapPin: S('<path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/>'),
        building: S(
            '<rect x="4" y="2" width="16" height="20" rx="2" ry="2"/><path d="M9 22v-4h6v4"/><path d="M8 6h.01"/><path d="M16 6h.01"/><path d="M12 6h.01"/><path d="M12 10h.01"/><path d="M12 14h.01"/><path d="M16 10h.01"/><path d="M16 14h.01"/><path d="M8 10h.01"/><path d="M8 14h.01"/>'
        ),
        layout: S('<rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/>'),
        circle: S('<circle cx="12" cy="12" r="10"/>'),
        intersect: S('<circle cx="12" cy="12" r="10"/><line x1="8" y1="12" x2="16" y2="12"/>'),
        userRound: S('<circle cx="12" cy="8" r="4"/><path d="M4 20c0-4 4-6 8-6s8 2 8 6"/>'),
        briefcase: S('<rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/>'),
        stars5:
            '<svg xmlns="' +
            NS +
            '" viewBox="0 0 120 24" fill="currentColor" class="svg-icon vs-stars" aria-hidden="true"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/><polygon points="36 2 39.09 8.26 46 9.27 41 14.14 42.18 21.02 36 17.77 29.82 21.02 31 14.14 26 9.27 32.91 8.26 36 2"/><polygon points="60 2 63.09 8.26 70 9.27 65 14.14 66.18 21.02 60 17.77 53.82 21.02 55 14.14 50 9.27 56.91 8.26 60 2"/><polygon points="84 2 87.09 8.26 94 9.27 89 14.14 90.18 21.02 84 17.77 77.82 21.02 79 14.14 74 9.27 80.91 8.26 84 2"/><polygon points="108 2 111.09 8.26 118 9.27 113 14.14 114.18 21.02 108 17.77 101.82 21.02 103 14.14 98 9.27 104.91 8.26 108 2"/></svg>'
    };

    var EMOJI = {
        '\u2191': 'arrowUp',
        '\u2192': 'arrowRight',
        '\u23F1\uFE0F': 'clock',
        '\u26A0\uFE0F': 'alert',
        '\u2713': 'check',
        '\u2715': 'x',
        '\u2726': 'sparkle',
        '\u2728': 'sparkles',
        '\u2764\uFE0F': 'heart',
        '\u2B50': 'star',
        '\u2139\uFE0F': 'circle',
        '\u{1F393}': 'graduation',
        '\u{1F3A8}': 'star',
        '\u{1F3C6}': 'trophy',
        '\u{1F3D9}\uFE0F': 'building',
        '\u{1F3E0}': 'building',
        '\u{1F3E2}': 'building',
        '\u{1F3E5}': 'heart',
        '\u{1F446}': 'pointer',
        '\u{1F46A}': 'users',
        '\u{1F468}\u200D\u{1F469}\u200D\u{1F467}': 'users',
        '\u{1F468}\u200D\u2695\uFE0F': 'userRound',
        '\u{1F468}\u200D\u{1F4BC}': 'briefcase',
        '\u{1F469}\u200D\u2695\uFE0F': 'userRound',
        '\u{1F469}\u200D\u{1F4BC}': 'briefcase',
        '\u{1F48E}': 'gem',
        '\u{1F495}': 'heart',
        '\u{1F49A}': 'heart',
        '\u{1F4A1}': 'lightbulb',
        '\u{1F4AC}': 'message',
        '\u{1F4AF}': 'star',
        '\u{1F4B0}': 'gem',
        '\u{1F4B8}': 'clipboard',
        '\u{1F4CB}': 'clipboard',
        '\u{1F4CD}': 'mapPin',
        '\u{1F4DE}': 'phone',
        '\u{1F4E7}': 'mail',
        '\u{1F4F1}': 'phone',
        '\u{1F4F8}': 'image',
        '\u{1F525}': 'sparkles',
        '\u{1F5BC}\uFE0F': 'image',
        '\u{1F5CB}\uFE0F': 'layout',
        '\u{1F5D1}': 'trash',
        '\u{1F680}': 'sparkles',
        '\u{1F697}': 'circle',
        '\u{1F6E1}\uFE0F': 'shield',
        '\u{1F90D}': 'heart',
        '\u{1F91D}': 'users',
        '\u{1F9D8}': 'circle',
        '\u{1F9E0}': 'brain'
    };

    function resolveKey(label) {
        if (label == null || label === '') return 'sparkle';
        var s = String(label).trim();
        if (ICONS[s]) return s;
        if (EMOJI[s]) return EMOJI[s];
        return s;
    }

    function vsIconHtml(label) {
        if (label === 'stars5' || (typeof label === 'string' && label.indexOf('\u2605') !== -1)) {
            return ICONS.stars5 || '';
        }
        var key = resolveKey(label);
        var html = ICONS[key];
        return html || '';
    }

    function vsSetIconElement(el, label) {
        if (!el) return;
        var html = vsIconHtml(label);
        if (html) {
            el.innerHTML = html;
        } else {
            el.textContent = typeof label === 'string' ? label : '*';
        }
    }

    global.VSIcons = ICONS;
    global.VSIconEmojiMap = EMOJI;
    global.vsIconHtml = vsIconHtml;
    global.vsSetIconElement = vsSetIconElement;
    global.vsResolveIconKey = resolveKey;

    function vsBindDataIcons() {
        if (typeof vsIconHtml !== 'function') return;
        document.querySelectorAll('[data-vs-icon]').forEach(function (el) {
            var k = el.getAttribute('data-vs-icon');
            if (k) el.innerHTML = vsIconHtml(k);
        });
    }

    global.vsBindDataIcons = vsBindDataIcons;
})(typeof window !== 'undefined' ? window : globalThis);
