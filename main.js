const resources = [
    // --- BASIC KNOWLEDGE (Nền tảng) ---
    {
        name: "World Wide Web (WWW)",
        url: "https://lptech.asia/kien-thuc/www-la-gi-tong-quan-kien-thuc-ve-world-wide-web",
        desc: "Hệ thống thông tin toàn cầu gồm các trang web được liên kết qua Internet bằng siêu văn bản.",
        category: "basic knowledge",
        icon: "fa-solid fa-globe",
        logoUrl: "assets/internet-www-svgrepo-com.svg",
    },
    {
        name: "Internet",
        url: "https://lptech.asia/kien-thuc/internet-la-gi-tong-quan-kien-thuc",
        desc: "Mạng lưới kết nối hàng tỷ thiết bị trên toàn cầu, nền tảng cơ sở để truyền tải thông tin.",
        category: "basic knowledge",
        icon: "fa-solid fa-wifi",
        logoUrl: "assets/wifi-svgrepo-com.svg",
    },
    {
        name: "HTTP/HTTPS",
        url: "https://lptech.asia/kien-thuc/http-la-gi-tong-quan-kien-thuc",
        desc: "Giao thức truyền tải siêu văn bản, quy định cách dữ liệu được gửi giữa trình duyệt và server.",
        category: "basic knowledge",
        icon: "fa-solid fa-lock",
        logoUrl: "assets/laptop-http-svgrepo-com.svg",
    },
    {
        name: "API",
        url: "https://lptech.asia/kien-thuc/api-la-gi-tong-quan-kien-thuc",
        desc: "Giao diện lập trình ứng dụng, cho phép các phần mềm tương tác và trao đổi dữ liệu với nhau.",
        category: "basic knowledge",
        icon: "fa-solid fa-gears",
        logoUrl: "assets/api-interface-svgrepo-com.svg",
    },
    {
        name: "Computer Components",
        url: "https://lptech.asia/kien-thuc/computer-components-la-gi-tong-quan-kien-thuc",
        desc: "Kiến thức về phần cứng: CPU, RAM, Disk... giúp tối ưu hóa hiệu suất khi viết code.",
        category: "basic knowledge",
        icon: "fa-solid fa-microchip",
        logoUrl: "assets/computer-device-hardware-svgrepo-com.svg",
    },
   // --- FRONTEND (Giao diện người dùng) ---
    {
        name: "HTML",
        url: "https://developer.mozilla.org/en-US/docs/Web/HTML",
        desc: "Ngôn ngữ đánh dấu siêu văn bản, là 'khung xương' xây dựng nên cấu trúc trang web.",
        category: "frontend",
        icon: "fa-brands fa-html5",
        logoUrl: "assets/html-1.svg"
    },
    {
        name: "CSS",
        url: "https://developer.mozilla.org/en-US/docs/Web/CSS",
        desc: "Ngôn ngữ định kiểu, giúp trang trí giao diện, màu sắc và bố cục (layout) cho website.",
        category: "frontend",
        icon: "fa-brands fa-css3",
        logoUrl: "assets/css-3.svg"
    },
    {
        name: "JavaScript",
        url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
        desc: "Ngôn ngữ lập trình cốt lõi tạo nên sự tương tác và xử lý logic phía trình duyệt.",
        category: "frontend",
        icon: "fa-brands fa-js",
        logoUrl: "assets/javascript-1.svg"
    },
    {
        name: "TypeScript",
        url: "https://www.typescriptlang.org/",
        desc: "Siêu tập của JavaScript, bổ sung kiểu dữ liệu (static typing) giúp giảm thiểu lỗi code.",
        category: "frontend",
        icon: "fa-solid fa-code",
        logoUrl: "assets/typescript-2.svg"
    },
    // Framework//
    {
        name: "React.js",
        url: "https://react.dev/",
        desc: "Thư viện JavaScript của Meta dùng để xây dựng giao diện người dùng dựa trên Component.",
        category: "frontend",
        icon: "fa-brands fa-react",
        logoUrl: "assets/react-svgrepo-com.svg"
    },
    {
        name: "Vue.js",
        url: "https://vuejs.org/",
        desc: "Framework linh hoạt, nhẹ và có tài liệu hướng dẫn cực kỳ thân thiện cho người mới.",
        category: "frontend",
        icon: "fa-brands fa-vuejs",
        logoUrl: "assets/vue-svgrepo-com.svg"
    },
    {
        name: "Angular",
        url: "https://angular.io/",
        desc: "Framework mạnh mẽ cho ứng dụng doanh nghiệp lớn.",
        category: "frontend",
        icon: "fa-brands fa-angular",
        logoUrl: "assets/angular-icon-svgrepo-com.svg"
    },
    {
        name: "Tailwind CSS",
        url: "https://tailwindcss.com/",
        desc: "Utility-first CSS framework giúp thiết kế giao diện cực nhanh bằng các class dựng sẵn.",
        category: "frontend",
        icon: "fa-solid fa-wind",
        logoUrl: "assets/tailwind-css-2.svg"
    },
    {
        name: "Sass/SCSS",
        url: "https://sass-lang.com/",
        desc: "CSS Preprocessor giúp code CSS gọn gàng hơn.",
        category: "frontend",
        icon: "fa-brands fa-sass",
        logoUrl: "assets/sass-svgrepo-com.svg"
    },
   {
        name: "Next.js",
        url: "https://nextjs.org/",
        desc: "React Framework hàng đầu hỗ trợ SSR (Server Side Rendering) và tối ưu SEO vượt trội.",
        category: "frontend",
        icon: "fa-solid fa-n", 
        logoUrl: "assets/nextjs-icon-svgrepo-com.svg"
    },

    // --- BACKEND ---
    {
        name: "Java",
        url: "https://www.java.com/",
        desc: "Ngôn ngữ hướng đối tượng mạnh mẽ, tiêu chuẩn cho các hệ thống ngân hàng và doanh nghiệp.",
        category: "backend",
        icon: "fa-brands fa-java",
        logoUrl: "assets/java-svgrepo-com.svg"
    },
    {
        name: "Spring Boot",
        url: "https://spring.io/",
        desc: "Hệ sinh thái Java giúp phát triển Microservices và ứng dụng Backend nhanh chóng, bảo mật.",
        category: "backend",
        icon: "fa-solid fa-leaf",
        logoUrl: "assets/spring-boot-1.svg"
    },
    {
        name: "PHP",
        url: "https://www.php.net/",
        desc: "Ngôn ngữ kịch bản phía server phổ biến, cốt lõi của WordPress.",
        category: "backend",
        icon: "fa-brands fa-php",
        logoUrl: "assets/php-programming-language-icon.svg"
    },
   {
        name: "Node.js",
        url: "https://nodejs.org/",
        desc: "Môi trường chạy JavaScript trên máy chủ (Server-side), phù hợp cho ứng dụng thời gian thực.",
        category: "backend",
        icon: "fa-brands fa-node",
        logoUrl: "assets/node-js-svgrepo-com.svg"
    },
    {
        name: "Python",
        url: "https://www.python.org/",
        desc: "Cú pháp đơn giản như tiếng Anh, là lựa chọn số 1 cho AI, Data Science và Backend nhanh.",
        category: "backend",
        icon: "fa-brands fa-python",
        logoUrl: "assets/python-5.svg"
    },
    {
        name: "C++",
        url: "https://isocpp.org/",
        desc: "Hiệu suất tối đa, dùng cho Game engine và Hệ điều hành.",
        category: "backend",
        icon: "fa-solid fa-code",
        logoUrl: "assets/c.svg" 
    },
    {
        name: "C Language",
        url: "https://en.cppreference.com/w/c",
        desc: "Ngôn ngữ lập trình cấu trúc, nền tảng của khoa học máy tính.",
        category: "backend",
        icon: "fa-solid fa-c",
        logoUrl: "assets/c-1.svg"
    },
    {
        name: "C#",
        url: "https://learn.microsoft.com/dotnet/csharp/",
        desc: "Ngôn ngữ chủ lực của Microsoft và .NET.",
        category: "backend",
        icon: "fa-brands fa-microsoft",
        logoUrl: "assets/c--4.svg"
    },
    {
        name: "Go (Golang)",
        url: "https://go.dev/",
        desc: "Ngôn ngữ của Google, nổi tiếng với khả năng xử lý đồng thời (concurrency) cực cao.",
        category: "backend",
        icon: "fa-brands fa-golang",
        logoUrl: "assets/go-svgrepo-com.svg"
    },
    {
        name: "Ruby",
        url: "https://www.ruby-lang.org/",
        desc: "Ngôn ngữ thanh lịch, dễ đọc, cốt lõi của Ruby on Rails.",
        category: "backend",
        icon: "fa-solid fa-gem",
        logoUrl: "assets/ruby-svgrepo-com.svg"
    },

    // --- DATABASE (Danh mục mới) ---
    {
        name: "MySQL",
        url: "https://www.mysql.com/",
        desc: "Hệ quản trị CSDL quan hệ (RDBMS) mã nguồn mở phổ biến nhất cho các ứng dụng web.",
        category: "database",
        icon: "fa-solid fa-database",
        logoUrl: "assets/mysql-icon.svg"
    },
    {
        name: "PostgreSQL",
        url: "https://www.postgresql.org/",
        desc: "Database quan hệ mạnh mẽ, hỗ trợ tính năng nâng cao.",
        category: "database",
        icon: "fa-solid fa-database",
        logoUrl: "assets/postgresql-icon.svg"
    },
    {
        name: "MongoDB",
        url: "https://www.mongodb.com/",
        desc: "CSDL NoSQL lưu trữ dưới dạng document (JSON), cho phép mở rộng linh hoạt.",
        category: "database",
        icon: "fa-solid fa-leaf",
        logoUrl: "assets/mongodb-svgrepo-com.svg" 
    },
    {
        name: "Redis",
        url: "https://redis.io/",
        desc: "Hệ thống lưu trữ dữ liệu trên RAM, dùng để làm Cache tăng tốc độ ứng dụng tức thì.",
        category: "database",
        icon: "fa-solid fa-bolt",
        logoUrl: "assets/redis-svgrepo-com.svg"
    },

    // --- MOBILE ---
    {
        name: "React Native",
        url: "https://reactnative.dev/",
        desc: "Code một lần chạy được cả iOS và Android.",
        category: "mobile",
        icon: "fa-brands fa-react",
        logoUrl: "assets/react-svgrepo-com.svg" 
    },
    {
        name: "Swift",
        url: "https://developer.apple.com/swift/",
        desc: "Ngôn ngữ native để phát triển cho hệ sinh thái Apple.",
        category: "mobile",
        icon: "fa-brands fa-apple",
        logoUrl: "assets/swift-svgrepo-com.svg"
    },
    {
        name: "Flutter",
        url: "https://flutter.dev/",
        desc: "UI Toolkit của Google build app đẹp và mượt. ",
        category: "mobile",
        icon: "fa-brands fa-google",
        logoUrl: "assets/flutter-svgrepo-com.svg"
    },

    // --- DEVOPS & INFRA ---
    {
        name: "Git",
        url: "https://git-scm.com/",
        desc: "Công cụ quản lý phiên bản code không thể thiếu.",
        category: "devops",
        icon: "fa-brands fa-git-alt",
        logoUrl: "assets/git-svgrepo-com.svg"
    },
    {
        name: "GitHub",
        url: "https://github.com/",
        desc: "Mạng xã hội cho lập trình viên lưu trữ code.",
        category: "devops",
        icon: "fa-brands fa-github",
        logoUrl: "assets/github-svgrepo-com.svg"
    },
   {
        name: "Docker",
        url: "https://www.docker.com/",
        desc: "Công nghệ Container hóa giúp đóng gói và vận hành ứng dụng đồng nhất trên mọi môi trường.",
        category: "devops",
        icon: "fa-brands fa-docker",
        logoUrl: "assets/docker-svgrepo-com.svg"
    },
    {
        name: "Linux",
        url: "https://www.linux.org/",
        desc: "Hệ điều hành mã nguồn mở, nền tảng của server.",
        category: "devops",
        icon: "fa-brands fa-linux",
        logoUrl: "assets/linux-svgrepo-com.svg"
    },
    {
        name: "AWS",
        url: "https://aws.amazon.com/",
        desc: "Dịch vụ điện toán đám mây của Amazon với hàng trăm tính năng cho lưu trữ và máy chủ.",
        category: "devops",
        icon: "fa-brands fa-aws",
        logoUrl: "assets/aws-svgrepo-com.svg",
    },

    // --- AI ---
    {
        name: "ChatGPT",
        url: "https://chatgpt.com/",
        desc: "AI chatbot thay đổi thế giới của OpenAI.",
        category: "ai",
        icon: "fa-solid fa-robot",
        logoUrl: "assets/chatgpt-icon.svg"
    },
    {
        name: "Claude AI",
        url: "https://claude.ai/",
        desc: "Đối thủ đáng gờm của ChatGPT, code rất thông minh.",
        category: "ai",
        icon: "fa-solid fa-robot",
        logoUrl: "assets/claude-ai-icon.svg"
    },
   {
        name: "Gemini",
        url: "https://gemini.google.com/",
        desc: "Mô hình ngôn ngữ lớn (LLM) đa phương thức mạnh mẽ nhất hiện nay từ Google.",
        category: "ai",
        icon: "fa-solid fa-sparkles",
        logoUrl: "assets/google-gemini-icon.svg" 
    },
    {
        name: "Perplexity",
        url: "https://www.perplexity.ai/",
        desc: "Công cụ tìm kiếm thông tin thời gian thực bằng AI.",
        category: "ai",
        icon: "fa-solid fa-magnifying-glass",
        logoUrl: "assets/perplexity-ai-icon.svg"
    },
    {
        name:"Google AI studio",
        url: "https://cloud.google.com/ai-platform",
        desc:"Google AI Studio là một môi trường phát triển tích hợp (IDE) dựa trên web. Nó cho phép các nhà phát triển nhanh chóng xây dựng và thử nghiệm các mô hình ngôn ngữ lớn (LLMs) từ gia đình Gemini của Google.",
        category: "ai",
        icon: "fa-brands fa-google",
        logoUrl: "assets/google-ai-studio-icon.svg"
     },
// --- IDE & TOOLS ---
    {
        name: "Visual Studio Code",
        url: "https://code.visualstudio.com/",
        desc: "Editor miễn phí, nhẹ và mạnh nhất hiện nay.",
        category: "ide",
        icon: "fa-solid fa-code",
        logoUrl: "assets/vs-code-svgrepo-com.svg"
    },
    {
        name: "Cursor AI",
        url: "https://cursor.sh/",
        desc: "Trình soạn thảo mã nguồn tích hợp AI sâu, có khả năng hiểu toàn bộ dự án của bạn.",
        category: "ide",
        icon: "fa-solid fa-robot",
        logoUrl: "assets/cursor-ai-code-icon.svg"
    },
    {
        name: "Visual Studio",
        url: "https://visualstudio.microsoft.com/",
        desc: "IDE chuyên nghiệp cho .NET và C++.",
        category: "ide",
        icon: "fa-brands fa-windows",
        logoUrl: "assets/visual-studio-svgrepo-com.svg"
    },
    {
        name: "Sublime Text",
        url: "https://www.sublimetext.com/",
        desc: "Editor siêu nhẹ, khởi động tức thì.",
        category: "ide",
        icon: "fa-solid fa-file-code",
        logoUrl: "assets/sublime-text-icon.svg"
    },
    {
        name: "IntelliJ IDEA",
        url: "https://www.jetbrains.com/idea/",
        desc: "IDE tốt nhất thế giới cho Java.",
        category: "ide",
        icon: "fa-brands fa-java",
        logoUrl: "assets/intellij-idea-ide-icon.svg"
    },
    {
        name: "PyCharm",
        url: "https://www.jetbrains.com/pycharm/",
        desc: "IDE Python tốt nhất cho Data Science và Web.",
        category: "ide",
        icon: "fa-brands fa-python",
        logoUrl: "assets/pycharm-icon.svg"
    },
    {
        name: "WebStorm",
        url: "https://www.jetbrains.com/webstorm/",
        desc: "IDE chuyên dụng cho Web Frontend (JS/TS).",
        category: "ide",
        icon: "fa-brands fa-js",
        logoUrl: "assets/webstorm-ide-icon.svg"
    },
    {
        name: "CLion",
        url: "https://www.jetbrains.com/clion/",
        desc: "IDE thông minh cho C và C++.",
        category: "ide",
        icon: "fa-solid fa-c",
        logoUrl: "assets/clion-ide-icon.svg"
    },
    {
        name: "Rider",
        url: "https://www.jetbrains.com/rider/",
        desc: "IDE .NET thay thế hoàn hảo cho Visual Studio.",
        category: "ide",
        icon: "fa-solid fa-code",
        logoUrl: "assets/rider-ide-icon.svg"
    },
    {
        name: "GoLand",
        url: "https://www.jetbrains.com/go/",
        desc: "IDE chuyên dụng cho Go.",
        category: "ide",
        icon: "fa-brands fa-golang",
        logoUrl: "assets/goland-ide-icon.svg"
    },
    {
        name: "RubyMine",
        url: "https://www.jetbrains.com/ruby/",
        desc: "RubyMine là một Môi trường phát triển tích hợp (IDE) thông minh dành cho ngôn ngữ lập trình Ruby và framework Ruby on Rails, do JetBrains phát triển.",
        category: "ide",
        icon: "fa-solid fa-gem",
        logoUrl: "assets/rubymine-svgrepo-com.svg"
    },
    {
        name: "RustRover",
        url: "https://www.jetbrains.com/rust/",
        desc: "RustRover là một môi trường phát triển tích hợp (IDE) chuyên dụng cho ngôn ngữ lập trình Rust, được phát triển bởi JetBrains.",
        category: "ide",
        icon: "fa-solid fa-gear",
        logoUrl: "assets/rustrover-ide-icon.svg"
    },
    {
        name: "Notepad++",
        url: "https://notepad-plus-plus.org/",
        desc: "Huyền thoại soạn thảo text trên Windows.",
        category: "ide",
        icon: "fa-solid fa-file-code",
        logoUrl: "assets/icons8-notepad++.svg"
    },
    // API TEST//
    {
        name: "Postman",
        url: "https://www.postman.com/",
        desc: "Công cụ test API phổ biến nhất.",
        category: "ide",
        icon: "fa-solid fa-paper-plane",
        logoUrl: "assets/postman-icon-svgrepo-com.svg"
    },
    // UI/UX designs
    {
        name: "Figma",
        url: "https://www.figma.com/",
        desc: "Công cụ thiết kế UI/UX trên trình duyệt, tiêu chuẩn vàng cho sự cộng tác thiết kế.",
        category: "ide",
        icon: "fa-brands fa-figma",
        logoUrl: "assets/figma-svgrepo-com.svg"
    },
];
function initBookContent() {
    const container = document.getElementById('dynamic-pages');
    if (!container) return;

    const itemsPerPage = 6; 
    const totalResources = resources.length;
    let html = '';
    let resourceIndex = 0;
    let pageId = 1; 

    while (resourceIndex < totalResources) {
        // Tạo div.page
        html += `<div class="page" id="p${pageId}">`;
        
        // --- Mặt trước ---
        html += `<div class="front">
                    <div class="page-content">
                        <h2>Tài nguyên (Trang ${pageId*2 - 1})</h2>`;
        
        for (let i = 0; i < itemsPerPage && resourceIndex < totalResources; i++) {
            html += createResourceHTML(resources[resourceIndex]);
            resourceIndex++;
        }
        
        html += `   </div>
                    <div class="page-number">${pageId*2 - 1}</div>
                 </div>`;

        // --- Mặt sau ---
        html += `<div class="back">
                    <div class="page-content">
                         <h2>Tài nguyên (Trang ${pageId*2})</h2>`;
        
        for (let i = 0; i < itemsPerPage && resourceIndex < totalResources; i++) {
            html += createResourceHTML(resources[resourceIndex]);
            resourceIndex++;
        }

        html += `   </div>
                    <div class="page-number">${pageId*2}</div>
                 </div>`;
        
        html += `</div>`; // Đóng .page
        pageId++;
    }

    // Inject HTML vào DOM
    container.innerHTML = html;
    
    // QUAN TRỌNG: Gọi hàm logic từ Book.js ngay sau khi tạo xong DOM
    if (typeof refreshBookLogic === 'function') {
        refreshBookLogic();
    }
}

function createResourceHTML(item) {
    // Fallback nếu ảnh lỗi
    const fallbackImg = 'https://via.placeholder.com/40?text=Dev';
    
    return `
    <div class="resource-item">
        <div class="resource-logo">
            <img src="${item.logoUrl}" alt="${item.name}" onerror="this.src='${fallbackImg}'">
        </div>
        <div class="resource-info">
            <h3>${item.name}</h3>
            <p>${item.desc}</p>
            <a href="${item.url}" target="_blank">Truy cập <i class="fa-solid fa-up-right-from-square"></i></a>
        </div>
    </div>
    `;
}

// Khởi chạy khi DOM load xong
document.addEventListener('DOMContentLoaded', () => {
    initBookContent();
});