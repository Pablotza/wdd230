function updateCopyright() {
    const year = new Date().getFullYear();
    document.querySelector('footer p').textContent = `© ${year} Pablo Toloza - Buenos Aires, Argentina`;
}

function updateLastModified() {
    const lastModified = document.lastModified;
    document.getElementById('lastModified').textContent = `Last Updated: ${lastModified}`;
}

updateCopyright();
updateLastModified();
