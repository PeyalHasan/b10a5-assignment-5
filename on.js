document.addEventListener('DOMContentLoaded', function () {
    // Navigate between Home and Blog
    const homeBtn = document.getElementById('home');
    if (homeBtn) {
        homeBtn.addEventListener('click', function () {
            window.location.href = '../index.html';
        });
    }

    const blogBtn = document.getElementById('blog');
    if (blogBtn) {
        blogBtn.addEventListener('click', function () {
            window.location.href = '../Blog.html';
        });
    }

    // Show Donation and History sections
    function showPage(id) {
        document.getElementById('donation').classList.add('hidden');
        document.getElementById('history').classList.add('hidden');
        document.getElementById(id).classList.remove('hidden');
    }

    function changeStyle(id) {
        document.getElementById('donationBtn').classList.remove('bg-lime-300');
        document.getElementById('historyBtn').classList.remove('bg-lime-300');
        document.getElementById(id).classList.add('bg-lime-300');
    }

    document.getElementById('donationBtn').addEventListener('click', function () {
        showPage('donation');
        changeStyle('donationBtn');
    });

    document.getElementById('historyBtn').addEventListener('click', function () {
        showPage('history');
        changeStyle('historyBtn');
    });

    // Handle donations
    function DonateNow(inputId, totalId, walletId) {
        const inputValue = parseFloat(document.getElementById(inputId).value) || 0;
        const walletElement = document.getElementById(walletId);
        const totalElement = document.getElementById(totalId);

        const walletAmount = parseFloat(walletElement.innerText);
        const totalDonated = parseFloat(totalElement.innerText);

        if (inputValue <= 0) {
            alert('Invalid Donation Amount');
            return;
        }

        if (walletAmount < inputValue) {
            alert('You do not have enough money');
            return;
        }

        // Update values
        walletElement.innerText = (walletAmount - inputValue).toFixed(2);
        totalElement.innerText = (totalDonated + inputValue).toFixed(2);

        alert('Donation Successful! Thank you for your generosity.');
    }

    document.getElementById('nFloodDonate').addEventListener('click', function (event) {
        event.preventDefault();
        DonateNow('fdn', 'tN', 'wallet');
    });

    document.getElementById('quota').addEventListener('click', function (event) {
        event.preventDefault();
        DonateNow('qmb', 'qdb', 'wallet');
    });
});
