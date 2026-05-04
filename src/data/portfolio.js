const sharedProfile = {
  name: 'Vo Thi Thuy Linh',
  nameLines: ['Vo Thi', 'Thuy Linh'],
  portrait: '/assets/linh-portrait.png',
};

const contactLinks = {
  phone: {
    value: '0347446006',
    href: 'tel:0347446006',
  },
  email: {
    value: 'volinh03062002@gmail.com',
    href: 'mailto:volinh03062002@gmail.com',
  },
  location: {
    value: 'Ho Chi Minh City',
  },
};

export const portfolio = {
  languages: [
    { code: 'en', label: 'EN', name: 'English' },
    { code: 'vi', label: 'VI', name: 'Tiếng Việt' },
  ],
  content: {
    en: {
      navigation: [
        { label: 'About', href: '#about' },
        { label: 'Experience', href: '#experience' },
        { label: 'Skills', href: '#skills' },
        { label: 'Contact', href: '#contact' },
      ],
      controls: {
        navAria: 'Primary navigation',
        homeAria: 'Vo Thi Thuy Linh home',
        languageAria: 'Choose website language',
        themeAria: 'Choose color theme',
        displayAria: 'Display options',
        themeToggle: {
          toLight: 'Switch to light mode',
          toDark: 'Switch to dark mode',
        },
      },
      profile: {
        ...sharedProfile,
        role: 'F&B Service Professional',
        subtitle:
          'Friendly, responsible, and service-oriented with 4 years of experience in restaurant service and front-of-house operations.',
        primaryCta: 'Download CV',
        primaryCtaHref: '/assets/vothithuylinh-cv.pdf',
        primaryCtaDownload: 'Vo-Thi-Thuy-Linh-CV.pdf',
        secondaryCta: 'Contact Me',
        actionsAria: 'Primary actions',
        portraitAria: 'Portrait of Vo Thi Thuy Linh',
        portraitAlt: 'Vo Thi Thuy Linh',
        captionKicker: '4 years experience',
        caption: 'Guest care & front-of-house support',
      },
      about: {
        eyebrow: 'Personal Profile',
        title: 'About Me',
        copy:
          'F&B service professional with 4 years of experience in restaurant service, guest care, and front-of-house support. Experienced in welcoming guests, table service, handling customer needs, supporting team coordination, and maintaining smooth daily service operations. Friendly, hardworking, responsible, and quick to learn.',
        highlight:
          'Dedicated to creating a warm, comfortable, and positive dining experience for every guest.',
      },
      experienceIntro: {
        eyebrow: 'Restaurant Service',
        title: 'Work Experience',
      },
      experience: [
        {
          company: 'Haidilao Hotpot',
          position: 'Service Staff',
          duration: '2 years',
          socialUrl: 'https://www.facebook.com/HaidilaoVietnam',
          socialLabel: 'Visit Haidilao Hotpot on Facebook',
          logo: {
            src: '/assets/haidilao-logo.jpg',
            alt: 'Haidilao Hotpot logo',
          },
          description:
            'Delivered attentive table service in a busy hotpot restaurant, supporting guests from arrival through the end of their dining experience.',
          responsibilities: [
            'Prepared tables, utensils, condiments, and service areas before and during shifts',
            'Assisted guests with menu questions and basic ordering support',
            'Served food and beverages carefully while checking guest needs throughout the meal',
            'Cleared tables, refreshed setup, and kept the dining area clean and organized',
            'Coordinated with teammates during busy periods to maintain steady service flow',
          ],
        },
        {
          company: 'Weijie Clay Oven BBQ',
          position: 'Restaurant Service Manager / Front of House Manager',
          duration: '2 years',
          socialUrl: 'https://www.facebook.com/WeijieClayOvenBBQ/',
          socialLabel: 'Visit Weijie Clay Oven BBQ on Facebook',
          logo: {
            src: '/assets/weijie-logo.avif',
            alt: 'Weijie Clay Oven BBQ logo',
          },
          description:
            'Progressed from Team Leader to Front of House Manager, helping coordinate daily service flow and support the front-of-house team during restaurant operations.',
          responsibilities: [
            'Arranged daily staff coverage across service, reception, bar, and cashier positions',
            'Guided team leaders and service staff on priorities during opening, peak, and closing periods',
            'Handled guest inquiries and complaints with a calm, professional approach',
            'Checked service standards, table readiness, and guest comfort during operating hours',
            'Supported reception, beverage preparation, cashier duties, and table service when needed',
          ],
        },
      ],
      highlightsIntro: {
        eyebrow: 'Service Profile',
        title: 'Service Highlights',
      },
      highlights: [
        '4 years of hands-on experience in F&B service',
        'Experience in both service staff and front-of-house management roles',
        'Able to support multiple positions, including service, reception, cashier, and beverage preparation',
        'Comfortable working with a team to maintain smooth restaurant operations',
        'Focused on guest comfort, service quality, and daily operational support',
      ],
      skillsIntro: {
        eyebrow: 'Capabilities',
        title: 'Skills',
        aria: 'Professional skills',
      },
      skills: [
        'Customer Service',
        'Complaint Handling',
        'F&B Service',
        'Front-of-House Coordination',
        'Teamwork',
        'Communication',
        'Guest Welcoming',
        'Table Service',
        'Cashier Support',
        'Beverage Preparation',
        'Service Quality',
        'Staff Coordination',
      ],
      strengthsIntro: {
        eyebrow: 'Working Style',
        title: 'Strengths',
      },
      strengths: [
        {
          title: 'Cheerful',
          description: 'Brings a positive attitude to daily service',
        },
        {
          title: 'Enthusiastic',
          description: 'Supports guests and teammates with care',
        },
        {
          title: 'Agile',
          description: 'Moves quickly through changing service needs',
        },
        {
          title: 'Fast Learner',
          description: 'Adapts quickly to new duties',
        },
        {
          title: 'Friendly',
          description: 'Creates a welcoming first impression',
        },
        {
          title: 'Responsible',
          description: 'Completes assigned tasks carefully',
        },
        {
          title: 'Hardworking',
          description: 'Stays consistent through busy shifts',
        },
        {
          title: 'Supportive',
          description: 'Helps the team keep service steady',
        },
      ],
      contactIntro: {
        eyebrow: 'Opportunities',
        title: 'Contact',
        lede: 'Available for F&B service and front-of-house opportunities.',
        aria: 'Contact details',
      },
      contact: [
        { label: 'Phone', ...contactLinks.phone },
        { label: 'Email', ...contactLinks.email },
        { label: 'Location', ...contactLinks.location },
      ],
    },
    vi: {
      navigation: [
        { label: 'Giới thiệu', href: '#about' },
        { label: 'Kinh nghiệm', href: '#experience' },
        { label: 'Kỹ năng', href: '#skills' },
        { label: 'Liên hệ', href: '#contact' },
      ],
      controls: {
        navAria: 'Điều hướng chính',
        homeAria: 'Trang chủ Vo Thi Thuy Linh',
        languageAria: 'Chọn ngôn ngữ website',
        themeAria: 'Chọn giao diện màu',
        displayAria: 'Tùy chọn hiển thị',
        themeToggle: {
          toLight: 'Chuyển sang giao diện sáng',
          toDark: 'Chuyển sang giao diện tối',
        },
      },
      profile: {
        ...sharedProfile,
        role: 'Chuyên viên Phục vụ F&B',
        subtitle:
          'Thân thiện, có trách nhiệm và luôn hướng đến chất lượng phục vụ với 4 năm kinh nghiệm trong dịch vụ nhà hàng và vận hành tiền sảnh.',
        primaryCta: 'Tải CV PDF',
        primaryCtaHref: '/assets/vothithuylinh-cv.pdf',
        primaryCtaDownload: 'Vo-Thi-Thuy-Linh-CV.pdf',
        secondaryCta: 'Liên hệ',
        actionsAria: 'Hành động chính',
        portraitAria: 'Ảnh chân dung Vo Thi Thuy Linh',
        portraitAlt: 'Vo Thi Thuy Linh',
        captionKicker: '4 năm kinh nghiệm',
        caption: 'Chăm sóc khách & hỗ trợ tiền sảnh',
      },
      about: {
        eyebrow: 'Hồ sơ cá nhân',
        title: 'Giới thiệu',
        copy:
          'Nhân sự F&B với 4 năm kinh nghiệm trong phục vụ nhà hàng, chăm sóc khách hàng và hỗ trợ vận hành tiền sảnh. Có kinh nghiệm chào đón khách, phục vụ bàn, xử lý nhu cầu của khách, hỗ trợ điều phối đội nhóm và duy trì hoạt động phục vụ hằng ngày trôi chảy. Thân thiện, chăm chỉ, có trách nhiệm và học việc nhanh.',
        highlight:
          'Luôn hướng đến việc tạo cảm giác ấm áp, thoải mái và tích cực cho từng khách hàng.',
      },
      experienceIntro: {
        eyebrow: 'Dịch vụ nhà hàng',
        title: 'Kinh nghiệm làm việc',
      },
      experience: [
        {
          company: 'Haidilao Hotpot',
          position: 'Nhân viên phục vụ',
          duration: '2 năm',
          socialUrl: 'https://www.facebook.com/HaidilaoVietnam',
          socialLabel: 'Mở Facebook Haidilao Hotpot',
          logo: {
            src: '/assets/haidilao-logo.jpg',
            alt: 'Logo Haidilao Hotpot',
          },
          description:
            'Thực hiện phục vụ bàn chu đáo tại nhà hàng lẩu đông khách, hỗ trợ khách từ lúc vào bàn đến khi kết thúc bữa ăn.',
          responsibilities: [
            'Chuẩn bị bàn, dụng cụ ăn uống, gia vị và khu vực phục vụ trước và trong ca',
            'Hỗ trợ khách giải đáp câu hỏi về món ăn và gọi món cơ bản',
            'Phục vụ món ăn, đồ uống cẩn thận và theo dõi nhu cầu của khách trong bữa ăn',
            'Dọn bàn, sắp xếp lại setup và giữ khu vực ăn uống sạch sẽ, gọn gàng',
            'Phối hợp với đồng đội trong giờ cao điểm để duy trì nhịp phục vụ ổn định',
          ],
        },
        {
          company: 'Weijie Clay Oven BBQ',
          position: 'Quản lý Dịch vụ Nhà hàng / Quản lý Tiền sảnh',
          duration: '2 năm',
          socialUrl: 'https://www.facebook.com/WeijieClayOvenBBQ/',
          socialLabel: 'Mở Facebook Weijie Clay Oven BBQ',
          logo: {
            src: '/assets/weijie-logo.avif',
            alt: 'Logo Weijie Clay Oven BBQ',
          },
          description:
            'Phát triển từ vị trí Tổ trưởng lên Quản lý Tiền sảnh, hỗ trợ điều phối nhịp phục vụ hằng ngày và đội ngũ front-of-house trong quá trình vận hành nhà hàng.',
          responsibilities: [
            'Sắp xếp nhân sự hằng ngày cho các vị trí phục vụ, lễ tân, pha chế và thu ngân',
            'Hướng dẫn tổ trưởng và nhân viên phục vụ theo ưu tiên trong ca mở cửa, giờ cao điểm và cuối ca',
            'Xử lý thắc mắc và phàn nàn của khách với thái độ bình tĩnh, chuyên nghiệp',
            'Kiểm tra tiêu chuẩn phục vụ, tình trạng bàn và sự thoải mái của khách trong giờ vận hành',
            'Hỗ trợ lễ tân, pha chế đồ uống, thu ngân và phục vụ bàn khi cần',
          ],
        },
      ],
      highlightsIntro: {
        eyebrow: 'Tổng quan phục vụ',
        title: 'Điểm nổi bật',
      },
      highlights: [
        '4 năm kinh nghiệm thực tế trong dịch vụ F&B',
        'Có kinh nghiệm ở cả vai trò nhân viên phục vụ và quản lý tiền sảnh',
        'Có thể hỗ trợ nhiều vị trí như phục vụ, lễ tân, thu ngân và pha chế đồ uống',
        'Phối hợp tốt với đội nhóm để duy trì vận hành nhà hàng trôi chảy',
        'Tập trung vào sự thoải mái của khách, chất lượng phục vụ và hỗ trợ vận hành hằng ngày',
      ],
      skillsIntro: {
        eyebrow: 'Năng lực',
        title: 'Kỹ năng',
        aria: 'Kỹ năng chuyên môn',
      },
      skills: [
        'Chăm sóc khách hàng',
        'Xử lý phàn nàn',
        'Dịch vụ F&B',
        'Điều phối tiền sảnh',
        'Làm việc nhóm',
        'Giao tiếp',
        'Chào đón khách',
        'Phục vụ bàn',
        'Hỗ trợ thu ngân',
        'Pha chế đồ uống',
        'Chất lượng phục vụ',
        'Điều phối nhân sự',
      ],
      strengthsIntro: {
        eyebrow: 'Phong cách làm việc',
        title: 'Điểm mạnh',
      },
      strengths: [
        {
          title: 'Vui vẻ',
          description: 'Giữ thái độ tích cực trong ca làm việc',
        },
        {
          title: 'Nhiệt tình',
          description: 'Hỗ trợ khách và đồng đội chu đáo',
        },
        {
          title: 'Nhanh nhẹn',
          description: 'Linh hoạt với nhu cầu phục vụ thay đổi',
        },
        {
          title: 'Học nhanh',
          description: 'Thích nghi nhanh với nhiệm vụ mới',
        },
        {
          title: 'Thân thiện',
          description: 'Tạo ấn tượng chào đón dễ chịu',
        },
        {
          title: 'Có trách nhiệm',
          description: 'Hoàn thành công việc được giao cẩn thận',
        },
        {
          title: 'Chăm chỉ',
          description: 'Giữ sự ổn định trong các ca bận',
        },
        {
          title: 'Hỗ trợ tốt',
          description: 'Giúp đội nhóm duy trì phục vụ ổn định',
        },
      ],
      contactIntro: {
        eyebrow: 'Cơ hội công việc',
        title: 'Liên hệ',
        lede: 'Sẵn sàng cho các cơ hội phục vụ F&B và vận hành tiền sảnh.',
        aria: 'Thông tin liên hệ',
      },
      contact: [
        { label: 'Điện thoại', ...contactLinks.phone },
        { label: 'Email', ...contactLinks.email },
        { label: 'Khu vực', ...contactLinks.location },
      ],
    },
  },
};
