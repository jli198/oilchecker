document.addEventListener('DOMContentLoaded', function() {
    const oilList = document.getElementById('oil-list');

    oilList.addEventListener('click', function(event) {
        const clickedItem = event.target.closest('li');
        if (clickedItem) {
            const oilUrl = clickedItem.getAttribute('data-url');
            if (oilUrl) {
                window.location.href = oilUrl;
            }
        }
    });
});
