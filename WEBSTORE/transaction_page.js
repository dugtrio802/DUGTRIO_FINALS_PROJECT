document.addEventListener('DOMContentLoaded', function () {
    let transactions = [
        { image: 'stunningstyles.png', name: 'Stunning Styles Ultra Ticket Box', basePrice: 59.00, date: generateRandomDate('2024-03-01', '2024-03-22'), status: 'Packing', quantity: 4 },
        { image: 'poweruptix.png', name: 'Power Up Ticket Ultra Ticket Box', basePrice: 150.00, date: generateRandomDate('2024-03-01', '2024-03-22'), status: 'Delivered', quantity: 1 },
        { image: 'grocketbox.webp', name: 'GO Rocket Box', basePrice: 199.00, date: generateRandomDate('2024-03-01', '2024-03-22'), status: 'Out for Delivery', quantity: 2 },
        { image: 'ultraraid.webp', name: 'Ultra Raid Box', basePrice: 149.00, date: generateRandomDate('2024-03-01', '2024-03-22'), status: 'Shipped', quantity: 1 },
        { image: 'mightandmystery.png', name: 'Might and Mystery Box', basePrice: 149.00, date: generateRandomDate('2024-03-01', '2024-03-22'), status: 'Delivered', quantity: 2 },
        { image: 'eggincu.png', name: 'Egg Incubator', basePrice: 88.00, date: generateRandomDate('2024-03-01', '2024-03-22'), status: 'Packing', quantity: 1 },
        { image: 'stunningstyles.png', name: 'Stunning Styles Ultra Ticket Box', basePrice: 59.00, date: generateRandomDate('2024-02-01', '2024-02-29'), status: 'Shipped', quantity: 2 },
        { image: 'poweruptix.png', name: 'Power Up Ticket Ultra Ticket Box', basePrice: 122.825, date: generateRandomDate('2024-02-01', '2024-02-29'), status: 'Packing', quantity: 2 },
        { image: 'grocketbox.webp', name: 'GO Rocket Box', basePrice: 81.88, date: generateRandomDate('2024-02-01', '2024-02-29'), status: 'Delivered', quantity: 3 },
        { image: 'ultraraid.webp', name: 'Ultra Raid Box', basePrice: 149.00, date: generateRandomDate('2024-02-01', '2024-02-29'), status: 'Out for Delivery', quantity: 1 },
        { image: 'mightandmystery.png', name: 'Might and Mystery Box', basePrice: 74.50, date: generateRandomDate('2024-02-01', '2024-02-29'), status: 'Delivered', quantity: 2 },
        { image: 'eggincu.png', name: 'Egg Incubator', basePrice: 88.00, date: generateRandomDate('2024-02-01', '2024-02-29'), status: 'Shipped', quantity: 2 },
        { image: 'stunningstyles.png', name: 'Stunning Styles Ultra Ticket Box', basePrice: 59.00, date: generateRandomDate('2024-01-01', '2024-01-31'), status: 'Packing', quantity: 1 },
        { image: 'poweruptix.png', name: 'Power Up Ticket Ultra Ticket Box', basePrice: 300.00, date: generateRandomDate('2024-01-01', '2024-01-31'), status: 'Delivered', quantity: 1 },
        { image: 'grocketbox.webp', name: 'GO Rocket Box', basePrice: 49.75, date: generateRandomDate('2024-01-01', '2024-01-31'), status: 'Out for Delivery', quantity: 4 },
        { image: 'ultraraid.webp', name: 'Ultra Raid Box', basePrice: 149.00, date: generateRandomDate('2024-01-01', '2024-01-31'), status: 'Shipped', quantity: 2 },
        { image: 'mightandmystery.png', name: 'Might and Mystery Box', basePrice: 149.00, date: generateRandomDate('2024-01-01', '2024-01-31'), status: 'Delivered', quantity: 1 },
        { image: 'eggincu.png', name: 'Egg Incubator', basePrice: 88.00, date: generateRandomDate('2024-01-01', '2024-01-31'), status: 'Packing', quantity: 1 },
    ];

    const currentTransactionsList = document.getElementById('currentTransactions');
    const prevButton = document.getElementById('prevTransactions');
    const nextButton = document.getElementById('nextTransactions');

    let currentPage = 0;
    const itemsPerPage = 6;

    const pageIndicators = document.querySelector('.page-indicators');
    const circles = pageIndicators.querySelectorAll('.page-circle');

    function generateRandomDate(startDate, endDate) {
        const start = new Date(startDate).getTime();
        const end = new Date(endDate).getTime();
        const randomTime = start + Math.random() * (end - start);
        return new Date(randomTime).toISOString().slice(0, 10);
    }

    function sortTransactionsByDate(array) {
        array.sort((a, b) => new Date(b.date) - new Date(a.date));
    }

    function displayTransactions(list, transactionsToDisplay) {
        list.innerHTML = '';
        transactionsToDisplay.forEach(transaction => {
            const item = document.createElement('li');
            item.classList.add('transaction-item');
            item.innerHTML = `
                <div class="image-container">
                    <img src="${transaction.image}" alt="${transaction.name}" class="transaction-img">
                    <span class="quantity-label">x${transaction.quantity}</span>
                </div>
                <span class="name" style="font-weight: bold; font-size: 1.1em;">${transaction.name}</span>
                <span class="date" style="font-weight: bold; font-size: 1.1em;">${transaction.date}</span>
                <span class="amount" style="font-weight: bold; font-size: 1.1em;">₱${(transaction.basePrice * transaction.quantity).toFixed(2)}</span>
                <span class="status" style="font-weight: bold; font-size: 1.1em;">${transaction.status}</span>
            `;
            list.appendChild(item);
        });
    }

    function updateTransactions() {
        sortTransactionsByDate(transactions);
        const startIndex = currentPage * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        const pageTransactions = transactions.slice(startIndex, endIndex);
        displayTransactions(currentTransactionsList, pageTransactions);

        prevButton.disabled = currentPage === 0;
        nextButton.disabled = endIndex >= transactions.length;

        updateActivePageIndicator();
        updateActivePageIconPosition();
    }

    function updateActivePageIndicator() {
        circles.forEach((circle, index) => {
            if (index === currentPage) {
                circle.innerHTML = '<img src="pokeball1.png" alt="Active Page" style="width: 100%; height: 100%; object-fit: contain; position: absolute; top: 0; left: 0;">';
            } else {
                circle.innerHTML = '';
            }
        });
    }

    function updateActivePageIconPosition() {
        const iconPosition = currentPage;

        if (iconPosition === 0) {
            prevButton.querySelector('.inactive-nav-icon').classList.add('active-nav-icon');
            nextButton.querySelector('.inactive-nav-icon').classList.remove('active-nav-icon');
        } else if (iconPosition === 1) {
            prevButton.querySelector('.inactive-nav-icon').classList.remove('active-nav-icon');
            nextButton.querySelector('.inactive-nav-icon').classList.remove('active-nav-icon');
        } else if (iconPosition === 2) {
            prevButton.querySelector('.inactive-nav-icon').classList.remove('active-nav-icon');
            nextButton.querySelector('.inactive-nav-icon').classList.add('active-nav-icon');
        }
    }

    function showNextPage() {
        currentTransactionsList.classList.add('page-transition-out');
        setTimeout(() => {
            currentPage++;
            if (currentPage > 2) {
                currentPage = 2;
            }
            updateTransactions();
            currentTransactionsList.classList.remove('page-transition-out');
            currentTransactionsList.classList.add('page-transition-in');
            setTimeout(() => currentTransactionsList.classList.remove('page-transition-in'), 300);
        }, 300);
    }

    function showPreviousPage() {
        currentTransactionsList.classList.add('page-transition-out');
        setTimeout(() => {
            currentPage--;
            if (currentPage < 0) {
                currentPage = 0;
            }
            updateTransactions();
            currentTransactionsList.classList.remove('page-transition-out');
            currentTransactionsList.classList.add('page-transition-in');
            setTimeout(() => currentTransactionsList.classList.remove('page-transition-in'), 300);
        }, 300);
    }

    updateTransactions();

    prevButton.addEventListener('click', showPreviousPage);
    nextButton.addEventListener('click', showNextPage);
});
