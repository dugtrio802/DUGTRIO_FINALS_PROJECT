$(document).ready(function() {
    function updateCarouselIndicators(index) {
        $('.carousel-indicators li').each(function(i) {
            if (i === index) {
                $(this).css({
                    'background-image': 'url("pokeball1.png")',
                    'background-repeat': 'no-repeat',
                    'background-size': 'contain',
                    'background-position': 'center',
                    'background-color': 'transparent',
                    'border': '2px solid #000'
                });
            } else {
                $(this).css({
                    'background-image': '',
                    'background-color': 'rgba(0, 0, 0, 0.3)',
                    'border': '2px solid #fff'
                });
            }
        });
    }


    updateCarouselIndicators(0);


    $('#carouselExampleControls').on('slid.bs.carousel', function (e) {
        let currentIndex = $(e.relatedTarget).index();
        updateCarouselIndicators(currentIndex);
    });

    const events = document.querySelectorAll('.event-card');
    const popup = document.getElementById('eventPopup');
    const popupImage = document.getElementById('popupImage');
    const popupName = document.getElementById('popupName');
    const popupDesc = document.getElementById('popupDesc');
    const popupSpecific = document.getElementById('popupSpecific');
    const backButton = document.getElementById('popupBackButton');

    events.forEach(event => {
        event.addEventListener('click', function() {
            popupImage.src = this.getAttribute('data-image');
            popupName.textContent = this.getAttribute('data-name');
            popupDesc.textContent = this.getAttribute('data-desc');
            popupSpecific.textContent = this.getAttribute('data-details');
            popup.style.display = 'flex';
        });
    });

    backButton.addEventListener('click', function() {
        popup.style.display = 'none';
    });
});
