const getImages = (el, includeDuplicates = false) => {
    const images = [...document.getElementsByTagName('img')].map(img => img.getAttribute('src'));
    return includeDuplicates ? images : [...new Set(images)];
}