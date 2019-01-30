const escapeHTML = str =>
    str.replace(
        /[&<>'"]/g,
        tag =>
        ({
            '&': '&amp;',
            '<': '&lt;',
            '>': '&gt;',
            "'": '&#39;',
            '"': '&quot;'
        } [tag] || tag)
    );

// Examples
const res = escapeHTML('<a href="#">Me & you</a>'); // '&lt;a href=&quot;#&quot;&gt;Me &amp; you&lt;/a&gt;'
console.log(res);