var list = document.querySelectorAll('[aria-label]');
var imgs = document.getElementsByTagName('img');
var ps = document.getElementsByTagName('p');

var ariaLabels = [];
var images = [];
list.forEach(function (item) {
    ariaLabels.push(item.getAttribute('aria-label'));
});
for (let i = 0; i < imgs.length; i++) {
    images.push([imgs[i].src, imgs[i].alt]);
}

var AAlargeCount = 0;
var AAsmallAAALargeCount = 0;
var AAAsmallCount = 0;

for (let i = 0; i < ps.length; i++) {
    var parentRgb = getComputedStyle(ps[i].parentNode).getPropertyValue('color');

    if (parentRgb.includes("rgba")) {
        var parentRgb = parentRgb.replace('rgba(', '');
        parentRgb = parentRgb.replace(')', '');
        parentRgb = parentRgb.split(',');
    } else {
        var parentRgb = parentRgb.replace('rgb(', '');
        parentRgb = parentRgb.replace(')', '');
        parentRgb = parentRgb.split(',');
    }

    var paragraphRgb = getComputedStyle(ps[i]).getPropertyValue('color');
    if (paragraphRgb.includes("rgba")) {
        var paragraphRgb = paragraphRgb.replace('rgba(', '');
        paragraphRgb = paragraphRgb.replace(')', '');
        paragraphRgb = paragraphRgb.split(',');
    } else {
        var paragraphRgb = paragraphRgb.replace('rgb(', '');
        paragraphRgb = paragraphRgb.replace(')', '');
        paragraphRgb = paragraphRgb.split(',');
    }
    colorParentluminance = luminance(parentRgb[0], parentRgb[1], parentRgb[2]);
    colorParagraphluminance = luminance(paragraphRgb[0], paragraphRgb[1], paragraphRgb[2]);
    const ratio = colorParentluminance > colorParagraphluminance
        ? ((colorParagraphluminance + 0.05) / (colorParentluminance + 0.05))
        : ((colorParentluminance + 0.05) / (colorParagraphluminance + 0.05));
    if (ratio < 1 / 3) {
        AAlargeCount++;
    }
    if (ratio < 1 / 4.5) {

        AAsmallAAALargeCount++;
    }
    if (ratio < 1 / 7) {
        AAAsmallCount++;
    }

    const result = `
        AA-level large text: ${ratio < 1 / 3 ? 'PASS' : 'FAIL'} \n
        AA-level small text: ${ratio < 1 / 4.5 ? 'PASS' : 'FAIL'} \n
        AAA-level large text: ${ratio < 1 / 4.5 ? 'PASS' : 'FAIL'} \n
        AAA-level small text: ${ratio < 1 / 7 ? 'PASS' : 'FAIL'}
    `;
    alert(result);
}


function luminance(r, g, b) {
    var a = [r, g, b].map(function (v) {
        v /= 255;
        return v <= 0.03928
            ? v / 12.92
            : Math.pow((v + 0.055) / 1.055, 2.4);
    });
    return a[0] * 0.2126 + a[1] * 0.7152 + a[2] * 0.0722;
}


chrome.storage.local.set({ ariaLabels: JSON.stringify(ariaLabels) });
chrome.storage.local.set({ images: JSON.stringify(images) });
