/**
 * BOOK LOGIC CONTROLLER
 * Quản lý hiệu ứng lật trang, z-index và trạng thái sách.
 */

// --- STATE MANAGEMENT ---
let currentLocation = 1; // 1 = Đang đóng bìa trước (Trang đầu tiên là trang 1)
let numOfPages = 0;      // Tổng số tờ giấy (kể cả bìa)
let maxLocation = 0;     // Vị trí tối đa

/**
 * Làm mới logic sách: Đếm lại số trang và đặt Z-index.
 * Hàm này CẦN được gọi sau khi main.js render xong HTML.
 */
function refreshBookLogic() {
    const pages = document.querySelectorAll('.page');
    numOfPages = pages.length;
    maxLocation = numOfPages + 1;

    // Reset Z-Index ban đầu: Trang càng gần bìa trước (index nhỏ) thì Z-index càng cao
    pages.forEach((page, index) => {
        if (!page.classList.contains('flipped')) {
            page.style.zIndex = numOfPages - index;
        } else {
            page.style.zIndex = index + 1;
        }
    });

    // Cập nhật text tổng số trang
    const totalElement = document.getElementById('totalPages');
    if (totalElement) {
        totalElement.innerText = numOfPages; // Trừ bìa trước bìa sau nếu muốn
    }
    
    updatePageInput();
}

/**
 * Đưa thanh cuộn về đầu trang.
 */
function resetScroll() {
    const contents = document.querySelectorAll('.page-content');
    contents.forEach(content => {
        content.scrollTop = 0;
    });
}

// --- NAVIGATION ---

function openBook() {
    const bookContainer = document.querySelector('.book-container');
    const controls = document.getElementById('controls');
    
    if (bookContainer) bookContainer.classList.add('book-open-state');
    if (controls) controls.classList.remove('disabled');
    
    goNext(); // Lật bìa
}

function closeBook() {
    const pages = document.querySelectorAll('.page');
    const bookContainer = document.querySelector('.book-container');
    const controls = document.getElementById('controls');

    // Đóng tất cả
    pages.forEach((page, index) => {
        page.classList.remove('flipped');
        page.style.zIndex = numOfPages - index;
    });

    currentLocation = 1;
    
    if (bookContainer) bookContainer.classList.remove('book-open-state');
    if (controls) controls.classList.add('disabled');
    
    updatePageInput();
}

function goNext() {
    if (currentLocation < maxLocation) {
        const pageIndex = currentLocation - 1; 
        const pages = document.querySelectorAll('.page');
        
        if (pages[pageIndex]) {
            resetScroll();
            pages[pageIndex].classList.add('flipped');
            pages[pageIndex].style.zIndex = currentLocation; // Đặt lên trên cùng chồng trái
            currentLocation++;
            updatePageInput();
        }
    }
}

function goPrev() {
    if (currentLocation > 1) {
        currentLocation--; // Lùi location trước
        const pageIndex = currentLocation - 1;
        const pages = document.querySelectorAll('.page');
        
        if (pages[pageIndex]) {
            resetScroll();
            pages[pageIndex].classList.remove('flipped');
            pages[pageIndex].style.zIndex = numOfPages - pageIndex; // Trả về vị trí cũ chồng phải
            updatePageInput();
            
            if (currentLocation === 1) {
                closeBook();
            }
        }
    }
}

// --- CONTROLS & INPUT ---

function updatePageInput() {
    const input = document.getElementById('pageInput');
    if (input) {
        // Hiển thị: Nếu ở bìa (Loc 1) -> 1. Nếu mở ra (Loc 2) -> Xem tờ 1.
        // Logic hiển thị này tùy chỉnh theo ý bạn.
        input.value = currentLocation > 1 ? currentLocation - 1 : 1;
    }
}

function handleInputJump() {
    const input = document.getElementById('pageInput');
    if (!input) return;

    let targetSheet = parseInt(input.value);
    
    // Validate
    if (isNaN(targetSheet) || targetSheet < 1) targetSheet = 1;
    if (targetSheet > numOfPages) targetSheet = numOfPages;

    const targetLocation = targetSheet + 1; // Quy đổi ra Location

    if (targetLocation === currentLocation) return;

    const pages = document.querySelectorAll('.page');
    resetScroll();

    if (targetLocation > currentLocation) {
        // Lật đi
        for (let i = currentLocation; i < targetLocation; i++) {
            if (pages[i-1]) {
                pages[i-1].classList.add('flipped');
                pages[i-1].style.zIndex = i;
            }
        }
    } else {
        // Lật lại
        for (let i = currentLocation - 1; i >= targetLocation; i--) {
            if (pages[i-1]) {
                pages[i-1].classList.remove('flipped');
                pages[i-1].style.zIndex = numOfPages - (i-1);
            }
        }
    }

    currentLocation = targetLocation;
    
    // Check đóng mở
    const bookContainer = document.querySelector('.book-container');
    const controls = document.getElementById('controls');

    if (currentLocation === 1) {
        closeBook();
    } else {
        if (bookContainer) bookContainer.classList.add('book-open-state');
        if (controls) controls.classList.remove('disabled');
    }
}

// --- KEYBOARD LISTENER ---
document.addEventListener('keydown', (e) => {
    // Chỉ hoạt động khi sách đang mở hoặc có ý định mở (Next)
    if (currentLocation > 1 || e.key === "ArrowRight") {
        if (e.key === "ArrowRight") goNext();
        if (e.key === "ArrowLeft") goPrev();
    }
});