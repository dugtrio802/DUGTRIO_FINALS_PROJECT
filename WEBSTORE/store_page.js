$(document).ready(function () {
    $('.carousel-item').css({
        'opacity': 0,
        'position': 'absolute',
        'top': 0,
        'left': 0,
        'width': '100%',
        'transform': 'scale(1.1)',
        'transition': 'opacity 0.5s ease-in-out, transform 0.5s ease-in-out'
    });

    $('.new-item-box[data-target^="#itemModal"], .new-coin-box[data-target^="#itemModal"], .new-bundle-box[data-target^="#itemModal"]').click(function () {
        var itemName = $(this).data('item-name');
        var itemPrice = $(this).data('item-price');
        var itemDetails = $(this).data('item-details');
        var itemMessage = $(this).data('item-message');
        var itemImage = $(this).data('item-image');

        $('#itemModalLabel').text('LIMITED-TIME ONLY');
        $('#itemModalName').text(itemName);
        $('#itemModalPrice').text(itemPrice);
        $('#itemModalMessage').text(itemMessage);
        $('#itemModalImage').attr('src', itemImage);

        var detailsList = $('#itemModalDetails').empty();

        if (typeof itemDetails === 'string') {
            try {
                itemDetails = JSON.parse(itemDetails.replace(/'/g, '"'));
                if (Array.isArray(itemDetails)) {
                    itemDetails.forEach(function (detail) {
                        var listItem = $('<li>').text(detail);
                        detailsList.append(listItem);
                    });
                } else {
                    detailsList.append($('<li>').text("Details not available"));
                }
            } catch (e) {
                console.error('Error parsing itemDetails:', e);
                detailsList.append($('<li>').text("Details not available"));
            }
        } else if (Array.isArray(itemDetails)) {
            itemDetails.forEach(function (detail) {
                var listItem = $('<li>').text(detail);
                detailsList.append(listItem);
            });
        } else {
            detailsList.append($('<li>').text("Details not available"));
        }

        $('#itemModal').modal('show');
    });

    $('img').on('error', function () {
        console.log('Error loading image:', this.src);
        this.src = 'path/to/placeholder-image.png'; 
    });

    if (typeof jQuery == 'undefined') {
        console.error('jQuery is not loaded.');
    }
});